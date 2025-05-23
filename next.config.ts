// next.config.js
const repo = '3d-portfolio-website'; // Your GitHub repo name

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Always include basePath and assetPrefix for GitHub Pages with Pages Router
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
