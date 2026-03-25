import { useApp } from "../App";
import { services } from "../data/services";
export function Footer() {
  const { navigate } = useApp();
  return (
    <footer style={{background:'linear-gradient(180deg, #050510, #020208)',borderTop:'1px solid rgba(255,255,255,0.02)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-fuchsia-500"/><div className="absolute inset-[1.5px] bg-[#020208] rounded-[9px] flex items-center justify-center"><span className="text-[9px] font-extrabold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">R&J</span></div></div>
              <div><span className="text-[13px] font-bold text-white/70 display">Raf & JoJo</span><span className="text-[8px] text-white/20 block -mt-0.5 uppercase tracking-widest">Studio</span></div>
            </div>
            <p className="text-[11px] text-white/12 leading-relaxed max-w-[200px]">Premium digital services. Fixed pricing. No calls — just results.</p>
          </div>
          <div><h4 className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/10 mb-4">Services</h4><ul className="space-y-2">{services.map(s=><li key={s.slug}><button onClick={()=>navigate("service-detail",{slug:s.slug})} className="text-[11.5px] text-white/18 hover:text-violet-400/60 transition-colors">{s.name}</button></li>)}</ul></div>
          <div><h4 className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/10 mb-4">Company</h4><ul className="space-y-2">{["About","Blog","Careers","Terms","Privacy"].map(l=><li key={l}><span className="text-[11.5px] text-white/18 hover:text-violet-400/60 transition-colors cursor-pointer">{l}</span></li>)}</ul></div>
          <div><h4 className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/10 mb-4">Contact</h4><p className="text-[11.5px] text-white/18 mb-1">hello@rafandjojo.studio</p><p className="text-[11.5px] text-white/10 mb-5">Mon–Fri 9am–6pm SGT</p>
            <button onClick={()=>navigate("services")} className="px-5 py-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-[10.5px] font-semibold rounded-full">Start a Project</button>
          </div>
        </div>
        <div className="divider mt-10 mb-6"/>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3"><p className="text-[9px] text-white/8">© 2026 Raf & JoJo Studio. All rights reserved.</p><div className="flex gap-5">{["Twitter","LinkedIn","Instagram"].map(s=><span key={s} className="text-[9px] text-white/8 hover:text-violet-400/40 cursor-pointer transition-colors">{s}</span>)}</div></div>
      </div>
    </footer>
  );
}
