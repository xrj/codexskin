import type { Metadata } from "next";

export const siteUrl = "https://codexskin.top";

export const siteName = "codexskin.top";

export const defaultTitle = "codexskin.top - Codex 换肤资源站 | 皮肤、宠物、工作台";

export const defaultDescription =
  "codexskin.top 是 Codex App 换肤一站式资源站，提供免费 Codex 皮肤下载、在线皮肤工作台、宠物库、Dream Skin 安装指南与皮肤定制服务。给 Codex 换一张脸，但别把信任交给一张图。";

export const defaultKeywords = [
  "Codex换肤",
  "Codex皮肤",
  "Codex主题",
  "Codex背景",
  "Dream Skin",
  "Codex宠物",
  "Codex外观",
  "codexskin",
  "代码编辑器换肤",
  "AI编程工具皮肤",
  "Codex皮肤下载",
  "Codex皮肤制作",
  "Codex皮肤定制",
];

export const sitemapRoutes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/skins", changeFrequency: "weekly", priority: 0.9 },
  { path: "/studio", changeFrequency: "monthly", priority: 0.9 },
  { path: "/pets", changeFrequency: "weekly", priority: 0.8 },
  { path: "/install", changeFrequency: "monthly", priority: 0.8 },
  { path: "/safety", changeFrequency: "monthly", priority: 0.7 },
  { path: "/custom", changeFrequency: "monthly", priority: 0.7 },
  { path: "/codex-skins-guide", changeFrequency: "monthly", priority: 0.85 },
  { path: "/codex-theme-installation", changeFrequency: "monthly", priority: 0.8 },
  { path: "/codex-dream-skin", changeFrequency: "monthly", priority: 0.8 },
] as const;

export function absoluteUrl(path = "") {
  // 统一拼接 canonical，避免站内出现带斜杠和不带斜杠的重复地址。
  if (path === "") {
    return `${siteUrl}/`;
  }

  return `${siteUrl}${path.endsWith("/") ? path : `${path}/`}`;
}

export function createPageMetadata({
  path,
  title,
  description,
  keywords,
}: {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);

  // 页面级 metadata 会继承 layout 的 metadataBase，这里只补每页独有的搜索信号。
  return {
    title,
    description,
    keywords: keywords ?? defaultKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: "zh_CN",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export function createJsonLd(data: Record<string, unknown>) {
  // JSON-LD 必须序列化为字符串插入页面，帮助搜索引擎理解站点实体和导航结构。
  return JSON.stringify(data);
}
