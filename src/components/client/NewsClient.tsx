"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { stripHtml } from "string-strip-html";
import LogoLabel from "@/components/ui/LogoLabel";
import NewsInputWrapper from "@/components/ui/NewsInputWrapper";
import { graphQLClient } from "@/lib/graphql-client";
import { POSTS_QUERY } from "@/lib/queries";
import { categoryColors, Post, PostsResponse } from "@/types/post";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [lastSubmittedSearch, setLastSubmittedSearch] = useState("");
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  const POSTS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const PAGES_PER_GROUP = 5;
  const totalPages = Math.ceil((filteredPosts?.length || 0) / POSTS_PER_PAGE);
  const currentGroup = Math.floor((currentPage - 1) / PAGES_PER_GROUP);
  const groupStart = currentGroup * PAGES_PER_GROUP + 1;
  const groupEnd = Math.min(groupStart + PAGES_PER_GROUP - 1, totalPages);

  const paginatedPosts = filteredPosts?.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const FEATURED_PER_PAGE = isMobile ? 3 : 7;
  const [featuredPage, setFeaturedPage] = useState(1);
  const featuredPosts = posts?.filter((post) => post.isSticky) || [];

  const FEATURED_PAGES_PER_GROUP = 3;
  const totalFeaturedPages = Math.ceil(
    featuredPosts.length / FEATURED_PER_PAGE
  );
  const featuredGroup = Math.floor(
    (featuredPage - 1) / FEATURED_PAGES_PER_GROUP
  );
  const featuredGroupStart = featuredGroup * FEATURED_PAGES_PER_GROUP + 1;
  const featuredGroupEnd = Math.min(
    featuredGroupStart + FEATURED_PAGES_PER_GROUP - 1,
    totalFeaturedPages
  );

  const paginatedFeatured = featuredPosts.slice(
    (featuredPage - 1) * FEATURED_PER_PAGE,
    featuredPage * FEATURED_PER_PAGE
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

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
            onSubmit={() => {
              setLastSubmittedSearch(searchTerm);
              setCurrentPage(1);
            }}
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
          <div className="flex items-center justify-between gap-2 flex-[2] min-w-[200px]">
            <h2 className="text-2xl font-semibold whitespace-nowrap">
              Featured
            </h2>

            <div className="flex items-center justify-center min-h-8 w-full">
              <div className="flex items-center gap-2 w-[120px] justify-center">
                <button
                  onClick={() =>
                    featuredGroupStart > 1 &&
                    setFeaturedPage(featuredGroupStart - 1)
                  }
                  aria-label="Previous group"
                  className={`w-6 h-6 flex items-center justify-center rounded-full transition ${
                    featuredGroupStart > 1
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <span className="text-lg">&lt;</span>
                </button>

                <div className="flex items-center gap-1 w-[36px] justify-center">
                  {Array.from({
                    length: featuredGroupEnd - featuredGroupStart + 1,
                  }).map((_, i) => {
                    const page = featuredGroupStart + i;
                    return (
                      <button
                        key={page}
                        onClick={() => setFeaturedPage(page)}
                        className={`w-2.5 h-2.5 rounded-full transition ${
                          featuredPage === page ? "bg-black" : "bg-gray-300"
                        }`}
                        aria-label={`Featured page ${page}`}
                      />
                    );
                  })}
                </div>

                <button
                  onClick={() =>
                    featuredGroupEnd < totalFeaturedPages &&
                    setFeaturedPage(featuredGroupEnd + 1)
                  }
                  aria-label="Next group"
                  className={`w-6 h-6 flex items-center justify-center rounded-full transition ${
                    featuredGroupEnd < totalFeaturedPages
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <span className="text-lg">&gt;</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 min-h-[400px] w-full">
          <div className="flex-[8] min-w-0 flex flex-col">
            <div className="flex md:hidden items-center gap-2">
              <h6 className="font-semibold whitespace-nowrap">
                Aeternum Updates & Announcements
              </h6>
              <div className="flex-grow border-b-2 border-gray-300" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 min-h-[200px]">
              {posts === null ? (
                Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-[360px] bg-gray-100 animate-pulse rounded-2xl"
                  />
                ))
              ) : filteredPosts && filteredPosts.length > 0 ? (
                paginatedPosts?.map((post) => {
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
              )}
            </div>
          </div>

          <div className="flex-[2] min-w-[200px] flex flex-col gap-6">
            <div className="flex md:hidden items-center justify-between gap-2">
              <h6 className="font-semibold whitespace-nowrap">Featured</h6>

              <div className="flex items-center gap-2 min-w-[80px] justify-center">
                <button
                  onClick={() =>
                    featuredGroupStart > 1 &&
                    setFeaturedPage(featuredGroupStart - 1)
                  }
                  aria-label="Previous featured group"
                  className={`w-5 h-5 flex items-center justify-center rounded-full transition ${
                    featuredGroupStart > 1
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <span className="text-sm">&lt;</span>
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({
                    length: featuredGroupEnd - featuredGroupStart + 1,
                  }).map((_, i) => {
                    const page = featuredGroupStart + i;
                    return (
                      <button
                        key={page}
                        onClick={() => setFeaturedPage(page)}
                        className={`w-2.5 h-2.5 rounded-full transition ${
                          featuredPage === page ? "bg-black" : "bg-gray-300"
                        }`}
                        aria-label={`Featured page ${page}`}
                      />
                    );
                  })}
                </div>

                <button
                  onClick={() =>
                    featuredGroupEnd < totalFeaturedPages &&
                    setFeaturedPage(featuredGroupEnd + 1)
                  }
                  aria-label="Next featured group"
                  className={`w-5 h-5 flex items-center justify-center rounded-full transition ${
                    featuredGroupEnd < totalFeaturedPages
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <span className="text-sm">&gt;</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {posts === null ? (
                Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-full h-24 bg-gray-100 animate-pulse rounded-xl"
                  />
                ))
              ) : paginatedFeatured.length > 0 ? (
                paginatedFeatured.map((post) => (
                  <Link
                    key={post.id}
                    href={`/news/${post.slug}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={
                          post.featuredImage?.node?.sourceUrl ||
                          getStableFallbackImage(post.id)
                        }
                        alt={post.title}
                        className="object-cover w-full h-full transition group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col flex-1 items-start text-left">
                      <span className="text-sm text-gray-400">
                        {new Date(post.date || "").toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <p
                        className="text-sm font-semibold text-gray-800 group-hover:text-black"
                        dangerouslySetInnerHTML={{ __html: post.title }}
                      />
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-sm text-gray-400">
                  No featured posts found.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {filteredPosts && filteredPosts.length > POSTS_PER_PAGE && (
        <Pagination>
          <PaginationContent>
            {groupStart > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(groupStart - 1);
                  }}
                />
              </PaginationItem>
            )}
            {Array.from({ length: groupEnd - groupStart + 1 }).map((_, i) => {
              const pageNum = groupStart + i;
              return (
                <PaginationItem key={pageNum}>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === pageNum}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(pageNum);
                    }}
                  >
                    {pageNum}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
            {groupEnd < totalPages && (
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(groupEnd + 1);
                  }}
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
