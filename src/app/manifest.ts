import type { MetadataRoute } from "next";
import { defaultDescription, siteName } from "./lib/seo";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  // manifest 提供站点身份信息，帮助搜索与浏览器识别固定的应用名称和入口。
  return {
    name: `${siteName} - Codex 换肤资源站`,
    short_name: siteName,
    description: defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#0E0F12",
    theme_color: "#33D6A6",
    lang: "zh-CN",
    categories: ["developer", "productivity", "utilities"],
  };
}
