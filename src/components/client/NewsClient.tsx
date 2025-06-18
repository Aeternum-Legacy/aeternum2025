"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { stripHtml } from "string-strip-html";
import LogoLabel from "@/components/ui/LogoLabel";
import NewsInputWrapper from "@/components/ui/NewsInputWrapper";
import { graphQLClient } from "@/lib/graphql-client";
import { POSTS_QUERY } from "@/lib/queries";
import { categoryColors, Post, PostsResponse } from "@/types/post";

const fallbackImages = [
  "/images/family-walking.jpg",
  "/images/first-step.jpg",
  "/images/forest-family.jpg",
  "/images/Image1.jpg",
  "/images/Image2.jpg",
  "/images/Image3.jpg",
  "/images/Image4.jpg",
  "/images/Image5.jpg",
  "/images/image-tile1.jpg",
  "/images/image-tile2.jpg",
  "/images/image-tile3.jpg",
  "/images/image-tile4.jpg",
  "/images/image-tile5.jpg",
  "/images/image-tile6.jpg",
  "/images/image-tile7.jpg",
  "/images/image-tile8.jpg",
  "/images/image-tile9.jpg",
  "/images/image-tile10.jpg",
  "/images/image-tile11.jpg",
  "/images/image-tile12.jpg",
  "/images/image-tile13.jpg",
  "/images/image-tile14.jpg",
  "/images/image-tile15.jpg",
  "/images/tree.jpg",
  "/images/tree.png",
];

function getStableFallbackImage(id: string) {
  const index =
    id.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0) %
    fallbackImages.length;
  return fallbackImages[index];
}

export default function NewsClient() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [lastSubmittedSearch, setLastSubmittedSearch] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      const data = await graphQLClient.request<PostsResponse>(POSTS_QUERY);
      setPosts(data.posts.nodes);
    }
    fetchPosts();
  }, []);

  const filteredPosts = posts?.filter((post) =>
    (post.title + post.excerpt).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stickyPost = posts?.find((post) => post.isSticky);

  return (
    <div className="page-wrapper bg-pattern section-wrapper gap-y-12 md:gap-y-24">
      <div>
        <LogoLabel
          src="icons/aeternum-logo2.svg"
          alt="Aeternum Logo"
          text="LATEST NEWS"
        />

        <div className="relative z-10 text-center flex flex-col gap-y-4">
          <h3 className="font-bold mb-2">Discover the Latest from Aeternum</h3>
          <p>
            Product Updates, News, and Stories. Follow along as we grow,
            improve, and continue building for meaningful legacy sharing.
          </p>

          <NewsInputWrapper
            onChange={(val) => setSearchTerm(val)}
            onSubmit={() => setLastSubmittedSearch(searchTerm)}
          />

          {lastSubmittedSearch && (
            <p className="text-sm text-gray-600">
              Showing results for <strong>"{lastSubmittedSearch}"</strong>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setLastSubmittedSearch("");
                }}
                className="ml-2 text-blue-600 underline"
              >
                Clear
              </button>
            </p>
          )}
        </div>
      </div>

      <section className="w-full flex flex-col gap-4">
        <div className="gap-6 w-full hidden md:flex">
          <div className="flex items-center gap-2 flex-[8] min-w-0">
            <h2 className="text-2xl font-semibold whitespace-nowrap">
              Aeternum Updates & Announcements
            </h2>
            <div className="flex-grow border-b-2 border-gray-300" />
          </div>
          <div className="flex items-center gap-2 flex-[2] min-w-[200px]">
            <h2 className="text-2xl font-semibold whitespace-nowrap">
              Featured
            </h2>
            <div className="flex-grow border-b-2 border-gray-300" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 min-h-[400px] w-full">
          <div className="flex-[8] min-w-0 flex flex-col">
            <div className="flex md:hidden items-center gap-2">
              <h6 className=" font-semibold whitespace-nowrap">
                Aeternum Updates & Announcements
              </h6>
              <div className="flex-grow border-b-2 border-gray-300" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 min-h-[200px]">
              {/* {posts === null ? (
                Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-[360px] bg-gray-100 animate-pulse rounded-2xl"
                  />
                ))
              ) : filteredPosts && filteredPosts.length > 0 ? (
                filteredPosts.map((post) => {
                  const imageUrl =
                    post.featuredImage?.node?.sourceUrl ||
                    getStableFallbackImage(post.id);
                  const cleanExcerpt = stripHtml(post.excerpt).result;

                  return (
                    <article
                      key={post.id}
                      className="relative group h-[360px] rounded-2xl overflow-hidden bg-cover bg-center flex"
                      style={{ backgroundImage: `url(${imageUrl})` }}
                    >
                      <Link
                        href={`/news/${post.slug}`}
                        className="absolute inset-0 z-20"
                        aria-label={`Read more: ${post.title}`}
                      />
                      <div className="p-5 flex flex-col justify-end w-full mt-auto pointer-events-none gap-2">
                        <div className="w-fit">
                          {(
                            post.categories?.nodes || [
                              { name: "General", slug: "general" },
                            ]
                          ).map((cat, idx) => {
                            const color =
                              categoryColors[cat.slug] ||
                              "bg-gray-100 text-gray-600";
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
                        <div className="w-fit text-left text-white">
                          <h6
                            className="font-semibold leading-snug"
                            dangerouslySetInnerHTML={{ __html: post.title }}
                          />
                          <p className="text-white line-clamp-4 text-sm">
                            {cleanExcerpt}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })
              ) : (
                <div className="col-span-full flex justify-center items-center min-h-[200px]">
                  <p className="text-sm text-gray-400">No posts found.</p>
                </div>
              )} */}
              {/* Temporarily hide posts */}
              <div className="col-span-full flex justify-center items-center min-h-[200px]">
                <p className="text-sm text-gray-400 italic">
                  Posts are currently hidden while we finalize this section.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-[2] min-w-[200px] flex flex-col gap-6">
            <div className="flex md:hidden items-center gap-2">
              <h6 className=" font-semibold whitespace-nowrap">Featured</h6>
              <div className="flex-grow border-b-2 border-gray-300" />
            </div>
            <div>
              {posts === null ? (
                <div className="w-full h-24 bg-gray-100 animate-pulse rounded-xl" />
              ) : stickyPost ? (
                <Link
                  href={`/news/${stickyPost.slug}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                    <img
                      src={
                        stickyPost.featuredImage?.node?.sourceUrl ||
                        getStableFallbackImage(stickyPost.id)
                      }
                      alt={stickyPost.title}
                      className="object-cover w-full h-full transition group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-1 items-start">
                    <span className="text-sm text-gray-400">
                      {new Date().toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <p
                      className="font-semibold text-gray-800 group-hover:text-black"
                      dangerouslySetInnerHTML={{ __html: stickyPost.title }}
                    />
                  </div>
                </Link>
              ) : (
                <p className="text-sm text-gray-400">No featured post yet.</p>
              )}
            </div>
            <div />
          </div>
        </div>
      </section>
    </div>
  );
}
