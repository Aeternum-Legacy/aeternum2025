"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import MarketingLayout from "@/components/layout/MarketingLayout";
import Head from "next/head";

interface YoastHead {
  robots?: string;
  canonical?: string;
  title?: string;
  description?: string;
}

export default function Page() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const [html, setHtml] = useState("");
  const [seo, setSeo] = useState<YoastHead | null>(null);

  useEffect(() => {
    if (!slug) return;

    async function fetchPage() {
      const res = await fetch(
        `${process.env.WORDPRESS_API_URL}/wp-json/wp/v2/pages?slug=${slug}&_fields=content,yoast_head_json,meta`
      );
      const data = await res.json();
      if (data.length > 0) {
        const page = data[0];
        const rawHtml = page.content.rendered;
        const seoData = page.yoast_head_json;

        const redirectUrl = page.meta?._links_to;

        if (redirectUrl) {
          window.location.href = redirectUrl;
          return;
        }

        const parser = new DOMParser();
        const doc = parser.parseFromString(rawHtml, "text/html");

        const selectorsToRemove = [
          "header",
          "footer",
          "aside",
          ".site-header",
          ".site-footer",
          ".page-title",
          ".sidebar",
        ];
        selectorsToRemove.forEach((selector) => {
          const elements = doc.querySelectorAll(selector);
          elements.forEach((el) => el.remove());
        });

        setHtml(doc.body.innerHTML);
        setSeo(seoData);
      }
    }

    fetchPage();
  }, [slug]);

  return (
    <>
      <Head>
        {seo?.title && <title>{seo.title}</title>}
        {seo?.description && (
          <meta name="description" content={seo.description} />
        )}
        {seo?.robots && <meta name="robots" content={seo.robots} />}
        {seo?.canonical && <link rel="canonical" href={seo.canonical} />}
      </Head>

      <MarketingLayout>
        <div
          className="prose prose-neutral max-w-none font-sans
                prose-h1:mt-12 prose-h2:mt-10 prose-h3:mt-8
                prose-img:rounded-xl
                [&_p]:my-5 [&_figure]:my-8
                [&_iframe]:aspect-video [&_iframe]:w-full [&_iframe]:h-auto
                [&_h1]:text-3xl 
                [&_h2]:text-2xl 
                [&_h3]:text-xl 
                [&_h4]:text-lg 
                [&_h5]:text-base 
                [&_h6]:text-sm 
              "
        >
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </MarketingLayout>
    </>
  );
}
