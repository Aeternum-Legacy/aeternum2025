import NewsClient from "@/components/client/NewsClient";
import { graphQLClient } from "@/lib/graphql-client";
import { FEATURED_QUERY, POSTS_QUERY } from "@/lib/queries";
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

async function getPostsForPage(
  page: number,
  search: string | null
): Promise<{ posts: GqlPostNode[]; totalPages: number; hasMore: boolean }> {
  try {
    let allPosts: GqlPostNode[] = [];
    let hasNextPage = true;
    let endCursor: string | null = null;
    let totalFetched = 0;

    // Only fetch as many posts as needed to build the requested page. This
    // prevents fetching the full archive (or the MAX_POSTS_TO_FETCH limit)
    // on every request. We need up to `page * POSTS_PER_PAGE` posts to be
    // able to slice the correct page out of the result.
    const needed = page * POSTS_PER_PAGE;

    while (hasNextPage && totalFetched < needed) {
      const batchSize = Math.min(100, needed - totalFetched);

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
      const received = data.posts.nodes.length;
      totalFetched += received;

      if (received < batchSize) {
        // fewer items than requested => we've reached the end
        hasNextPage = false;
      }
    }

    // If hasNextPage is true after we stopped fetching (because we reached
    // `needed`), then there are more posts on the server beyond what we
    // fetched. We return `hasMore=true` so the client can enable the Next
    // button without having to download the entire archive.
    const hasMore = hasNextPage;

    const total = allPosts.length;
    const totalPages = Math.max(1, Math.ceil(total / POSTS_PER_PAGE));

    if (page > totalPages && !hasMore) {
      return { posts: [], totalPages, hasMore };
    }

    const startIndex = (page - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const pagePosts = allPosts.slice(startIndex, endIndex);

    return { posts: pagePosts, totalPages, hasMore };
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
    return { posts: [], totalPages: 1, hasMore: false };
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

  const { posts, totalPages, hasMore } = await getPostsForPage(page, q || null);

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
      hasMore={hasMore}
    />
  );
}
