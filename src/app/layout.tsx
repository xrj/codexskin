import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import {
  createJsonLd,
  defaultDescription,
  defaultKeywords,
  defaultTitle,
  siteName,
  siteUrl,
  sitemapRoutes,
} from "./lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultTitle,
  description: defaultDescription,
  applicationName: siteName,
  keywords: defaultKeywords,
  alternates: {
    canonical: `${siteUrl}/`,
  },
  manifest: "/manifest.webmanifest",
  robots: { index: true, follow: true },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: `${siteUrl}/`,
    siteName,
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: defaultTitle,
    description: defaultDescription,
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: `${siteUrl}/`,
  inLanguage: "zh-CN",
  description: defaultDescription,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/skins?search={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: `${siteUrl}/`,
  description: "中文 Codex 换肤资源、教程与定制服务站点。",
};

const navigationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: sitemapRoutes.map((route, index) => ({
    "@type": "SiteNavigationElement",
    position: index + 1,
    name: route.path === "" ? "首页" : route.path.replace("/", ""),
    url: route.path === "" ? `${siteUrl}/` : `${siteUrl}${route.path}/`,
  })),
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
        <Script
          id="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: createJsonLd(websiteJsonLd) }}
        />
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: createJsonLd(organizationJsonLd) }}
        />
        <Script
          id="navigation-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: createJsonLd(navigationJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
