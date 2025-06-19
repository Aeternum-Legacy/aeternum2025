// src/app/sitemap.xml/route.ts
import { NextRequest } from "next/server";

export async function GET() {
  const wpURL = process.env.WORDPRESS_API_URL?.replace(/\/$/, ""); 
  const frontendURL = "https://www.aeternumproject.com";

  const res = await fetch(`${wpURL}/sitemap.xml`);
  if (!res.ok) {
    return new Response("Failed to fetch", { status: 502 });
  }

  let xml = await res.text();

  xml = xml
    .replaceAll(`${wpURL}`, frontendURL)
    .replaceAll(
      'href="//api.aeternumproject.com',
      'href="https://www.aeternumproject.com'
    );

  xml = xml.replace(/<\?xml-stylesheet.+?>/gi, "");

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
