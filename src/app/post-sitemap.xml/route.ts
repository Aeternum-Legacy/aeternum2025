// src/app/post-sitemap.xml/route.ts
export async function GET() {
  const wpURL = process.env.WORDPRESS_API_URL?.replace(/\/$/, "");

  const res = await fetch(`${wpURL}/post-sitemap.xml`);
  if (!res.ok) {
    return new Response("Failed to fetch", { status: 502 });
  }

  let xml = await res.text();

  xml = xml.replaceAll("http://", "https://");

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
