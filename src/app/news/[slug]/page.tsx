import { notFound } from "next/navigation";

type Post = {
  title: { rendered: string };
  content: { rendered: string };
  slug: string;
  id: number;
};

async function getPost(slug: string): Promise<Post | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_API_URL}/posts?slug=${slug}&_embed`,
    {
      next: { revalidate: 60 },
    }
  );
  const data = await res.json();
  return data.length > 0 ? data[0] : null;
}

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/posts`);
  const posts: Post[] = await res.json();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
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
