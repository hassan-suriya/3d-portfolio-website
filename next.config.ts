// next.config.js
const repo = '3d-portfolio-website'; // Your GitHub repo name
const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Always include basePath and assetPrefix for GitHub Pages with Pages Router
  basePath: `/${repo}`,
  assetPrefix: isProduction ? `/${repo}` : '',
  images: {
    unoptimized: true,
  },
  // Add trailingSlash true for better compatibility with GitHub Pages
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable App Router to use Pages Router only
  useFileSystemPublicRoutes: true,
};

export default nextConfig;
