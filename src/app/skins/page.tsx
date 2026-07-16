import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Codex 皮肤库 | codexskin.top - 精选 Codex 皮肤下载与预览",
  description:
    "codexskin.top Codex 皮肤库提供可商用、开源及个人使用的 Codex 皮肤下载。按动漫、极简、暗黑、国风等风格筛选 Codex 皮肤资源，每套皮肤标注授权状态与平台支持。",
};

const allSkins = [
  { name: 'Rose Orbit', tag: '动漫', license: '可商用', type: '图片皮肤', platform: 'Dream Skin', source: '站内原创', platforms: ['Native', 'macOS', 'Windows'], supports: ['Home', 'Task', 'Diff'], color: 'from-rose-500/30 to-pink-600/30' },
  { name: 'Prosperity Protocol', tag: '商务', license: '可商用', type: '图片皮肤', platform: 'Dream Skin', source: '站内原创', platforms: ['Native', 'macOS', 'Windows'], supports: ['Home', 'Task', 'Diff'], color: 'from-emerald-600/30 to-teal-700/30' },
  { name: 'Red Horizon', tag: '暗黑', license: '可商用', type: '图片皮肤', platform: 'Dream Skin', source: 'AI 生成', platforms: ['macOS', 'Windows'], supports: ['Home', 'Task', 'Diff'], color: 'from-red-600/30 to-orange-700/30' },
  { name: 'Clear Focus', tag: '极简', license: '可商用', type: '图片皮肤', platform: 'Dream Skin', source: '站内原创', platforms: ['Native', 'macOS', 'Windows'], supports: ['Home', 'Task', 'Diff'], color: 'from-slate-400/30 to-zinc-500/30' },
  { name: 'Spark Mode', tag: '游戏风', license: '可商用', type: '图片皮肤', platform: 'Dream Skin', source: 'AI 生成', platforms: ['macOS', 'Windows'], supports: ['Home', 'Task'], color: 'from-yellow-400/30 to-amber-500/30' },
  { name: 'Violet Signal', tag: '游戏风', license: '可商用', type: '图片皮肤', platform: 'Dream Skin', source: '站内原创', platforms: ['Native', 'macOS', 'Windows'], supports: ['Home', 'Task', 'Diff'], color: 'from-purple-500/30 to-violet-600/30' },
  { name: 'Digital Pop', tag: '女生向', license: '仅个人', type: '图片皮肤', platform: 'Dream Skin', source: '灵感参考', platforms: ['macOS', 'Windows'], supports: ['Home', 'Task'], color: 'from-fuchsia-400/30 to-pink-500/30' },
  { name: 'Stage Gold', tag: '明星', license: '仅个人', type: '图片皮肤', platform: 'Dream Skin', source: '灵感参考', platforms: ['macOS', 'Windows'], supports: ['Home', 'Diff'], color: 'from-amber-300/30 to-yellow-400/30' },
  { name: 'Tokyo Night', tag: '经典编辑器', license: '开源', type: '官方色彩主题', platform: '官方色彩', source: 'GitHub 开源', platforms: ['Native'], supports: ['Home', 'Task', 'Diff'], color: 'from-blue-700/30 to-indigo-800/30' },
  { name: 'Catppuccin', tag: '经典编辑器', license: '开源', type: '官方色彩主题', platform: '官方色彩', source: 'GitHub 开源', platforms: ['Native'], supports: ['Home', 'Task', 'Diff'], color: 'from-pink-400/30 to-rose-500/30' },
  { name: 'Dracula', tag: '暗黑', license: '开源', type: '官方色彩主题', platform: '官方色彩', source: 'GitHub 开源', platforms: ['Native'], supports: ['Home', 'Task', 'Diff'], color: 'from-purple-600/30 to-pink-700/30' },
  { name: 'Nord', tag: '极简', license: '开源', type: '官方色彩主题', platform: '官方色彩', source: 'GitHub 开源', platforms: ['Native'], supports: ['Home', 'Task', 'Diff'], color: 'from-cyan-500/30 to-blue-600/30' },
  { name: '国风水墨', tag: '国风', license: '仅个人', type: '图片皮肤', platform: 'Dream Skin', source: 'AI 生成', platforms: ['macOS', 'Windows'], supports: ['Home', 'Task', 'Diff'], color: 'from-stone-400/30 to-gray-500/30' },
  { name: 'Cyber Fortune', tag: '节日', license: '仅个人', type: '图片皮肤', platform: 'Dream Skin', source: 'AI 生成', platforms: ['macOS', 'Windows'], supports: ['Home', 'Task', 'Diff'], color: 'from-amber-400/30 to-red-500/30' },
  { name: '初音未来风', tag: '动漫', license: '仅个人', type: '图片皮肤', platform: 'Dream Skin', source: '灵感参考', platforms: ['macOS', 'Windows'], supports: ['Home', 'Task'], color: 'from-cyan-300/30 to-blue-400/30' },
  { name: 'Pixel Dragon', tag: '游戏风', license: '仅个人', type: '宠物组合包', platform: 'Dream Skin', source: 'AI 生成', platforms: ['macOS', 'Windows'], supports: ['Home', 'Task'], color: 'from-green-500/30 to-emerald-600/30' },
];

const styleTags = ['全部', '动漫', '国风', '极简', '暗黑', '游戏风', '女生向', '明星', '商务', '节日', '经典编辑器'];
const licenseFilters = ['全部', '可商用', '开源', '仅个人'];
const typeFilters = ['全部', '图片皮肤', '官方色彩主题', '宠物组合包'];

export default function SkinsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text">
          Codex 皮肤库
        </h1>
        <p className="text-text-muted text-lg mt-3 max-w-3xl leading-relaxed">
          浏览 codexskin.top 精选的 <strong className="text-text">Codex 皮肤</strong>资源。
          每套 <strong className="text-text">Codex 皮肤</strong>都标注了风格标签、授权状态、平台支持和安装路径。
          在 codexskin.top <strong className="text-text">Codex 皮肤库</strong>中，
          你可以按风格、明暗、平台和授权状态筛选最适合你的 <strong className="text-text">Codex 主题</strong>。
        </p>
        <p className="text-text-muted text-sm mt-2 leading-relaxed">
          codexskin.top 的 <strong className="text-text">Codex 皮肤下载</strong> 分为三大类：
          图片皮肤通过 Dream Skin 引擎加载背景图；官方色彩主题直接复制 Codex 主题配色方案；
          宠物组合包则为 Codex 添加动画陪伴。每套 <strong className="text-text">皮肤资源</strong> 均有来源标注和授权说明，
          请在使用 <strong className="text-text">Codex 皮肤</strong> 前确认授权状态。
        </p>
      </div>

      {/* Filters */}
      <div className="card p-5 mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-text-muted text-xs font-medium w-16 shrink-0">风格</span>
          <div className="flex flex-wrap gap-2">
            {styleTags.map((tag) => (
              <button key={tag} className={`tag cursor-pointer text-[11px] border-border hover:border-text-muted transition-colors ${tag === '全部' ? 'bg-accent/15 text-accent border-accent/30' : ''}`}>{tag}</button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-text-muted text-xs font-medium w-16 shrink-0">授权</span>
          <div className="flex flex-wrap gap-2">
            {licenseFilters.map((l) => (
              <button key={l} className={`tag cursor-pointer text-[11px] border-border hover:border-text-muted transition-colors ${l === '全部' ? 'bg-accent/15 text-accent border-accent/30' : ''}`}>{l}</button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-text-muted text-xs font-medium w-16 shrink-0">类型</span>
          <div className="flex flex-wrap gap-2">
            {typeFilters.map((t) => (
              <button key={t} className={`tag cursor-pointer text-[11px] border-border hover:border-text-muted transition-colors ${t === '全部' ? 'bg-accent/15 text-accent border-accent/30' : ''}`}>{t}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-text-muted text-sm">
          共 <span className="text-text font-semibold">{allSkins.length}</span> 套 Codex 皮肤
        </p>
        <select className="bg-surface border border-border rounded-md px-3 py-1.5 text-text-muted text-xs cursor-pointer">
          <option>默认排序</option>
          <option>最新发布</option>
          <option>最多下载</option>
          <option>可商用优先</option>
        </select>
      </div>

      {/* Skin Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {allSkins.map((skin) => (
          <Link key={skin.name} href="/studio" className="card overflow-hidden no-underline group">
            <div className={`h-40 bg-gradient-to-br ${skin.color} flex items-center justify-center relative`}>
              <span className="text-5xl opacity-50">🎨</span>
              <span className="absolute top-2 right-2 tag bg-bg/70 text-text text-[10px] backdrop-blur-sm">{skin.platform}</span>
              {skin.type === '宠物组合包' && (
                <span className="absolute top-2 left-2 tag bg-accent-secondary/20 text-accent-secondary text-[10px] border-accent-secondary/30">🐱 含宠物</span>
              )}
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-text font-semibold group-hover:text-accent transition-colors">{skin.name}</h3>
                <span className={`tag text-[10px] ${
                  skin.license === '可商用' ? 'text-accent border-accent/30' :
                  skin.license === '开源' ? 'text-accent-secondary border-accent-secondary/30' : 'text-text-muted'
                }`}>{skin.license}</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className="tag text-[10px]">{skin.tag}</span>
                <span className="tag text-[10px]">{skin.type}</span>
                <span className="tag text-[10px]">{skin.source}</span>
              </div>
              <div className="flex items-center gap-1.5">
                {skin.platforms.map((p) => (
                  <span key={p} className="text-text-muted text-[10px] bg-surface-secondary px-1.5 py-0.5 rounded">{p}</span>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-2 pt-2 border-t border-border">
                <span className="text-text-muted text-[10px]">支持面:</span>
                {skin.supports.map((s) => (
                  <span key={s} className="text-accent text-[10px]">{s}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom Info */}
      <div className="mt-16 card p-6">
        <h2 className="text-text font-semibold text-lg mb-3">关于 codexskin.top Codex 皮肤库</h2>
        <div className="text-text-muted text-sm leading-relaxed space-y-3">
          <p>
            codexskin.top <strong className="text-text">Codex 皮肤库</strong> 是一个持续更新的
            <strong className="text-text">Codex 皮肤</strong> 资源集合。我们整理来自站内原创、
            AI 生成、GitHub 开源和社区投稿的各类 <strong className="text-text">Codex 主题</strong>素材，
            每套 <strong className="text-text">Codex 皮肤</strong> 都经过人工审核，确认授权状态后方可上架。
            codexskin.top <strong className="text-text">Codex 皮肤下载</strong> 服务完全免费，
            你无需注册即可浏览、预览和下载所有公开的 <strong className="text-text">皮肤资源</strong>。
            我们持续更新 <strong className="text-text">皮肤下载</strong> 内容，确保你能获取最新、
            最高质量的 <strong className="text-text">Codex 皮肤</strong>。<strong className="text-text">皮肤下载</strong> 前请确认皮肤的授权状态。
          </p>
          <p>
            在使用 codexskin.top 的 <strong className="text-text">皮肤下载</strong> 前，请务必查看每套皮肤的授权状态。
            「可商用」标签的皮肤可用于商业项目；「开源」标签的皮肤遵循其开源协议；
            「仅个人使用」标签的皮肤仅供个人体验，不可用于商业用途。
            对于标注「灵感参考」的皮肤，codexskin.top 仅提供风格参考，不提供图片下载。
            我们特别提醒：明星、动漫、游戏角色和品牌相关的图片素材通常受版权保护，
            不能作为可商用的 <strong className="text-text">Codex 皮肤</strong> 素材。
          </p>
          <p>
            codexskin.top <strong className="text-text">Codex 皮肤资源</strong> 支持三种安装路径：
            Native 平台可直接在 Codex 设置中应用官方色彩主题；
            macOS 和 Windows 平台可通过 Dream Skin 引擎加载图片皮肤。
            具体安装步骤请查看 <Link href="/install" className="text-accent no-underline hover:underline">安装指南</Link>。
            如有优秀的 <strong className="text-text">Codex 皮肤</strong> 作品想要投稿，
            欢迎通过定制服务页面联系我们。
          </p>
        </div>
      </div>

      {/* Skin Categories Guide */}
      <div className="mt-8 card p-6">
        <h2 className="text-text font-semibold text-lg mb-4">Codex 皮肤风格分类指南</h2>
        <div className="text-text-muted text-sm leading-relaxed space-y-3">
          <p>
            codexskin.top 的 <strong className="text-text">Codex 皮肤库</strong> 按风格分类，
            方便你快速找到适合自己的 <strong className="text-text">Codex 主题</strong>：
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { tag: '动漫风', desc: '以二次元角色、动漫场景为灵感的 Codex 皮肤，深受 ACG 爱好者喜爱。多为仅个人使用授权。' },
              { tag: '国风', desc: '以水墨、书法、传统纹样为元素的 Codex 皮肤，展现东方美学。包含节庆主题如春节红金配色。' },
              { tag: '极简', desc: '低噪简洁的 Codex 皮肤设计，以纯色渐变和微妙纹理为主。适合专注编码的工作场景。' },
              { tag: '暗黑', desc: '深色背景配合高对比元素的 Codex 皮肤。减少眼部疲劳，是程序员中使用最广的风格。' },
              { tag: '游戏风', desc: '以游戏界面、像素艺术为灵感的 Codex 皮肤。包含赛博朋克、像素风等电子游戏美学。' },
              { tag: '经典编辑器', desc: '来自 VS Code、JetBrains 等经典代码编辑器的配色移植。如 Tokyo Night、Dracula、Nord 等开源主题。' },
              { tag: '商务', desc: '专业稳重的 Codex 皮肤设计，适合企业环境和客户演示场景。色彩克制、结构清晰。' },
              { tag: '节日', desc: '限定节日主题的 Codex 皮肤，如圣诞冷杉、万圣暗橙、春节红金等季节性主题。' },
            ].map((cat) => (
              <div key={cat.tag} className="bg-surface-secondary rounded-lg p-3">
                <span className="tag text-[10px] text-accent border-accent/30 mb-1.5">{cat.tag}</span>
                <p className="text-text-muted text-xs leading-relaxed mt-1.5">{cat.desc}</p>
              </div>
            ))}
          </div>
          <p>
            无论你是追求视觉个性的二次元爱好者，还是需要长时间专注编码的专业开发者，
            codexskin.top 的 <strong className="text-text">Codex 皮肤库</strong> 都有适合你的风格。
            我们还持续更新 <strong className="text-text">皮肤资源</strong>，
            关注 codexskin.top 获取最新的 <strong className="text-text">Codex 皮肤</strong> 上架信息。
          </p>
        </div>
      </div>
    </div>
  );
}
