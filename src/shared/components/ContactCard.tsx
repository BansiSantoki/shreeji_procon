import React from 'react'

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
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={[
        'group relative flex min-h-[clamp(92px,24vw,112px)] w-full flex-col items-center overflow-hidden rounded-[16px] border px-2 pt-2 pb-2 text-center backdrop-blur-md',
        'transition-[transform,box-shadow,border-color] duration-300 ease-premium will-change-transform',
        'hover:-translate-y-1 hover:scale-[1.02] focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink',
        'active:scale-[0.98] active:duration-150',
        highlighted
          ? 'border-gold/90 bg-[rgb(58_44_10/0.72)] shadow-[0_0_18px_rgba(255,185,0,0.45),inset_0_0_26px_rgba(255,185,0,0.28),inset_0_1px_0_rgba(255,230,150,0.5)] hover:shadow-[0_0_28px_rgba(255,185,0,0.65),inset_0_0_30px_rgba(255,185,0,0.34),inset_0_1px_0_rgba(255,230,150,0.55)]'
          : 'border-white/20 bg-glass shadow-[0_10px_24px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12),inset_-14px_-14px_28px_-18px_rgba(255,185,0,0.35)] hover:border-gold/70 hover:shadow-[0_12px_28px_rgba(0,0,0,0.5),0_0_18px_rgba(255,185,0,0.3),inset_0_1px_0_rgba(255,255,255,0.14),inset_-14px_-14px_28px_-16px_rgba(255,185,0,0.5)]',
      ].join(' ')}
    >
      <span
        className={[
          'flex size-8 shrink-0 items-center justify-center text-gold transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:scale-110',
          iconBadge ? 'rounded-full bg-gold shadow-[0_0_12px_rgba(255,185,0,0.55)]' : '',
        ].join(' ')}
      >
        {icon}
      </span>
      <span className="mt-1 whitespace-nowrap font-sans text-[clamp(13px,4vw,17px)] font-extrabold leading-tight text-white">
        {title}
      </span>
      <span className="mt-0.5 mb-1.5 font-sans text-[clamp(10px,3vw,12px)] font-semibold leading-snug break-words text-white/95">
        {detail}
      </span>
      <span aria-hidden className="mt-auto block h-[3px] w-[clamp(36px,11vw,48px)] shrink-0 rounded-full bg-gold" />
    </a>
  )
}
