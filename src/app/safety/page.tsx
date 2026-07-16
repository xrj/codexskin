import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Codex 皮肤安全说明 | codexskin.top - 安全与隐私保护",
  description:
    "codexskin.top Codex 皮肤安全说明：皮肤是 inert 数据不含可执行代码，图片在浏览器本地处理不上传服务器，不读取 API Key 或项目配置。了解 Codex 换肤的信任边界。",
};

export default function SafetyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text">
          Codex 皮肤安全说明
        </h1>
        <p className="text-text-muted text-lg mt-3 max-w-3xl leading-relaxed">
          在 codexskin.top，我们将 <strong className="text-text">Codex 皮肤安全</strong> 放在首位。
          了解 Codex 换肤的信任边界：皮肤是 inert 数据而不是安装器，图片在浏览器本地处理而不上传服务器，
          我们绝不读取你的 API Key。做 Codex 皮肤不意味着交出信任。
        </p>
      </div>

      {/* Core Principle */}
      <div className="card p-6 mb-10 border-accent/30">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center text-accent text-lg">🛡️</span>
          <div>
            <h2 className="text-text font-semibold text-lg">核心原则：Codex 皮肤安全三层边界</h2>
            <p className="text-text-muted text-sm">codexskin.top 遵循三条不可妥协的安全原则</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              icon: '🔒',
              title: 'Codex 皮肤不上传图片',
              desc: 'codexskin.top 的皮肤工作台所有图片处理在浏览器本地完成。你上传的图片用于实时预览 Codex 皮肤效果，从未也永远不会离开你的浏览器。我们没有任何服务器接收你的图片文件。这是 Codex 皮肤安全最基本的要求——你的素材，你的控制权。',
            },
            {
              icon: '🔑',
              title: 'Codex 皮肤不读取配置',
              desc: 'codexskin.top 不会、也不能读取你的 API Key、对话历史、项目文件、Provider 设置或任何认证配置。Codex 换肤工作台只是一个视觉预览工具，与 Codex App 的内部配置完全隔离。皮肤不接触配置层，这是我们的技术承诺。',
            },
            {
              icon: '⚡',
              title: 'Codex 皮肤不执行脚本',
              desc: 'codexskin.top 导出的所有 Codex 皮肤包仅包含图片文件（WebP/PNG）和色彩配置数据（JSON），不包含任何 JavaScript、PowerShell、Shell 脚本、可执行文件或扩展安装程序。皮肤包是纯 inert 数据——就像换一张壁纸。',
            },
          ].map((item) => (
            <div key={item.title} className="bg-surface-secondary rounded-lg p-5">
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="text-text font-semibold text-sm mb-2">{item.title}</h3>
              <p className="text-text-muted text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Boundary: Skin vs Pet vs Skill */}
      <div className="card p-6 mb-10">
        <h2 className="text-text font-semibold text-lg mb-4">Codex 皮肤信任边界：皮肤 ≠ 宠物 ≠ 技能</h2>
        <p className="text-text-muted text-sm mb-5 leading-relaxed">
          在 Codex 换肤生态中，我们将能力分为三个层次，每个层次有不同的 <strong className="text-text">皮肤安全</strong> 信任边界。
          理解这些边界是安全使用 Codex 皮肤的前提。
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-surface-secondary rounded-lg p-4 border-l-2 border-accent">
            <h3 className="text-text font-semibold text-sm mb-2">🎨 视觉层：Codex 皮肤</h3>
            <p className="text-text-muted text-xs leading-relaxed mb-2">皮肤是视觉主题，仅包含图片和颜色数据。不包含可执行代码，不修改 Codex 功能。</p>
            <span className="tag text-[10px] text-accent border-accent/30">安全等级：高</span>
          </div>
          <div className="bg-surface-secondary rounded-lg p-4 border-l-2 border-accent-secondary">
            <h3 className="text-text font-semibold text-sm mb-2">🐱 状态层：Codex 宠物</h3>
            <p className="text-text-muted text-xs leading-relaxed mb-2">宠物是动画陪伴，改变界面外观但不改变代码行为。需要 HTTPS sprite 资源。</p>
            <span className="tag text-[10px] text-accent-secondary border-accent-secondary/30">安全等级：高</span>
          </div>
          <div className="bg-surface-secondary rounded-lg p-4 border-l-2 border-danger">
            <h3 className="text-text font-semibold text-sm mb-2">⚙️ 行为层：Codex 技能</h3>
            <p className="text-text-muted text-xs leading-relaxed mb-2">技能是功能扩展，可执行代码或接入外部工具。codexskin.top 不涉及此层。</p>
            <span className="tag text-[10px] text-danger border-danger/30">不在本站范围</span>
          </div>
        </div>
      </div>

      {/* Privacy */}
      <div className="card p-6 mb-10">
        <h2 className="text-text font-semibold text-lg mb-4">Codex 皮肤隐私保护</h2>
        <div className="text-text-muted text-sm leading-relaxed space-y-3">
          <p>
            codexskin.top <strong className="text-text">Codex 皮肤安全</strong> 不仅关注技术安全，也重视你的数据隐私。
            以下是我们的隐私承诺：
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {[
              { title: '本地处理', desc: 'Codex 皮肤预览、图片编辑、色彩调整全部在浏览器本地完成，不向服务器发送任何图片数据。' },
              { title: '不收集', desc: 'codexskin.top 不收集你的 Codex 配置、对话记录、项目文件路径、API Key 或 Provider 设置。' },
              { title: '不追踪', desc: '本站不使用第三方追踪脚本，不记录你的 Codex 皮肤浏览偏好或工作台操作历史。' },
              { title: '不托管', desc: '你导出的 Codex 皮肤数据包仅保存在你的本地设备。codexskin.top 不托管或备份你的皮肤文件。' },
            ].map((item) => (
              <div key={item.title} className="bg-surface-secondary rounded-lg p-4">
                <h4 className="text-text font-medium text-sm mb-1.5">{item.title}</h4>
                <p className="text-text-muted text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dream Skin Engine Trust */}
      <div className="card p-6 mb-10 border-accent-secondary/20">
        <h2 className="text-text font-semibold text-lg mb-4">Dream Skin 引擎作为独立信任对象</h2>
        <div className="text-text-muted text-sm leading-relaxed space-y-3">
          <p>
            Dream Skin 引擎是一个独立的社区开源项目，与 codexskin.top 不是同一个实体。
            在使用 Dream Skin 引擎安装 Codex 皮肤时，请注意以下事项：
          </p>
          <ul className="space-y-2 ml-4">
            <li>Dream Skin 引擎的代码托管在 GitHub 上，您可以自行审查其源代码。</li>
            <li>codexskin.top 仅提供与 Dream Skin 兼容的皮肤数据包，不分发或修改 Dream Skin 引擎本身。</li>
            <li>Dream Skin 引擎不修改 Codex 官方二进制文件，而是通过官方支持的资源加载路径注入皮肤数据。</li>
            <li>任何声称“自动安装全部皮肤到所有平台”的工具都值得警惕——真正的安全皮肤安装需要用户知情和确认。</li>
          </ul>
        </div>
      </div>

      {/* Three Safety Cards */}
      <div className="mb-10">
        <h2 className="text-text font-semibold text-lg mb-4">Codex 皮肤安全快速参考</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: '✅', title: '能做', items: ['浏览和下载 Codex 皮肤', '在工作台中预览皮肤效果', '使用官方 Appearance 设置', '安装开源 Dream Skin 引擎', '复制官方色彩主题', '导出 .dreamskin 数据包'] },
            { icon: '❌', title: '不能做', items: ['皮肤包不包含可执行代码', '不修改 Codex 官方文件', '不代管 API Key 或密码', '不提供绕过限制的安装', '不夹带扩展或 Provider', '不上传你的私人图片'] },
            { icon: '🔄', title: '出问题怎么恢复', items: ['通过 Codex 设置恢复默认', '移除 Dream Skin 皮肤文件', '在 Pets 设置中移除宠物', '重置 Codex Appearance', '关闭后重新打开 Codex', '联系 codexskin.top 获取帮助'] },
          ].map((card) => (
            <div key={card.title} className="card p-5">
              <h3 className="text-text font-semibold text-sm mb-3 flex items-center gap-2">
                <span>{card.icon}</span> {card.title}
              </h3>
              <ul className="space-y-1.5">
                {card.items.map((item) => (
                  <li key={item} className="text-text-muted text-xs">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contact & Links */}
      <div className="text-center p-6 bg-surface-secondary rounded-lg">
        <p className="text-text-muted text-sm leading-relaxed">
          如果你对 codexskin.top 的 <strong className="text-text">Codex 皮肤安全</strong> 有任何疑问，
          或发现了潜在的安全问题，请通过定制服务页面联系我们。
          我们重视每一次关于 <strong className="text-text">皮肤安全</strong> 的反馈。
        </p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <Link href="/custom" className="text-accent text-sm no-underline hover:underline">联系我们 →</Link>
        </div>
      </div>

      {/* Detailed Trust Explanation */}
      <div className="mt-8 card p-6">
        <h2 className="text-text font-semibold text-lg mb-4">为什么 codexskin.top 的 Codex 皮肤是安全的？</h2>
        <div className="text-text-muted text-sm leading-relaxed space-y-4">
          <p>
            <strong className="text-text">Codex 皮肤安全</strong> 是 codexskin.top 最核心的设计原则。
            以下从技术架构、数据处理和分发机制三个角度，详细解释为什么 codexskin.top 的
            <strong className="text-text">Codex 皮肤</strong> 可以放心使用。
          </p>
          <div className="bg-surface-secondary rounded-lg p-5">
            <h4 className="text-text font-medium text-sm mb-2">技术架构保障</h4>
            <p className="text-text-muted text-xs leading-relaxed">
              codexskin.top <strong className="text-text">Codex 皮肤</strong> 采用纯数据架构：
              皮肤包由 PNG/WebP 图片文件和 JSON 色彩配置文件组成，不使用任何可执行格式。
              这种数据驱动的 <strong className="text-text">皮肤安全</strong> 架构确保了皮肤文件不可能包含恶意代码——
              就像你无法在一张 .jpg 图片中嵌入病毒一样，我们的 <strong className="text-text">Codex 皮肤</strong> 包也不具备代码执行能力。
              Dream Skin 引擎作为独立的开源项目，其代码完全透明可审查，
              你可以在 GitHub 上查看它的每一行实现代码。codexskin.top 不分发或修改 Dream Skin 引擎，
              只提供与其兼容的纯数据皮肤包。
            </p>
          </div>
          <div className="bg-surface-secondary rounded-lg p-5">
            <h4 className="text-text font-medium text-sm mb-2">数据处理流程</h4>
            <p className="text-text-muted text-xs leading-relaxed">
              在 codexskin.top 的 <strong className="text-text">皮肤安全</strong> 数据流程中，
              你的图片从选择到预览再到导出，始终停留在你的浏览器本地存储中。
              我们的工作台是一个纯前端应用，所有图像处理（裁切、缩放、色彩调整、透明度设置）
              都通过浏览器 Canvas API 在客户端完成。没有后端服务器接收或存储你的图片数据。
              这一 <strong className="text-text">Codex 皮肤安全</strong> 设计确保了你对素材的完全控制权——
              图片是你的，成果也是你的，codexskin.top 只是你手中的一把画笔。
            </p>
          </div>
          <div className="bg-surface-secondary rounded-lg p-5">
            <h4 className="text-text font-medium text-sm mb-2">分发与授权管理</h4>
            <p className="text-text-muted text-xs leading-relaxed">
              codexskin.top <strong className="text-text">Codex 皮肤</strong> 的上架流程包含严格的人工审核环节。
              每一套公开的 <strong className="text-text">Codex 皮肤</strong> 都必须标注来源和授权状态，
              来源不明或授权不清的 <strong className="text-text">皮肤资源</strong> 不会被上架。
              我们区分四种授权状态：可商用、仅个人使用、开源协议、灵感参考（不提供下载）。
              这种分类管理确保你不会在不知情的情况下使用了侵权的 <strong className="text-text">Codex 皮肤</strong>。
              如果你发现某套皮肤的授权信息有误，请立即联系我们——codexskin.top
              会在核实后第一时间更正或下架相关资源。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
