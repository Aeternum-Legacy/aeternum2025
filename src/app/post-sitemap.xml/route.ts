import { fetchAndRewriteXML } from "@/lib/fetchAndRewriteXML";

export async function GET() {
  return await fetchAndRewriteXML(
    "post-sitemap.xml",
    "https://www.aeternumproject.com/blog"
  );
}
