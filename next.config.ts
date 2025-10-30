/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { caseSensitiveRoutes: true },
  images: {
    domains: ["api.microlink.io", "3.144.117.179"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    WORDPRESS_API_URL: process.env.WORDPRESS_API_URL,
  },
};

module.exports = nextConfig;
