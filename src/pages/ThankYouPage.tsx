import { useApp } from "../App";
export function ThankYouPage() {
  const { navigate } = useApp();
  return (
    <div className="max-w-[600px] mx-auto px-4 sm:px-8 py-16 sm:py-20 text-center anim-up overflow-x-hidden">
      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-5 sm:mb-6 rounded-full bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/10 flex items-center justify-center text-[28px] sm:text-[36px]">🎉</div>
      <h1 className="text-[1.4rem] sm:text-[1.8rem] lg:text-[2.2rem] font-black mb-3 sm:mb-4 text-white/95" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>You're all set!</h1>
      <p className="text-[13px] sm:text-[15px] text-white/30 mb-8 sm:mb-10 max-w-md mx-auto leading-relaxed">Our team has your brief and will start immediately.</p>
      <div className="neu rounded-2xl p-5 sm:p-7 text-left mb-8 sm:mb-10">
        <h3 className="font-bold text-white/85 mb-4 sm:mb-5 text-[13px] sm:text-[15px]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>What happens next?</h3>
        {[{ i: "📧", t: "Confirmation email sent", d: "Check inbox for receipt" }, { i: "👋", t: "Team assigned (2 hours)", d: "Dedicated lead for your project" }, { i: "📞", t: "Kickoff message (24 hours)", d: "We'll clarify any questions" }, { i: "⚡", t: "Work begins", d: "We build & keep you updated" }].map((s, i) => (
          <div key={i} className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4 last:mb-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.03] border border-white/[0.04] flex items-center justify-center text-[14px] sm:text-[16px] flex-shrink-0">{s.i}</div>
            <div className="min-w-0"><h4 className="text-[11.5px] sm:text-[12.5px] font-semibold text-white/65">{s.t}</h4><p className="text-[10px] sm:text-[10.5px] text-white/20">{s.d}</p></div>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3">
        <button onClick={() => navigate("services")} className="px-6 sm:px-7 py-2.5 sm:py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-[12px] sm:text-[13px] font-semibold rounded-full">More Services</button>
        <button onClick={() => navigate("home")} className="px-6 sm:px-7 py-2.5 sm:py-3 border border-white/[0.06] text-[12px] sm:text-[13px] text-white/35 rounded-full hover:border-white/[0.12] transition-colors">Home</button>
      </div>
      <p className="text-[9px] sm:text-[10px] text-white/10 mt-8 sm:mt-10">Order #RJ-{Math.random().toString(36).substring(2,8).toUpperCase()}</p>
    </div>
  );
}
