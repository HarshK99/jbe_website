import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export static HTML for each page — suitable for static hosts
  output: 'export',
  // Use trailing slashes to help with some static host setups
  trailingSlash: true,
  // When serving the exported `out/` under a subpath like `/preview`,
  // Next requires `basePath` and `assetPrefix` so built asset paths
  // point to `/preview/_next/...` instead of `/_next/...`.
  // Update this if you host under a different subfolder.
  // We're serving the exported files from the site root (`public_html`).
  // Keep `basePath`/`assetPrefix` empty so generated URLs use `/_next/...`.
  basePath: '',
  assetPrefix: '',

  // For static hosting (no Next.js server), disable Next's image
  // optimization so `<Image />` renders plain `<img>` tags and
  // the build does not require the dynamic `/ _next/image` optimizer.
  images: {
    unoptimized: true,
  },
  // Expose SITE_URL at build time so server routes can reference it for sitemap/robots
  env: {
    SITE_URL: process.env.SITE_URL || 'https://example.com'
  }
};

export default nextConfig;
