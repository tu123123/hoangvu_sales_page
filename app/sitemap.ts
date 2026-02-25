import type { MetadataRoute } from "next";
import { getAllSlugs, getPostBySlug } from "@/lib/news-data";

const SITE_URL = "https://hoatuoihoangvu.xyz";

export default function sitemap(): MetadataRoute.Sitemap {
  const newsArticles = getAllSlugs().map((slug) => {
    const post = getPostBySlug(slug);
    return {
      url: `${SITE_URL}/tin-tuc/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    };
  });

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/gioi-thieu`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/lien-he`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/tin-tuc`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...newsArticles,
  ];
}
