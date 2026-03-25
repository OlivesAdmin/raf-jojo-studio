import { useState } from "react";
import { useApp } from "../App";
import { getServiceBySlug, getCrossSellServices, type PackageTier } from "../data/services";
import { PricingCard } from "../components/PricingCard";
import { IMG } from "../components/ProjectShowcase";

const slugImgs: Record<string,string> = {
  "website-development": IMG.web1,
  "website-redesign": IMG.redesign1,
  "logo-design": IMG.logo1,
  "graphic-design": IMG.graphic1,
  "seo-search-boost": IMG.seo1,
  "social-media-management": IMG.social1,
};

export function ServiceDetailPage() {
  const { route, navigate, setCart } = useApp();
  const slug = route.params?.slug || "website-development";
  const service = getServiceBySlug(slug);
  const [addons, setAddons] = useState<string[]>([]);
  const [faq, setFaq] = useState<number | null>(null);

  if (!service) return <div className="max-w-7xl mx-auto px-4 py-20 text-center"><h1 className="text-xl font-bold text-white mb-4">Not found</h1><button onClick={() => navigate("services")} className="text-violet-400">← Back</button></div>;

  const cross = getCrossSellServices(service.cross_sell);
  const cc = service.category === 'web' ? '#7C3AED' : service.category === 'branding' ? '#EC4899' : '#F59E0B';
  const buy = (tier: PackageTier) => { setCart({ service, tier, addons: service.addons.filter(a => addons.includes(a.id)) }); navigate("checkout"); };
  const tog = (id: string) => setAddons(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);
  const heroImg = slugImgs[service.slug] || IMG.web1;

  return (
    <div className="overflow-x-hidden pb-20 sm:pb-0">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-4 sm:pt-6">
        <div className="flex items-center gap-2 text-[14px] sm:text-[15px] text-white/40 overflow-x-auto whitespace-nowrap">
          <button onClick={() => navigate("home")} className="hover:text-white/50 flex-shrink-0">Home</button><span>/</span>
          <button onClick={() => navigate("services")} className="hover:text-white/50 flex-shrink-0">Services</button><span>/</span>
          <span className="text-white/40 truncate">{service.name}</span>
        </div>
      </div>

      {/* Hero with image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="anim">
            <span className="text-[36px] sm:text-[48px] mb-4 block">{service.icon}</span>
            <h1 className="display text-[1.4rem] sm:text-[2rem] lg:text-[2.4rem] font-extrabold leading-tight mb-4 text-white/95 tracking-tight">{service.outcome_statement}</h1>
            <p className="text-[15px] sm:text-[14.5px] text-white/50 leading-relaxed mb-5 max-w-lg">{service.description}</p>
            <div className="flex flex-wrap gap-2 text-[15px] sm:text-[14px]">
              {[`From $${service.packages[0].price}`, `${Math.min(...service.packages.map(p=>p.delivery_days))}-day delivery`, `Up to ${Math.max(...service.packages.map(p=>p.revisions))} revisions`].map(t => (
                <span key={t} className="text-white/45 bg-white/[0.03] px-2.5 py-1 rounded-full border border-white/[0.04]">{t}</span>
              ))}
            </div>
          </div>
          {/* Service hero image */}
          <div className="rounded-2xl overflow-hidden neu shadow-2xl anim d2 aspect-[4/3]">
            <img src={heroImg} alt={service.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/60 via-transparent to-transparent rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="display text-[1.2rem] sm:text-[1.5rem] font-extrabold text-white/90">Choose your package</h2>
            <p className="text-[14px] sm:text-[14px] text-white/40 mt-2">Full ownership & source files included</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[1000px] mx-auto">
            {service.packages.map(p => <PricingCard key={p.name} pkg={p} onSelect={buy} />)}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-12 sm:py-16"><div className="max-w-[1000px] mx-auto px-4 sm:px-8">
        <h2 className="display text-[1.1rem] sm:text-[1.25rem] font-extrabold text-white/90 mb-6 sm:mb-8 text-center">Compare packages</h2>
        <div className="neu rounded-2xl overflow-hidden"><div className="overflow-x-auto">
          <table className="w-full min-w-[480px]">
            <thead><tr style={{borderBottom:'1px solid rgba(255,255,255,0.04)'}}>
              <th className="text-left py-3 sm:py-4 px-4 sm:px-5 text-[15px] sm:text-[15px] font-medium text-white/45 w-[40%]">Feature</th>
              {service.packages.map(p=><th key={p.name} className={`text-center py-3 sm:py-4 px-3 sm:px-5 text-[15px] sm:text-[15px] font-bold ${p.popular?'text-violet-400':'text-white/40'}`}>{p.name}</th>)}
            </tr></thead>
            <tbody>
              <tr style={{borderBottom:'1px solid rgba(255,255,255,0.03)'}}><td className="py-2.5 px-4 sm:px-5 text-[15px] text-white/45">Price</td>{service.packages.map(p=><td key={p.name} className="text-center py-2.5 px-3 sm:px-5 text-[15px] font-bold text-white/70">${p.price.toLocaleString()}</td>)}</tr>
              <tr style={{borderBottom:'1px solid rgba(255,255,255,0.03)'}}><td className="py-2.5 px-4 sm:px-5 text-[15px] text-white/45">Delivery</td>{service.packages.map(p=><td key={p.name} className="text-center py-2.5 px-3 text-[15px] text-white/50">{p.delivery_days}d</td>)}</tr>
              <tr style={{borderBottom:'1px solid rgba(255,255,255,0.03)'}}><td className="py-2.5 px-4 sm:px-5 text-[15px] text-white/45">Revisions</td>{service.packages.map(p=><td key={p.name} className="text-center py-2.5 px-3 text-[15px] text-white/50">{p.revisions}</td>)}</tr>
              {[...new Set(service.packages.flatMap(p=>p.features))].map((f,i)=>(
                <tr key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.02)'}}>
                  <td className="py-2 px-4 sm:px-5 text-[12px] sm:text-[15px] text-white/40">{f}</td>
                  {service.packages.map(p=><td key={p.name} className="text-center py-2 px-3">{p.features.includes(f)?<span style={{color:cc}}>✓</span>:<span className="text-white/8">—</span>}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div></div>
      </div></section>

      {/* Add-ons */}
      {service.addons.length > 0 && <section className="py-12 sm:py-16"><div className="max-w-[1000px] mx-auto px-4 sm:px-8">
        <h2 className="display text-[1.1rem] sm:text-[1.25rem] font-extrabold text-white/90 mb-1.5">Add-ons</h2>
        <p className="text-[14px] text-white/40 mb-6 sm:mb-8">Enhance any package</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">{service.addons.map(a=>(
          <button key={a.id} onClick={()=>tog(a.id)} className={`text-left p-4 sm:p-5 rounded-xl border transition-all duration-300 ${addons.includes(a.id)?'border-violet-500/30 bg-violet-500/5 shadow-lg shadow-violet-500/5':'border-white/[0.04] bg-white/[0.01] hover:border-white/[0.08]'}`}>
            <div className="flex items-center justify-between mb-1"><h4 className="font-semibold text-[14px] sm:text-[14px] text-white/70">{a.title}</h4><span className="font-bold text-[14px] text-violet-400/80">+${a.price}</span></div>
            <p className="text-[14px] text-white/40">{a.description}</p>
            {addons.includes(a.id)&&<span className="inline-flex items-center gap-1 mt-1.5 text-[14px] text-violet-400 font-medium">✓ Selected</span>}
          </button>
        ))}</div>
      </div></section>}

      {/* Delivery */}
      <section className="py-12 sm:py-16"><div className="max-w-[1000px] mx-auto px-4 sm:px-8">
        <h2 className="display text-[1.1rem] sm:text-[1.25rem] font-extrabold text-white/90 mb-6 sm:mb-8">Delivery process</h2>
        {service.delivery_process.map((s,i)=>(
          <div key={i} className="flex items-start gap-4 pb-6 relative">
            {i<service.delivery_process.length-1&&<div className="absolute left-[13px] top-8 bottom-0 w-px" style={{background:`linear-gradient(180deg, ${cc}30, ${cc}05)`}}/>}
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[11px] sm:text-[14px] font-bold text-white flex-shrink-0 relative z-10 shadow-lg" style={{background:`linear-gradient(135deg, ${cc}, ${cc}99)`,boxShadow:`0 4px 12px ${cc}25`}}>{i+1}</div>
            <p className="text-[14px] text-white/55 pt-1">{s}</p>
          </div>
        ))}
      </div></section>

      {/* FAQ */}
      <section className="py-12 sm:py-16"><div className="max-w-[700px] mx-auto px-4 sm:px-8">
        <h2 className="display text-[1.1rem] sm:text-[1.25rem] font-extrabold text-white/90 mb-6 sm:mb-8">FAQ</h2>
        {service.faq.map((f,i)=>(
          <div key={i} className="neu rounded-xl overflow-hidden mb-2">
            <button onClick={()=>setFaq(faq===i?null:i)} className="w-full flex items-center justify-between px-4 sm:px-5 py-3.5 text-left">
              <span className="text-[14px] sm:text-[14px] font-medium text-white/70 pr-4">{f.question}</span>
              <svg className={`w-4 h-4 text-white/40 transition-transform flex-shrink-0 ${faq===i?'rotate-180':''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M6 9l6 6 6-6"/></svg>
            </button>
            {faq===i&&<div className="px-4 sm:px-5 pb-3.5"><p className="text-[15px] text-white/45 leading-relaxed">{f.answer}</p></div>}
          </div>
        ))}
      </div></section>

      {/* Cross-sell with images */}
      {cross.length>0&&<section className="py-12 sm:py-16"><div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2 className="display text-[1.1rem] sm:text-[1.25rem] font-extrabold text-white/90 mb-1.5">You might also need</h2>
        <p className="text-[15px] text-white/40 mb-5 sm:mb-8">Combine for better results</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{cross.map(cs=>{
          const csImg = slugImgs[cs.slug]||IMG.web1;
          return (
            <button key={cs.slug} onClick={()=>navigate("service-detail",{slug:cs.slug})} className="group text-left neu rounded-xl overflow-hidden flex">
              <div className="w-[100px] sm:w-[140px] flex-shrink-0 overflow-hidden">
                <img src={csImg} alt={cs.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 sm:p-5 flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1"><span className="text-[16px]">{cs.icon}</span><h3 className="font-bold text-white/70 group-hover:text-violet-300 transition-colors text-[15px] truncate">{cs.name}</h3></div>
                <p className="text-[15px] text-white/40 mb-1.5 line-clamp-2">{cs.outcome_statement}</p>
                <span className="text-[14px] font-semibold text-violet-400/60">From ${cs.packages[0].price} →</span>
              </div>
            </button>
          );
        })}</div>
      </div></section>}

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 inset-x-0 py-2.5 px-4 z-40 sm:hidden" style={{background:'rgba(5,5,16,0.95)',backdropFilter:'blur(20px)',borderTop:'1px solid rgba(255,255,255,0.04)'}}>
        <div className="flex items-center justify-between">
          <div className="min-w-0 mr-3"><p className="text-[14px] font-bold text-white/80 truncate">{service.name}</p><p className="text-[14px] text-white/40">From ${service.packages[0].price}</p></div>
          <button onClick={()=>window.scrollTo({top:500,behavior:'smooth'})} className="px-5 py-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-[15px] font-semibold rounded-full flex-shrink-0">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
