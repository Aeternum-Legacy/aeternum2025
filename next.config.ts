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
};

module.exports = nextConfig;
