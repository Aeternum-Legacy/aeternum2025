/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { caseSensitiveRoutes: true },
  images: {
    domains: ["api.microlink.io"],
  },
};

module.exports = nextConfig;
