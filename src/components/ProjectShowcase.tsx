import { IMAGES } from "../data/images";

export const IMG = IMAGES;

export function ProjectCard({
  title,
  category,
  color,
  imgSrc,
  imgAlt,
}: {
  title: string;
  category: string;
  color: string;
  imgSrc: string;
  imgAlt: string;
}) {
  return (
    <div className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer neu">
      <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-[#0a0c1a]">
        <img src={imgSrc} alt={imgAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/20 to-transparent" />
        <div className="absolute inset-0 bg-[#050510]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <span className="px-5 py-2.5 rounded-full bg-white/10 text-[11px] font-semibold text-white border border-white/10">View Project →</span>
        </div>
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider text-white/90" style={{ background:`${color}40`, backdropFilter:'blur(8px)', border:`1px solid ${color}25` }}>
            {category}
          </span>
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <h4 className="text-[13px] sm:text-[15px] font-bold text-white/80 group-hover:text-white transition-colors display leading-snug">{title}</h4>
      </div>
    </div>
  );
}
