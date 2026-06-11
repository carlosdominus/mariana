import { ArrowDown } from "lucide-react";
import { IMAGES } from "../data";

interface Props {
  onNext: () => void;
}

export default function Dobra1Hero({ onNext }: Props) {
  return (
    <div className="w-full relative pt-2 pb-2 md:pt-4 md:pb-6 text-center z-10 space-y-8 md:space-y-12">
      


      {/* Credibility Profiles Grid (Gilberto on the Left, Felipe on the Right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-4xl mx-auto pt-4 text-center px-4">
        
        {/* Gilberto Column */}
        <div className="flex flex-col items-center space-y-3">
          <div className="relative group w-full max-w-sm">
            <div className="absolute inset-0 bg-[#41F20A]/10 rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img 
              src="https://dominus.site/slides/mariana/img/gil.png"
              alt="Gilberto Ortiz"
              referrerPolicy="no-referrer"
              className="w-full aspect-square rounded-3xl object-cover relative border border-white/10 hover:border-[#41F20A]/30 transition-all duration-300 shadow-2xl"
            />
          </div>
          <div className="space-y-1">
            <h3 className="text-md md:text-lg font-heading font-extrabold uppercase text-white tracking-wide">
              Gilberto Ortiz
            </h3>
            <p className="text-[#41F20A] text-[9px] uppercase tracking-widest font-mono font-semibold">
              CEO & Copywriter
            </p>
          </div>
          <p className="text-zinc-400 text-xs md:text-sm font-sans leading-relaxed max-w-sm">
            CEO do Grupo Dominus e Copywriter com múltiplos 7 Dígitos gerados através de funis de VSL's para público frio.
          </p>
        </div>

        {/* Felipe Column */}
        <div className="flex flex-col items-center space-y-3">
          <div className="relative group w-full max-w-sm">
            <div className="absolute inset-0 bg-[#41F20A]/10 rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img 
              src="https://dominus.site/slides/mariana/img/felipe.jpg"
              alt="Felipe Martins"
              referrerPolicy="no-referrer"
              className="w-full aspect-square rounded-3xl object-cover relative border border-white/10 hover:border-[#41F20A]/30 transition-all duration-300 shadow-2xl"
            />
          </div>
          <div className="space-y-1">
            <h3 className="text-md md:text-lg font-heading font-extrabold uppercase text-white tracking-wide">
              Felipe Martins
            </h3>
            <p className="text-[#41F20A] text-[9px] uppercase tracking-widest font-mono font-semibold">
              Coprodutor & Gestor
            </p>
          </div>
          <p className="text-zinc-400 text-xs md:text-sm font-sans leading-relaxed max-w-sm">
            Coprodutor e Gestor de tráfego com mais de 7 Dígitos investidos no Meta Ads.
          </p>
        </div>

      </div>

      {/* Large Loose-standing Placas Image (No wrappers, no containers, completely loose and raw) */}
      <div className="pt-4 max-w-3xl mx-auto">
        <img
          src={IMAGES.placas}
          alt="Resultados de Faturamento"
          referrerPolicy="no-referrer"
          className="w-full h-auto object-contain block mx-auto transition-transform duration-500 hover:scale-[1.01]"
        />
      </div>

      {/* Flow indicator */}
      <div className="pt-2">
        <button
          onClick={onNext}
          className="inline-flex flex-col items-center gap-1.5 text-[9px] font-semibold tracking-widest text-[#F1F1F1]/50 hover:text-white transition duration-300 shortcut flex cursor-pointer"
        >
          <span className="uppercase font-mono">Conheça Nossos Funis VSL</span>
          <ArrowDown size={11} className="animate-bounce text-[#41F20A] mt-0.5" />
        </button>
      </div>

    </div>
  );
}
