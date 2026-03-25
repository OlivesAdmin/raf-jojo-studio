// ===== Hand-crafted SVG illustrations for each section =====

export function HeroIllustration() {
  return (
    <svg viewBox="0 0 560 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="hg1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#818CF8"/><stop offset="100%" stopColor="#C084FC"/></linearGradient>
        <linearGradient id="hg2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#F59E0B"/><stop offset="100%" stopColor="#F97316"/></linearGradient>
        <linearGradient id="hg3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#14B8A6"/><stop offset="100%" stopColor="#06B6D4"/></linearGradient>
        <linearGradient id="hg4" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#1E293B"/><stop offset="100%" stopColor="#0F172A"/></linearGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="8" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
        <filter id="card-shadow"><feDropShadow dx="0" dy="12" stdDeviation="20" floodColor="#000" floodOpacity="0.4"/></filter>
        <filter id="glow-indigo"><feDropShadow dx="0" dy="4" stdDeviation="12" floodColor="#818CF8" floodOpacity="0.3"/></filter>
      </defs>

      {/* Ambient orbs */}
      <circle cx="140" cy="220" r="200" fill="#818CF8" opacity="0.04"><animate attributeName="r" values="200;220;200" dur="6s" repeatCount="indefinite"/></circle>
      <circle cx="420" cy="180" r="160" fill="#C084FC" opacity="0.03"><animate attributeName="r" values="160;180;160" dur="8s" repeatCount="indefinite"/></circle>
      <circle cx="300" cy="400" r="120" fill="#F59E0B" opacity="0.025"/>

      {/* Decorative grid */}
      <g opacity="0.08">{Array.from({length:12}).map((_,r)=>Array.from({length:14}).map((_,c)=><circle key={`${r}${c}`} cx={30+c*40} cy={20+r*40} r="0.8" fill="#94A3B8"/>))}</g>

      {/* ===== Main browser window ===== */}
      <g filter="card-shadow">
        <rect x="60" y="60" width="310" height="230" rx="16" fill="url(#hg4)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
        {/* Chrome bar */}
        <rect x="60" y="60" width="310" height="36" rx="16" fill="rgba(255,255,255,0.02)"/>
        <rect x="60" y="84" width="310" height="12" fill="url(#hg4)"/>
        <circle cx="82" cy="78" r="5" fill="#F43F5E" opacity="0.9"/>
        <circle cx="98" cy="78" r="5" fill="#F59E0B" opacity="0.9"/>
        <circle cx="114" cy="78" r="5" fill="#22C55E" opacity="0.9"/>
        <rect x="150" y="72" width="140" height="12" rx="6" fill="rgba(255,255,255,0.04)"/>
        {/* Nav bar */}
        <rect x="80" y="108" width="36" height="6" rx="3" fill="url(#hg1)" opacity="0.7"/>
        <rect x="126" y="108" width="28" height="6" rx="3" fill="rgba(255,255,255,0.08)"/>
        <rect x="164" y="108" width="32" height="6" rx="3" fill="rgba(255,255,255,0.08)"/>
        <rect x="300" y="104" width="52" height="14" rx="7" fill="url(#hg1)" opacity="0.8"/>
        {/* Hero section inside browser */}
        <rect x="80" y="132" width="130" height="10" rx="5" fill="rgba(255,255,255,0.15)"/>
        <rect x="80" y="150" width="180" height="6" rx="3" fill="rgba(255,255,255,0.06)"/>
        <rect x="80" y="164" width="150" height="6" rx="3" fill="rgba(255,255,255,0.04)"/>
        {/* CTA button */}
        <rect x="80" y="186" width="80" height="28" rx="14" fill="url(#hg1)">
          <animate attributeName="opacity" values="0.85;1;0.85" dur="3s" repeatCount="indefinite"/>
        </rect>
        <text x="100" y="204" fontSize="8" fill="white" fontWeight="600" fontFamily="sans-serif">Buy Now</text>
        <rect x="170" y="186" width="68" height="28" rx="14" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
        <text x="183" y="204" fontSize="8" fill="rgba(255,255,255,0.4)" fontWeight="500" fontFamily="sans-serif">Pricing</text>
        {/* Image area */}
        <rect x="80" y="230" width="270" height="44" rx="8" fill="rgba(129,140,248,0.04)" stroke="rgba(129,140,248,0.08)" strokeDasharray="4 3"/>
        <rect x="86" y="236" width="80" height="32" rx="6" fill="rgba(129,140,248,0.06)"/>
        <rect x="172" y="236" width="80" height="32" rx="6" fill="rgba(192,132,252,0.06)"/>
        <rect x="258" y="236" width="86" height="32" rx="6" fill="rgba(20,184,166,0.06)"/>
      </g>

      {/* ===== Floating analytics card ===== */}
      <g filter="glow-indigo" className="float-slow">
        <rect x="330" y="100" width="185" height="115" rx="14" fill="#0F172A" stroke="rgba(129,140,248,0.12)" strokeWidth="1"/>
        <text x="350" y="126" fontSize="10" fill="#64748B" fontFamily="sans-serif" fontWeight="500">Monthly Revenue</text>
        <text x="350" y="152" fontSize="24" fill="white" fontWeight="800" fontFamily="sans-serif">$48,200</text>
        <text x="455" y="148" fontSize="10" fill="#14B8A6" fontWeight="700">+24%</text>
        {/* Sparkline chart */}
        <polyline points="350,192 370,185 390,188 405,176 420,180 440,168 460,162 480,155 498,148" fill="none" stroke="url(#hg3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="200" strokeDashoffset="200">
          <animate attributeName="stroke-dashoffset" from="200" to="0" dur="2s" fill="freeze"/>
        </polyline>
        {/* Chart area fill */}
        <path d="M350,192 L370,185 390,188 405,176 420,180 440,168 460,162 480,155 498,148 L498,200 L350,200Z" fill="url(#hg3)" opacity="0.06"/>
      </g>

      {/* ===== Brand palette card ===== */}
      <g className="float-med">
        <rect x="20" y="310" width="170" height="100" rx="14" fill="#0F172A" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
        <text x="40" y="338" fontSize="10" fill="#64748B" fontFamily="sans-serif" fontWeight="500">Brand Colors</text>
        <circle cx="52" cy="368" r="14" fill="#818CF8"><animate attributeName="r" values="14;15;14" dur="3s" repeatCount="indefinite"/></circle>
        <circle cx="88" cy="368" r="14" fill="#F59E0B"/>
        <circle cx="124" cy="368" r="14" fill="#14B8A6"/>
        <circle cx="160" cy="368" r="14" fill="#F43F5E"/>
        <text x="40" y="400" fontSize="8" fill="#334155" fontFamily="sans-serif">#818CF8  #F59E0B  #14B8A6</text>
      </g>

      {/* ===== SEO rank card ===== */}
      <g className="float-slow" style={{animationDelay: '1s'}}>
        <rect x="220" y="330" width="150" height="90" rx="14" fill="#0F172A" stroke="rgba(245,158,11,0.1)" strokeWidth="1"/>
        <text x="240" y="358" fontSize="10" fill="#64748B" fontFamily="sans-serif" fontWeight="500">Search Position</text>
        <text x="240" y="390" fontSize="32" fill="#F59E0B" fontWeight="900" fontFamily="sans-serif">#1</text>
        <text x="278" y="384" fontSize="10" fill="#475569" fontFamily="sans-serif">for 18 keywords</text>
        <rect x="240" y="400" width="110" height="4" rx="2" fill="rgba(245,158,11,0.1)"/>
        <rect x="240" y="400" width="88" height="4" rx="2" fill="url(#hg2)" opacity="0.6"/>
      </g>

      {/* ===== Social metrics card ===== */}
      <g className="float-med" style={{animationDelay: '0.5s'}}>
        <rect x="400" y="260" width="145" height="85" rx="14" fill="#0F172A" stroke="rgba(244,63,94,0.08)" strokeWidth="1"/>
        <text x="420" y="286" fontSize="10" fill="#64748B" fontFamily="sans-serif" fontWeight="500">Social Growth</text>
        <text x="420" y="314" fontSize="20" fill="white" fontWeight="800" fontFamily="sans-serif">12.4K</text>
        <text x="476" y="312" fontSize="9" fill="#F43F5E" fontWeight="600">↑ 340%</text>
        <g transform="translate(420,325)">
          {[0,1,2,3,4,5,6,7].map(i => <rect key={i} x={i*14} y={20-[8,12,10,16,14,18,15,20][i]} width="8" height={[8,12,10,16,14,18,15,20][i]} rx="2" fill={i===7?"#F43F5E":"rgba(244,63,94,0.2)"}/>)}
        </g>
      </g>

      {/* Connector lines */}
      <line x1="370" y1="215" x2="330" y2="160" stroke="rgba(129,140,248,0.06)" strokeDasharray="4 4"><animate attributeName="stroke-dashoffset" from="0" to="-16" dur="3s" repeatCount="indefinite"/></line>
      <line x1="190" y1="290" x2="105" y2="310" stroke="rgba(129,140,248,0.05)" strokeDasharray="4 4"><animate attributeName="stroke-dashoffset" from="0" to="-16" dur="3s" repeatCount="indefinite"/></line>
      <line x1="370" y1="290" x2="400" y2="280" stroke="rgba(244,63,94,0.05)" strokeDasharray="4 4"><animate attributeName="stroke-dashoffset" from="0" to="-16" dur="3s" repeatCount="indefinite"/></line>

      {/* Sparkle dots */}
      <circle cx="510" cy="90" r="2.5" fill="#818CF8" opacity="0.6"><animate attributeName="opacity" values="0.6;0.15;0.6" dur="4s" repeatCount="indefinite"/></circle>
      <circle cx="30" cy="140" r="2" fill="#F59E0B" opacity="0.5"><animate attributeName="opacity" values="0.5;0.1;0.5" dur="5s" repeatCount="indefinite"/></circle>
      <circle cx="540" cy="400" r="3" fill="#14B8A6" opacity="0.4"><animate attributeName="opacity" values="0.4;0.08;0.4" dur="3.5s" repeatCount="indefinite"/></circle>
      <circle cx="250" cy="40" r="1.5" fill="#C084FC" opacity="0.5"><animate attributeName="opacity" values="0.5;0.1;0.5" dur="6s" repeatCount="indefinite"/></circle>

      {/* Rotating ring decoration */}
      <circle cx="500" cy="360" r="24" fill="none" stroke="rgba(129,140,248,0.06)" strokeWidth="1" strokeDasharray="6 8" style={{animation: 'spin-slow 20s linear infinite', transformOrigin: '500px 360px'}}/>
    </svg>
  );
}

export function WebServiceIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="14" fill="url(#wi1)" />
      <defs><linearGradient id="wi1" x1="0" y1="0" x2="48" y2="48"><stop stopColor="#312E81"/><stop offset="1" stopColor="#1E1B4B"/></linearGradient></defs>
      <rect x="10" y="12" width="28" height="20" rx="3" fill="none" stroke="#818CF8" strokeWidth="1.5"/>
      <line x1="10" y1="18" x2="38" y2="18" stroke="#818CF8" strokeWidth="1" opacity="0.4"/>
      <circle cx="14" cy="15" r="1.2" fill="#F43F5E" opacity="0.8"/><circle cx="18" cy="15" r="1.2" fill="#F59E0B" opacity="0.8"/><circle cx="22" cy="15" r="1.2" fill="#22C55E" opacity="0.8"/>
      <rect x="14" y="22" width="12" height="2" rx="1" fill="#818CF8" opacity="0.6"/>
      <rect x="14" y="27" width="20" height="1.5" rx="0.75" fill="#818CF8" opacity="0.2"/>
      <line x1="18" y1="36" x2="30" y2="36" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      <line x1="24" y1="32" x2="24" y2="36" stroke="#818CF8" strokeWidth="1.5" opacity="0.4"/>
    </svg>
  );
}

export function BrandingIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="14" fill="url(#bi1)" />
      <defs><linearGradient id="bi1" x1="0" y1="0" x2="48" y2="48"><stop stopColor="#78350F"/><stop offset="1" stopColor="#451A03"/></linearGradient></defs>
      <circle cx="20" cy="20" r="8" fill="none" stroke="#F59E0B" strokeWidth="1.5" opacity="0.7"/>
      <circle cx="28" cy="20" r="8" fill="none" stroke="#F97316" strokeWidth="1.5" opacity="0.7"/>
      <circle cx="24" cy="27" r="8" fill="none" stroke="#EF4444" strokeWidth="1.5" opacity="0.7"/>
      <path d="M24 14 L24.5 18 L24 16 L23.5 18Z" fill="#F59E0B" opacity="0.5"/>
      <circle cx="24" cy="22" r="2" fill="#F59E0B" opacity="0.4"/>
      <rect x="12" y="38" width="24" height="2" rx="1" fill="#F59E0B" opacity="0.15"/>
    </svg>
  );
}

export function GrowthIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <rect width="48" height="48" rx="14" fill="url(#gi1)" />
      <defs><linearGradient id="gi1" x1="0" y1="0" x2="48" y2="48"><stop stopColor="#134E4A"/><stop offset="1" stopColor="#042F2E"/></linearGradient></defs>
      <polyline points="10,34 18,26 24,30 32,18 38,12" fill="none" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="38" cy="12" r="3" fill="#14B8A6" opacity="0.3" stroke="#14B8A6" strokeWidth="1"/>
      <path d="M34,12 L38,12 L38,16" fill="none" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="10" y="38" width="28" height="1" fill="#14B8A6" opacity="0.15"/>
    </svg>
  );
}

export function CheckIcon({ className = "w-4 h-4", color = "#818CF8" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <circle cx="10" cy="10" r="10" fill={color} opacity="0.12"/>
      <path d="M6.5 10.5L9 13L14 7.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
