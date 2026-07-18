import Link from "next/link";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata({
  path: "/codex-skins-guide",
  title: "Codex 皮肤完整指南 | codexskin.top",
  description:
    "Codex 皮肤完整指南：了解 Codex 皮肤、Codex 主题、Dream Skin 背景、Codex 宠物和安全安装边界。适合第一次给 Codex 换肤的中文用户。",
  keywords: ["Codex皮肤指南", "Codex换肤教程", "Codex主题", "Codex皮肤", "Dream Skin", "codexskin.top"],
});

const guideSections = [
  {
    title: "Codex 皮肤是什么",
    body:
      "Codex 皮肤是围绕 Codex App 外观体验的一组视觉资源，通常包括主题色、背景图片、界面透明度、宠物动画和安装说明。它只改变视觉层，不应该改变任务执行、代码生成、Provider 配置或账号认证。",
  },
  {
    title: "三种常见换肤方式",
    body:
      "第一种是官方 Appearance 主题，只调整颜色和字体；第二种是 Dream Skin 背景增强，通过图片和配置让界面更个性化；第三种是 Codex Pets 宠物，让 Codex 状态以动画形式显示。新手建议先从官方主题开始，再尝试背景和宠物。",
  },
  {
    title: "选择皮肤时先看授权",
    body:
      "不要只看效果图。每套 Codex 皮肤都应该标注来源、授权和可用场景。可商用皮肤适合工作场景，开源主题要遵守原协议，仅个人使用的动漫、明星、游戏风素材不建议用于商业项目。",
  },
  {
    title: "安装前要准备恢复方案",
    body:
      "任何外观修改都应该能回退。安装前请记录当前 Codex 主题设置，保存原始配置，并确认如何移除 Dream Skin 背景或 Codex 宠物。codexskin.top 的安装页面提供了按平台拆分的恢复步骤。",
  },
];

export default function CodexSkinsGuidePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <span className="tag text-accent border-accent/30 mb-4">Codex 皮肤指南</span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text">
          Codex 皮肤完整指南
        </h1>
        <p className="text-text-muted text-lg mt-3 leading-relaxed">
          这是一份给中文用户准备的 Codex 换肤入门页。你可以从这里理解
          <strong className="text-text"> Codex 皮肤</strong>、<strong className="text-text">Codex 主题</strong>、
          Dream Skin 背景和 Codex 宠物之间的区别，再决定要走哪条安装路径。
        </p>
      </div>

      <div className="grid gap-5">
        {guideSections.map((section, index) => (
          <section key={section.title} className="card p-6">
            <span className="text-accent font-bold text-sm">0{index + 1}</span>
            <h2 className="text-text font-semibold text-xl mt-2 mb-3">{section.title}</h2>
            <p className="text-text-muted text-sm leading-relaxed">{section.body}</p>
          </section>
        ))}
      </div>

      <section className="card p-6 mt-8">
        <h2 className="text-text font-semibold text-xl mb-3">推荐阅读顺序</h2>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { href: "/skins", label: "先浏览 Codex 皮肤库" },
            { href: "/studio", label: "再用工作台预览效果" },
            { href: "/install", label: "最后按指南安装和恢复" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="btn btn-secondary text-sm">
              {item.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
