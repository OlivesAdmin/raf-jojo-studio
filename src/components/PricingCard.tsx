import { type Package, type PackageTier } from "../data/services";

interface Props { pkg: Package; onSelect: (tier: PackageTier) => void; }

const themes: Record<string, { color: string; grad: string }> = {
  Basic: { color: "#94A3B8", grad: "from-slate-500 to-slate-600" },
  Premium: { color: "#7C3AED", grad: "from-violet-600 to-fuchsia-600" },
  Gold: { color: "#F59E0B", grad: "from-amber-500 to-orange-500" },
};

export function PricingCard({ pkg, onSelect }: Props) {
  const t = themes[pkg.name] || themes.Basic;
  const pop = pkg.popular;

  return (
    <div className={`relative rounded-[1.25rem] transition-all duration-500 hover:-translate-y-2 group ${pop ? 'z-10 scale-[1.02]' : ''}`}>
      {pop && <div className="absolute -inset-[1px] rounded-[1.25rem] bg-gradient-to-b from-violet-500/30 via-fuchsia-500/15 to-transparent pointer-events-none" />}

      <div className="relative neu rounded-[1.25rem] p-5 sm:p-7 h-full">
        {pop && (
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
            <div className="px-4 py-1 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-[9px] font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-violet-500/30 whitespace-nowrap">Most Popular</div>
          </div>
        )}

        <div className="flex items-center gap-2 mb-4">
          <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${t.grad}`} />
          <span className="text-[10.5px] font-bold uppercase tracking-[0.15em]" style={{color:t.color}}>{pkg.name}</span>
        </div>

        <p className="text-[11px] text-white/20 leading-relaxed mb-4">{pkg.ideal_for}</p>

        <div className="mb-5">
          <span className="display text-[32px] sm:text-[40px] font-extrabold text-white tracking-tight">${pkg.price.toLocaleString()}</span>
          <div className="flex items-center gap-2 mt-1.5 text-[10px] text-white/18">
            <span>{pkg.delivery_days}d delivery</span>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <span>{pkg.revisions} rev{pkg.revisions!==1?'s':''}</span>
          </div>
        </div>

        <div className="h-px mb-5" style={{background:`linear-gradient(90deg, transparent, ${t.color}25, transparent)`}} />

        <ul className="space-y-2.5 mb-6">
          {pkg.features.map((f,i)=>(
            <li key={i} className="flex items-start gap-2.5 text-[11.5px]">
              <div className={`w-[16px] h-[16px] rounded-full flex items-center justify-center flex-shrink-0 mt-px bg-gradient-to-br ${t.grad}`} style={{opacity:0.2}}>
                <svg className="w-[10px] h-[10px]" style={{color:t.color}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="text-white/35 leading-snug">{f}</span>
            </li>
          ))}
        </ul>

        <button onClick={()=>onSelect(pkg.name)} className={`w-full py-3 sm:py-3.5 rounded-xl text-[12px] font-semibold transition-all duration-300 relative overflow-hidden ${pop?'text-white shadow-lg shadow-violet-600/20':'text-white/60 hover:text-white'}`}
          style={pop?{}:{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.05)'}}>
          {pop && <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 group-hover:from-violet-500 group-hover:to-fuchsia-500 transition-all" />}
          <span className="relative flex items-center justify-center gap-2">Buy Now — ${pkg.price.toLocaleString()} <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></span>
        </button>
      </div>
    </div>
  );
}
