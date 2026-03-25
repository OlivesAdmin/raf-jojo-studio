import { useState } from "react";
import { useApp } from "../App";
import { services, categories } from "../data/services";
import { IMG } from "../components/ProjectShowcase";

const slugImgs: Record<string,string> = {
  "website-development": IMG.web1,
  "website-redesign": IMG.redesign1,
  "logo-design": IMG.logo1,
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
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-24 overflow-x-hidden">
      <div className="text-center mb-10 sm:mb-14 anim">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-violet-400/60 mb-2 block">Our Offerings</span>
        <h1 className="display text-[1.6rem] sm:text-[2.2rem] lg:text-[3rem] font-extrabold tracking-tight">All Services</h1>
        <p className="text-white/20 text-[12px] sm:text-[13.5px] mt-2">Fixed pricing. Fast delivery. Professional quality.</p>
      </div>

      <div className="flex gap-2 mb-10 sm:mb-14 overflow-x-auto pb-2 sm:overflow-visible sm:flex-wrap sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
        {[{ id: "all", name: "All" }, ...categories].map(c => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 sm:px-5 py-2 rounded-full text-[11px] font-medium transition-all border whitespace-nowrap flex-shrink-0 ${cat === c.id ? 'bg-violet-500/10 border-violet-500/20 text-violet-300' : 'border-white/[0.04] text-white/25 hover:text-white/50 hover:border-white/[0.08]'}`}>
            {c.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {list.map((s, i) => {
          const c = catColors[s.category] || "#7C3AED";
          const coverImg = slugImgs[s.slug] || IMG.web1;
          return (
            <button key={s.slug} onClick={() => navigate("service-detail", { slug: s.slug })} className="group text-left neu rounded-2xl overflow-hidden anim" style={{ animationDelay: `${i * 0.06}s`, opacity: 0 }}>
              {/* Service cover image */}
              <div className="relative h-[140px] sm:h-[160px] overflow-hidden">
                <img src={coverImg} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1025] via-[#0d1025]/40 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider text-white/80" style={{ background: `${c}35`, border: `1px solid ${c}20` }}>
                    {categories.find(x => x.id === s.category)?.name}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="display text-[14px] sm:text-[16px] font-bold text-white/85 mb-1 group-hover:text-violet-300 transition-colors">{s.name}</h3>
                <p className="text-[11px] text-white/20 leading-relaxed mb-4">{s.outcome_statement}</p>
                <div className="flex gap-1.5 mb-3">
                  {s.packages.map(p => (
                    <div key={p.name} className={`flex-1 text-center py-2 rounded-lg ${p.popular ? 'bg-violet-500/8 border border-violet-500/15' : 'bg-white/[0.02] border border-white/[0.04]'}`}>
                      <div className={`text-[8px] uppercase tracking-wider mb-0.5 ${p.popular ? 'text-violet-400/70' : 'text-white/15'}`}>{p.name}</div>
                      <div className={`text-[10.5px] font-bold ${p.popular ? 'text-violet-300/80' : 'text-white/30'}`}>${p.price.toLocaleString()}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-white/15">From {Math.min(...s.packages.map(p => p.delivery_days))} days</span>
                  <span className="font-semibold text-violet-400/60 group-hover:text-violet-400 flex items-center gap-1 transition-colors">
                    View details <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
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
