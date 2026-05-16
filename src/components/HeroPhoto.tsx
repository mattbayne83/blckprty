/* Halftone b&w action-shot placeholder — pole + flyers + ramp + airborne kid. */
export function HeroPhoto() {
  return (
    <svg
      className="hero-photo"
      viewBox="0 0 800 1000"
      preserveAspectRatio="xMidYMid slice"
      aria-label="block-party action shot placeholder"
    >
      <defs>
        <pattern id="ht" width="6" height="6" patternUnits="userSpaceOnUse">
          <rect width="6" height="6" fill="#F6F2E6" />
          <circle cx="3" cy="3" r="1.6" fill="#0E0E0E" />
        </pattern>
        <pattern id="ht-thin" width="6" height="6" patternUnits="userSpaceOnUse">
          <rect width="6" height="6" fill="#F6F2E6" />
          <circle cx="3" cy="3" r="0.8" fill="#0E0E0E" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="800" height="600" fill="#F6F2E6" />
      <rect x="0" y="0" width="800" height="600" fill="url(#ht-thin)" opacity="0.35" />

      <circle cx="600" cy="180" r="120" fill="#0E0E0E" opacity="0.08" />
      <circle cx="600" cy="180" r="80" fill="#0E0E0E" opacity="0.06" />

      {/* Distant houses */}
      <g fill="#0E0E0E" opacity="0.92">
        <path d="M0 500 L60 460 L120 500 L120 600 L0 600 Z" />
        <path d="M120 500 L180 450 L240 500 L240 600 L120 600 Z" />
        <path d="M240 510 L300 470 L360 510 L360 600 L240 600 Z" />
        <path d="M360 490 L440 440 L520 490 L520 600 L360 600 Z" />
        <path d="M520 510 L580 460 L640 510 L640 600 L520 600 Z" />
        <path d="M640 500 L720 450 L800 500 L800 600 L640 600 Z" />
      </g>

      {/* Telephone pole + stapled flyers */}
      <g>
        <rect x="92" y="160" width="14" height="440" fill="#0E0E0E" />
        <rect x="40" y="220" width="120" height="6" fill="#0E0E0E" />
        <rect x="60" y="190" width="80" height="6" fill="#0E0E0E" />
        <g transform="translate(108 330) rotate(-6)">
          <rect width="46" height="56" fill="#F6F2E6" stroke="#0E0E0E" strokeWidth="2" />
          <rect x="6" y="8" width="32" height="3" fill="#0E0E0E" />
          <rect x="6" y="14" width="26" height="3" fill="#0E0E0E" />
          <rect x="6" y="22" width="18" height="3" fill="#0E0E0E" />
        </g>
        <g transform="translate(50 390) rotate(4)">
          <rect width="50" height="60" fill="#F5E300" stroke="#0E0E0E" strokeWidth="2" />
          <rect x="6" y="8" width="38" height="4" fill="#0E0E0E" />
          <rect x="6" y="16" width="30" height="3" fill="#0E0E0E" />
          <rect x="6" y="22" width="22" height="3" fill="#0E0E0E" />
          <rect x="6" y="44" width="38" height="6" fill="#0E0E0E" />
        </g>
      </g>

      {/* Asphalt foreground */}
      <rect x="0" y="600" width="800" height="400" fill="#0E0E0E" />
      <rect x="0" y="600" width="800" height="400" fill="url(#ht)" opacity="0.04" />

      {/* Lane line */}
      <g stroke="#F6F2E6" strokeWidth="6" strokeDasharray="40 30">
        <line x1="0" y1="780" x2="800" y2="780" />
      </g>

      {/* Ramp */}
      <g transform="translate(420 600)">
        <path d="M 0 200 C 100 200, 220 160, 300 60 L 300 200 Z" fill="#F6F2E6" />
        <rect x="298" y="56" width="6" height="6" fill="#F6F2E6" />
        <line x1="80" y1="195" x2="80" y2="200" stroke="#0E0E0E" strokeWidth="2" />
        <line x1="160" y1="180" x2="160" y2="200" stroke="#0E0E0E" strokeWidth="2" />
        <line x1="230" y1="135" x2="230" y2="200" stroke="#0E0E0E" strokeWidth="2" />
        <rect x="-10" y="200" width="320" height="6" fill="#F6F2E6" />
      </g>

      {/* Caution tape strip */}
      <g transform="translate(0 720) rotate(-3)">
        <rect x="-20" y="0" width="900" height="22" fill="#F5E300" stroke="#0E0E0E" strokeWidth="2" />
        <g transform="translate(-20 0)">
          <rect x="0" y="0" width="20" height="22" fill="#0E0E0E" />
          <rect x="40" y="0" width="20" height="22" fill="#0E0E0E" />
          <rect x="80" y="0" width="20" height="22" fill="#0E0E0E" transform="skewX(-30)" />
        </g>
        <g fontFamily="var(--font-display)" fontWeight="900" fontSize="14" fill="#0E0E0E" letterSpacing="2">
          <text x="40" y="16">CAUTION · SESSION IN PROGRESS · CAUTION · SESSION IN PROGRESS · CAUTION</text>
        </g>
      </g>

      {/* Airborne scooter kid */}
      <g transform="translate(660 470) rotate(-12)" fill="#F6F2E6">
        <circle cx="0" cy="0" r="16" />
        <path d="M-6 12 L-12 60 L4 64 L10 16 Z" />
        <path d="M-4 60 L-26 92 L-18 100 L4 70 Z" />
        <path d="M6 62 L24 90 L18 100 L0 72 Z" />
        <path d="M-8 22 L-40 18 L-44 28 L-10 32 Z" />
        <path d="M8 22 L46 6 L50 14 L12 30 Z" />
        <rect x="-22" y="98" width="46" height="6" />
        <rect x="22" y="64" width="6" height="40" />
        <rect x="14" y="60" width="22" height="6" />
        <circle cx="-22" cy="106" r="8" />
        <circle cx="26" cy="106" r="8" />
      </g>

      {/* Watching kids */}
      <g transform="translate(180 880)" fill="#F6F2E6">
        <circle cx="0" cy="0" r="9" />
        <rect x="-7" y="9" width="14" height="28" />
        <rect x="-8" y="37" width="6" height="20" />
        <rect x="2" y="37" width="6" height="20" />
      </g>
      <g transform="translate(220 890)" fill="#F6F2E6">
        <circle cx="0" cy="0" r="7" />
        <rect x="-6" y="7" width="12" height="22" />
        <rect x="-6" y="29" width="5" height="16" />
        <rect x="1" y="29" width="5" height="16" />
      </g>

      <rect x="6" y="6" width="788" height="988" fill="none" stroke="#0E0E0E" strokeWidth="2" opacity="0.4" />
    </svg>
  );
}
