import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/wp-content/uploads/:path*",
        destination:
          "https://orchid-otter-153984.hostingersite.com/wp-content/uploads/:path*",
      },
    ];
  },
};

export default nextConfig;