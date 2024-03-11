//const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {

};

module.exports = {
 // typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    //ignoreBuildErrors: true,
//  },
  images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
          port: "",
        },
      ],
    },
}