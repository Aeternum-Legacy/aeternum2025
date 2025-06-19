import { Metadata, ResolvingMetadata } from "next";
import { graphQLClient } from "@/lib/graphql-client";
import { GET_POST_BY_SLUG_WITH_SEO, POSTS_QUERY } from "@/lib/queries";
import { notFound } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { categoryColors, PostResponse } from "@/types/post";

interface MetadataProps {
  params: Promise<{ slug: string }>;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getPost(slug: string) {
  const data: PostResponse = await graphQLClient.request(
    GET_POST_BY_SLUG_WITH_SEO,
    { slug }
  );
  return data.posts.nodes[0] || null;
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return notFound();

  const seo = post.seo || {};
  const title = seo.title || post.title;
  const description = seo.metaDesc || "";

  return {
    title,
    description,
    openGraph: {
      title: seo.opengraphTitle || title,
      description: seo.opengraphDescription || description,
      url: `https://aeternumproject.com/news/${post.slug}`,
      type: "article",
      images: seo.opengraphImage?.sourceUrl
        ? [{ url: seo.opengraphImage.sourceUrl }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.opengraphTitle || title,
      description: seo.opengraphDescription || description,
      images: seo.opengraphImage?.sourceUrl
        ? [seo.opengraphImage.sourceUrl]
        : [],
    },
  };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const data = await graphQLClient.request<PostResponse>(POSTS_QUERY);
  return data.posts.nodes.map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return notFound();

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
          className="font-bold"
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
          {(post.categories?.nodes || []).map((cat, idx) => {
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
