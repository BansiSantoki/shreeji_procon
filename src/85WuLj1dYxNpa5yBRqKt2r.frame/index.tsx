import React from 'react'
import { motion, MotionConfig } from 'framer-motion'
import { Phone, Globe, HardHat, Building2, MapPin, Mail } from 'lucide-react'

import { SpcLogo } from '../shared/components/SpcLogo'
import { ContactCard } from '../shared/components/ContactCard'

type Props = Partial<typeof args>

const EASE = [0.23, 1, 0.32, 1] as const

export default function Home(props: Props) {
  const { phone, website, email, address, highlightFirst } = { ...args, ...props }
  const phoneHref = `tel:${phone.replace(/[^\d+]/g, '')}`
  const siteUrl = `https://${website.replace(/^https?:\/\//, '')}`
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

  return (
    <MotionConfig reducedMotion="user">
      {/* Fixed poster background — never scrolls, never animates */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-navy">
        <div className="poster-fill absolute inset-0" />
        <div className="poster-bg absolute inset-0" />
      </div>

      <main className="relative mx-auto flex w-full max-w-[460px] flex-col px-[max(14px,4vw)] pb-[max(150px,17svh)] sm:max-w-[520px] sm:px-6">
        {/* Header sits over the dark sky, cards start below the golden curve */}
        <motion.header
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="flex min-h-[min(34svh,360px)] flex-col items-center pt-[max(16px,2.8svh)] text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: EASE, delay: 0.05 }}
          >
            <SpcLogo className="h-[clamp(58px,8.6svh,84px)] w-auto drop-shadow-[0_4px_14px_rgba(0,0,0,0.5)]" />
          </motion.div>
          <h1 className="mt-2 font-display text-[clamp(22px,7.4vw,32px)] font-extrabold leading-none tracking-[0.01em] text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.55)]">
            SHREEJI PROCON
          </h1>
          <p className="mt-1.5 font-display text-[clamp(12px,3.9vw,16px)] font-medium tracking-[0.16em] text-white/90">
            Construction Company
          </p>
          <span className="divider-glow mt-3 block h-[3px] w-14 rounded-full bg-gold" />
        </motion.header>

        <nav aria-label="Contact Shreeji Procon" className="mt-9 sm:mt-10">
          <ul className="grid grid-cols-2 gap-[clamp(8px,2.4vw,12px)] sm:gap-4">
            {[
              {
                key: 'contact',
                icon: <Phone className="size-[18px] fill-ink stroke-ink" strokeWidth={1.5} />,
                iconBadge: true,
                title: 'Contact Us',
                detail: <span className="text-[clamp(13px,4vw,17px)] font-semibold tracking-wide">{phone}</span>,
                href: phoneHref,
                label: `Call ${phone}`,
                highlighted: highlightFirst,
              },
              {
                key: 'website',
                icon: <Globe className="size-9" strokeWidth={1.6} />,
                title: 'Our Website',
                detail: <>{website.replace('www.', 'www.\u200b')}</>,
                href: siteUrl,
                external: true,
                label: `Visit ${website}`,
              },
              {
                key: 'services',
                icon: <HardHat className="size-9" strokeWidth={1.6} />,
                title: 'Our Services',
                detail: <>Explore Our<br />Construction Services</>,
                href: `${siteUrl}/services`,
                external: true,
                label: 'Explore our construction services',
              },
              {
                key: 'projects',
                icon: <Building2 className="size-9" strokeWidth={1.6} />,
                title: 'Our Projects',
                detail: <>Explore Our<br />Completed Projects</>,
                href: `${siteUrl}/projects`,
                external: true,
                label: 'Explore our completed projects',
              },
              {
                key: 'location',
                icon: <MapPin className="size-9" strokeWidth={1.6} />,
                title: 'Our Location',
                detail: <span className="text-[clamp(10px,3vw,13px)] leading-snug">{address}</span>,
                href: mapsUrl,
                external: true,
                label: `Open ${address} in Google Maps`,
              },
              {
                key: 'email',
                icon: <Mail className="size-9" strokeWidth={1.6} />,
                title: 'Email Us',
                detail: (
                  <>
                    {email.split('@')[0]}@<wbr />
                    {email.split('@')[1]}
                  </>
                ),
                href: `mailto:${email}`,
                label: `Email ${email}`,
              },
            ].map(({ key, ...card }, i) => (
              <motion.li
                key={key}
                className="flex"
                initial={{ opacity: 0, y: 20, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22, delay: 0.18 + i * 0.05 }}
              >
                <ContactCard {...card} />
              </motion.li>
            ))}
          </ul>
        </nav>
      </main>
    </MotionConfig>
  )
}

export const args = {
  phone: '+91 78743 82177',
  website: 'www.shreejiprocon.com',
  email: 'shreejiprocon2003@gmail.com',
  address: '504 Harmony Icon, 100 FT Hebatpur Road, Thaltej, Ahmedabad – 380069',
  highlightFirst: true,
}

export const argTypes = {
  phone: { control: 'text' },
  website: { control: 'text' },
  email: { control: 'text' },
  address: { control: 'text' },
  highlightFirst: { control: 'boolean' },
}
