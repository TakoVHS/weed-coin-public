import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://weed-coin.cash';
  return [
    {
      url: `${base}/`,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${base}/access`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${base}/launch-notes`,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${base}/risk`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${base}/terms`,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${base}/privacy`,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
