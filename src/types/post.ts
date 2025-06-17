export type Category = {
  name: string;
  slug: string;
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  isSticky?: boolean;
  featuredImage?: { node: { sourceUrl: string } };
  categories?: { nodes: Category[] };
  content: string;
  date: string;
};

export type PostsResponse = {
  posts: { nodes: Post[] };
};

export type PostResponse = {
  posts: {
    nodes: Post[];
  };
};

export type RecentPost = {
  id: string;
  title: string;
  slug: string;
  date: string;
};

export type RecentPostResponse = {
  posts: {
    nodes: RecentPost[];
  };
};

export const categoryColors: Record<string, string> = {
  general: "bg-purple-100 text-purple-600",
  "behind-the-scenes": "bg-yellow-100 text-yellow-700",
  "community-feedback": "bg-blue-100 text-blue-600",
  "beta-test": "bg-emerald-100 text-emerald-600",
  "launch-announcements": "bg-pink-100 text-pink-600",
  "product-updates": "bg-orange-100 text-orange-600",
};
