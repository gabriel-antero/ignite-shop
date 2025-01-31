import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // experimental: {
  //   images: {
  //     allowFutureImage: true,
  //   },
  // },
};

export default nextConfig;
