import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const baseURL = process.env.WORDPRESS_API_URL!;
  const res = await fetch(`${baseURL}/sitemap_index.xml`);

  const xml = await res.text();

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
