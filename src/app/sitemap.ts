import type { MetadataRoute } from "next";
import { absoluteUrl, sitemapRoutes } from "./lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-18T00:00:00.000Z");

  // 这里集中维护公开页面，避免搜索引擎继续访问缺失的站点地图。
  return sitemapRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
