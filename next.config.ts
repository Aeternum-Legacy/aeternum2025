/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { caseSensitiveRoutes: true },
  images: {
    domains: ["api.microlink.io", "3.148.235.129"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    WORDPRESS_API_URL: process.env.WORDPRESS_API_URL,
  },
};

module.exports = nextConfig;
