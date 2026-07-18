import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata({
  path: "/pets",
  title: "Codex 宠物库 | codexskin.top - Codex Pets 资源与 Pet Lab",
  description:
    "codexskin.top Codex 宠物库提供官方风格、像素风、表情包风等 Codex 动画宠物资源。Pet Lab 支持 sprite 校验与 codex:// 安装链接生成。",
});

const pets = [
  { name: 'Pixel Cat', style: '像素风', status: '可用', license: '可商用', states: ['Running', 'Needs input', 'Ready', 'Blocked'], color: 'from-orange-400/30 to-amber-500/30' },
  { name: 'Terminal Bot', style: '科技风', status: '可用', license: '开源', states: ['Running', 'Ready', 'Blocked'], color: 'from-green-500/30 to-emerald-600/30' },
  { name: 'Coffee Cup', style: '极简', status: '可用', license: '可商用', states: ['Running', 'Needs input', 'Ready'], color: 'from-brown-400/30 to-amber-600/30' },
  { name: 'Cat Assistant', style: '可爱风', status: '可用', license: '仅个人', states: ['Running', 'Needs input', 'Ready', 'Blocked'], color: 'from-pink-400/30 to-rose-500/30' },
  { name: 'Keyboard Spirit', style: '科技风', status: '测试中', license: '可商用', states: ['Running', 'Ready'], color: 'from-cyan-400/30 to-blue-500/30' },
  { name: 'Pixel Dragon', style: '像素风', status: '可用', license: '仅个人', states: ['Running', 'Needs input', 'Ready', 'Blocked'], color: 'from-red-500/30 to-orange-600/30' },
  { name: 'Lucky Cat', style: '节日风', status: '可用', license: '仅个人', states: ['Running', 'Ready', 'Blocked'], color: 'from-yellow-300/30 to-amber-400/30' },
  { name: 'Ghost Coder', style: '表情包风', status: '可用', license: '可商用', states: ['Running', 'Needs input', 'Ready'], color: 'from-purple-400/30 to-violet-500/30' },
];

export default function PetsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text">
          Codex 宠物库
        </h1>
        <p className="text-text-muted text-lg mt-3 max-w-3xl leading-relaxed">
          codexskin.top <strong className="text-text">Codex 宠物</strong> 库汇集了官方风格、
          像素风、表情包风等多种风格的 <strong className="text-text">Codex Pets</strong> 资源。
          <strong className="text-text">Codex 宠物</strong> 是 Codex 官方支持的动画陪伴功能，
          宠物改变外观，不改变代码行为。浏览 codexskin.top <strong className="text-text">Codex 宠物库</strong>，
          找到适合你编程风格的 <strong className="text-text">编程宠物</strong> 伙伴。
        </p>
        <p className="text-text-muted text-sm mt-2 leading-relaxed">
          <strong className="text-text">Codex 宠物</strong> 为你的编程过程增添趣味和陪伴感。
          不同于 <strong className="text-text">Codex 皮肤</strong> 改变界面的整体外观，
          <strong className="text-text">Codex Pets</strong> 专注于在编辑器角落提供一个有生命的动画角色。
          每一个 <strong className="text-text">编程宠物</strong> 都是你在代码世界中的独特伙伴。
          宠物会根据 Codex 的工作状态切换动画：运行中、等待输入、就绪、受阻——
          让你在编写代码时随时感知 Codex 的状态，就像有一个小小的编程伙伴在旁边陪伴。
        </p>
      </div>

      {/* What are Codex Pets */}
      <div className="card p-6 mb-10">
        <h2 className="text-text font-semibold text-lg mb-3">什么是 Codex 宠物？</h2>
        <div className="text-text-muted text-sm leading-relaxed space-y-2">
          <p>
            <strong className="text-text">Codex 宠物</strong>（Codex Pets）是 Codex 官方提供的可选动画陪伴功能。
            当你编写代码时，<strong className="text-text">Codex 宠物</strong> 会在编辑器界面中显示动画状态——
            Running 表示正在运行任务，Needs input 表示等待你的输入，Ready 表示空闲待命，
            Blocked 表示遇到障碍。宠物纯粹是视觉陪伴，不会影响 Codex 完成代码任务的方式。
          </p>
          <p>
            codexskin.top 的 <strong className="text-text">Codex 宠物库</strong> 整理了来自社区的各种
            <strong className="text-text">编程宠物</strong> sprite 资源。
            每个 <strong className="text-text">Codex 宠物</strong> 都需要一个公开可访问的 HTTPS sprite 图片
            （PNG 或 WebP 格式，带透明背景），通过 codex:// 深链接协议完成安装。
          </p>
        </div>
      </div>

      {/* Pet Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {pets.map((pet) => (
          <div key={pet.name} className="card overflow-hidden group">
            <div className={`h-36 bg-gradient-to-br ${pet.color} flex items-center justify-center relative`}>
              <span className="text-5xl opacity-50">
                {pet.style === '像素风' ? '👾' : pet.style === '可爱风' ? '🐱' : pet.style === '科技风' ? '🤖' : pet.style === '节日风' ? '🎋' : pet.style === '表情包风' ? '👻' : '☕'}
              </span>
              <span className={`absolute top-2 right-2 tag text-[10px] backdrop-blur-sm ${
                pet.status === '可用' ? 'bg-accent/20 text-accent border-accent/30' : 'bg-accent-secondary/20 text-accent-secondary border-accent-secondary/30'
              }`}>
                {pet.status}
              </span>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-text font-semibold group-hover:text-accent transition-colors">{pet.name}</h3>
                <span className={`tag text-[10px] ${
                  pet.license === '可商用' ? 'text-accent border-accent/30' : pet.license === '开源' ? 'text-accent-secondary border-accent-secondary/30' : 'text-text-muted'
                }`}>{pet.license}</span>
              </div>
              <span className="tag text-[10px]">{pet.style}</span>
              <div className="flex flex-wrap gap-1 mt-3">
                {pet.states.map((s) => (
                  <span key={s} className="text-text-muted text-[10px] bg-surface-secondary px-1.5 py-0.5 rounded">{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pet Lab Section */}
      <div className="card p-6 mb-10 border-accent/20">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">🧪</span>
          <h2 className="text-text font-semibold text-lg">Pet Lab — 宠物校验与安装</h2>
        </div>
        <p className="text-text-muted text-sm mb-6 leading-relaxed">
          codexskin.top <strong className="text-text">Pet Lab</strong> 帮助你校验
          <strong className="text-text">Codex 宠物</strong> sprite 资源是否合规，
          并生成 <strong className="text-text">Codex Pets</strong> 安装链接。
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Sprite Validator */}
          <div className="bg-surface-secondary rounded-lg p-5">
            <h3 className="text-text font-semibold text-sm mb-4">Sprite 校验</h3>
            <div className="space-y-3">
              <div>
                <label className="text-text-muted text-xs block mb-1.5">宠物名称</label>
                <input type="text" placeholder="例如: My Pixel Cat" className="w-full bg-surface border border-border rounded-md px-3 py-2 text-text text-sm outline-none focus:border-accent transition-colors" />
              </div>
              <div>
                <label className="text-text-muted text-xs block mb-1.5">公开 HTTPS Sprite URL</label>
                <input type="url" placeholder="https://example.com/pet.png" className="w-full bg-surface border border-border rounded-md px-3 py-2 text-text text-sm outline-none focus:border-accent transition-colors" />
              </div>
              <div>
                <label className="text-text-muted text-xs block mb-1.5">描述 (可选)</label>
                <input type="text" placeholder="描述你的宠物..." className="w-full bg-surface border border-border rounded-md px-3 py-2 text-text text-sm outline-none focus:border-accent transition-colors" />
              </div>
              <button className="btn btn-primary w-full text-sm mt-2">
                🔍 校验 Sprite
              </button>
            </div>
          </div>

          {/* Check List */}
          <div className="bg-surface-secondary rounded-lg p-5">
            <h3 className="text-text font-semibold text-sm mb-4">校验清单</h3>
            <div className="space-y-2.5">
              {[
                { label: '文件格式', rule: 'PNG 或 WebP', icon: '📄' },
                { label: '透明背景', rule: '必须支持透明度', icon: '🔲' },
                { label: 'Sprite 尺寸', rule: '符合帧布局要求', icon: '📐' },
                { label: '文件体积', rule: '≤ 5MB', icon: '📦' },
                { label: 'HTTPS 可访问', rule: 'URL 必须为 HTTPS', icon: '🔗' },
                { label: '帧布局正确', rule: '动画帧水平排列', icon: '🎞️' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-sm">
                  <span className="text-base">{item.icon}</span>
                  <span className="text-text-muted flex-1">{item.label}</span>
                  <span className="text-text text-xs">{item.rule}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Install Link Generator */}
        <div className="mt-6 bg-surface-secondary rounded-lg p-5">
          <h3 className="text-text font-semibold text-sm mb-3">生成 codex:// 安装链接</h3>
          <p className="text-text-muted text-xs mb-4 leading-relaxed">
            校验通过后，codexskin.top Pet Lab 会生成 <code className="text-accent bg-surface px-1.5 py-0.5 rounded text-xs">codex://</code> 深链接。
            点击链接即可跳转到 Codex App 并自动打开 <strong className="text-text">Codex 宠物</strong> 安装流程。
            请注意：宠物 sprite 图片必须托管在公开 HTTPS 地址上；本地文件无法直接作为 Codex Pets 安装源。
          </p>
          <div className="flex gap-3">
            <button className="btn btn-outline text-sm">
              🔗 生成安装链接
            </button>
            <button className="btn btn-secondary text-sm">
              📋 复制 codex:// 链接
            </button>
          </div>
        </div>
      </div>

      {/* How to choose and use Codex Pets */}
      <div className="mt-10 card p-6">
        <h2 className="text-text font-semibold text-lg mb-4">如何选择和使用 Codex 宠物</h2>
        <div className="text-text-muted text-sm leading-relaxed space-y-3">
          <p>
            codexskin.top <strong className="text-text">Codex 宠物库</strong> 提供了多种风格的
            <strong className="text-text">Codex Pets</strong> 供你选择。
            选择 <strong className="text-text">Codex 宠物</strong> 时，建议考虑以下因素：
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-surface-secondary rounded-lg p-4">
              <h4 className="text-text font-medium text-sm mb-2">宠物风格与编程场景匹配</h4>
              <p className="text-text-muted text-xs leading-relaxed">
                像素风 <strong className="text-text">Codex 宠物</strong> 唤起复古游戏情怀，
                适合轻松的侧项目编程；科技风宠物（如 Terminal Bot）适合系统级开发场景；
                可爱风宠物（如 Cat Assistant）为长时间的代码编写提供温暖的陪伴感。
                Codex 宠物不会干扰你的代码逻辑——它只是静静地待在那里，用动画状态告诉你 Codex 在做什么。
              </p>
            </div>
            <div className="bg-surface-secondary rounded-lg p-4">
              <h4 className="text-text font-medium text-sm mb-2">Sprite 资源的准备要求</h4>
              <p className="text-text-muted text-xs leading-relaxed">
                每个 Codex 宠物都需要一个符合规范的 sprite 图片。Sprite 必须是 PNG 或 WebP 格式，
                支持透明背景，动画帧水平排列在单一图片文件中。文件大小不超过 5MB，
                并且托管在公开可访问的 HTTPS 地址上。codexskin.top 的 Pet Lab 可以帮助你校验
                sprite 是否符合这些技术要求，避免安装 <strong className="text-text">Codex Pets</strong> 时遇到格式错误。
              </p>
            </div>
          </div>
          <p>
            安装 <strong className="text-text">Codex 宠物</strong> 后，你会在 Codex 界面中看到宠物根据任务状态切换动画。
            每个 <strong className="text-text">编程宠物</strong> 都有自己独特的状态表现方式，
            codexskin.top 的 <strong className="text-text">编程宠物</strong> 集合涵盖了从像素复古到现代科技的各种风格：
            Running 时宠物表现出活跃状态，Needs input 时宠物等待你的指令，Ready 时宠物在角落安静待命，
            Blocked 时宠物显示困惑或受阻的表情。这些状态动画让你无需查看日志就能感知 Codex 的工作进展，
            是 <strong className="text-text">编程宠物</strong> 最独特的价值。
          </p>
          <p>
            codexskin.top 的 <strong className="text-text">Codex 宠物</strong> 资源会持续更新。
            我们欢迎社区投稿自己制作的 <strong className="text-text">Codex Pets</strong> sprite，
            投稿前请确认你拥有 sprite 图片的版权或使用授权。
            codexskin.top 对每个上架的 <strong className="text-text">Codex 宠物</strong> 都标注授权状态，
            请在使用前确认授权范围。
          </p>
        </div>
      </div>

      {/* Risk Notice */}
      <div className="mt-10 card p-6 border-danger/30">
        <h2 className="text-text font-semibold text-lg mb-3 flex items-center gap-2">
          <span className="text-danger text-xl">⚠️</span>
          Codex 宠物风险与注意事项
        </h2>
        <div className="text-text-muted text-sm leading-relaxed space-y-3">
          <p>
            codexskin.top 提供的 <strong className="text-text">Codex 宠物</strong> 资源仅改变外观，
            不改变 Codex 的任务执行行为。<strong className="text-text">Codex Pets</strong> 不会读取你的代码、
            对话记录、API Key 或项目配置。但请注意以下要点：
          </p>
          <ul className="space-y-2 ml-4">
            <li>Codex 宠物 sprite 图片托管在第三方 HTTPS 地址上，codexskin.top 不控制图片的可访问性和更新。</li>
            <li>安装 Codex 宠物时，请确保 sprite 图片来源可信。恶意构造的图片文件可能影响渲染性能。</li>
            <li>codex:// 深链接协议需要 Codex App 已安装并正确关联协议处理。</li>
            <li>如果 Codex 宠物显示异常，可以通过 Codex 官方 Pets 设置页面移除宠物并恢复默认状态。</li>
            <li>宠物仅在 Codex App 界面中显示动画，不会在终端、命令行或远程服务器中运行。</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
