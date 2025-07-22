export async function fetchAndRewriteXML(
  sitemapPath: string,
  frontendBaseURL: string
) {
  const wpURL = process.env.WORDPRESS_API_URL?.replace(/\/$/, "");
  const res = await fetch(`${wpURL}/${sitemapPath}`);
  if (!res.ok) {
    return new Response("Failed to fetch WordPress sitemap", { status: 502 });
  }

  let xml = await res.text();

  xml = xml
    .replaceAll("http://", "https://")
    .replaceAll(wpURL!, frontendBaseURL)
    .replace(/<\?xml-stylesheet.+?>/gi, ""); // 🤍Modified Here!

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
