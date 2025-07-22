import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const txt = `
User-agent: *
Allow: /

Sitemap: https://aeternumproject.com/sitemap.xml
Sitemap: https://aeternumproject.com/blog/sitemap.xml
  `.trim();

  return new Response(txt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
