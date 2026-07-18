import Link from "next/link";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata({
  path: "/codex-dream-skin",
  title: "Codex Dream Skin 背景增强说明 | codexskin.top",
  description:
    "Codex Dream Skin 背景增强说明：了解 Dream Skin 能做什么、不能做什么，如何选择 Codex 背景图、导出皮肤包并安全恢复原生主题。",
  keywords: ["Codex Dream Skin", "Dream Skin", "Codex背景", "Codex皮肤包", "Codex换背景"],
});

const boundaries = [
  "Dream Skin 适合做背景图、透明度和视觉氛围增强，不应该接管 Codex 账号、Provider 或任务执行逻辑。",
  "安全的 Codex 皮肤包应该只包含图片与 JSON 配置，不包含 PowerShell、Shell、JavaScript 或可执行文件。",
  "背景图优先选择低饱和、低噪声、暗色或柔和图片，避免影响代码阅读和 Diff 判断。",
  "每次更换背景前都应知道恢复方法：关闭 Codex、移除皮肤文件、重启并确认原生主题恢复。",
];

export default function CodexDreamSkinPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <span className="tag text-accent border-accent/30 mb-4">Dream Skin</span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text">
          Codex Dream Skin 背景增强说明
        </h1>
        <p className="text-text-muted text-lg mt-3 leading-relaxed">
          Dream Skin 是 Codex 换肤生态里常见的背景增强路径。codexskin.top 提供与 Dream Skin
          思路兼容的皮肤预览、素材整理、授权提示和恢复指南，帮助你在不触碰敏感配置的前提下完成视觉定制。
        </p>
      </div>

      <section className="card p-6">
        <h2 className="text-text font-semibold text-xl mb-4">Dream Skin 的安全边界</h2>
        <ul className="space-y-3">
          {boundaries.map((item) => (
            <li key={item} className="text-text-muted text-sm leading-relaxed flex gap-3">
              <span className="text-accent shrink-0">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid md:grid-cols-2 gap-5 mt-8">
        <div className="card p-6">
          <h2 className="text-text font-semibold text-lg mb-3">适合使用 Dream Skin 的场景</h2>
          <p className="text-text-muted text-sm leading-relaxed">
            当你想用品牌视觉、个人壁纸、抽象纹理或低噪风格图增强 Codex 界面时，
            Dream Skin 比单纯调整颜色更灵活。它适合重视长期工作舒适度、审美一致性和展示效果的用户。
          </p>
        </div>
        <div className="card p-6">
          <h2 className="text-text font-semibold text-lg mb-3">不适合使用 Dream Skin 的场景</h2>
          <p className="text-text-muted text-sm leading-relaxed">
            如果你正在处理高对比 Diff、大量日志、长时间审查代码，过强背景会降低效率。
            这时建议只使用官方 Appearance 配色，或在 codexskin.top 工作台里提高压暗和面板不透明度。
          </p>
        </div>
      </section>

      <section className="card p-6 mt-8">
        <h2 className="text-text font-semibold text-xl mb-3">下一步</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/studio" className="btn btn-primary text-sm">打开皮肤工作台</Link>
          <Link href="/skins" className="btn btn-secondary text-sm">浏览皮肤库</Link>
          <Link href="/install" className="btn btn-secondary text-sm">查看安装恢复</Link>
        </div>
      </section>
    </div>
  );
}
