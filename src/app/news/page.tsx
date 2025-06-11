// src/app/news/page.tsx
import Image from "next/image";
import Link from "next/link";

type Post = {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_API_URL}/posts?_embed`,
    {
      next: { revalidate: 60 },
    }
  );
  return res.json();
}

export default async function NewsPage() {
  const posts = await getPosts();

  return (
    <div className="page-wrapper relative overflow-hidden bg-pattern">
      <div className="relative w-full h-[400px] bg-black text-white flex items-center justify-center">
        <Image
          src="/images/tree.jpg"
          alt="Banner"
          fill
          className="object-cover opacity-60"
        />
        <div className="relative z-10 text-center px-4">
          <h3 className="font-bold mb-4">
            Discover the Latest from Aeternum: <br />
            Product Updates, News, and Stories
          </h3>
          <p className="mb-6">
            Follow along as we grow, improve, and continue building for
            meaningful legacy sharing.
          </p>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.id} href={`/news/${post.slug}`}>
              <div className="border rounded-lg p-4 hover:shadow transition bg-white">
                <h4
                  className="font-bold text-lg mb-2"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                <div
                  className="text-sm text-gray-600"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
