// Animated SVG hero illustration
export function HeroGraphic() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto" style={{ aspectRatio: '1.2' }}>
      <svg viewBox="0 0 520 440" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Background glow */}
        <defs>
          <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <linearGradient id="amberGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
          <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <filter id="shadow1" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#6366F1" floodOpacity="0.15" />
          </filter>
          <filter id="shadow2" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#000" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Ambient glow blobs */}
        <circle cx="160" cy="200" r="180" fill="url(#glow1)">
          <animate attributeName="r" values="180;200;180" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="380" cy="260" r="140" fill="url(#glow2)">
          <animate attributeName="r" values="140;160;140" dur="5s" repeatCount="indefinite" />
        </circle>

        {/* Grid dots pattern */}
        {Array.from({length: 8}).map((_, row) =>
          Array.from({length: 10}).map((_, col) => (
            <circle key={`${row}-${col}`} cx={60 + col * 44} cy={40 + row * 50} r="1" fill="rgba(148,163,184,0.15)" />
          ))
        )}

        {/* Main browser window card */}
        <g filter="shadow2">
          <rect x="80" y="80" width="280" height="200" rx="12" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          {/* Title bar */}
          <rect x="80" y="80" width="280" height="32" rx="12" fill="rgba(255,255,255,0.03)" />
          <rect x="80" y="100" width="280" height="12" fill="url(#cardGrad)" />
          <circle cx="98" cy="96" r="4" fill="#F43F5E" opacity="0.8" />
          <circle cx="112" cy="96" r="4" fill="#F59E0B" opacity="0.8" />
          <circle cx="126" cy="96" r="4" fill="#22C55E" opacity="0.8" />
          {/* Content lines */}
          <rect x="100" y="128" width="100" height="8" rx="4" fill="url(#purpleGrad)" opacity="0.6" />
          <rect x="100" y="146" width="180" height="4" rx="2" fill="rgba(148,163,184,0.15)" />
          <rect x="100" y="158" width="150" height="4" rx="2" fill="rgba(148,163,184,0.1)" />
          {/* CTA button */}
          <rect x="100" y="180" width="90" height="28" rx="14" fill="url(#purpleGrad)">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
          </rect>
          <text x="125" y="198" fontSize="9" fill="white" fontWeight="600" fontFamily="sans-serif" textAnchor="middle">Buy Now</text>
          {/* Image placeholder */}
          <rect x="210" y="180" width="130" height="80" rx="6" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.15)" strokeWidth="0.5" strokeDasharray="3 3" />
          <circle cx="275" cy="215" r="12" fill="rgba(99,102,241,0.15)" />
          <path d="M271 215l4-4 4 4M275 211v8" stroke="rgba(99,102,241,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Floating analytics card */}
        <g filter="shadow1" style={{ animation: 'float 5s ease-in-out infinite' }}>
          <animateTransform attributeName="transform" type="translate" values="0,0;0,-8;0,0" dur="5s" repeatCount="indefinite" />
          <rect x="310" y="130" width="160" height="100" rx="10" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <text x="328" y="154" fontSize="9" fill="rgba(148,163,184,0.6)" fontFamily="sans-serif">Monthly Revenue</text>
          <text x="328" y="174" fontSize="18" fill="white" fontWeight="700" fontFamily="sans-serif">$24,500</text>
          {/* Mini chart */}
          <polyline points="328,210 345,200 362,205 379,192 396,196 413,185 430,178 450,172" fill="none" stroke="url(#tealGrad)" strokeWidth="2" strokeLinecap="round">
            <animate attributeName="stroke-dashoffset" from="200" to="0" dur="2s" fill="freeze" />
            <animate attributeName="stroke-dasharray" from="0 200" to="200 0" dur="2s" fill="freeze" />
          </polyline>
          <text x="440" y="169" fontSize="8" fill="#14B8A6" fontWeight="600">↑32%</text>
        </g>

        {/* Floating color palette card */}
        <g style={{ animation: 'float 6s ease-in-out 1s infinite' }}>
          <animateTransform attributeName="transform" type="translate" values="0,0;0,-10;0,0" dur="6s" repeatCount="indefinite" />
          <rect x="40" y="300" width="150" height="80" rx="10" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <text x="58" y="324" fontSize="9" fill="rgba(148,163,184,0.6)" fontFamily="sans-serif">Brand Colors</text>
          <circle cx="68" cy="348" r="12" fill="#6366F1" />
          <circle cx="98" cy="348" r="12" fill="#F59E0B" />
          <circle cx="128" cy="348" r="12" fill="#14B8A6" />
          <circle cx="158" cy="348" r="12" fill="#F43F5E" />
        </g>

        {/* Floating SEO metrics */}
        <g style={{ animation: 'float 4.5s ease-in-out 0.5s infinite' }}>
          <animateTransform attributeName="transform" type="translate" values="0,0;0,-6;0,0" dur="4.5s" repeatCount="indefinite" />
          <rect x="220" y="310" width="130" height="70" rx="10" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <text x="238" y="332" fontSize="9" fill="rgba(148,163,184,0.6)" fontFamily="sans-serif">Search Rank</text>
          <text x="238" y="356" fontSize="20" fill="#F59E0B" fontWeight="700" fontFamily="sans-serif">#1</text>
          <text x="268" y="354" fontSize="9" fill="rgba(148,163,184,0.4)" fontFamily="sans-serif">for 12 keywords</text>
        </g>

        {/* Connection lines */}
        <line x1="360" y1="230" x2="285" y2="310" stroke="rgba(99,102,241,0.1)" strokeWidth="1" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="190" y1="280" x2="115" y2="300" stroke="rgba(99,102,241,0.1)" strokeWidth="1" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="2s" repeatCount="indefinite" />
        </line>

        {/* Sparkle particles */}
        <circle cx="400" cy="100" r="2" fill="#6366F1" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.1;0.6" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="70" cy="200" r="1.5" fill="#F59E0B" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.1;0.5" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="460" cy="300" r="2" fill="#14B8A6" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
