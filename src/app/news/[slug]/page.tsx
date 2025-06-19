import { graphQLClient } from "@/lib/graphql-client";
import {
  GET_POST_BY_SLUG_QUERY,
  POSTS_QUERY,
  RECENT_POSTS_QUERY,
} from "@/lib/queries";
import { notFound } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  categoryColors,
  Post,
  PostResponse,
  RecentPost,
  RecentPostResponse,
} from "@/types/post";

async function getPost(slug: string): Promise<Post | null> {
  const data = await graphQLClient.request<PostResponse>(
    GET_POST_BY_SLUG_QUERY,
    { slug }
  );
  return data.posts.nodes[0] || null;
}

async function getRecentPosts(): Promise<RecentPost[]> {
  const data = await graphQLClient.request<RecentPostResponse>(
    RECENT_POSTS_QUERY
  );
  return data.posts.nodes;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const data = await graphQLClient.request<PostResponse>(POSTS_QUERY);
  return data.posts.nodes.map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }: { params: any }) {
  if (!params.slug) return notFound();

  const [post, recentPosts] = await Promise.all([
    getPost(params.slug),
    getRecentPosts(),
  ]);

  if (!post) return notFound();

  const archiveSet = new Set<string>();
  recentPosts.forEach((p) => {
    const date = new Date(p.date);
    const key = `${date.toLocaleString("default", {
      month: "long",
    })} ${date.getFullYear()}`;
    archiveSet.add(key);
  });

  return (
    <div className="page-wrapper">
      <section className="section-wrapper text-left items-start lg:pt-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/news">News</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{post.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h2
          className="font-bold "
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
        <div className="flex flex-row items-start gap-2">
          <p className="text-sm text-gray-500">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          {(
            post.categories?.nodes || [{ name: "General", slug: "general" }]
          ).map((cat, idx) => {
            const color =
              categoryColors[cat.slug] || "bg-gray-100 text-gray-600";
            return (
              <span
                key={idx}
                className={`${color} text-xs font-medium w-fit px-3 py-1 rounded-full`}
              >
                {cat.name}
              </span>
            );
          })}
        </div>

        <div
          className="prose prose-neutral max-w-none
    prose-img:rounded-xl
    prose-h1:mt-12 prose-h2:mt-10 prose-h3:mt-8
    [&_figure]:my-8
    [&_iframe]:aspect-video [&_iframe]:w-full [&_iframe]:h-auto"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>
    </div>
  );
}
