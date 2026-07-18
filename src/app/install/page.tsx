import Link from "next/link";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata({
  path: "/install",
  title: "Codex 皮肤安装与恢复指南 | codexskin.top",
  description:
    "codexskin.top 提供详细的 Codex 皮肤安装指南，包括官方色彩主题配置、Dream Skin 引擎安装、Codex 宠物安装，以及完整的皮肤恢复教程。Windows 与 macOS 双平台支持。",
});

export default function InstallPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text">
          Codex 皮肤安装与恢复指南
        </h1>
        <p className="text-text-muted text-lg mt-3 max-w-3xl leading-relaxed">
          codexskin.top <strong className="text-text">Codex 皮肤安装</strong> 指南覆盖三种常见场景：
          官方色彩主题配置、Dream Skin 引擎背景增强、Codex 宠物安装。
          无论你使用 Windows 还是 macOS，都能找到对应的 <strong className="text-text">安装指南</strong> 和恢复方法。
        </p>
      </div>

      {/* Three Scenarios */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          {
            icon: '🎨', title: '我只想改官方颜色',
            desc: '通过 Codex Settings 中的 Appearance 设置调整主题色、强调色、字体。这是最安全的 Codex 皮肤安装方式，完全使用官方能力。',
            steps: ['打开 Codex 设置 → Appearance', '选择 base theme: Dark / Light', '自定义 Accent、Background、Foreground 颜色', '调整 UI Font 和 Code Font', '复制 custom theme 分享给他人'],
            tag: '官方能力 · 零风险',
          },
          {
            icon: '🖼️', title: '我想换背景图',
            desc: '通过社区 Dream Skin 引擎加载自定义背景图片。在 codexskin.top 工作台预览并导出 .dreamskin 数据包后按步骤安装。',
            steps: ['在 codexskin.top 工作台制作或选择皮肤', '导出 .dreamskin 数据包', '按照 Dream Skin 引擎 README 放置文件', '重启 Codex 查看背景效果', '验证 Home/Task/Diff 三面显示'],
            tag: 'Dream Skin 引擎 · 社区工具',
          },
          {
            icon: '🐱', title: '我想装 Codex 宠物',
            desc: '通过 Codex Pets 设置或 codex:// 深链接安装动画宠物。需要将 sprite 图片托管在公开 HTTPS 地址。',
            steps: ['准备 PNG/WebP sprite 图片', '上传至公开 HTTPS 托管', '在 Pet Lab 校验 sprite 合规性', '点击生成的 codex:// 链接', '在 Codex Pets 设置中确认安装'],
            tag: '官方 Pets · 需 HTTPS',
          },
        ].map((scenario) => (
          <div key={scenario.title} className="card p-6">
            <div className="text-3xl mb-4">{scenario.icon}</div>
            <h3 className="text-text font-semibold mb-2">{scenario.title}</h3>
            <p className="text-text-muted text-sm leading-relaxed mb-4">{scenario.desc}</p>
            <ol className="space-y-1.5 mb-4">
              {scenario.steps.map((s, i) => (
                <li key={i} className="text-text-muted text-xs flex items-start gap-2">
                  <span className="text-accent font-medium shrink-0">{i + 1}.</span> {s}
                </li>
              ))}
            </ol>
            <span className="tag text-[10px] text-accent border-accent/30">{scenario.tag}</span>
          </div>
        ))}
      </div>

      {/* Platform Differences */}
      <div className="card p-6 mb-10">
        <h2 className="text-text font-semibold text-lg mb-4">Windows 与 macOS 安装差异</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-surface-secondary rounded-lg p-5">
            <h3 className="text-text font-semibold text-sm mb-3 flex items-center gap-2">
              <span>🪟</span> Windows 平台
            </h3>
            <ul className="space-y-2 text-text-muted text-sm">
              <li>· Dream Skin 引擎在 Windows 上通过特定路径加载皮肤文件。</li>
              <li>· 需要手动将 .dreamskin 数据包解压到指定目录。</li>
              <li>· Windows 版 Codex 目前不支持直接双击 .dreamskin 文件安装。</li>
              <li>· 皮肤恢复路径：删除 Dream Skin 目录中的背景文件后重启 Codex。</li>
              <li>· codexskin.top 提供的安装指南包含 Windows 具体路径说明。</li>
            </ul>
          </div>
          <div className="bg-surface-secondary rounded-lg p-5">
            <h3 className="text-text font-semibold text-sm mb-3 flex items-center gap-2">
              <span>🍎</span> macOS 平台
            </h3>
            <ul className="space-y-2 text-text-muted text-sm">
              <li>· macOS 版 Dream Skin 引擎通过应用沙箱内的路径加载皮肤。</li>
              <li>· 皮肤文件存放在 Codex 的 Application Support 目录下。</li>
              <li>· macOS 与 Windows 的 Dream Skin 皮肤数据包格式相同。</li>
              <li>· 恢复方式：移除皮肤文件或通过 Codex 设置切换回原生主题。</li>
              <li>· 具体路径请参考 codexskin.top 安装页面的最新说明。</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recovery Guide */}
      <div className="card p-6 mb-10 border-accent-secondary/30">
        <h2 className="text-text font-semibold text-lg mb-4 flex items-center gap-2">
          <span className="text-accent-secondary text-xl">🔄</span>
          如何恢复 Codex 原生主题？
        </h2>
        <div className="text-text-muted text-sm leading-relaxed space-y-3">
          <p>
            无论你安装了哪种类型的 Codex 皮肤，<strong className="text-text">皮肤恢复</strong> 路径始终可用。
            codexskin.top 强烈建议在安装任何 <strong className="text-text">Codex 皮肤</strong> 之前先了解
            <strong className="text-text">皮肤恢复</strong> 方法——出问题时先 <strong className="text-text">皮肤恢复</strong> 再诊断。
            以下 <strong className="text-text">安装指南</strong> 包含了完整的 <strong className="text-text">皮肤恢复</strong> 操作步骤。
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-surface-secondary rounded-lg p-4">
              <h4 className="text-text font-medium text-sm mb-2">恢复官方色彩主题</h4>
              <ol className="space-y-1 text-text-muted text-xs">
                <li>1. 打开 Codex Settings → Appearance</li>
                <li>2. 选择 Light 或 Dark 预设主题</li>
                <li>3. 重置 Accent / Background / Foreground 为默认值</li>
                <li>4. 保存设置</li>
              </ol>
            </div>
            <div className="bg-surface-secondary rounded-lg p-4">
              <h4 className="text-text font-medium text-sm mb-2">恢复 Dream Skin 背景</h4>
              <ol className="space-y-1 text-text-muted text-xs">
                <li>1. 关闭 Codex App</li>
                <li>2. 进入 Dream Skin 引擎的皮肤目录</li>
                <li>3. 移除或重命名 background 文件</li>
                <li>4. 重新打开 Codex</li>
              </ol>
            </div>
            <div className="bg-surface-secondary rounded-lg p-4">
              <h4 className="text-text font-medium text-sm mb-2">恢复 Codex 宠物</h4>
              <ol className="space-y-1 text-text-muted text-xs">
                <li>1. 打开 Codex Settings → Pets</li>
                <li>2. 选择当前宠物并点击 Remove</li>
                <li>3. 确认移除</li>
              </ol>
            </div>
            <div className="bg-surface-secondary rounded-lg p-4">
              <h4 className="text-text font-medium text-sm mb-2">完全恢复（紧急）</h4>
              <ol className="space-y-1 text-text-muted text-xs">
                <li>1. 关闭 Codex App</li>
                <li>2. 移除所有第三方皮肤和宠物文件</li>
                <li>3. 重置 Codex 设置（可选）</li>
                <li>4. 重新打开 Codex 验证恢复</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Verification Checklist */}
      <div className="card p-6">
        <h2 className="text-text font-semibold text-lg mb-4">安装后验证清单</h2>
        <p className="text-text-muted text-sm mb-4 leading-relaxed">
          安装 Codex 皮肤后，建议按以下清单逐项验证皮肤效果是否正常：
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { label: 'Home 面验证', items: ['侧栏图标可见', '任务列表清晰', '皮肤背景正常', '面板透明度适中'] },
            { label: 'Task 面验证', items: ['代码区域可读', '输入框正常', '控件不遮挡', '宠物动画正常'] },
            { label: 'Diff 面验证', items: ['新增/删除清晰', '行号可见', '对比度达标', '合并按钮可用'] },
          ].map((check) => (
            <div key={check.label} className="bg-surface-secondary rounded-lg p-4">
              <h4 className="text-text font-medium text-sm mb-2">{check.label}</h4>
              <ul className="space-y-1">
                {check.items.map((item) => (
                  <li key={item} className="text-text-muted text-xs flex items-center gap-2">
                    <span className="text-accent">☐</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="mt-8 card p-6">
        <h2 className="text-text font-semibold text-lg mb-4">Codex 皮肤安装常见问题排查</h2>
        <div className="text-text-muted text-sm leading-relaxed space-y-3">
          <p>
            codexskin.top 整理了 <strong className="text-text">Codex 皮肤安装</strong> 过程中最常见的几个问题及其解决方案：
          </p>
          <div className="space-y-4">
            {[
              { q: '皮肤安装后 Home 面没有变化', a: '请检查 .dreamskin 数据包是否正确解压到了 Dream Skin 引擎指定的目录。确认 Codex 已完全关闭后重新打开。如果问题持续，尝试以管理员权限运行 Codex（Windows）或检查文件权限（macOS）。' },
              { q: 'Task 面背景图片显示不全', a: '这是常见的位置偏移问题。在 codexskin.top 工作台中重新调整水平/垂直位置参数，确保背景图在 Task 面的代码编辑区域中对齐。导出新的 .dreamskin 包覆盖旧文件后重启 Codex。' },
              { q: 'Diff 面红绿色辨识困难', a: '如果你使用的是图片皮肤，强烈的背景色可能干扰 Diff 对比。在工作台中降低背景压暗程度或提高面板透明度，让 Codex 原生的 Diff 颜色更突出。也可以切换到官方色彩主题来确保 Diff 辨识度。' },
              { q: 'Codex 更新后皮肤失效', a: 'Codex 版本更新可能改变资源加载路径。遇到这种情况，请先恢复原生主题，然后查看 codexskin.top 安装指南页面是否更新了对应新版本的安装路径。Dream Skin 引擎的 GitHub 仓库通常会同步发布适配更新。' },
            ].map((item) => (
              <details key={item.q} className="bg-surface-secondary rounded-lg p-4 group cursor-pointer">
                <summary className="text-text font-medium text-sm list-none flex items-center justify-between">
                  {item.q}
                  <svg className="w-4 h-4 text-text-muted group-open:rotate-180 transition-transform shrink-0 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </summary>
                <p className="text-text-muted text-xs mt-2 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
          <p>
            codexskin.top <strong className="text-text">安装指南</strong> 会持续更新，
            覆盖更多 <strong className="text-text">Codex 皮肤安装</strong> 场景和平台特定问题。
            本 <strong className="text-text">安装指南</strong> 是 codexskin.top 维护的核心文档之一，
            如果你遇到上述 <strong className="text-text">安装指南</strong> 中未覆盖的问题，
            欢迎联系 codexskin.top 获取帮助。
          </p>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-10 p-4 bg-accent/5 border border-accent/20 rounded-lg text-center">
        <p className="text-text-muted text-sm">
          如果在 Codex 皮肤安装过程中遇到问题，请先按上述恢复步骤还原到原生主题，然后查看
          <Link href="/safety" className="text-accent no-underline hover:underline mx-1">安全说明</Link>
          或联系
          <Link href="/custom" className="text-accent no-underline hover:underline mx-1">定制服务</Link>
          获取帮助。codexskin.top 不修改 Codex 官方二进制文件，也不提供绕过安全限制的安装方式。
        </p>
      </div>
    </div>
  );
}
