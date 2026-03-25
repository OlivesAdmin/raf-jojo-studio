import { useState } from "react";
import { useApp } from "../App";
import { services, categories } from "../data/services";
import { IMG } from "../components/ProjectShowcase";

const slugImgs: Record<string,string> = {
  "website-development": IMG.web1,
  "website-redesign": IMG.web3,
  "logo-design": IMG.brand1,
  "graphic-design": IMG.graphic1,
  "seo-search-boost": IMG.seo1,
  "social-media-management": IMG.social1,
};

export function ServicesPage() {
  const { navigate, route } = useApp();
  const [cat, setCat] = useState(route.params?.category || "all");
  const list = cat === "all" ? services : services.filter(s => s.category === cat);
  const catColors: Record<string, string> = { web: "#7C3AED", branding: "#EC4899", growth: "#F59E0B" };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-20 overflow-x-hidden">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 anim">
        <span className="text-[12px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-violet-400/60 mb-2 block">Our Offerings</span>
        <h1 className="display text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-extrabold tracking-tight">All Services</h1>
        <p className="text-white/50 text-[15px] sm:text-[15px] mt-2">Fixed pricing. Fast delivery. Professional quality.</p>
      </div>

      {/* Category filter pills */}
      <div className="flex gap-2 mb-8 sm:mb-12 overflow-x-auto pb-2 sm:overflow-visible sm:flex-wrap sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
        {[{ id: "all", name: "All" }, ...categories].map(c => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-5 py-2.5 rounded-full text-[14px] sm:text-[13px] font-medium transition-all border whitespace-nowrap flex-shrink-0 ${cat === c.id ? 'bg-violet-500/15 border-violet-500/25 text-violet-300' : 'border-white/[0.06] text-white/55 hover:text-white/60 hover:border-white/[0.1]'}`}>
            {c.name}
          </button>
        ))}
      </div>

      {/* Service cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {list.map((s, i) => {
          const c = catColors[s.category] || "#7C3AED";
          const coverImg = slugImgs[s.slug] || IMG.web1;
          return (
            <button key={s.slug} onClick={() => navigate("service-detail", { slug: s.slug })} className="group text-left neu rounded-2xl overflow-hidden anim" style={{ animationDelay: `${i * 0.06}s`, opacity: 0 }}>
              {/* Cover image */}
              <div className="relative h-[180px] sm:h-[180px] overflow-hidden">
                <img src={coverImg} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1025] via-[#0d1025]/30 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-white/90" style={{ background: `${c}40`, backdropFilter: 'blur(8px)', border: `1px solid ${c}25` }}>
                    {categories.find(x => x.id === s.category)?.name}
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-5 sm:p-6">
                <h3 className="display text-[18px] sm:text-[18px] font-bold text-white/90 mb-2 group-hover:text-violet-300 transition-colors">{s.name}</h3>
                <p className="text-[14px] sm:text-[13px] text-white/55 leading-relaxed mb-5">{s.outcome_statement}</p>

                {/* Price tiers */}
                <div className="flex gap-2 mb-4">
                  {s.packages.map(p => (
                    <div key={p.name} className={`flex-1 text-center py-2.5 rounded-lg ${p.popular ? 'bg-violet-500/10 border border-violet-500/20' : 'bg-white/[0.03] border border-white/[0.05]'}`}>
                      <div className={`text-[10px] uppercase tracking-wider mb-1 ${p.popular ? 'text-violet-400/80' : 'text-white/45'}`}>{p.name}</div>
                      <div className={`text-[15px] font-bold ${p.popular ? 'text-violet-300' : 'text-white/50'}`}>${p.price.toLocaleString()}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-white/45">From {Math.min(...s.packages.map(p => p.delivery_days))} days</span>
                  <span className="font-semibold text-violet-400 group-hover:text-violet-300 flex items-center gap-1 transition-colors">
                    View details <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
