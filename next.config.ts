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
        protocol: "https",
        hostname: "api.esteemfinance.co.nz",
      },
      {
        protocol: "https",
        hostname: "api.esteemfinance.co.nz",
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

};

export default nextConfig;
