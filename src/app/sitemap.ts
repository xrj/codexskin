import type { MetadataRoute } from "next";

const siteUrl = "https://codexskin.top";

export const dynamic = "force-static";

const routes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/skins", changeFrequency: "weekly", priority: 0.9 },
  { path: "/studio", changeFrequency: "monthly", priority: 0.9 },
  { path: "/pets", changeFrequency: "weekly", priority: 0.8 },
  { path: "/install", changeFrequency: "monthly", priority: 0.8 },
  { path: "/safety", changeFrequency: "monthly", priority: 0.7 },
  { path: "/custom", changeFrequency: "monthly", priority: 0.7 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // 这里集中维护公开页面，避免搜索引擎继续访问缺失的站点地图。
  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
