// Rich SVG illustrations for each service category

export function WebServiceIllustration() {
  return (
    <svg viewBox="0 0 200 160" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="ws1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#6366F1"/><stop offset="100%" stopColor="#8B5CF6"/></linearGradient>
        <linearGradient id="ws2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1E293B"/><stop offset="100%" stopColor="#0F172A"/></linearGradient>
        <filter id="wsGlow"><feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#6366F1" floodOpacity="0.25"/></filter>
      </defs>
      {/* Browser window */}
      <g filter="wsGlow">
        <rect x="20" y="20" width="160" height="110" rx="8" fill="url(#ws2)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
        <rect x="20" y="20" width="160" height="22" rx="8" fill="rgba(255,255,255,0.03)"/>
        <rect x="20" y="38" width="160" height="4" fill="url(#ws2)"/>
        <circle cx="33" cy="31" r="3" fill="#F43F5E" opacity="0.8"/><circle cx="43" cy="31" r="3" fill="#F59E0B" opacity="0.8"/><circle cx="53" cy="31" r="3" fill="#22C55E" opacity="0.8"/>
        {/* URL bar */}
        <rect x="65" y="27" width="80" height="8" rx="4" fill="rgba(255,255,255,0.04)"/>
        <rect x="69" y="30" width="40" height="2" rx="1" fill="rgba(99,102,241,0.4)"/>
        {/* Content */}
        <rect x="30" y="52" width="60" height="5" rx="2.5" fill="url(#ws1)" opacity="0.5"/>
        <rect x="30" y="62" width="100" height="3" rx="1.5" fill="rgba(148,163,184,0.12)"/>
        <rect x="30" y="70" width="80" height="3" rx="1.5" fill="rgba(148,163,184,0.08)"/>
        {/* CTA button */}
        <rect x="30" y="82" width="50" height="16" rx="8" fill="url(#ws1)">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite"/>
        </rect>
        {/* Image placeholder */}
        <rect x="100" y="52" width="68" height="56" rx="4" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.12)" strokeWidth="0.5" strokeDasharray="2 2"/>
        <circle cx="134" cy="75" r="8" fill="rgba(99,102,241,0.1)"/>
        <path d="M131 75l3-3 3 3M134 72v6" stroke="rgba(99,102,241,0.3)" strokeWidth="1" strokeLinecap="round"/>
      </g>
      {/* Decorative elements */}
      <circle cx="15" cy="80" r="4" fill="#6366F1" opacity="0.15"><animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite"/></circle>
      <circle cx="190" cy="40" r="3" fill="#8B5CF6" opacity="0.2"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite"/></circle>
    </svg>
  );
}

export function BrandingIllustration() {
  return (
    <svg viewBox="0 0 200 160" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="br1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#F59E0B"/><stop offset="100%" stopColor="#EF4444"/></linearGradient>
        <filter id="brGlow"><feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#F59E0B" floodOpacity="0.2"/></filter>
      </defs>
      {/* Logo shape */}
      <g filter="brGlow">
        <circle cx="80" cy="70" r="35" fill="none" stroke="url(#br1)" strokeWidth="2" opacity="0.6">
          <animateTransform attributeName="transform" type="rotate" values="0 80 70;360 80 70" dur="20s" repeatCount="indefinite"/>
        </circle>
        <circle cx="80" cy="70" r="25" fill="none" stroke="url(#br1)" strokeWidth="1.5" opacity="0.4">
          <animateTransform attributeName="transform" type="rotate" values="360 80 70;0 80 70" dur="15s" repeatCount="indefinite"/>
        </circle>
        <circle cx="80" cy="70" r="15" fill="url(#br1)" opacity="0.15"/>
        <text x="80" y="70" textAnchor="middle" dy="0.35em" fontSize="12" fontWeight="700" fill="#F59E0B" fontFamily="serif" opacity="0.8">A</text>
      </g>
      {/* Color swatches */}
      <g>
        <rect x="130" y="40" width="24" height="24" rx="6" fill="#6366F1" opacity="0.8"><animate attributeName="y" values="40;36;40" dur="3s" repeatCount="indefinite"/></rect>
        <rect x="130" y="72" width="24" height="24" rx="6" fill="#F59E0B" opacity="0.8"><animate attributeName="y" values="72;68;72" dur="3.5s" repeatCount="indefinite"/></rect>
        <rect x="130" y="104" width="24" height="24" rx="6" fill="#14B8A6" opacity="0.8"><animate attributeName="y" values="104;100;104" dur="4s" repeatCount="indefinite"/></rect>
        <rect x="162" y="56" width="24" height="24" rx="6" fill="#F43F5E" opacity="0.8"><animate attributeName="y" values="56;52;56" dur="3.2s" repeatCount="indefinite"/></rect>
        <rect x="162" y="88" width="24" height="24" rx="6" fill="#818CF8" opacity="0.8"><animate attributeName="y" values="88;84;88" dur="3.8s" repeatCount="indefinite"/></rect>
      </g>
      {/* Typography lines */}
      <rect x="30" y="120" width="40" height="4" rx="2" fill="rgba(245,158,11,0.3)"/>
      <rect x="30" y="130" width="60" height="3" rx="1.5" fill="rgba(245,158,11,0.15)"/>
      <rect x="30" y="138" width="50" height="3" rx="1.5" fill="rgba(245,158,11,0.1)"/>
    </svg>
  );
}

export function GrowthIllustration() {
  return (
    <svg viewBox="0 0 200 160" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="gr1" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#14B8A6"/><stop offset="100%" stopColor="#06B6D4"/></linearGradient>
        <linearGradient id="gr2" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stopColor="#14B8A6" stopOpacity="0.1"/><stop offset="100%" stopColor="#14B8A6" stopOpacity="0"/></linearGradient>
      </defs>
      {/* Chart area */}
      <path d="M30 130 L60 110 L90 115 L120 90 L150 70 L170 50" fill="none" stroke="url(#gr1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <animate attributeName="stroke-dashoffset" from="300" to="0" dur="2s" fill="freeze"/>
        <animate attributeName="stroke-dasharray" from="0 300" to="300 0" dur="2s" fill="freeze"/>
      </path>
      <path d="M30 130 L60 110 L90 115 L120 90 L150 70 L170 50 L170 130 L30 130Z" fill="url(#gr2)">
        <animate attributeName="opacity" from="0" to="1" dur="2s" fill="freeze"/>
      </path>
      {/* Data points */}
      {[[30,130],[60,110],[90,115],[120,90],[150,70],[170,50]].map(([cx,cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="4" fill="#0B0F1A" stroke="url(#gr1)" strokeWidth="2">
            <animate attributeName="r" values="3;5;3" dur="2s" begin={`${i*0.3}s`} repeatCount="indefinite"/>
          </circle>
        </g>
      ))}
      {/* Rising arrow */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-4;0,0" dur="2s" repeatCount="indefinite"/>
        <path d="M170 44 L170 30 L156 30" fill="none" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      {/* Percentage badge */}
      <rect x="140" y="24" width="44" height="20" rx="10" fill="rgba(20,184,166,0.15)" stroke="rgba(20,184,166,0.3)" strokeWidth="0.5">
        <animate attributeName="y" values="24;20;24" dur="3s" repeatCount="indefinite"/>
      </rect>
      <text x="162" y="34" textAnchor="middle" dy="0.35em" fontSize="9" fontWeight="700" fill="#14B8A6" fontFamily="sans-serif">+127%</text>
      {/* Grid lines */}
      {[50,70,90,110,130].map((y) => <line key={y} x1="30" y1={y} x2="170" y2={y} stroke="rgba(148,163,184,0.05)" strokeWidth="0.5"/>)}
      {/* Axis labels */}
      <text x="28" y="133" textAnchor="end" fontSize="7" fill="rgba(148,163,184,0.3)" fontFamily="sans-serif">0</text>
      <text x="28" y="53" textAnchor="end" fontSize="7" fill="rgba(148,163,184,0.3)" fontFamily="sans-serif">100</text>
    </svg>
  );
}
