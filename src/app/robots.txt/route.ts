import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const baseURL = process.env.WORDPRESS_API_URL!;
  const res = await fetch(`${baseURL}/robots.txt`);
  let txt = await res.text();

  txt = txt.replace(
    /Sitemap: http:\/\/api\.aeternumproject\.com\/sitemap_index\.xml/,
    "Sitemap: https://aeternumproject.com/sitemap.xml"
  );

  return new Response(txt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
