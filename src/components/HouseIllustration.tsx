export default function HouseIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 160"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="wobble">
        <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
      </filter>
      <g
        filter="url(#wobble)"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* roof */}
        <path d="M20 78 L100 22 L180 78" />
        {/* roof tiles hint */}
        <path d="M45 66 L45 60 M75 46 L75 40 M125 46 L125 40 M155 66 L155 60" opacity="0.5" />
        {/* walls */}
        <path d="M34 72 L34 140 L166 140 L166 72" />
        {/* leaning door (slightly crooked, like an old house) */}
        <path d="M88 140 L86 96 L118 92 L120 140" />
        {/* window left */}
        <rect x="50" y="96" width="26" height="26" rx="2" />
        <path d="M50 109 L76 109 M63 96 L63 122" opacity="0.6" />
        {/* window right */}
        <rect x="128" y="96" width="24" height="24" rx="2" />
        <path d="M128 108 L152 108 M140 96 L140 120" opacity="0.6" />
        {/* crack / weathering detail */}
        <path d="M148 74 L156 92 L150 112" opacity="0.4" strokeWidth="2" />
        {/* ground line */}
        <path d="M10 140 L190 140" opacity="0.3" />
      </g>
    </svg>
  );
}
