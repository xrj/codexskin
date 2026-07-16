import Link from 'next/link';

const footerLinks = [
  {
    title: '资源',
    links: [
      { href: '/skins', label: '皮肤库' },
      { href: '/pets', label: '宠物库' },
      { href: '/studio', label: '皮肤工作台' },
      { href: '/install', label: '安装与恢复' },
    ],
  },
  {
    title: '信任',
    links: [
      { href: '/safety', label: '安全说明' },
      { href: '/safety', label: '隐私保护' },
      { href: '/custom', label: '定制服务' },
    ],
  },
  {
    title: '链接',
    links: [
      { href: 'https://github.com/Fei-Away/Codex-Dream-Skin', label: 'Dream Skin 引擎' },
      { href: 'https://codexskin.org/', label: '参考站点' },
      { href: 'https://learn.chatgpt.com/docs/reference/settings', label: 'Codex 官方文档' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-text no-underline font-bold text-lg mb-3">
              <span className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold" style={{ background: 'var(--accent)', color: '#0E0F12' }}>C</span>
              codexskin.top
            </Link>
            <p className="text-text-muted text-sm leading-relaxed">
              给 Codex 换一张脸，但别把信任交给一张图。
            </p>
            <p className="text-text-muted text-xs mt-3">
              © 2026 codexskin.top
            </p>
          </div>

          {/* Link groups */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-text text-sm font-semibold mb-3">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-text-muted text-sm no-underline hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-xs">
            codexskin.top 是独立社区站点，与 OpenAI / Codex 官方无关。皮肤包仅含数据，不包含脚本、命令或可执行代码。
          </p>
          <div className="flex items-center gap-4 text-xs text-text-muted">
            <Link href="/safety" className="no-underline hover:text-accent transition-colors">隐私</Link>
            <Link href="/safety" className="no-underline hover:text-accent transition-colors">安全</Link>
            <Link href="/custom" className="no-underline hover:text-accent transition-colors">联系我们</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
