export async function fetchAndRewriteXML(
  sitemapPath: string,
  frontendBaseURL: string
) {
  const wpURL = process.env.WORDPRESS_API_URL?.replace(/\/$/, "");

  // Return empty sitemap if WordPress URL is not configured
  if (!wpURL) {
    console.warn("WORDPRESS_API_URL not configured, returning empty sitemap");
    const emptySitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`;
    return new Response(emptySitemap, {
      status: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    });
  }

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
