import { MetadataRoute } from 'next';
import { TIER_LIST_DATA } from '@/data/wikiData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://destinedrivals.robloxwikihub.com';
  const d = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: d,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/codes`,
      lastModified: d,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tier-list`,
      lastModified: d,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: d,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/team-builder`,
      lastModified: d,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pack-simulator`,
      lastModified: d,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/beginners-guide`,
      lastModified: d,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  const characterPages: MetadataRoute.Sitemap = TIER_LIST_DATA.map((item) => ({
    url: `${baseUrl}/characters/${item.id}`,
    lastModified: d,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticPages, ...characterPages];
}
