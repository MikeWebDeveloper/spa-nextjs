import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { LegalProvider } from '@/context/LegalContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: {
    default: 'Modern Business SPA',
    template: '%s | Modern Business SPA'
  },
  description: 'A modern, responsive single page application for small businesses, offering professional services and solutions.',
  keywords: ['business', 'modern', 'responsive', 'web application', 'SPA', 'Next.js', 'professional services'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Company Name',
  publisher: 'Your Company Name',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Modern Business SPA',
    description: 'A modern, responsive single page application for small businesses, offering professional services and solutions.',
    siteName: 'Modern Business SPA',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Modern Business SPA Preview',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Business SPA',
    description: 'A modern, responsive single page application for small businesses, offering professional services and solutions.',
    creator: '@yourhandle',
    images: ['/twitter-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      'facebook-domain-verification': 'your-facebook-verification-code',
    },
  },
  category: 'Business',
};

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Your Company Name',
  description: 'A modern, responsive single page application for small businesses, offering professional services and solutions.',
  url: 'https://your-domain.com',
  logo: 'https://your-domain.com/logo.png',
  sameAs: [
    'https://www.facebook.com/yourcompany',
    'https://www.twitter.com/yourcompany',
    'https://www.linkedin.com/company/yourcompany',
    'https://www.instagram.com/yourcompany'
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Your Street Address',
    addressLocality: 'Your City',
    addressRegion: 'Your Region',
    postalCode: 'Your Postal Code',
    addressCountry: 'Your Country'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-xxx-xxx-xxxx',
    contactType: 'customer service',
    email: 'contact@your-domain.com',
    availableLanguage: ['English']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <LegalProvider>
          <div className="min-h-screen">
            {children}
          </div>
          <ScrollToTop />
        </LegalProvider>
      </body>
    </html>
  );
}
