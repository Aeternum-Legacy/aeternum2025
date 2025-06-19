import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const baseURL = process.env.WORDPRESS_API_URL!;
  const res = await fetch(`${baseURL}/robots.txt`);
  const txt = await res.text();

  return new Response(txt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
