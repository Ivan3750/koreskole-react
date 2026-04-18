import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*.php",          
        destination: "/:path*.php", 
      },
    ];
  },
output: "export",
  trailingSlash: true,
  images: { unoptimized: true },

  
};

export default nextConfig;