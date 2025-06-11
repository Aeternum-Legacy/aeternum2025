// src/app/news/[slug]/page.tsx
import { notFound } from "next/navigation";

type Post = {
  title: { rendered: string };
  content: { rendered: string };
};

type PageProps = {
  params: {
    slug: string;
  };
};

async function getPost(slug: string): Promise<Post | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_API_URL}/posts?slug=${slug}&_embed`,
    {
      next: { revalidate: 60 },
    }
  );

  const data = await res.json();
  if (!data || data.length === 0) return null;

  return data[0];
}

export default async function NewsDetailPage({ params }: PageProps) {
  const post = await getPost(params.slug);

  if (!post) return notFound();

  return (
    <div className="page-wrapper">
      <div className="hero-wrapper">
        <h1
          className="text-3xl font-bold mb-6"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>
    </div>
  );
}
