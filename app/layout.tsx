import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Geist } from 'next/font/google';
import type { Metadata } from 'next';

const geist = Geist({
  subsets: ['latin'],
});

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
    <html lang="en" className={geist.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
