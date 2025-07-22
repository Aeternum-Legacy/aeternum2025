import { fetchAndRewriteXML } from "@/lib/fetchAndRewriteXML";

export async function GET() {
  const frontendBaseURL = "https://www.aeternumproject.com";
  return fetchAndRewriteXML("author-sitemap.xml", frontendBaseURL);
}
