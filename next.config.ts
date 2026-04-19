import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/rajesh-portfolio',
  images: {
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;
