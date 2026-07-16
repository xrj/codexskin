import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Codex 皮肤工作台 | codexskin.top - 在线预览与制作 Codex 皮肤",
  description:
    "codexskin.top Codex 皮肤工作台支持本地上传图片、调节背景位置与透明度、预览 Home/Task/Diff 效果，并导出 .dreamskin 数据包。在线 Codex 皮肤制作工具，免费使用。",
};

export default function StudioPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text">
          Codex 皮肤工作台
        </h1>
        <p className="text-text-muted text-lg mt-3 max-w-3xl leading-relaxed">
          欢迎使用 codexskin.top <strong className="text-text">Codex 皮肤工作台</strong>。
          在这里你可以在浏览器中实时 <strong className="text-text">制作 Codex 皮肤</strong>，
          调节背景位置与透明度，检查文本可读性，预览 Home、Task、Diff 三面效果，
          并导出 <strong className="text-text">Codex 皮肤</strong> 数据包。
          codexskin.top <strong className="text-text">Codex 皮肤工作台</strong> 完全免费，
          无需注册登录，所有图像处理在浏览器本地完成。
        </p>
        <p className="text-text-muted text-sm mt-2 leading-relaxed">
          <strong className="text-text">Codex 皮肤制作</strong> 从未如此简单：
          选择预设皮肤或上传自己的图片作为 Codex 背景，通过直观的滑块控件调节位置、
          透明度、模糊和压暗效果，在三个预览面之间实时切换查看表现效果。
          使用 codexskin.top 的 <strong className="text-text">在线换肤工作台</strong>，
          你可以在几分钟内完成从创意到导出的完整 <strong className="text-text">Codex 皮肤</strong> 制作流程。
          导出的 .dreamskin 数据包遵循 Dream Skin 引擎规范，兼容 Windows 和 macOS 双平台。
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left: Controls */}
        <div className="lg:col-span-1 space-y-5">
          {/* Preset Selection */}
          <div className="card p-5">
            <h3 className="text-text font-semibold text-sm mb-4">预设选择</h3>
            <div className="grid grid-cols-2 gap-2">
              {['Rose Orbit', 'Clear Focus', 'Tokyo Night', 'Dracula', '国风水墨', 'Nord Wave'].map((p) => (
                <button key={p} className="text-text-muted text-xs bg-surface-secondary hover:bg-surface-secondary/80 rounded-md px-3 py-2 text-left transition-colors cursor-pointer border-none">{p}</button>
              ))}
            </div>
            <button className="btn btn-outline w-full mt-3 text-sm">
              📁 上传本地图片
            </button>
            <p className="text-text-muted text-[10px] mt-2 text-center">图片在浏览器本地处理，不上传服务器</p>
          </div>

          {/* Image Adjust */}
          <div className="card p-5">
            <h3 className="text-text font-semibold text-sm mb-4">图像编辑</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-text-muted">水平位置</span>
                  <span className="text-text">50%</span>
                </div>
                <input type="range" className="w-full accent-accent" defaultValue={50} />
              </div>
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-text-muted">垂直位置</span>
                  <span className="text-text">50%</span>
                </div>
                <input type="range" className="w-full accent-accent" defaultValue={50} />
              </div>
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-text-muted">背景压暗</span>
                  <span className="text-text">30%</span>
                </div>
                <input type="range" className="w-full accent-accent" defaultValue={30} />
              </div>
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-text-muted">背景模糊</span>
                  <span className="text-text">0px</span>
                </div>
                <input type="range" className="w-full accent-accent" defaultValue={0} max={20} />
              </div>
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-text-muted">面板透明度</span>
                  <span className="text-text">85%</span>
                </div>
                <input type="range" className="w-full accent-accent" defaultValue={85} />
              </div>
            </div>
          </div>

          {/* Color Edit */}
          <div className="card p-5">
            <h3 className="text-text font-semibold text-sm mb-4">色彩编辑</h3>
            <div className="space-y-3">
              {[
                { label: 'Accent 强调色', color: '#33D6A6' },
                { label: 'Surface 表面色', color: '#17191F' },
                { label: 'Text 文本色', color: '#F4F1EA' },
                { label: 'Muted 弱文本', color: '#A7ADB8' },
                { label: 'Border 边框色', color: '#2A2D35' },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md border border-border shrink-0" style={{ background: c.color }} />
                  <span className="text-text-muted text-xs flex-1">{c.label}</span>
                  <code className="text-text-muted text-[10px] bg-surface-secondary px-1.5 py-0.5 rounded">{c.color}</code>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Preview */}
        <div className="lg:col-span-2 space-y-5">
          {/* Preview Tabs */}
          <div className="card p-1 rounded-xl overflow-hidden">
            <div className="bg-surface-secondary rounded-t-lg p-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-danger/70" />
                <span className="w-3 h-3 rounded-full bg-accent-secondary/70" />
                <span className="w-3 h-3 rounded-full bg-accent/70" />
              </div>
              <div className="flex gap-1 ml-3">
                {['Home', 'Task', 'Diff', 'Settings'].map((tab) => (
                  <span key={tab} className={`px-3 py-1 rounded text-xs font-medium cursor-pointer ${tab === 'Home' ? 'bg-surface text-text' : 'text-text-muted hover:text-text'}`}>{tab}</span>
                ))}
              </div>
            </div>
            <div className="flex h-80">
              <div className="w-14 bg-surface border-r border-border flex flex-col items-center gap-2 py-3">
                <span className="w-7 h-7 rounded-md bg-accent/20 flex items-center justify-center text-accent text-[10px]">H</span>
                <span className="w-7 h-7 rounded-md bg-surface-secondary flex items-center justify-center text-text-muted text-[10px]">T</span>
                <span className="w-7 h-7 rounded-md bg-surface-secondary flex items-center justify-center text-text-muted text-[10px]">D</span>
                <span className="w-7 h-7 rounded-md bg-surface-secondary flex items-center justify-center text-text-muted text-[10px] mt-auto">⚙</span>
              </div>
              <div className="flex-1 p-6 relative" style={{
                background: 'linear-gradient(135deg, rgba(51,214,166,0.06) 0%, rgba(242,184,75,0.04) 50%, rgba(241,109,109,0.02) 100%)',
              }}>
                <div className="text-text text-sm font-semibold mb-4">Codex 皮肤预览 — Home 面</div>
                <div className="space-y-3">
                  <div className="bg-surface/70 backdrop-blur-sm rounded-md p-3 text-text-muted text-xs border border-border/50">
                    📋 最近任务: 实现用户认证模块
                  </div>
                  <div className="bg-surface/70 backdrop-blur-sm rounded-md p-3 text-text-muted text-xs border border-border/50">
                    🔍 Diff Review: main ← feature/auth (8 files)
                  </div>
                  <div className="bg-surface/70 backdrop-blur-sm rounded-md p-3 text-text-muted text-xs border border-border/50">
                    🐱 Pet Status: Pixel Cat · Running
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-accent/20 text-accent border border-accent/30">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  皮肤增强模式
                </div>
              </div>
            </div>
          </div>

          {/* Readability Check */}
          <div className="card p-5">
            <h3 className="text-text font-semibold text-sm mb-4">可读性检查</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: '文本对比度', value: '12.4:1', status: 'pass', desc: 'AAA 级通过' },
                { label: '按钮对比度', value: '8.2:1', status: 'pass', desc: 'AA 级通过' },
                { label: 'Diff 红绿辨识', value: '通过', status: 'pass', desc: '红绿色盲友好' },
                { label: '暗色/亮色', value: '暗色', status: 'info', desc: '当前模式' },
              ].map((check) => (
                <div key={check.label} className="bg-surface-secondary rounded-md p-3">
                  <div className="text-text-muted text-[10px] mb-1">{check.label}</div>
                  <div className="text-text font-bold text-lg">{check.value}</div>
                  <span className={`tag mt-1.5 text-[10px] ${check.status === 'pass' ? 'text-accent border-accent/30' : 'text-accent-secondary border-accent-secondary/30'}`}>
                    {check.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Export */}
          <div className="card p-5">
            <h3 className="text-text font-semibold text-sm mb-4">导出选项</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              <button className="btn btn-primary text-sm">
                📋 复制官方主题字符串
              </button>
              <button className="btn btn-outline text-sm">
                📦 导出 .dreamskin 数据包
              </button>
              <button className="btn btn-outline text-sm">
                🖼️ 导出预览图
              </button>
            </div>
            <div className="mt-4 p-3 bg-accent/5 border border-accent/20 rounded-md">
              <p className="text-text-muted text-xs flex items-start gap-2">
                <span className="text-accent shrink-0">🛡️</span>
                安全提示：codexskin.top 工作台导出的 Codex 皮肤数据是纯数据文件，不含脚本、命令或可执行代码。
                导出物不是安装器，只是数据。安装时请使用 Dream Skin 引擎。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: How it works */}
      <div className="mt-12 card p-6">
        <h2 className="text-text font-semibold text-lg mb-4">如何使用 codexskin.top 工作台制作 Codex 皮肤</h2>
        <div className="text-text-muted text-sm leading-relaxed space-y-3">
          <p>
            codexskin.top <strong className="text-text">Codex 皮肤工作台</strong> 是
            一个纯浏览器端的 <strong className="text-text">Codex 皮肤制作</strong> 工具。
            不同于需要安装软件的传统编辑器，codexskin.top 的 <strong className="text-text">在线换肤工作台</strong>
            让你直接在浏览器中完成 <strong className="text-text">Codex 皮肤预览</strong> 和调参全过程。
          </p>
          <p>
            使用 codexskin.top <strong className="text-text">皮肤制作</strong> 工作台的步骤很简单：
            首先选择一个预设皮肤或上传你自己的图片作为 Codex 背景（图片在本地处理，不上传任何服务器）；
            然后通过滑块调节水平/垂直位置、背景压暗程度、模糊效果和面板透明度；
            在 Home、Task、Diff 三个预览面之间切换，确认皮肤在每个界面的表现效果；
            使用色彩编辑器微调 Accent、Surface、Text、Border 等颜色变量；
            检查文本对比度和按钮对比度，确保通过 AA/AAA 级可读性标准；
            最后导出 .dreamskin 数据包或复制官方 Codex 主题字符串，按照安装指南完成部署。
          </p>
          <p>
            codexskin.top <strong className="text-text">Codex 皮肤工作台</strong> 完全免费，
            不限制 <strong className="text-text">皮肤制作</strong> 次数。每次 <strong className="text-text">皮肤制作</strong>
            都是独立的创作过程，你可以在工作台中实验不同风格。
            你制作的每一套 <strong className="text-text">Codex 皮肤</strong> 都只保存在本地浏览器，
            我们不会收集或存储你的皮肤数据。如果你希望分享自己的 Codex 皮肤作品，
            欢迎通过定制服务页面联系我们提交投稿。
          </p>
          <p className="flex items-center gap-2">
            <Link href="/install" className="text-accent text-sm no-underline hover:underline">查看安装指南 →</Link>
            <span className="text-text-muted text-xs">·</span>
            <Link href="/safety" className="text-accent text-sm no-underline hover:underline">了解安全说明 →</Link>
          </p>
        </div>
      </div>

      {/* Advanced Tips */}
      <div className="mt-8 card p-6">
        <h2 className="text-text font-semibold text-lg mb-4">Codex 皮肤工作台高级技巧</h2>
        <div className="text-text-muted text-sm leading-relaxed space-y-3">
          <p>
            codexskin.top <strong className="text-text">Codex 皮肤制作</strong> 工作台不仅支持基础调参，
            还有一些进阶技巧能帮你做出更专业的 <strong className="text-text">Codex 皮肤</strong>：
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-surface-secondary rounded-lg p-4">
              <h4 className="text-text font-medium text-sm mb-2">背景图片选择</h4>
              <p className="text-text-muted text-xs leading-relaxed">
                选择暗色调、低饱和度的图片作为 Codex 皮肤背景效果最佳。
                高亮度或高饱和度的图片会干扰代码阅读，降低工作效率。
                建议使用 1920x1080 以上的分辨率，确保在 Retina 屏幕上不模糊。
                适用图片类型：星空、抽象纹理、暗色风景、柔和渐变。
              </p>
            </div>
            <div className="bg-surface-secondary rounded-lg p-4">
              <h4 className="text-text font-medium text-sm mb-2">面板透明度平衡</h4>
              <p className="text-text-muted text-xs leading-relaxed">
                面板透明度是 Codex 皮肤制作的关键参数：过高会导致背景图干扰文本阅读，
                过低则失去背景增强的意义。推荐透明度范围 80-92%，配合适度的背景压暗（20-40%）
                和轻微模糊（2-6px），可以在展示背景的同时保持良好的代码可读性。
              </p>
            </div>
            <div className="bg-surface-secondary rounded-lg p-4">
              <h4 className="text-text font-medium text-sm mb-2">色彩搭配原则</h4>
              <p className="text-text-muted text-xs leading-relaxed">
                Accent 强调色应与背景图主色调协调而非冲突。例如暖色背景图搭配暖色强调色。
                Surface 表面色建议保持暗色中性色调，Text 文本色应与背景保持高对比度（≥7:1）。
                Border 边框色宜弱不宜强，避免边框线条在深色背景上过于突兀。
              </p>
            </div>
            <div className="bg-surface-secondary rounded-lg p-4">
              <h4 className="text-text font-medium text-sm mb-2">多面预览检查</h4>
              <p className="text-text-muted text-xs leading-relaxed">
                务必在 Home、Task、Diff 三个面之间切换预览你的 Codex 皮肤。
                Home 面关注侧栏和任务列表；Task 面关注代码编辑区域和输入框；
                Diff 面关注新增/删除行的颜色辨识度。一个优秀的 Codex 皮肤应该在三面都表现良好。
              </p>
            </div>
          </div>
          <p>
            这些高级技巧能帮助你在 codexskin.top 工作台中制作出既美观又实用的
            <strong className="text-text">Codex 皮肤</strong>。
            制作 <strong className="text-text">Codex 皮肤</strong> 不仅是为了好看，
            更是为了创造舒适的编程环境——让每一次打开 Codex 都是一次视觉享受。
          </p>
        </div>
      </div>
    </div>
  );
}
