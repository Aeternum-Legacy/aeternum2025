/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {},
  images: {
    domains: ["api.microlink.io"],
  },
};

module.exports = nextConfig;
