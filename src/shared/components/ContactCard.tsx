import React from 'react'
import { motion } from 'framer-motion'

type ContactCardProps = {
  icon: React.ReactNode
  /** Phone-style solid gold disc behind the icon */
  iconBadge?: boolean
  title: string
  detail: React.ReactNode
  href: string
  label: string
  external?: boolean
  highlighted?: boolean
}

export function ContactCard({ icon, iconBadge, title, detail, href, label, external, highlighted }: ContactCardProps) {
  return (
    <motion.a
      href={href}
      aria-label={label}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 350, damping: 24 }}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={[
        'group relative flex min-h-[clamp(84px,22vw,102px)] w-full flex-col items-center overflow-hidden rounded-[14px] border px-1.5 pt-1.5 pb-1.5 text-center backdrop-blur-md',
        'transition-[transform,box-shadow,border-color] duration-300 ease-premium will-change-transform',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink',
        highlighted
          ? 'border-gold/90 bg-[rgb(58_44_10/0.72)] shadow-[0_0_18px_rgba(255,185,0,0.45),inset_0_0_26px_rgba(255,185,0,0.28),inset_0_1px_0_rgba(255,230,150,0.5)] hover:shadow-[0_0_28px_rgba(255,185,0,0.65),inset_0_0_30px_rgba(255,185,0,0.34),inset_0_1px_0_rgba(255,230,150,0.55)]'
          : 'border-white/20 bg-glass shadow-[0_10px_24px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12),inset_-14px_-14px_28px_-18px_rgba(255,185,0,0.35)] hover:border-gold/70 hover:shadow-[0_12px_28px_rgba(0,0,0,0.5),0_0_18px_rgba(255,185,0,0.3),inset_0_1px_0_rgba(255,255,255,0.14),inset_-14px_-14px_28px_-16px_rgba(255,185,0,0.5)]',
      ].join(' ')}
    >
      <span
        className={[
          'flex size-7 shrink-0 items-center justify-center text-gold transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:scale-110',
          iconBadge ? 'rounded-full bg-gold shadow-[0_0_12px_rgba(255,185,0,0.55)]' : '',
        ].join(' ')}
      >
        {icon}
      </span>
      <span className="mt-0.5 whitespace-nowrap font-sans text-[clamp(12px,3.7vw,16px)] font-extrabold leading-tight text-white">
        {title}
      </span>
      <span className="mt-0.5 mb-1 font-sans text-[clamp(9px,2.8vw,11px)] font-semibold leading-snug break-words text-white/95">
        {detail}
      </span>
      <span
        aria-hidden
        className="mt-auto block h-[3px] w-[clamp(36px,11vw,48px)] shrink-0 rounded-full bg-gold transition-[width,box-shadow] duration-300 group-hover:w-[clamp(44px,13vw,56px)] group-hover:shadow-[0_0_10px_rgba(255,185,0,0.7)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 ease-premium group-hover:translate-x-full"
      />
    </motion.a>
  )
}
