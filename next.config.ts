import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
      },
      {
        protocol: "http",
        hostname: "69.62.66.51",
      },
      {
        protocol: "https",
        hostname: "69.62.66.51",
      },
      {
        protocol: "http",
        hostname: `${process.env.ROW_URL}`,
      },
      {
        protocol: "https",
        hostname: `${process.env.ROW_URL}`,
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/section",
        destination: "http://localhost:5000/api/section",
      },
    ];
  },
};

export default nextConfig;
