import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'
import ProblemStatement from '@/components/sections/ProblemStatement'
import SolutionSection from '@/components/sections/SolutionSection'
import DemoTeaser from '@/components/sections/DemoTeaser'
import SocialProof from '@/components/sections/SocialProof'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Cureomax | AI Growth Platform for Indian Specialty Clinics',
  description:
    'Clinic OS by Cureomax gives physiotherapy and orthopedic clinics in India AI-powered appointment management, automated patient follow-ups, and revenue growth dashboards.',
  alternates: { canonical: 'https://cureomax.com' },
}

const homepageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Cureomax — AI Growth Platform for Indian Specialty Clinics',
  url: 'https://cureomax.com',
  description: 'The AI platform that grows your clinic. Built for physiotherapy and orthopedic practices in Delhi NCR, India.',
  mainEntity: {
    '@type': 'SoftwareApplication',
    name: 'Clinic OS by Cureomax',
    applicationCategory: 'HealthcareApplication',
    offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <Hero />
      <StatsBar />
      <ProblemStatement />
      <SolutionSection />
      <DemoTeaser />
      <SocialProof />
      <CtaBanner />
    </>
  )
}
