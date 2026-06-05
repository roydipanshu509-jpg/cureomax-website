import Link from 'next/link'

const footerLinks = {
  Product: [
    { href: '/clinic-os', label: 'Clinic OS' },
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
  ],
  Company: [
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/careers', label: 'Careers' },
  ],
  Support: [
    { href: '/demo', label: 'Book a Demo' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy Policy' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#032D1F] text-[#FAFAF8]">
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,5vw,4rem)] py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="block mb-4">
              <span className="font-heading text-2xl text-[#FAFAF8]">Cureomax</span>
            </Link>
            <p className="font-body text-sm text-[#FAFAF8]/60 leading-relaxed">AI growth platform for Indian specialty clinics.</p>
          </div>
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="font-body text-xs uppercase tracking-widest text-[#1B7A4E] mb-4">{group}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.href}><Link href={link.href} className="font-body text-sm text-[#FAFAF8]/60 hover:text-[#FAFAF8]">{link.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[#FAFAF8]/10 pt-8 flex justify-between items-center">
          <p className="font-body text-xs text-[#FAFAF8]/40">&copy; {new Date().getFullYear()} Cureomax. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
