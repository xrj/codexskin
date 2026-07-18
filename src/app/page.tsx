import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-accent bg-accent/10 border border-accent/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent" />
                中文 Codex 换肤社区
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-text">
                给 <span style={{ color: 'var(--accent)' }}>Codex 换肤</span>
                <br />
                让代码编辑器更有归属感
              </h1>
              <p className="text-text-muted text-lg mt-6 leading-relaxed">
                codexskin.top 是中文用户的一站式 <strong className="text-text">Codex 换肤</strong> 资源站。
                浏览精选 <strong className="text-text">Codex 皮肤</strong>，用在线工作台制作专属
                <strong className="text-text">Codex 主题</strong>，安装 Dream Skin 背景增强，
                或添加 <strong className="text-text">Codex 宠物</strong> 陪伴编程。
                给 Codex 换一张脸，但别把信任交给一张图。
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/studio" className="btn btn-primary">
                  打开皮肤工作台
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <Link href="/skins" className="btn btn-secondary">
                  浏览 Codex 皮肤库
                </Link>
                <Link href="/install" className="btn btn-secondary">
                  安装与恢复指南
                </Link>
              </div>
              <p className="text-text-muted text-xs mt-4">
                全站域名 codexskin.top · 皮肤免费浏览 · 本地处理不上传图片
              </p>
            </div>

            {/* Right: Codex Preview Mockup */}
            <div className="hidden lg:block relative">
              <div className="card p-1 rounded-xl overflow-hidden shadow-2xl">
                <div className="bg-surface-secondary rounded-lg p-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-danger/70" />
                    <span className="w-3 h-3 rounded-full bg-accent-secondary/70" />
                    <span className="w-3 h-3 rounded-full bg-accent/70" />
                  </div>
                  <span className="text-text-muted text-xs ml-2">Codex — Home</span>
                </div>
                <div className="flex h-64">
                  <div className="w-16 bg-surface border-r border-border flex flex-col items-center gap-3 py-3">
                    <span className="w-8 h-8 rounded-md bg-accent/20 flex items-center justify-center text-accent text-xs">H</span>
                    <span className="w-8 h-8 rounded-md bg-surface-secondary flex items-center justify-center text-text-muted text-xs">T</span>
                    <span className="w-8 h-8 rounded-md bg-surface-secondary flex items-center justify-center text-text-muted text-xs">D</span>
                  </div>
                  <div className="flex-1 p-4 relative" style={{
                    background: 'linear-gradient(135deg, rgba(51,214,166,0.08) 0%, rgba(242,184,75,0.05) 50%, rgba(241,109,109,0.03) 100%)',
                  }}>
                    <div className="text-text text-sm font-semibold mb-3">Welcome back</div>
                    <div className="space-y-2">
                      <div className="bg-surface/80 rounded-md p-2.5 text-text-muted text-xs">最近任务: 重构认证模块</div>
                      <div className="bg-surface/80 rounded-md p-2.5 text-text-muted text-xs">Diff Review: 12 files changed</div>
                      <div className="bg-surface/80 rounded-md p-2.5 text-text-muted text-xs">Pet: 🐱 正在运行</div>
                    </div>
                    <div className="absolute bottom-3 right-3 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-accent/20 text-accent border border-accent/30 backdrop-blur-sm">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      皮肤已加载: Dream Skin
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 card p-3 flex items-center gap-3 shadow-xl bg-surface/95 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-md bg-gradient-to-br from-accent/30 to-accent-secondary/30 flex items-center justify-center text-lg">🎨</div>
                <div>
                  <div className="text-text text-xs font-semibold">Rose Orbit</div>
                  <div className="text-text-muted text-xs">Dream Skin · 热门</div>
                </div>
                <span className="tag text-accent border-accent/30">可商用</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Entry */}
      <section className="py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '🖼️', title: '换背景图', desc: '浏览 Dream Skin 皮肤库，上传图片预览效果', href: '/skins' },
              { icon: '🎨', title: '复制官方主题', desc: '一键复制官方 Codex 主题配色方案', href: '/studio' },
              { icon: '🐱', title: '安装 Codex 宠物', desc: '为你的 Codex 添加编程陪伴动画宠物', href: '/pets' },
              { icon: '💎', title: 'Codex 皮肤定制', desc: '专业设计师为你定制专属 Codex 皮肤', href: '/custom' },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="card p-5 no-underline group">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-text font-semibold text-sm group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-text-muted text-xs mt-1.5 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Skins */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="section-title">精选 Codex 皮肤</h2>
              <p className="section-subtitle">12 套精选 Codex 主题，覆盖动漫、极简、暗黑、国风等多种风格</p>
            </div>
            <Link href="/skins" className="text-accent text-sm font-medium no-underline hover:underline hidden sm:block">
              查看全部 Codex 皮肤 →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: 'Rose Orbit', tag: '动漫', license: '可商用', platform: 'Dream Skin', color: 'from-rose-500/30 to-pink-600/30' },
              { name: 'Clear Focus', tag: '极简', license: '可商用', platform: 'Dream Skin', color: 'from-slate-400/30 to-zinc-500/30' },
              { name: 'Red Horizon', tag: '暗黑', license: '可商用', platform: 'Dream Skin', color: 'from-red-600/30 to-orange-700/30' },
              { name: 'Violet Signal', tag: '游戏风', license: '可商用', platform: 'Dream Skin', color: 'from-purple-500/30 to-violet-600/30' },
              { name: 'Tokyo Night', tag: '经典编辑器', license: '开源', platform: '官方色彩', color: 'from-blue-700/30 to-indigo-800/30' },
              { name: '国风水墨', tag: '国风', license: '仅个人', platform: 'Dream Skin', color: 'from-stone-400/30 to-gray-500/30' },
              { name: 'Cyber Fortune', tag: '节日', license: '仅个人', platform: 'Dream Skin', color: 'from-amber-400/30 to-yellow-500/30' },
              { name: 'Nord Wave', tag: '经典编辑器', license: '开源', platform: '官方色彩', color: 'from-cyan-500/30 to-blue-600/30' },
            ].map((skin) => (
              <Link key={skin.name} href="/studio" className="card overflow-hidden no-underline group">
                <div className={`h-32 bg-gradient-to-br ${skin.color} flex items-center justify-center relative`}>
                  <span className="text-4xl opacity-60">🎨</span>
                  <span className="absolute top-2 right-2 tag bg-bg/70 text-text text-[10px] backdrop-blur-sm">{skin.platform}</span>
                </div>
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-text font-semibold text-sm group-hover:text-accent transition-colors">{skin.name}</h3>
                    <span className={`tag text-[10px] ${skin.license === '可商用' ? 'text-accent border-accent/30' : skin.license === '开源' ? 'text-accent-secondary border-accent-secondary/30' : 'text-text-muted'}`}>{skin.license}</span>
                  </div>
                  <span className="tag mt-2 text-[10px]">{skin.tag}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Three Layers */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Codex 换肤三层能力</h2>
            <p className="section-subtitle max-w-2xl mx-auto">从官方色彩到背景增强，再到宠物陪伴，codexskin.top 覆盖 Codex 换肤的全部能力层级</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center text-accent font-bold text-sm mb-4">1</div>
              <h3 className="text-text font-semibold mb-2">官方 Appearance</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Codex 官方内置的 Codex 主题定制能力：调整基础深色/浅色模式、强调色、前景色、背景色、
                UI 字体和代码字体。这是最安全的第一层 Codex 换肤方式，无需安装任何第三方引擎。
              </p>
              <span className="tag mt-3 text-[10px] text-accent border-accent/30">零风险</span>
            </div>
            <div className="card p-6 border-accent/30">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent font-bold text-sm mb-4">2</div>
              <h3 className="text-text font-semibold mb-2">Dream Skin 背景增强</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                通过社区 Dream Skin 引擎，为 Codex 添加自定义背景图片。在 codexskin.top 工作台中
                上传本地图片、调节位置与透明度、预览 Home/Task/Diff 三面效果，导出 .dreamskin 数据包。
              </p>
              <span className="tag mt-3 text-[10px] text-accent-secondary border-accent-secondary/30">社区引擎</span>
            </div>
            <div className="card p-6">
              <div className="w-10 h-10 rounded-lg bg-accent-secondary/15 flex items-center justify-center text-accent-secondary font-bold text-sm mb-4">3</div>
              <h3 className="text-text font-semibold mb-2">Pets 状态陪伴</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Codex 官方 Pets 功能允许添加动画宠物陪伴编程过程。在 codexskin.top 宠物库中浏览、
                校验 sprite 资源、生成 codex:// 安装链接。Codex 宠物改变外观，不改变代码行为。
              </p>
              <span className="tag mt-3 text-[10px] text-accent-secondary border-accent-secondary/30">官方能力</span>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Boundary */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Codex 换肤安全边界</h2>
            <p className="section-subtitle max-w-2xl mx-auto">codexskin.top 的 Codex 皮肤遵循三条安全原则</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: '🔒', title: '不上传图片', desc: '所有 Codex 皮肤预览和编辑在浏览器本地完成，不向任何服务器上传你的图片文件。' },
              { icon: '🔑', title: '不读取配置', desc: 'Codex 换肤工作台不读取你的 API Key、对话记录、项目文件或 Provider 设置。' },
              { icon: '⚡', title: '不执行脚本', desc: 'codexskin.top 导出的 Codex 皮肤包仅含图片和色彩数据，不含任何可执行代码。' },
            ].map((item) => (
              <div key={item.title} className="card p-6 text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-text font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-text-muted text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/safety" className="text-accent text-sm no-underline hover:underline">
              详细了解 Codex 皮肤安全说明 →
            </Link>
          </div>
        </div>
      </section>

      {/* Paid Custom Teaser */}
      <section className="py-20 border-t border-border bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Codex 皮肤定制服务</h2>
            <p className="section-subtitle max-w-2xl mx-auto">从免费浏览到高级定制，三种 Codex 换肤方案满足不同需求</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: '免费社区版', price: '¥0', features: ['浏览 Codex 皮肤库', '在线工作台制作皮肤', '导出 .dreamskin 配方', 'Pet Lab 宠物校验'] },
              { name: '个人定制', price: '¥199', hilight: true, features: ['一张授权图做 2 套配色', 'Home/Task/Diff 预览', '一次免费修改', '安装远程协助'] },
              { name: '团队定制', price: '¥999', features: ['品牌资产统一主题', '宠物定制组合', '部署与回滚文档', '授权确认与售后'] },
            ].map((plan) => (
              <div key={plan.name} className={`card p-6 relative ${plan.hilight ? 'border-accent/40 shadow-lg shadow-accent/5' : ''}`}>
                {plan.hilight && <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 tag bg-accent text-bg border-none text-[10px] font-bold">推荐</span>}
                <h3 className="text-text font-semibold">{plan.name}</h3>
                <div className="mt-3 mb-5">
                  <span className="text-3xl font-bold text-text">{plan.price}</span>
                  {plan.price !== '¥0' && <span className="text-text-muted text-sm"> / 次</span>}
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="text-text-muted text-sm flex items-start gap-2">
                      <span className="text-accent mt-0.5 shrink-0">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/custom" className={`btn w-full text-sm ${plan.hilight ? 'btn-primary' : 'btn-secondary'}`}>
                  {plan.price === '¥0' ? '开始使用' : '了解详情'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Codex Skinning */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">为什么选择 codexskin.top 进行 Codex 换肤？</h2>
            <p className="section-subtitle max-w-2xl mx-auto">相比其他 Codex 皮肤站点，codexskin.top 有哪些独特优势</p>
          </div>
          <div className="max-w-4xl mx-auto text-text-muted text-sm leading-relaxed space-y-4">
            <p>
              codexskin.top 是专为中文用户打造的 <strong className="text-text">Codex 换肤</strong> 一站式平台。
              与海外 Codex 皮肤站相比，codexskin.top 提供完整的 <strong className="text-text">Codex 皮肤</strong> 中文教程、
              本土化风格标签（国风、动漫、游戏风、节日主题等）、以及针对中国开发者的 <strong className="text-text">Codex 主题</strong> 运营策略。
              我们不只是一个皮肤展示页——codexskin.top 是一个集合了皮肤浏览、在线制作、安装指导和定制服务的完整
              <strong className="text-text">Codex 换肤</strong> 工作流。
            </p>
            <p>
              codexskin.top 的 <strong className="text-text">Codex 皮肤</strong> 坚持透明授权原则：
              每一套 <strong className="text-text">Codex 主题</strong> 都明确标注来源（站内原创、AI 生成、GitHub 开源、用户投稿、灵感参考）
              和授权状态（可商用、仅个人使用、需确认授权）。我们反对将灵感参考图包装成可商用素材的做法，
              也拒绝在 <strong className="text-text">Codex 皮肤</strong> 包中夹带脚本、命令或扩展程序。
            </p>
            <p>
              在技术层面，codexskin.top 的 <strong className="text-text">Codex 换肤</strong> 工作台完全在浏览器本地运行：
              你上传的图片不会离开你的设备，皮肤预览和色彩调整实时完成，
              导出的 <strong className="text-text">Codex 皮肤</strong> 数据包是纯 JSON 配置和图片文件。
              我们同时提供 Dream Skin 引擎的详细安装文档，覆盖 Windows 与 macOS 双平台，
              并包含完整的皮肤恢复方案——如果 <strong className="text-text">Codex 皮肤</strong> 出现问题，
              你可以随时在 codexskin.top 找到恢复原生主题的步骤指南。
            </p>
            <p>
              codexskin.top 还提供专业的 <strong className="text-text">Codex 皮肤</strong> 定制服务。
              无论你是个人开发者想要一套独特的 <strong className="text-text">Codex 主题</strong>，
              还是企业团队需要统一的品牌 <strong className="text-text">Codex 皮肤</strong>，
              我们的设计师都能在授权合规的前提下，为你交付高质量的定制成果。
              从皮肤设计到安装部署，codexskin.top 全程陪伴你的 Codex 换肤之旅。
            </p>
          </div>
        </div>
      </section>

      {/* 指南入口 */}
      <section className="py-20 border-t border-border bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Codex 换肤指南入口</h2>
            <p className="section-subtitle max-w-2xl mx-auto">从概念、安装到 Dream Skin 背景增强，按你当前的问题直接进入对应指南</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                href: '/codex-skins-guide',
                title: 'Codex 皮肤完整指南',
                desc: '第一次了解 Codex 皮肤、主题、背景和宠物时，从这篇开始。',
              },
              {
                href: '/codex-theme-installation',
                title: 'Codex 主题安装教程',
                desc: '按官方 Appearance、Dream Skin 和 Codex Pets 三条路径完成安装。',
              },
              {
                href: '/codex-dream-skin',
                title: 'Dream Skin 背景增强说明',
                desc: '理解 Dream Skin 能做什么、不能做什么，以及如何安全恢复。',
              },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="card p-6 no-underline group">
                <h3 className="text-text font-semibold group-hover:text-accent transition-colors">{guide.title}</h3>
                <p className="text-text-muted text-sm mt-2 leading-relaxed">{guide.desc}</p>
                <span className="text-accent text-sm mt-4 inline-flex">阅读全文 →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">常见问题</h2>
            <p className="section-subtitle">关于 Codex 换肤和 Dream Skin 的常见疑问</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'Codex 皮肤安装后会影响代码执行吗？', a: '不会。codexskin.top 上的 Codex 皮肤包仅包含图片和色彩配置数据，不包含任何脚本、命令或可执行文件。皮肤只改变 Codex 的外观显示，不影响任何代码编辑、运行或调试功能。Codex 皮肤是纯粹的视觉层修改，就像给手机换了一张壁纸。' },
              { q: 'Windows 和 macOS 安装 Codex 皮肤有什么区别？', a: 'Dream Skin 引擎同时支持 Windows 和 macOS，但安装路径和工具有所不同。Windows 需要手动将皮肤文件解压到指定目录，macOS 则通过 Application Support 路径加载。请查看 codexskin.top 安装页面获取对应平台的详细步骤。两平台的 .dreamskin 数据包格式完全一致。' },
              { q: '如何恢复 Codex 原生主题？', a: '恢复 Codex 原生主题非常简单：如果是官方色彩主题，打开 Codex Settings → Appearance 选择默认预设即可；如果是 Dream Skin 背景，关闭 Codex 后移除皮肤目录中的背景文件再重新打开；如果是 Codex 宠物，在 Pets 设置中移除即可。所有恢复路径都在 codexskin.top 安装指南中有详细说明。' },
              { q: 'codexskin.top 上的皮肤可以商用吗？', a: '每套 Codex 皮肤都标有授权状态。"可商用"标签的皮肤可自由用于商业项目；"开源"标签需遵循对应的开源协议；"仅个人使用"标签的皮肤仅供个人体验，不可商用。对于"灵感参考"标注的皮肤，codexskin.top 仅提供风格参考，不提供图片下载。使用前请务必确认授权状态。' },
              { q: 'Codex 换肤需要什么技术基础？', a: '完全不需要编程基础。如果你只是更换 Codex 官方色彩主题，在设置中点击即可；如果你想换背景图，在 codexskin.top 工作台中选好皮肤后按安装指南操作即可，整个过程类似于换手机壁纸。如果你需要定制服务，我们提供从设计到安装的全程协助。' },
              { q: 'codexskin.top 会收集我的个人数据吗？', a: '不会。codexskin.top 的皮肤工作台在浏览器本地运行，你上传的图片不会离开设备。我们不使用第三方追踪脚本，不收集 Codex 配置、对话记录或 API Key。全站无需注册登录即可使用所有免费功能。' },
            ].map((faq) => (
              <details key={faq.q} className="card p-5 group cursor-pointer">
                <summary className="text-text font-medium text-sm list-none flex items-center justify-between">
                  {faq.q}
                  <svg className="w-4 h-4 text-text-muted group-open:rotate-180 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </summary>
                <p className="text-text-muted text-sm mt-3 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/install" className="text-accent text-sm no-underline hover:underline">
              查看更多 Codex 换肤安装与恢复指南 →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
