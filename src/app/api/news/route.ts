import { NextResponse } from "next/server";
import { gql } from "graphql-request";

// Use fetch with AbortController, configurable timeout, and retries to avoid long hangs
const WP_GRAPHQL_URL =
  process.env.NEXT_PUBLIC_WP_GRAPHQL_URL || process.env.WP_GRAPHQL_URL;
const GRAPHQL_TIMEOUT_MS = Number(process.env.GRAPHQL_TIMEOUT_MS || "10000");
const GRAPHQL_RETRIES = Math.max(0, Number(process.env.GRAPHQL_RETRIES || "1"));
const GRAPHQL_AUTH_HEADER_NAME =
  process.env.GRAPHQL_AUTH_HEADER_NAME || "Authorization";
const GRAPHQL_AUTH_TOKEN = process.env.GRAPHQL_AUTH_TOKEN || "";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runGraphQL(query: string, variables: Record<string, any> = {}) {
  if (!WP_GRAPHQL_URL) {
    throw new Error(
      "WP_GRAPHQL_URL not configured (set NEXT_PUBLIC_WP_GRAPHQL_URL or WP_GRAPHQL_URL)"
    );
  }

  let attempt = 0;
  let lastErr: any = null;

  while (attempt <= GRAPHQL_RETRIES) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), GRAPHQL_TIMEOUT_MS);

    try {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (GRAPHQL_AUTH_TOKEN)
        headers[GRAPHQL_AUTH_HEADER_NAME] = GRAPHQL_AUTH_TOKEN;

      const res = await fetch(WP_GRAPHQL_URL, {
        method: "POST",
        headers,
        body: JSON.stringify({ query, variables }),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        lastErr = new Error(
          `GraphQL HTTP ${res.status} ${res.statusText}: ${text}`
        );
        // for 5xx, we may retry
        if (res.status >= 500 && attempt < GRAPHQL_RETRIES) {
          attempt++;
          await delay(200 * attempt);
          continue;
        }
        throw lastErr;
      }

      const json = await res.json();
      if (json.errors) {
        lastErr = new Error(JSON.stringify(json.errors));
        // If GraphQL itself returned errors, don't retry unless configured
        if (attempt < GRAPHQL_RETRIES) {
          attempt++;
          await delay(200 * attempt);
          continue;
        }
        throw lastErr;
      }

      return json.data;
    } catch (err: any) {
      lastErr = err;
      // If aborted, it will be caught here; retry if attempts remain
      if (attempt < GRAPHQL_RETRIES) {
        attempt++;
        const backoff = 200 * attempt;
        await delay(backoff);
        continue;
      }
      // No more retries
      throw lastErr;
    } finally {
      clearTimeout(timeout);
    }
  }

  throw lastErr;
}

const POSTS_PER_PAGE = 6;

const POSTS_QUERY = gql`
  query GetPosts($offset: Int!, $perPage: Int!, $search: String) {
    posts(
      offsetPagination: { offset: $offset, size: $perPage }
      where: { orderby: { field: DATE, order: DESC }, search: $search }
    ) {
      nodes {
        id
        title
        slug
        excerpt
        date
        isSticky
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
      pageInfo {
        hasNextPage
      }
      totalCount
    }
  }
`;

const FEATURED_QUERY = gql`
  query GetFeatured($perPage: Int!, $search: String) {
    posts(
      first: $perPage
      where: { orderby: { field: DATE, order: DESC }, search: $search, tag: "" }
    ) {
      nodes {
        id
        title
        slug
        date
        isSticky
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const page = Math.max(1, Number(url.searchParams.get("page") || "1"));
    const q = url.searchParams.get("q") || null;
    const offset = (page - 1) * POSTS_PER_PAGE;

    type PostsResponse = {
      posts: {
        nodes: Array<{
          id: string;
          title: string;
          slug: string;
          excerpt?: string | null;
          date?: string | null;
          isSticky?: boolean | null;
          featuredImage?: {
            node?: { sourceUrl?: string | null } | null;
          } | null;
          categories?: { nodes: { name: string; slug: string }[] } | null;
        }>;
        pageInfo?: { hasNextPage?: boolean };
        totalCount?: number;
      };
    };

    // If featured param is set, return featured posts (sticky) limited by perPage
    if (url.searchParams.get("featured") === "1") {
      const featuredPerPage = Math.max(
        1,
        Number(url.searchParams.get("perPage") || 30)
      );
      const fdata = (await runGraphQL(FEATURED_QUERY, {
        perPage: featuredPerPage,
        search: q,
      })) as { posts: { nodes: PostsResponse["posts"]["nodes"] } };

      const featured = fdata.posts.nodes || [];
      return NextResponse.json({ posts: featured });
    }

    const data = (await runGraphQL(POSTS_QUERY, {
      offset,
      perPage: POSTS_PER_PAGE,
      search: q,
    })) as PostsResponse;

    const posts = data.posts.nodes || [];
    const total =
      typeof data.posts.totalCount === "number"
        ? data.posts.totalCount
        : posts.length;
    const totalPages = Math.max(1, Math.ceil(total / POSTS_PER_PAGE));
    const hasNextPage = !!data.posts.pageInfo?.hasNextPage;

    return NextResponse.json({ posts, totalPages, hasNextPage });
  } catch (err) {
    console.error("/api/news error", err);
    return NextResponse.json(
      { posts: [], totalPages: 1, hasNextPage: false },
      { status: 500 }
    );
  }
}
