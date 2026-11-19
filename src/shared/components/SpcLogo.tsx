import React from 'react'

/**
 * SHREEJI PROCON "SPC" hexagon mark, traced 1:1 from the supplied logo
 * (1234 × 1274 artwork) so it renders crisp and transparent on the dark poster.
 * White left half, gold right half, two building silhouettes, SPC monogram.
 */
export function SpcLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="60 30 1112 1248"
      className={className}
      role="img"
      aria-label="Shreeji Procon logo"
    >
      <path
        fill="#FFFFFF"
        d="M615 42 L70 372 L70 958 L603 1265 L603 580 L410 762 L410 1022 L378 1000 L378 765 L265 862 L265 930 L212 926 L212 456 L615 216 Z"
      />
      <path
        fill="#FFB900"
        d="M615 42 L1160 372 L1160 960 L628 1265 L628 580 L810 738 L810 1022 L845 1002 L845 765 L962 862 L962 930 L1020 902 L1020 452 L615 216 Z"
      />
      <text
        x="622"
        y="565"
        textAnchor="middle"
        fontFamily="Montserrat, Arial, sans-serif"
        fontWeight={800}
        fontSize={238}
        letterSpacing={-6}
      >
        <tspan fill="#FFFFFF">S</tspan>
        <tspan fill="#FFB900">P</tspan>
        <tspan fill="#FFFFFF">C</tspan>
      </text>
    </svg>
  )
}
