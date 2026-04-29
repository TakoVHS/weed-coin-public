import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/access', '/launch-notes', '/risk', '/terms', '/privacy'],
      disallow: ['/office', '/fabric', '/api/control'],
    },
    sitemap: 'https://weed-coin.cash/sitemap.xml',
    host: 'https://weed-coin.cash',
  };
}
