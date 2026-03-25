import { useState } from "react";
import { useApp } from "../App";

export function Header() {
  const { navigate } = useApp();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50" style={{ background:'rgba(5,5,16,0.85)', backdropFilter:'blur(24px)', WebkitBackdropFilter:'blur(24px)', borderBottom:'1px solid rgba(255,255,255,0.03)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-[60px] sm:h-[68px]">
        <button onClick={() => navigate("home")} className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-fuchsia-500 to-rose-400" />
            <div className="absolute inset-[1.5px] bg-[#050510] rounded-[10px] flex items-center justify-center">
              <span className="text-[12px] sm:text-[13px] font-extrabold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">R&J</span>
            </div>
          </div>
          <div className="hidden sm:block">
            <span className="text-[14px] font-bold text-white/90 display">Raf & JoJo</span>
            <span className="text-[11px] text-white/45 block -mt-0.5 tracking-wider uppercase">Studio</span>
          </div>
          <span className="sm:hidden text-[14px] font-bold text-white/90 display">R&J Studio</span>
        </button>

        <nav className="hidden md:flex items-center gap-0.5">
          {[{l:"Services",p:"services"},{l:"Process",p:"home"},{l:"Pricing",p:"home"}].map(n=>(
            <button key={n.l} onClick={()=>navigate(n.p)} className="px-4 py-2 text-[14px] text-white/55 hover:text-white/70 transition-colors rounded-lg hover:bg-white/[0.03]">{n.l}</button>
          ))}
        </nav>

        <button onClick={()=>navigate("services")} className="hidden md:flex group items-center gap-2 px-5 py-2 text-[12px] font-semibold text-white rounded-full overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 group-hover:from-violet-500 group-hover:to-fuchsia-500 transition-all duration-300" />
          <span className="relative">Start a Project</span>
          <svg className="w-3.5 h-3.5 relative group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </button>

        <button onClick={()=>setOpen(!open)} className="md:hidden p-2 text-white/40">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {open?<><line x1="4" y1="4" x2="16" y2="16"/><line x1="16" y1="4" x2="4" y2="16"/></>:<><line x1="3" y1="6" x2="17" y2="6"/><line x1="3" y1="10" x2="17" y2="10"/><line x1="7" y1="14" x2="17" y2="14"/></>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 py-4 space-y-1" style={{ background:'rgba(5,5,16,0.98)', borderTop:'1px solid rgba(255,255,255,0.03)' }}>
          {["Services","Process","Pricing"].map(l=>(
            <button key={l} onClick={()=>{navigate(l==="Services"?"services":"home");setOpen(false)}} className="block w-full text-left text-[14px] text-white/50 py-2.5 px-3 rounded-lg hover:bg-white/5">{l}</button>
          ))}
          <button onClick={()=>{navigate("services");setOpen(false)}} className="w-full mt-2 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-[14px] font-semibold rounded-full text-center">Start a Project</button>
        </div>
      )}
    </header>
  );
}
