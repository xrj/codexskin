import Link from "next/link";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata({
  path: "/codex-theme-installation",
  title: "Codex 主题安装教程 | codexskin.top",
  description:
    "Codex 主题安装教程：从官方 Appearance 配色到 Dream Skin 背景，再到 Codex 宠物安装，按 Windows 和 macOS 场景整理安全步骤与恢复方法。",
  keywords: ["Codex主题安装", "Codex皮肤安装", "Codex Appearance", "Codex换肤教程", "Codex恢复主题"],
});

const installPaths = [
  {
    title: "官方 Appearance 主题",
    steps: ["打开 Codex Settings", "进入 Appearance", "选择深色或浅色基础主题", "调整强调色、背景色和字体", "保存后检查 Home、Task、Diff 三个界面"],
  },
  {
    title: "Dream Skin 背景",
    steps: ["在 codexskin.top 选择或制作皮肤", "导出 .dreamskin 数据包", "确认图片来源和授权", "按 Dream Skin 引擎说明放置文件", "重启 Codex 并检查文本可读性"],
  },
  {
    title: "Codex Pets 宠物",
    steps: ["准备透明背景 sprite 图片", "托管到公开 HTTPS 地址", "确认文件大小和帧布局", "生成 codex:// 安装链接", "在 Codex Pets 设置里确认生效"],
  },
];

export default function CodexThemeInstallationPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <span className="tag text-accent border-accent/30 mb-4">安装教程</span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text">
          Codex 主题安装教程
        </h1>
        <p className="text-text-muted text-lg mt-3 max-w-3xl leading-relaxed">
          本页把 Codex 主题安装拆成三条路径：官方配色、Dream Skin 背景和 Codex 宠物。
          如果你只是想快速换一个稳定主题，优先使用官方 Appearance；如果你需要背景图和更强个性化，再进入 Dream Skin。
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {installPaths.map((path) => (
          <section key={path.title} className="card p-6">
            <h2 className="text-text font-semibold text-lg mb-4">{path.title}</h2>
            <ol className="space-y-2">
              {path.steps.map((step, index) => (
                <li key={step} className="text-text-muted text-sm flex gap-2">
                  <span className="text-accent shrink-0">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>

      <section className="card p-6 mt-8 border-accent-secondary/30">
        <h2 className="text-text font-semibold text-xl mb-3">安装前后的安全检查</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          安装任何 Codex 皮肤前，都建议先确认皮肤包不包含脚本、命令、二进制文件或配置读取逻辑。
          安装后检查代码区域对比度、Diff 红绿辨识度、输入框可见性和恢复路径。
          如果出现异常，先恢复 Codex 原生主题，再重新定位是图片尺寸、透明度还是引擎路径问题。
        </p>
        <div className="flex flex-wrap gap-3 mt-5">
          <Link href="/install" className="btn btn-primary text-sm">查看完整安装指南</Link>
          <Link href="/safety" className="btn btn-secondary text-sm">查看安全说明</Link>
        </div>
      </section>
    </div>
  );
}
