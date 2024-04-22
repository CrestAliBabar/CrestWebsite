/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    images: {
      domains: ['dummyimage.com'],
      unoptimized: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
          port: "",
        },
      ],
    },
  };
