export const dynamic = 'force-static';

import { NextResponse } from 'next/server';

const SITE_URL = process.env.SITE_URL || 'https://example.com';

const PAGES = [
  '', // home
  'about',
  'products',
  'enquiry',
  'clients',
  'industries'
];

function generateSiteMap(): string {
  const urls = PAGES.map((p) => {
    const loc = p === '' ? `${SITE_URL}/` : `${SITE_URL}/${p}/`;
    return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

export async function GET() {
  const sitemap = generateSiteMap();

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, s-maxage=86400'
    }
  });
}
