import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Codex 皮肤定制服务 | codexskin.top - 付费定制与品牌主题",
  description:
    "codexskin.top 提供 Codex 皮肤定制服务：免费社区版、个人定制（¥199）、团队定制（¥999）。专业的 Codex 换肤定制，包含皮肤、宠物、安装协助与品牌资产管理。",
};

export default function CustomPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text">
          Codex 皮肤定制服务
        </h1>
        <p className="text-text-muted text-lg mt-3 max-w-3xl leading-relaxed">
          codexskin.top <strong className="text-text">Codex 皮肤定制</strong> 服务为有更高需求的用户
          提供专业的 <strong className="text-text">皮肤定制</strong> 方案。从个人专属皮肤到企业品牌主题，
          我们提供三种 <strong className="text-text">定制服务</strong> 套餐，满足不同场景的 Codex 换肤需求。
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-14">
        {[
          {
            name: '免费社区版',
            price: '¥0',
            desc: '自主浏览和制作 Codex 皮肤，完全免费',
            features: [
              '浏览 codexskin.top 全部 Codex 皮肤库',
              '使用在线工作台自行制作皮肤',
              '导出 .dreamskin 数据包',
              'Pet Lab 宠物 sprite 校验',
              '查阅安装指南自助安装',
              '社区 FAQ 常见问题解答',
            ],
            btn: '开始使用',
            href: '/studio',
            hilight: false,
          },
          {
            name: '个人定制',
            price: '¥199',
            desc: '专业设计师为你打造专属 Codex 皮肤',
            features: [
              '一张你提供的授权图片，制作 2 套配色方案',
              'Home / Task / Diff 三面预览确认',
              '含一次免费修改调整',
              '提供 .dreamskin 数据包和安装步骤',
              '安装远程协助（30 分钟）',
              '皮肤恢复方案文档',
              '3 个工作日内交付',
            ],
            btn: '立即定制',
            href: '#',
            hilight: true,
          },
          {
            name: '团队定制',
            price: '¥999',
            desc: '品牌资产统一管理，团队专属方案',
            features: [
              '品牌资产统一 Codex 主题设计',
              '多套配色方案（深色/浅色）',
              'Codex 宠物定制组合包',
              '部署文档与回滚方案',
              '授权确认与版权审核',
              '团队成员安装远程协助',
              '售后支持 30 天',
              '5 个工作日内交付',
            ],
            btn: '联系定制',
            href: '#',
            hilight: false,
          },
        ].map((plan) => (
          <div key={plan.name} className={`card p-7 relative flex flex-col ${plan.hilight ? 'border-accent/40 shadow-lg shadow-accent/5 scale-[1.02]' : ''}`}>
            {plan.hilight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 tag bg-accent text-bg border-none text-xs font-bold px-4 py-1">
                最受欢迎
              </span>
            )}
            <h3 className="text-text font-semibold text-lg">{plan.name}</h3>
            <p className="text-text-muted text-sm mt-1">{plan.desc}</p>
            <div className="mt-5 mb-6">
              <span className="text-4xl font-bold text-text">{plan.price}</span>
              {plan.price !== '¥0' && <span className="text-text-muted text-sm ml-1">/ 次</span>}
            </div>
            <ul className="space-y-3 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="text-text-muted text-sm flex items-start gap-2.5">
                  <span className="text-accent mt-0.5 shrink-0 text-base leading-none">✓</span>
                  <span className="leading-snug">{f}</span>
                </li>
              ))}
            </ul>
            <Link
              href={plan.href}
              className={`btn w-full mt-6 text-sm ${plan.hilight ? 'btn-primary' : 'btn-secondary'}`}
            >
              {plan.btn}
            </Link>
          </div>
        ))}
      </div>

      {/* What You Need to Know */}
      <div className="card p-6 mb-10">
        <h2 className="text-text font-semibold text-lg mb-4">Codex 皮肤定制须知</h2>
        <div className="text-text-muted text-sm leading-relaxed space-y-3">
          <p>
            在选择 codexskin.top <strong className="text-text">Codex 皮肤定制</strong> 服务之前，
            请仔细阅读以下重要说明。我们坚持透明的服务边界，确保每一次
            <strong className="text-text">皮肤定制</strong> 都在安全、合法的框架内完成。
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-surface-secondary rounded-lg p-4">
              <h4 className="text-text font-medium text-sm mb-2">✅ 我们提供</h4>
              <ul className="space-y-1.5 text-text-muted text-xs">
                <li>· 基于你授权图片的 Codex 皮肤设计</li>
                <li>· 多套配色方案与预览效果</li>
                <li>· .dreamskin 数据包与安装文档</li>
                <li>· 远程安装协助与故障排查</li>
                <li>· 品牌资产统一管理与部署指南</li>
                <li>· 定制宠物 sprite 设计与校验</li>
              </ul>
            </div>
            <div className="bg-surface-secondary rounded-lg p-4 border-l-2 border-danger/40">
              <h4 className="text-text font-medium text-sm mb-2 flex items-center gap-2">
                <span className="text-danger">⚠️</span> 我们不做
              </h4>
              <ul className="space-y-1.5 text-text-muted text-xs">
                <li>· 不修改 Codex 官方二进制文件</li>
                <li>· 不代管 API Key、Provider 或认证配置</li>
                <li>· 不提供绕过安全限制的安装方式</li>
                <li>· 不使用未经授权的版权图片</li>
                <li>· 不承诺打包成自动安装器</li>
                <li>· 不保证第三方引擎的长期兼容性</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Image Rights */}
      <div className="card p-6 mb-10 border-accent-secondary/20">
        <h2 className="text-text font-semibold text-lg mb-4">图片版权与授权要求</h2>
        <div className="text-text-muted text-sm leading-relaxed space-y-3">
          <p>
            codexskin.top <strong className="text-text">皮肤定制</strong> 服务要求客户提供有权使用的图片素材。
            我们不接受来源不明、含明显 IP 角色、含真人肖像、带第三方水印或许可证不清晰的图片。
            这是保护你和我们的必要措施——我们不希望你的 Codex 皮肤因为版权问题而无法使用。
          </p>
          <div className="grid sm:grid-cols-3 gap-3 mt-4 text-center">
            {[
              { icon: '✅', label: '可以使用的图片', desc: '自己拍摄的照片、购买授权的图库素材、明确标注 CC0/可商用的公开素材、AI 生成且无侵权元素的图片' },
              { icon: '⚠️', label: '需确认的图片', desc: '客户提供的公司 Logo（需确认授权）、从设计平台购买的模板（需确认授权范围）、用户投稿作品（需确认原创性）' },
              { icon: '❌', label: '不能使用的图片', desc: '明星/动漫/游戏角色截图、带他人水印的图片、来源不明的网络图片、包含真人肖像未经授权的照片' },
            ].map((item) => (
              <div key={item.label} className="bg-surface-secondary rounded-lg p-4">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h4 className="text-text font-medium text-xs mb-2">{item.label}</h4>
                <p className="text-text-muted text-[11px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Delivery & After-sales */}
      <div className="card p-6 mb-10">
        <h2 className="text-text font-semibold text-lg mb-4">交付与售后</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              title: '交付物清单',
              items: [
                '背景图片文件 (WebP/PNG)',
                '预览效果图 (Home/Task/Diff)',
                '.dreamskin 数据包',
                '色彩配置文件 (JSON)',
                '安装步骤 PDF 文档',
                '皮肤恢复方案文档',
              ],
            },
            {
              title: '交付周期',
              items: [
                '个人定制: 3 个工作日',
                '团队定制: 5 个工作日',
                '含一次免费修改',
                '额外修改 ¥50/次',
                '加急交付 +¥100',
                '周末和节假日顺延',
              ],
            },
            {
              title: '售后支持',
              items: [
                '个人定制: 交付后 7 天',
                '团队定制: 交付后 30 天',
                '远程协助安装问题',
                '皮肤恢复操作指导',
                '不包含 Codex 版本升级适配',
                '退款: 未开始设计前可全额退',
              ],
            },
          ].map((col) => (
            <div key={col.title} className="bg-surface-secondary rounded-lg p-4">
              <h4 className="text-text font-medium text-sm mb-3">{col.title}</h4>
              <ul className="space-y-1.5">
                {col.items.map((item) => (
                  <li key={item} className="text-text-muted text-xs">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center card p-10 border-accent/20" style={{
        background: 'linear-gradient(135deg, rgba(51,214,166,0.05) 0%, rgba(242,184,75,0.03) 100%)',
      }}>
        <h2 className="text-2xl font-bold text-text mb-3">准备好定制你的专属 Codex 皮肤了吗？</h2>
        <p className="text-text-muted max-w-xl mx-auto leading-relaxed mb-6">
          选择 codexskin.top <strong className="text-text">Codex 皮肤定制</strong> 服务，
          让专业设计师将你的创意变成真实的 <strong className="text-text">Codex 皮肤</strong>。
          从图片授权到安装部署，我们全程跟进。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/studio" className="btn btn-primary">
            先去工作台试试
          </Link>
          <button className="btn btn-outline">
            📧 联系定制顾问
          </button>
          <Link href="/safety" className="btn btn-secondary">
            查看安全说明
          </Link>
        </div>
        <p className="text-text-muted text-xs mt-5">
          或发送邮件至 hello@codexskin.top · 工作日 24 小时内回复
        </p>
      </div>

      {/* Custom Process */}
      <div className="mt-8 card p-6">
        <h2 className="text-text font-semibold text-lg mb-4">Codex 皮肤定制流程</h2>
        <div className="text-text-muted text-sm leading-relaxed space-y-3">
          <p>
            选择 codexskin.top <strong className="text-text">Codex 皮肤定制</strong> 服务后，
            我们将按照以下流程确保你获得满意的 <strong className="text-text">定制皮肤</strong>：
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { step: '01', title: '需求沟通', desc: '告诉我们你想要的 Codex 皮肤风格、配色偏好、参考案例。如果你有品牌色或 logo，也请一并提供。个人定制通过邮件沟通，团队定制约 30 分钟视频会议。' },
              { step: '02', title: '素材确认', desc: '你提供有权使用的图片素材（照片、AI 生成图、品牌资产）。我们会审核素材的版权状态和分辨率，确保可用于 Codex 皮肤制作。素材不通过授权审核的，我们会建议替代方案。' },
              { step: '03', title: '设计方案', desc: '设计师基于你的需求制作 1-3 套 Codex 皮肤初稿，包含 Home/Task/Diff 三面预览截图。你选择最满意的方向后，我们进行精细调参。' },
              { step: '04', title: '预览确认', desc: '将 Codex 皮肤加载到真实 Codex 环境中截图确认。检查文本可读性、按钮对比度、Diff 辨识度和整体视觉协调性。个人定制含一次免费修改。' },
              { step: '05', title: '交付安装', desc: '交付完整的 .dreamskin 数据包、色彩配置文件、安装步骤文档和恢复方案。个人定制含 30 分钟远程安装协助，团队定制含全体成员安装支持。' },
              { step: '06', title: '售后保障', desc: '个人定制 7 天售后，团队定制 30 天售后。覆盖安装问题排查、皮肤恢复指导。不包含因 Codex 版本升级导致的适配修改（另行协商）。' },
            ].map((step) => (
              <div key={step.step} className="bg-surface-secondary rounded-lg p-4 flex gap-3">
                <span className="text-accent font-bold text-lg shrink-0 leading-none mt-0.5">{step.step}</span>
                <div>
                  <h4 className="text-text font-medium text-sm mb-1">{step.title}</h4>
                  <p className="text-text-muted text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p>
            codexskin.top <strong className="text-text">皮肤定制</strong> 的每个环节都遵循
            我们的安全原则：不代管 API Key、不修改 Codex 二进制文件、不使用未授权素材。
            我们交付的是纯数据的 <strong className="text-text">Codex 皮肤</strong> 包，
            你始终拥有对 Codex App 的完全控制权。选择 codexskin.top
            <strong className="text-text">Codex 皮肤定制</strong>，就是选择专业、安全、透明的皮肤设计服务。
          </p>
        </div>
      </div>
    </div>
  );
}
