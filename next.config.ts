import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["files.stripe.com"],
  },

  // experimental: {
  //   newNextLinkBehavior: true,
  //   images: {
  //     allowFutureImage: true,
  //   },
  // },
};

export default nextConfig;
