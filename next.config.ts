import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*.php",            // всі запити, які закінчуються на .php
        destination: "http://localhost:8000/:path*.php", // проксі на PHP сервер
      },
    ];
  },
/* output: "export",
 */  trailingSlash: true,
  images: { unoptimized: true },

  
};

export default nextConfig;