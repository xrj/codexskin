import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "codexskin.top - Codex 换肤资源站 | 皮肤、宠物、工作台",
  description:
    "codexskin.top 是 Codex App 换肤一站式资源站，提供免费 Codex 皮肤下载、在线皮肤工作台、宠物库、Dream Skin 安装指南与皮肤定制服务。给 Codex 换一张脸，但别把信任交给一张图。",
  keywords: [
    "Codex换肤", "Codex皮肤", "Codex主题", "Codex背景", "Dream Skin",
    "Codex宠物", "Codex外观", "codexskin", "代码编辑器换肤", "AI编程工具皮肤",
    "Codex皮肤下载", "Codex皮肤制作", "Codex皮肤定制"
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "codexskin.top - Codex 换肤资源站",
    description: "免费 Codex 皮肤、在线工作台、宠物库、Dream Skin 安装指南。",
    url: "https://codexskin.top",
    siteName: "codexskin.top",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bg text-text">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ETWEDM720K"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ETWEDM720K');
          `}
        </Script>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
