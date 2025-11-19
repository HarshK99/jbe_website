export const dynamic = 'force-static';

const SITE_URL = process.env.SITE_URL || 'https://example.com';

const robots = `User-agent: *
Allow: /
Sitemap: ${SITE_URL}/sitemap.xml
`;

export async function GET() {
  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=86400'
    }
  });
}
