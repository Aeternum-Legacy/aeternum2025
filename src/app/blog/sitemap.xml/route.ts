import { fetchAndRewriteXML } from "@/lib/fetchAndRewriteXML";

export async function GET() {
  return await fetchAndRewriteXML(
    "page-sitemap.xml",
    "https://www.aeternumproject.com/news"
  );
}
