"use client";

import { JSX, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import LogoLabel from "@/components/ui/LogoLabel";
import NewsInputWrapper from "@/components/ui/NewsInputWrapper";
import { Pagination } from "@/components/ui/pagination";

type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  content?: string | null;
  date: string | null;
  isSticky?: boolean | null;
  featuredImage?: { node?: { sourceUrl?: string | null } | null } | null;
  categories?: { nodes: { name: string; slug: string }[] } | null;
};

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
    id.split("").reduce((sum, ch) => sum + ch.charCodeAt(0), 0) %
    fallbackImages.length;
  return fallbackImages[index];
}

type Props = {
  initialPosts: Post[];
  totalPages: number;
  currentPage: number;
  searchTermFromUrl: string;
  featuredPostsInitial: Post[];
  postsPerPage: number;
  hasMore?: boolean;
};

export default function NewsClient({
  initialPosts,
  totalPages,
  currentPage,
  searchTermFromUrl,
  featuredPostsInitial,
  hasMore = false,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(searchTermFromUrl);
  const [lastSubmittedSearch, setLastSubmittedSearch] =
    useState(searchTermFromUrl);

  const [isLoading, setIsLoading] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const paginatedPosts = initialPosts;

  const FEATURED_PER_PAGE = isMobile ? 3 : 7;
  const [featuredPage, setFeaturedPage] = useState(1);
  const featuredPosts = useMemo(
    () => (featuredPostsInitial || []).filter((p) => !!p.isSticky),
    [featuredPostsInitial]
  );
  const FEATURED_PAGES_PER_GROUP = 3;
  const totalFeaturedPages = Math.max(
    1,
    Math.ceil(featuredPosts.length / FEATURED_PER_PAGE)
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

  const goToPage = (page: number, q: string) => {
    setIsLoading(true);
    const params = new URLSearchParams(searchParams?.toString());
    if (q) params.set("q", q);
    else params.delete("q");
    params.set("page", String(page));
    router.push(`/news?${params.toString()}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setIsLoading(false);
  }, [initialPosts]);

  return (
    <div className="page-wrapper bg-pattern section-wrapper gap-y-12 md:gap-y-24">
      <div>
        <LogoLabel
          src="icons/aeternum-logo2.svg"
          alt="Aeternum Logo"
          text="LATEST NEWS"
        />

        <div
          className="relative z-10 text-center flex flex-col"
          style={{ gap: 16 }}
        >
          <h3 className="font-bold mb-2">Discover the Latest from Aeternum</h3>
          <p>
            Product Updates, News, and Stories. Follow along as we grow,
            improve, and continue building for meaningful legacy sharing.
          </p>
          <NewsInputWrapper
            onChange={(val) => setSearchTerm(val)}
            onSubmit={() => {
              setLastSubmittedSearch(searchTerm);
              goToPage(1, searchTerm);
            }}
          />
          {lastSubmittedSearch && (
            <p className="text-sm text-gray-600">
              Showing results for <strong>"{lastSubmittedSearch}"</strong>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setLastSubmittedSearch("");
                  goToPage(1, "");
                }}
                className="ml-2 underline"
              >
                Clear
              </button>
            </p>
          )}
        </div>
      </div>

      <section className="w-full flex flex-col" style={{ gap: 16 }}>
        <div className="w-full hidden md:flex items-center" style={{ gap: 24 }}>
          <div
            className="flex items-center flex-[8] min-w-0"
            style={{ gap: 8 }}
          >
            <h2 className="text-2xl font-semibold whitespace-nowrap">
              Aeternum Updates & Announcements
            </h2>
            <div className="flex-grow border-b-2 border-gray-300" />
          </div>

          <div className="flex items-center justify-between flex-[2] min-w-[200px]">
            <h2 className="text-2xl font-semibold whitespace-nowrap">
              Featured
            </h2>

            <div className="flex items-center justify-center min-h-8 w-full">
              <div
                className="flex items-center w-[120px] justify-center"
                style={{ gap: 8 }}
              >
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

                <div
                  className="flex items-center w-[36px] justify-center"
                  style={{ gap: 4 }}
                >
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

        <div
          className="flex flex-col md:flex-row w-full"
          style={{ gap: 24, minHeight: 400 }}
        >
          <div className="flex-[8] min-w-0 flex flex-col">
            <div className="flex md:hidden items-center" style={{ gap: 8 }}>
              <h6 className="font-semibold whitespace-nowrap">
                Aeternum Updates & Announcements
              </h6>
              <div className="flex-grow border-b-2 border-gray-300" />
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 min-h-[200px]"
              style={{ gap: 24 }}
            >
              {isLoading ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <div key={`skeleton-${i}`} className="animate-pulse">
                    <div className="h-[250px] bg-gray-200 rounded-2xl mb-3"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                ))
              ) : paginatedPosts && paginatedPosts.length > 0 ? (
                paginatedPosts.map((post) => {
                  const imageUrl =
                    post.featuredImage?.node?.sourceUrl ||
                    getStableFallbackImage(post.id);

                  return (
                    <Link
                      key={post.id}
                      href={`/news/${post.slug}`}
                      className="block group"
                    >
                      <article
                        className="relative h-[250px] rounded-2xl overflow-hidden bg-cover bg-center"
                        style={{ backgroundImage: `url(${imageUrl})` }}
                      />
                      <h4
                        className="text-left mt-3 text-base font-semibold text-gray-800 line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: post.title }}
                      />
                    </Link>
                  );
                })
              ) : (
                <div className="col-span-full flex flex-col justify-center items-center min-h-[200px] space-y-4">
                  <p className="text-lg text-gray-400">
                    {lastSubmittedSearch
                      ? `No posts found for "${lastSubmittedSearch}"`
                      : "No posts found."}
                  </p>
                  {lastSubmittedSearch && (
                    <button
                      onClick={() => {
                        setSearchTerm("");
                        setLastSubmittedSearch("");
                        goToPage(1, "");
                      }}
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      Clear search and view all posts
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          <div
            className="flex-[2] min-w-[200px] flex flex-col"
            style={{ gap: 24 }}
          >
            <div className="flex md:hidden items-center justify-between min-w-[80px]">
              <h6 className="font-semibold whitespace-nowrap">Featured</h6>

              <div
                className="flex items-center justify-center"
                style={{ gap: 8 }}
              >
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

                <div className="flex items-center" style={{ gap: 4 }}>
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

            <div className="flex flex-col" style={{ gap: 16 }}>
              {paginatedFeatured.length > 0 ? (
                paginatedFeatured.map((post) => (
                  <Link
                    key={post.id}
                    href={`/news/${post.slug}`}
                    className="flex items-start group"
                    style={{ gap: 16 }}
                  >
                    <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={
                          post.featuredImage?.node?.sourceUrl ||
                          getStableFallbackImage(post.id)
                        }
                        alt={post.title ?? "featured post"}
                        className="object-cover w-full h-full transition group-hover:scale-105"
                      />
                    </div>
                    <div
                      className="flex flex-col flex-1 items-start text-left"
                      style={{ gap: 4 }}
                    >
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

      {(totalPages > 1 || hasMore) && (
        <Pagination
          onPrev={() => {
            if (!isLoading && currentPage > 1) {
              goToPage(currentPage - 1, searchTerm);
            }
          }}
          onNext={() => {
            if (!isLoading && (currentPage < totalPages || hasMore)) {
              goToPage(currentPage + 1, searchTerm);
            }
          }}
          prevDisabled={isLoading || currentPage <= 1}
          nextDisabled={isLoading || !(currentPage < totalPages || hasMore)}
        />
      )}
    </div>
  );
}
