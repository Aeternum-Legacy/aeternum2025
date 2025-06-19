// src/app/sitemap.xml/route.ts
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const baseURL = process.env.WORDPRESS_API_URL;

  if (!baseURL) {
    return new Response("WORDPRESS_API_URL not set", { status: 500 });
  }

  const response = await fetch(`${baseURL}/sitemap_index.xml`);

  if (!response.ok) {
    return new Response("Failed to fetch sitemap", { status: 502 });
  }

  const xml = await response.text();

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
