import { useState } from "react";
import { useApp } from "../App";
import { CheckIcon } from "../components/Illustrations";

export function CheckoutPage() {
  const { cart, navigate, setCart } = useApp();
  const [step, setStep] = useState<"review"|"intake">("review");
  const [form, setForm] = useState({ businessName:"", contactName:"", email:"", phone:"", website:"", goals:"", style:"", notes:"" });
  const [loading, setLoading] = useState(false);

  if (!cart) return <div className="max-w-3xl mx-auto px-4 py-20 text-center"><h1 className="text-lg sm:text-xl font-bold text-white mb-4" style={{fontFamily:"'Cabinet Grotesk',sans-serif"}}>Cart empty</h1><button onClick={()=>navigate("services")} className="px-6 py-2.5 sm:py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-[14px] sm:text-[15px] font-semibold rounded-full">Browse Services</button></div>;

  const pkg = cart.service.packages.find(p=>p.name===cart.tier)!;
  const total = pkg.price + cart.addons.reduce((s,a)=>s+a.price,0);
  const inp = "w-full px-3.5 sm:px-4 py-2.5 bg-white/[0.03] border border-white/[0.05] rounded-xl text-[14px] sm:text-[15px] text-white/80 placeholder-white/15 focus:outline-none focus:border-violet-500/30 focus:ring-1 focus:ring-violet-500/10 transition-colors";
  const ch = (e:any) => setForm(p=>({...p,[e.target.name]:e.target.value}));
  const submit = (e:any) => { e.preventDefault(); setLoading(true); setTimeout(()=>{setCart(null);navigate("thank-you");},1500); };

  return (
    <div className="max-w-[1000px] mx-auto px-4 sm:px-8 py-10 sm:py-20 overflow-x-hidden">
      {/* Progress */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10 sm:mb-14">
        {["Review","Payment","Brief"].map((l,i)=>(
          <div key={l} className="flex items-center gap-2 sm:gap-3">
            <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[11px] sm:text-[14px] font-bold ${(step==="review"&&i===0)||(step==="intake"&&i<=2)?'bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white shadow-lg shadow-violet-500/15':'bg-white/[0.03] text-white/40 border border-white/[0.05]'}`}>{i+1}</div>
            <span className="text-[14px] sm:text-[14px] text-white/45 hidden sm:inline">{l}</span>
            {i<2&&<div className="w-4 sm:w-6 h-px bg-white/[0.05]"/>}
          </div>
        ))}
      </div>

      {step==="review"&&<div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
        <div className="lg:col-span-3 anim-up">
          <h1 className="text-[1.2rem] sm:text-[1.5rem] font-black mb-6 sm:mb-8 text-white/90" style={{fontFamily:"'Cabinet Grotesk',sans-serif"}}>Review your order</h1>
          <div className="neu rounded-2xl p-4 sm:p-6 mb-4 sm:mb-5">
            <div className="flex items-start justify-between mb-3 sm:mb-4">
              <div className="min-w-0 mr-3"><span className="text-[20px] sm:text-[24px] block mb-1.5 sm:mb-2">{cart.service.icon}</span><h3 className="font-bold text-[14px] sm:text-[16px] text-white/85 truncate">{cart.service.name}</h3><span className="text-[15px] sm:text-[15px] text-white/45">{cart.tier} Package</span></div>
              <span className="text-[20px] sm:text-[24px] font-black text-white/90 flex-shrink-0" style={{fontFamily:"'Cabinet Grotesk',sans-serif"}}>${pkg.price.toLocaleString()}</span>
            </div>
            <div className="flex gap-3 sm:gap-4 text-[14px] sm:text-[15px] text-white/40 mb-3 sm:mb-4"><span>📅 {pkg.delivery_days}d</span><span>🔄 {pkg.revisions} rev</span></div>
            <ul className="space-y-1.5 sm:space-y-2">{pkg.features.map((f,i)=><li key={i} className="flex items-center gap-2 text-[15px] sm:text-[14px] text-white/50"><CheckIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" color="#22C55E"/><span className="truncate">{f}</span></li>)}</ul>
          </div>
          {cart.addons.length>0&&<div className="neu rounded-2xl p-4 sm:p-6 mb-4 sm:mb-5">
            <h4 className="font-semibold text-white/70 mb-2 sm:mb-3 text-[14px] sm:text-[15px]">Add-ons</h4>
            {cart.addons.map(a=><div key={a.id} className="flex justify-between py-1.5 sm:py-2" style={{borderBottom:'1px solid rgba(255,255,255,0.03)'}}><p className="text-[15px] sm:text-[14px] text-white/60">{a.title}</p><span className="text-[15px] sm:text-[14px] font-bold text-violet-400/70">+${a.price}</span></div>)}
          </div>}
          <button onClick={()=>navigate("service-detail",{slug:cart.service.slug})} className="text-[15px] text-violet-400/60 font-medium hover:text-violet-400">← Change</button>
        </div>

        <div className="lg:col-span-2 anim-up anim-d2">
          <div className="lg:sticky lg:top-24 p-5 sm:p-6 rounded-2xl grad-border" style={{background:'linear-gradient(135deg,rgba(15,23,42,0.8),rgba(6,8,13,0.9))'}}>
            <h3 className="font-bold text-[14px] sm:text-[16px] text-white/85 mb-5 sm:mb-6">Summary</h3>
            <div className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-5">
              <div className="flex justify-between text-[15px] sm:text-[14px]"><span className="text-white/45 truncate mr-2">{cart.service.name} ({cart.tier})</span><span className="text-white/60 flex-shrink-0">${pkg.price.toLocaleString()}</span></div>
              {cart.addons.map(a=><div key={a.id} className="flex justify-between text-[15px] sm:text-[14px]"><span className="text-white/45 truncate mr-2">{a.title}</span><span className="text-white/60 flex-shrink-0">+${a.price}</span></div>)}
            </div>
            <div className="h-px bg-white/[0.05] mb-3 sm:mb-4"/>
            <div className="flex justify-between items-baseline mb-5 sm:mb-6"><span className="font-semibold text-white/60 text-[14px] sm:text-[15px]">Total</span><span className="text-[24px] sm:text-[28px] font-black text-white" style={{fontFamily:"'Cabinet Grotesk',sans-serif"}}>${total.toLocaleString()}</span></div>
            <button onClick={()=>setStep("intake")} className="w-full py-3 sm:py-3.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-[14px] sm:text-[14px] font-bold rounded-xl shadow-lg shadow-violet-500/15">Pay ${total.toLocaleString()}</button>
            <p className="mt-2.5 sm:mt-3 text-center text-[12px] sm:text-[14px] text-white/30 flex items-center justify-center gap-1.5">🔒 Secure via Stripe</p>
          </div>
        </div>
      </div>}

      {step==="intake"&&<div className="max-w-[600px] mx-auto anim-up">
        <div className="text-center mb-8 sm:mb-10">
          <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-full bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center text-[18px] sm:text-[22px]">✅</div>
          <h1 className="text-[1.2rem] sm:text-[1.5rem] font-black text-white/90 mb-2" style={{fontFamily:"'Cabinet Grotesk',sans-serif"}}>Payment successful!</h1>
          <p className="text-[14px] sm:text-[15px] text-white/45">Complete this brief so we can start.</p>
        </div>
        <form onSubmit={submit} className="space-y-3 sm:space-y-4 glass rounded-2xl p-5 sm:p-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><div><label className="block text-[14px] sm:text-[15px] text-white/45 mb-1 sm:mb-1.5 font-medium">Business *</label><input name="businessName" required value={form.businessName} onChange={ch} className={inp}/></div><div><label className="block text-[14px] sm:text-[15px] text-white/45 mb-1 sm:mb-1.5 font-medium">Contact *</label><input name="contactName" required value={form.contactName} onChange={ch} className={inp}/></div></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><div><label className="block text-[14px] sm:text-[15px] text-white/45 mb-1 sm:mb-1.5 font-medium">Email *</label><input type="email" name="email" required value={form.email} onChange={ch} className={inp}/></div><div><label className="block text-[14px] sm:text-[15px] text-white/45 mb-1 sm:mb-1.5 font-medium">Phone</label><input name="phone" value={form.phone} onChange={ch} className={inp}/></div></div>
          <div><label className="block text-[14px] sm:text-[15px] text-white/45 mb-1 sm:mb-1.5 font-medium">Website</label><input name="website" value={form.website} onChange={ch} placeholder="https://..." className={inp}/></div>
          <div><label className="block text-[14px] sm:text-[15px] text-white/45 mb-1 sm:mb-1.5 font-medium">Goals *</label><textarea name="goals" required rows={3} value={form.goals} onChange={ch} className={inp+" resize-none"}/></div>
          <div><label className="block text-[14px] sm:text-[15px] text-white/45 mb-1 sm:mb-1.5 font-medium">Notes</label><textarea name="notes" rows={2} value={form.notes} onChange={ch} className={inp+" resize-none"}/></div>
          <button type="submit" disabled={loading} className="w-full py-3 sm:py-3.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-[14px] sm:text-[14px] font-bold rounded-xl disabled:opacity-50 shadow-lg shadow-violet-500/15">{loading?"Submitting...":"Submit Brief"}</button>
        </form>
      </div>}
    </div>
  );
}
