import type { NextConfig } from "next";

/**
 * Get the base path from the environment or use an empty string
 * This is needed for GitHub Pages deployment where the site might be in a subdirectory
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  // Required for GitHub Pages deployment
  output: 'export',
  
  // Set the base path for GitHub Pages deployment if needed
  basePath,
  
  // Disable image optimization since it's not supported in static exports
  images: {
    unoptimized: true,
  },
  
  // Configure asset prefix for GitHub Pages
  assetPrefix: basePath,
  
  // Disable trailing slashes for GitHub Pages URLs
  trailingSlash: false,
};

export default nextConfig;
