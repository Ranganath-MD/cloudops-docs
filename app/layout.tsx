import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'CloudOps Docs',
    template: '%s | CloudOps Docs',
  },
  description:
    'Cloud, DevOps & AI documentation — Linux, Networking, AWS, Azure, GCP, Kubernetes, DevSecOps.',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://ds-cdn.prod-east.frontend.public.atl-paas.net/assets/font-rules/v3/atlassian-fonts.css"
        />
        <link
          rel="preload"
          href="https://ds-cdn.prod-east.frontend.public.atl-paas.net/assets/fonts/atlassian-sans/v2/AtlassianSans-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://ds-cdn.prod-east.frontend.public.atl-paas.net/assets/fonts/atlassian-mono/v1/AtlassianMono-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="flex min-h-screen flex-col" suppressHydrationWarning>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
