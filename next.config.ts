import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Drop real product photography into /public/images and reference it by path.
    // Add remote hosts here if the client serves images from a CDN.
    remotePatterns: [],
  },
};

export default nextConfig;
