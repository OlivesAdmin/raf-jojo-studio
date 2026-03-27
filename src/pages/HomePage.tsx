import { useApp } from "../App";
import { services, categories, bundles } from "../data/services";
import { PricingCard } from "../components/PricingCard";
import { ProjectCard, IMG } from "../components/ProjectShowcase";
import type { PackageTier } from "../data/services";

export function HomePage() {
  const { navigate, setCart } = useApp();
  const buy = (s: typeof services[0], t: PackageTier) => { setCart({ service: s, tier: t, addons: [] }); navigate("checkout"); };

  const catMeta: Record<string, { color: string; grad: string; icon: JSX.Element }> = {
    web: { color: "#7C3AED", grad: "from-violet-600 to-indigo-600", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><rect x="3" y="4" width="18" height="14" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><circle cx="7" cy="6.5" r="0.5" fill="currentColor"/><circle cx="9.5" cy="6.5" r="0.5" fill="currentColor"/></svg> },
    branding: { color: "#EC4899", grad: "from-pink-600 to-rose-500", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4m-2.93-7.07l-2.83 2.83m-8.48 8.48l-2.83 2.83m14.14 0l-2.83-2.83M6.34 6.34L3.51 3.51"/></svg> },
    growth: { color: "#F59E0B", grad: "from-amber-500 to-orange-500", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/></svg> },
  };

  return (
    <div className="overflow-x-hidden">
      {/* ======= HERO ======= */}
      <section className="relative overflow-hidden lg:min-h-[90vh] lg:flex lg:items-center">
        {/* Single ambient mesh blob */}
        <div className="mesh w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] -top-32 -left-32 bg-violet-600/[0.06]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 lg:py-0 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
            <div className="anim">
              {/* OVERSIZED HEADLINE -- straight to the point */}
              <h1 className="display text-[2.2rem] sm:text-[3.2rem] lg:text-[4rem] xl:text-[4.6rem] font-extrabold leading-[0.95] tracking-tight mb-4 sm:mb-5">
                <span className="text-white">Digital</span><br className="hidden sm:block" />
                <span className="text-white"> services,</span><br />
                <span className="grad-text">ready to buy.</span>
              </h1>

              <p className="text-[16px] sm:text-[17px] text-white/50 leading-relaxed mb-5 sm:mb-7 max-w-[440px]">
                Websites, branding, SEO & social media -- with transparent pricing. Pick a package, pay, and we start building immediately.
              </p>

              <div className="flex flex-col sm:flex-row gap-2.5 mb-4 sm:mb-6">
                <button onClick={()=>navigate("services")} className="group relative px-7 py-3.5 text-[15px] font-semibold text-white rounded-full overflow-hidden shadow-xl shadow-violet-600/20 text-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 group-hover:from-violet-500 group-hover:to-fuchsia-500 transition-all duration-300" />
                  <span className="relative flex items-center justify-center gap-2">Browse Services <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></span>
                </button>
                <button onClick={()=>navigate("services")} className="px-7 py-3.5 text-[15px] font-semibold text-white/80 rounded-full bg-white/[0.06] hover:bg-white/[0.1] transition-all text-center">
                  View Pricing
                </button>
              </div>
            </div>

            {/* Hero visual -- shows actual work, not abstract art */}
            <div className="anim d2 relative">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden neu shadow-2xl shadow-violet-900/20">
                  <img src={IMG.web1} alt="Website design on laptop" className="w-full aspect-[16/10] lg:aspect-[4/3] object-cover" loading="eager" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-[#050510]/30 rounded-2xl" />
                </div>
                {/* Floating stat cards */}
                <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 neu rounded-xl p-3 sm:p-4 float" style={{animationDelay:'0s'}}>
                  <p className="text-[11px] sm:text-[14px] text-white/50 mb-0.5">Projects Delivered</p>
                  <p className="display text-[18px] sm:text-[24px] font-extrabold text-violet-400">500+</p>
                </div>
                <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 neu rounded-xl p-3 sm:p-4 float" style={{animationDelay:'1.5s'}}>
                  <p className="text-[11px] sm:text-[14px] text-white/50 mb-0.5">Client Rating</p>
                  <p className="display text-[18px] sm:text-[24px] font-extrabold text-amber-400">4.9*</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-8 sm:h-16" style={{background:'linear-gradient(180deg, transparent, #050510)'}} />
      </section>

      {/* ======= BENTO SERVICE CATEGORIES ======= */}
      <section className="py-8 sm:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-12">
            <div className="anim">
              <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-violet-400/60 mb-2 block">Services</span>
              <h2 className="display text-[1.5rem] sm:text-[2.2rem] lg:text-[2.8rem] font-extrabold tracking-tight leading-tight">What we <span className="grad-text">build</span></h2>
            </div>
            <button onClick={()=>navigate("services")} className="text-[14px] font-medium text-white/45 hover:text-white/50 transition-colors mt-3 sm:mt-0 flex items-center gap-1.5">
              All services <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* Bento grid -- large + small cards with images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {categories.map((cat, i) => {
              const m = catMeta[cat.id];
              const svcList = services.filter(s => s.category === cat.id);
              const catImg = cat.id === 'web' ? IMG.web2 : cat.id === 'branding' ? IMG.graphic1 : IMG.seo1;
              return (
                <button key={cat.id} onClick={()=>navigate("services",{category:cat.id})} className={`group text-left neu rounded-2xl overflow-hidden anim`} style={{animationDelay:`${i*0.08}s`, opacity:0}}>
                  {/* Category preview image */}
                  <div className="relative h-[140px] sm:h-[160px] overflow-hidden">
                    <img src={catImg} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1025] via-[#0d1025]/50 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${m.grad} flex items-center justify-center text-white shadow-lg`} style={{boxShadow:`0 6px 16px ${m.color}40`}}>
                        {m.icon}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="display text-[16px] sm:text-[18px] font-bold text-white mb-1.5 group-hover:text-violet-200 transition-colors">{cat.name}</h3>
                    <p className="text-[14px] sm:text-[14px] text-white/45 leading-relaxed mb-4">{cat.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {svcList.map(s=>(
                        <span key={s.slug} className="text-[12px] px-2.5 py-1 rounded-full bg-white/[0.04] text-white/45 border border-white/[0.03]">{s.short_name}</span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[15px] text-white/30">From ${Math.min(...svcList.flatMap(s=>s.packages.map(p=>p.price)))}</span>
                      <span className="text-[15px] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" style={{color:m.color}}>
                        Explore <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======= PORTFOLIO SHOWCASE ======= */}
      <section className="py-10 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-12">
            <div>
              <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-fuchsia-400/60 mb-2 block">Our Work</span>
              <h2 className="display text-[1.5rem] sm:text-[2.2rem] lg:text-[2.8rem] font-extrabold tracking-tight leading-tight">Recent <span className="grad-text">projects</span></h2>
              <p className="text-white/40 text-[14px] mt-2 max-w-sm">Real results from real clients -- here's what we've delivered recently.</p>
            </div>
            <button onClick={()=>navigate("services")} className="text-[14px] font-medium text-white/40 hover:text-white/50 transition-colors mt-3 sm:mt-0 flex items-center gap-1.5">
              View all <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* Bento-style project grid with real images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <div className="sm:col-span-2 lg:col-span-2">
              <ProjectCard title="Bloom Beauty -- E-commerce Website" category="Web Development" color="#7C3AED" imgSrc={IMG.web1} imgAlt="Modern e-commerce website on laptop" />
            </div>
            <div>
              <ProjectCard title="TechFlow -- Brand Identity" category="Logo Design" color="#EC4899" imgSrc={IMG.logo1} imgAlt="Brand identity design with color palette" />
            </div>
            <div>
              <ProjectCard title="NovaPay -- SEO Campaign" category="SEO / Search Boost" color="#F59E0B" imgSrc={IMG.seo1} imgAlt="Analytics dashboard showing growth metrics" />
            </div>
            <div>
              <ProjectCard title="FreshBite -- Social Presence" category="Social Media" color="#EC4899" imgSrc={IMG.social1} imgAlt="Social media content on phone" />
            </div>
            <div>
              <ProjectCard title="Artisan Co. -- Website Redesign" category="Web Redesign" color="#7C3AED" imgSrc={IMG.redesign1} imgAlt="Website redesign on laptop workspace" />
            </div>
          </div>

          {/* Quick stats under portfolio */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              {icon:"💻", val:"120+", label:"Websites Built", color:"#7C3AED"},
              {icon:"✦", val:"85+", label:"Logos Designed", color:"#EC4899"},
              {icon:"📈", val:"60+", label:"SEO Campaigns", color:"#F59E0B"},
              {icon:"📱", val:"40+", label:"Social Accounts", color:"#10B981"},
            ].map(s=>(
              <div key={s.label} className="neu rounded-xl p-4 sm:p-5 text-center">
                <span className="text-[20px] sm:text-[24px] block mb-2">{s.icon}</span>
                <p className="display text-[20px] sm:text-[24px] font-extrabold" style={{color:s.color}}>{s.val}</p>
                <p className="text-[14px] sm:text-[15px] text-white/40 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= HOW IT WORKS ======= */}
      <section className="py-10 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-amber-400/60 mb-2 block">Process</span>
            <h2 className="display text-[1.5rem] sm:text-[2.2rem] lg:text-[2.8rem] font-extrabold tracking-tight">5 steps to <span className="grad-text">launch</span></h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3">
            {[
              {n:"01",t:"Choose",d:"Pick your service",c:"#7C3AED",i:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"},
              {n:"02",t:"Pay",d:"Secure checkout",c:"#A855F7",i:"M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"},
              {n:"03",t:"Brief",d:"Quick intake form",c:"#EC4899",i:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"},
              {n:"04",t:"Build",d:"We get to work",c:"#F59E0B",i:"M13 10V3L4 14h7v7l9-11h-7z"},
              {n:"05",t:"Launch",d:"Go live",c:"#10B981",i:"M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"},
            ].map((s,i)=>(
              <div key={i} className={`neu rounded-xl p-4 sm:p-5 text-center group ${i===4?'col-span-2 sm:col-span-1':''}`}>
                <div className="w-10 h-10 sm:w-11 sm:h-11 mx-auto mb-2.5 sm:mb-3 rounded-xl flex items-center justify-center" style={{background:`${s.c}12`}}>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" style={{color:s.c}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={s.i}/></svg>
                </div>
                <span className="text-[11px] sm:text-[14px] font-bold block mb-0.5" style={{color:s.c}}>{s.n}</span>
                <h3 className="text-[14px] sm:text-[15px] font-bold text-white/75 mb-0.5">{s.t}</h3>
                <p className="text-[11px] sm:text-[14px] text-white/40">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= FEATURED PRICING ======= */}
      <section className="py-10 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-violet-400/60 mb-2 block">Pricing</span>
            <h2 className="display text-[1.5rem] sm:text-[2.2rem] lg:text-[2.8rem] font-extrabold tracking-tight">Website <span className="grad-text">Development</span></h2>
            <p className="text-white/40 text-[14px] sm:text-[15px] mt-2">Our most popular service -- pick a tier</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-[1020px] mx-auto mb-10 sm:mb-16">
            {services[0].packages.map(p=><PricingCard key={p.name} pkg={p} onSelect={t=>buy(services[0],t)} />)}
          </div>

          <div className="divider mb-8 sm:mb-10" />
          <p className="text-center text-[14px] font-bold uppercase tracking-[0.3em] text-white/10 mb-6 sm:mb-8">More Services</p>

          {/* Mini service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-[1020px] mx-auto">
            {services.slice(1).map((s,i)=>{
              const m = catMeta[s.category];
              return (
                <button key={s.slug} onClick={()=>navigate("service-detail",{slug:s.slug})} className="group text-left neu rounded-xl p-4 sm:p-5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[2px]" style={{background:`linear-gradient(90deg, ${m.color}, transparent)`}} />
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[20px] sm:text-[22px]">{s.icon}</span>
                    <span className="text-[14px] text-white/30 bg-white/[0.03] px-2 py-0.5 rounded-full border border-white/[0.03]">From ${s.packages[0].price}</span>
                  </div>
                  <h3 className="text-[15px] sm:text-[14px] font-bold text-white/75 mb-1 group-hover:text-violet-300 transition-colors display">{s.name}</h3>
                  <p className="text-[15px] sm:text-[15px] text-white/35 line-clamp-2 mb-3">{s.outcome_statement}</p>
                  <span className="text-[14px] font-semibold flex items-center gap-1 group-hover:gap-1.5 transition-all" style={{color:m.color}}>View packages <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg></span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======= BUNDLES ======= */}
      <section className="py-10 sm:py-24 relative">
        <div className="max-w-[960px] mx-auto px-4 sm:px-8 relative">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-emerald-400/60 mb-2 block">Bundles</span>
            <h2 className="display text-[1.5rem] sm:text-[2.2rem] lg:text-[2.8rem] font-extrabold tracking-tight">Save with <span className="grad-text">bundles</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {bundles.map(b=>(
              <div key={b.id} className="neu rounded-2xl p-5 sm:p-7 relative overflow-hidden">
                {/* Big savings banner */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-[14px] font-extrabold text-white shadow-lg shadow-emerald-500/25">
                    SAVE {b.discount}%
                  </span>
                  <span className="text-[14px] text-emerald-400 font-bold">
                    You save ${(b.original_price - b.price).toLocaleString()}!
                  </span>
                </div>
                <h3 className="display text-[20px] sm:text-[22px] font-bold text-white mb-1">{b.name}</h3>
                <p className="text-[15px] text-white/45 mb-4">{b.tagline}</p>
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="display text-[32px] sm:text-[36px] font-extrabold text-white">${b.price.toLocaleString()}</span>
                  <span className="text-[16px] text-white/30 line-through">${b.original_price.toLocaleString()}</span>
                </div>
                <ul className="space-y-2.5 mb-6">{b.services.map(slug=>{const sv=services.find(x=>x.slug===slug);return sv?<li key={slug} className="flex items-center gap-2.5 text-[15px] text-white/55"><span className="text-[16px]">{sv.icon}</span>{sv.name}</li>:null;})}</ul>
                <button className="w-full py-3.5 text-[15px] font-bold text-white rounded-xl transition-all bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-lg shadow-emerald-600/20">Get Bundle -- ${b.price.toLocaleString()}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= MONTHLY MAINTENANCE PLANS ======= */}
      <section className="py-10 sm:py-24 relative">
        <div className="max-w-[960px] mx-auto px-4 sm:px-8 relative">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-teal-400/60 mb-2 block">Ongoing Support</span>
            <h2 className="display text-[1.5rem] sm:text-[2.2rem] lg:text-[2.8rem] font-extrabold tracking-tight">Monthly <span className="grad-text">care plans</span></h2>
            <p className="text-white/40 text-[15px] mt-2 max-w-md mx-auto">Keep your website fast, secure, and up-to-date with our maintenance packages.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {[
              { name: "Essential", price: 99, features: ["Hosting & SSL", "Weekly backups", "Security monitoring", "Uptime monitoring", "Monthly report"], color: "#14B8A6" },
              { name: "Growth", price: 199, features: ["Everything in Essential", "Monthly content updates (2 pages)", "SEO health check", "Performance optimization", "Priority email support"], color: "#7C3AED", popular: true },
              { name: "Premium", price: 399, features: ["Everything in Growth", "Unlimited content updates", "Monthly analytics review", "A/B testing", "Dedicated account manager", "Priority phone support"], color: "#F59E0B" },
            ].map((plan) => (
              <div key={plan.name} className={`neu rounded-2xl p-5 sm:p-6 relative ${plan.popular ? 'ring-1 ring-violet-500/30' : ''}`}>
                {plan.popular && <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-[12px] font-bold text-white shadow-lg shadow-violet-500/30">Recommended</div>}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full" style={{background: plan.color}} />
                  <span className="text-[14px] font-bold uppercase tracking-wider" style={{color: plan.color}}>{plan.name}</span>
                </div>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="display text-[32px] font-extrabold text-white">${plan.price}</span>
                  <span className="text-[14px] text-white/30">/month</span>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-[14px] text-white/50">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{color: plan.color}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 text-[14px] font-semibold text-white/60 hover:text-white rounded-xl transition-all" style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.06)'}}>
                  Get {plan.name} Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= CONTACT / ASK QUESTIONS ======= */}
      <section className="py-10 sm:py-24 relative">
        <div className="max-w-[700px] mx-auto px-4 sm:px-8">
          <div className="neu rounded-2xl p-6 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-400" />
            <div className="text-center mb-8">
              <span className="text-[40px] block mb-3">💬</span>
              <h2 className="display text-[1.4rem] sm:text-[1.8rem] font-extrabold text-white mb-2">Have questions?</h2>
              <p className="text-[15px] text-white/45">Not sure which package is right? Send us a message and we'll help you choose.</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input type="text" placeholder="Your name" className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.06] rounded-xl text-[15px] text-white/80 placeholder-white/25 focus:outline-none focus:border-violet-500/30" />
                <input type="email" placeholder="Email address" className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.06] rounded-xl text-[15px] text-white/80 placeholder-white/25 focus:outline-none focus:border-violet-500/30" />
              </div>
              <select className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.06] rounded-xl text-[15px] text-white/50 focus:outline-none focus:border-violet-500/30 bg-[#0d1025]">
                <option value="">What service are you interested in?</option>
                <option value="web">Website Development</option>
                <option value="redesign">Website Redesign</option>
                <option value="logo">Logo Design</option>
                <option value="graphic">Graphic Design</option>
                <option value="seo">SEO / Search Boost</option>
                <option value="social">Social Media Management</option>
                <option value="maintenance">Monthly Maintenance</option>
                <option value="bundle">Bundle Package</option>
                <option value="other">Other / Not Sure</option>
              </select>
              <textarea rows={4} placeholder="Your question or project details..." className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.06] rounded-xl text-[15px] text-white/80 placeholder-white/25 focus:outline-none focus:border-violet-500/30 resize-none" />
              <button className="w-full py-3.5 text-[15px] font-bold text-white rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-lg shadow-violet-600/20">
                Send Message
              </button>
            </div>

            {/* Alternative contact methods */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6" style={{borderTop:'1px solid rgba(255,255,255,0.04)'}}>
              <a href="https://wa.me/6581234567" target="_blank" rel="noopener" className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/15 hover:bg-emerald-500/15 transition-colors">
                <span className="text-[22px]">💬</span>
                <div><p className="text-[14px] font-bold text-emerald-400">WhatsApp</p><p className="text-[12px] text-white/30">Chat with us</p></div>
              </a>
              <a href="mailto:hello@rafandjojo.studio" className="flex items-center gap-3 p-3 rounded-xl bg-violet-500/10 border border-violet-500/15 hover:bg-violet-500/15 transition-colors">
                <span className="text-[22px]">📧</span>
                <div><p className="text-[14px] font-bold text-violet-400">Email</p><p className="text-[12px] text-white/30">hello@rafandjojo.studio</p></div>
              </a>
              <a href="https://calendly.com" target="_blank" rel="noopener" className="flex items-center gap-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/15 hover:bg-amber-500/15 transition-colors">
                <span className="text-[22px]">📅</span>
                <div><p className="text-[14px] font-bold text-amber-400">Book a Call</p><p className="text-[12px] text-white/30">Free 15-min consult</p></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ======= TESTIMONIALS ======= */}
      <section className="py-10 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-violet-400/60 mb-2 block">Testimonials</span>
            <h2 className="display text-[1.5rem] sm:text-[2.2rem] lg:text-[2.8rem] font-extrabold tracking-tight">Trusted by <span className="grad-text">500+</span> businesses</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-14">
            {[
              {n:"Sarah Chen",r:"Founder, Bloom Beauty",q:"Purchased Premium website -- live in 12 days. Quality exceeded agencies I've paid 5x more.",a:"SC",c:"#7C3AED",img:IMG.person1},
              {n:"Marcus Rodriguez",r:"CEO, TechFlow",q:"Bought Gold logo, got 6 stunning concepts. Full brand kit in a week. Seamless experience.",a:"MR",c:"#EC4899",img:IMG.person2},
              {n:"Aisha Patel",r:"Marketing Dir, NovaPay",q:"SEO package moved us from page 3 to #1 for key terms. ROI has been phenomenal.",a:"AP",c:"#F59E0B",img:IMG.person3},
            ].map((t,i)=>(
              <div key={i} className="neu rounded-2xl p-5 sm:p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px]" style={{background:`linear-gradient(90deg, ${t.c}, transparent)`}} />
                <div className="flex gap-0.5 mb-3 sm:mb-4">{Array.from({length:5}).map((_,j)=><svg key={j} className="w-3 h-3" style={{color:t.c}} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}</div>
                <p className="text-[14px] text-white/50 leading-relaxed mb-4 italic">"{t.q}"</p>
                <div className="flex items-center gap-2.5">
                  <img src={t.img} alt={t.n} className="w-8 h-8 rounded-full object-cover border-2" style={{borderColor:`${t.c}30`}} />
                  <div><p className="text-[14px] font-semibold text-white/65">{t.n}</p><p className="text-[14px] text-white/35">{t.r}</p></div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 sm:pt-10" style={{borderTop:'1px solid rgba(255,255,255,0.03)'}}>
            {[{v:"500+",l:"Projects",c:"#7C3AED"},{v:"4.9/5",l:"Satisfaction",c:"#EC4899"},{v:"7 days",l:"Avg Delivery",c:"#F59E0B"},{v:"98%",l:"On-Time",c:"#10B981"}].map(s=>(
              <div key={s.l} className="text-center">
                <p className="display text-[1.5rem] sm:text-[2rem] font-extrabold" style={{color:s.c}}>{s.v}</p>
                <p className="text-[12px] sm:text-[14px] text-white/35 mt-0.5">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= FINAL CTA ======= */}
      <section className="py-12 sm:py-28 relative overflow-hidden">
        {/* Background image with heavy overlay */}
        <div className="absolute inset-0">
          <img src={IMG.team1} alt="" className="w-full h-full object-cover opacity-[0.04]" loading="lazy" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center relative z-10">
          <h2 className="display text-[1.8rem] sm:text-[2.6rem] lg:text-[3.4rem] font-extrabold tracking-tight mb-4 sm:mb-6">
            Ready to<br /><span className="grad-text">get started?</span>
          </h2>
          <p className="text-white/40 text-[15px] sm:text-[14px] mb-8 sm:mb-10 max-w-md mx-auto leading-relaxed">Pick a package and we'll start building within 24 hours of purchase.</p>
          <button onClick={()=>navigate("services")} className="group relative px-8 sm:px-10 py-3.5 sm:py-4 text-[14px] font-semibold text-white rounded-full overflow-hidden shadow-xl shadow-violet-600/20">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 group-hover:from-violet-500 group-hover:to-fuchsia-500 transition-all duration-300" />
            <span className="relative flex items-center justify-center gap-2">Browse All Services <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></span>
          </button>
        </div>
      </section>
    </div>
  );
}
