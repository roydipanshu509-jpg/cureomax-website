import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Serif_Display, JetBrains_Mono, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import VoiceWidget from '@/components/layout/VoiceWidget'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-heading',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
})

export const metadata: Metadata = {
  title: {
    default: 'Cureomax | AI Growth Platform for Indian Specialty Clinics',
    template: '%s | Cureomax',
  },
  description:
    'Clinic OS by Cureomax gives physiotherapy and orthopedic clinics in India AI-powered appointment management, automated patient follow-ups, and revenue growth dashboards.',
  keywords: [
    'AI clinic management India',
    'physiotherapy clinic software',
    'orthopedic practice AI',
    'Clinic OS',
    'Cureomax',
    'no-show prevention clinic India',
    'patient follow-up automation India',
  ],
  authors: [{ name: 'Roy', url: 'https://cureomax.com/about' }],
  openGraph: {
    title: 'Cureomax — AI Growth Platform for Indian Specialty Clinics',
    description:
      'The AI platform that grows your clinic. Built for physiotherapy and orthopedic practices in Delhi NCR, India.',
    url: 'https://cureomax.com',
    siteName: 'Cureomax',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cureomax — AI Growth Platform for Indian Specialty Clinics',
    description: 'Built for physiotherapy and orthopedic practices in India.',
    images: ['/images/og-image.jpg'],
  },
  alternates: { canonical: 'https://cureomax.com' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  metadataBase: new URL('https://cureomax.com'),
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://cureomax.com/#organization',
      name: 'Cureomax',
      url: 'https://cureomax.com',
      description: 'AI healthcare growth platform for Indian physiotherapy and orthopedic clinics',
      foundingDate: '2025',
      founders: [{ '@type': 'Person', name: 'Roy', jobTitle: 'CEO & Founder' }],
      areaServed: { '@type': 'Country', name: 'India' },
      knowsAbout: [
        'AI clinic management',
        'Physiotherapy clinic software',
        'Orthopedic practice management',
        'Healthcare AI India',
        'Patient no-show prevention',
        'Clinic growth automation',
      ],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Clinic OS',
      applicationCategory: 'HealthcareApplication',
      operatingSystem: 'Web',
      description: 'AI-powered management system for Indian specialty clinics',
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSerif.variable} ${jetbrains.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-[var(--warm-white)] text-[var(--text-primary)] font-body antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <VoiceWidget />
        <Script
          src="https://elevenlabs.io/convai-widget/index.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Serif_Display, JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import Script from 'next/script'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import VoiceWidget from '@/components/layout/VoiceWidget'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-heading',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

const cabinet = localFont({
  src: '../public/fonts/CabinetGrotesk-Variable.woff2',
  variable: '--font-body',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
})

export const metadata: Metadata = {
  title: {
    default: 'Cureomax | AI Growth Platform for Indian Specialty Clinics',
    template: '%s | Cureomax',
  },
  description:
    'Clinic OS by Cureomax gives physiotherapy and orthopedic clinics in India AI-powered appointment management, automated patient follow-ups, and revenue growth dashboards.',
  keywords: [
    'AI clinic management India',
    'physiotherapy clinic software',
    'orthopedic practice AI',
    'Clinic OS',
    'Cureomax',
    'no-show prevention clinic India',
    'patient follow-up automation India',
  ],
  authors: [{ name: 'Roy', url: 'https://cureomax.com/about' }],
  openGraph: {
    title: 'Cureomax — AI Growth Platform for Indian Specialty Clinics',
    description:
      'The AI platform that grows your clinic. Built for physiotherapy and orthopedic practices in Delhi NCR, India.',
    url: 'https://cureomax.com',
    siteName: 'Cureomax',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cureomax — AI Growth Platform for Indian Specialty Clinics',
    description: 'Built for physiotherapy and orthopedic practices in India.',
    images: ['/images/og-image.jpg'],
  },
  alternates: { canonical: 'https://cureomax.com' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  metadataBase: new URL('https://cureomax.com'),
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://cureomax.com/#organization',
      name: 'Cureomax',
      url: 'https://cureomax.com',
      description: 'AI healthcare growth platform for Indian physiotherapy and orthopedic clinics',
      foundingDate: '2025',
      founders: [{ '@type': 'Person', name: 'Roy', jobTitle: 'CEO & Founder' }],
      areaServed: { '@type': 'Country', name: 'India' },
      knowsAbout: [
        'AI clinic management',
        'Physiotherapy clinic software',
        'Orthopedic practice management',
        'Healthcare AI India',
        'Patient no-show prevention',
        'Clinic growth automation',
      ],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Clinic OS',
      applicationCategory: 'HealthcareApplication',
      operatingSystem: 'Web',
      description: 'AI-powered management system for Indian specialty clinics',
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSerif.variable} ${jetbrains.variable} ${cabinet.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-[var(--warm-white)] text-[var(--text-primary)] font-body antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <VoiceWidget />
        <Script
          src="https://elevenlabs.io/convai-widget/index.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
