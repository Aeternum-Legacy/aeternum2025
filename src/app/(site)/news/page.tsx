import NewsClient from "@/components/client/NewsClient";
import { graphQLClient } from "@/lib/graphql-client";
import { gql } from "graphql-request";

type GqlImage = { sourceUrl?: string | null } | null;

type GqlPostNode = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  content?: string | null;
  date: string | null;
  isSticky?: boolean | null;
  featuredImage?: { node?: GqlImage } | null;
  categories?: { nodes: { name: string; slug: string }[] } | null;
};

type PostsResponse = {
  posts: {
    nodes: GqlPostNode[];
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string | null;
    };
  };
};

type FeaturedPostsResponse = {
  posts: {
    nodes: GqlPostNode[];
  };
};

const POSTS_PER_PAGE = 6;

const POSTS_QUERY = gql`
  query GetPosts($first: Int!, $after: String, $search: String) {
    posts(
      first: $first
      after: $after
      where: { orderby: { field: DATE, order: DESC }, search: $search }
    ) {
      nodes {
        id
        title
        slug
        excerpt
        content
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
        endCursor
      }
    }
  }
`;

const FEATURED_QUERY = gql`
  query GetFeatured($first: Int!, $search: String) {
    posts(
      first: $first
      where: { orderby: { field: DATE, order: DESC }, search: $search }
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

const MAX_POSTS_TO_FETCH = 500;

async function getPostsForPage(
  page: number,
  search: string | null
): Promise<{ posts: GqlPostNode[]; totalPages: number }> {
  try {
    let allPosts: GqlPostNode[] = [];
    let hasNextPage = true;
    let endCursor: string | null = null;
    let totalFetched = 0;

    while (hasNextPage && totalFetched < MAX_POSTS_TO_FETCH) {
      const batchSize = Math.min(100, MAX_POSTS_TO_FETCH - totalFetched);

      const data: PostsResponse = await graphQLClient.request<PostsResponse>(
        POSTS_QUERY,
        {
          first: batchSize,
          after: endCursor,
          search,
        }
      );

      allPosts = [...allPosts, ...data.posts.nodes];
      hasNextPage = data.posts.pageInfo.hasNextPage;
      endCursor = data.posts.pageInfo.endCursor;
      totalFetched += data.posts.nodes.length;

      if (data.posts.nodes.length < batchSize) {
        hasNextPage = false;
      }
    }

    const total = allPosts.length;
    const totalPages = Math.max(1, Math.ceil(total / POSTS_PER_PAGE));

    if (page > totalPages) {
      return { posts: [], totalPages };
    }

    const startIndex = (page - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const pagePosts = allPosts.slice(startIndex, endIndex);

    return { posts: pagePosts, totalPages };
  } catch (error: any) {
    // Try to provide a bit more context for debugging. Don't log tokens.
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const endpoint =
        process.env.NEXT_PUBLIC_WP_GRAPHQL_URL || process.env.WP_GRAPHQL_URL;
      console.error(
        "Error fetching posts from GraphQL endpoint:",
        endpoint ? endpoint : "(no endpoint configured)"
      );
    } catch (e) {
      // ignore
    }

    console.error("Error fetching posts:", error?.message ?? error);
    return { posts: [], totalPages: 1 };
  }
}

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string; q?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, Number(params?.page ?? 1));
  const q = (params?.q ?? "").trim();

  const { posts, totalPages } = await getPostsForPage(page, q || null);

  const featuredData = await graphQLClient.request<FeaturedPostsResponse>(
    FEATURED_QUERY,
    {
      first: 30,
      search: q || null,
    }
  );

  return (
    <NewsClient
      initialPosts={posts}
      totalPages={totalPages}
      currentPage={page}
      searchTermFromUrl={q}
      featuredPostsInitial={featuredData.posts.nodes}
      postsPerPage={POSTS_PER_PAGE}
    />
  );
}
