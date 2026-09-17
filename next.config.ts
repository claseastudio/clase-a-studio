import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local SVGs in /public are used as static assets via next/image
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
