import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], 
    unoptimized: process.env.NODE_ENV === 'development', 
  },
}

export default nextConfig;
