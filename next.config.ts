import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8000/:path*",
      },
    ];
  },
output: "export",
  trailingSlash: true,
  images: { unoptimized: true },

  
};

export default nextConfig;