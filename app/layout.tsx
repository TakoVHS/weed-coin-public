import './globals.css';
import type { Metadata, Viewport } from 'next';

const title = 'Weed Coin - Premium cannabis fintech launch';
const overview =
  'Weed Coin is the official premium cannabis fintech launch portal with tokenomics, holder services, on-chain readiness, and verified access flow.';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'Weed Coin',
      url: 'https://weed-coin.cash',
      description: overview,
      inLanguage: 'ru',
    },
    {
      '@type': 'Organization',
      name: 'Weed Coin',
      url: 'https://weed-coin.cash',
      description: overview,
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://weed-coin.cash'),
  title,
  description: overview,
  applicationName: 'Weed Coin',
  keywords: ['Weed Coin', 'crypto launch', 'launch notes', 'risk disclosure', 'web3 culture'],
  alternates: {
    canonical: 'https://weed-coin.cash',
  },
  openGraph: {
    title,
    description: overview,
    url: 'https://weed-coin.cash',
    siteName: 'Weed Coin',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Weed Coin premium dark launch shell',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: overview,
    images: ['/twitter-image'],
  },
};

export const viewport: Viewport = {
  themeColor: '#070a08',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}
