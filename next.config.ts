import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.resolve(__dirname),
  // Enable proper image optimization
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
