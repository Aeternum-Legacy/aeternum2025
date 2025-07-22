// src/lib/fetchAndRewriteXML.ts
export async function fetchAndRewriteXML(
  sitemapPath: string,
  frontendBaseURL: string
) {
  const wpURL = process.env.WORDPRESS_API_URL?.replace(/\/$/, "");
  if (!wpURL) {
    return new Response("WORDPRESS_API_URL not set", { status: 500 });
  }

  const res = await fetch(`${wpURL}/${sitemapPath}`);
  if (!res.ok) {
    return new Response("Failed to fetch WordPress sitemap", { status: 502 });
  }

  let xml = await res.text();

  // http → https 변환
  xml = xml.replaceAll("http://", "https://");

  // wpURL → frontend URL로 도메인 치환
  xml = xml.replaceAll(wpURL, frontendBaseURL);

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
