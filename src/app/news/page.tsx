import NewsClient from "@/components/client/NewsClient";

export const metadata = {
  title: "Latest News | Aeternum",
  description:
    "Discover product updates, stories, and news from Aeternum – where memories live forever.",
  openGraph: {
    title: "Latest News | Aeternum",
    description:
      "Discover product updates, stories, and news from Aeternum – where memories live forever.",
    url: "https://aeternumproject.com/news",
    siteName: "Aeternum",
    images: [
      {
        url: "https://aeternumproject.com/images/tree.jpg",
        width: 1200,
        height: 630,
        alt: "Aeternum Tree Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@aeternum_app",
    creator: "@aeternum_app",
  },
};

export default function NewsPage() {
  return <NewsClient />;
}
