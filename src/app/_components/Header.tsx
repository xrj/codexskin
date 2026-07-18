'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: '首页' },
  { href: '/skins', label: '皮肤库' },
  { href: '/codex-skins-guide', label: '换肤指南' },
  { href: '/studio', label: '工作台' },
  { href: '/pets', label: '宠物库' },
  { href: '/install', label: '安装恢复' },
  { href: '/safety', label: '安全说明' },
  { href: '/custom', label: '定制服务' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-text no-underline font-bold text-lg tracking-tight shrink-0">
            <span className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold" style={{ background: 'var(--accent)', color: '#0E0F12' }}>C</span>
            <span className="hidden sm:inline">codexskin</span>
            <span className="text-text-muted font-normal text-sm hidden sm:inline">.top</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors no-underline ${
                    isActive
                      ? 'text-accent bg-accent/10'
                      : 'text-text-muted hover:text-text hover:bg-surface-secondary'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Language + Mobile toggle */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-text-muted hidden sm:block">中文</span>
            <button
              className="lg:hidden flex items-center justify-center w-8 h-8 rounded-md border border-border text-text-muted hover:text-text hover:border-text-muted transition-colors bg-transparent cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="lg:hidden pb-4 border-t border-border mt-2 pt-2 flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors no-underline ${
                    isActive
                      ? 'text-accent bg-accent/10'
                      : 'text-text-muted hover:text-text hover:bg-surface-secondary'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
