import { ArrowDown } from "lucide-react";
import { IMAGES } from "../data";

interface Props {
  onNext: () => void;
}

export default function Dobra1Hero({ onNext }: Props) {
  return (
    <div className="w-full relative pt-2 pb-2 md:pt-4 md:pb-6 text-center z-10 space-y-6 md:space-y-8">
      
      {/* Syne Display Title matching the requested minimal style with wide layout */}
      <h1 className="text-2.5xl sm:text-4xl md:text-5.2xl lg:text-5.5xl font-heading font-extrabold uppercase tracking-tight leading-[1.08] text-white max-w-4xl mx-auto px-4 select-none">
        O PRÓXIMO NÍVEL<br />
        DO SEU FATURAMENTO<br />
        <span className="text-[#19ffa2]">DIGITAL</span>
      </h1>

      {/* Highly shortened minimal explanation / textinho formatted in exactly 2 lines on desktop */}
      <p className="font-sans text-xs md:text-sm text-zinc-350 max-w-5xl mx-auto leading-relaxed px-4">
        Você foca em gerar conteúdo de valor e autoridade. Nós assumimos toda a complexidade técnica:<br className="hidden md:inline" />
        do copywriting e páginas de carregamento sub-segundo à otimização constante de campanhas de tráfego.
      </p>

      {/* Large Loose-standing Placas Image (No wrappers, no containers, completely loose and raw) */}
      <div className="pt-2 max-w-3xl mx-auto">
        <img
          src={IMAGES.placas}
          alt="Resultados de Faturamento"
          referrerPolicy="no-referrer"
          className="w-full h-auto object-contain block mx-auto transition-transform duration-500 hover:scale-[1.01]"
        />
        <p className="text-[10px] text-zinc-500 mt-3 uppercase tracking-widest font-mono">
          Validação Real • R$ 3M+ Faturados
        </p>
      </div>

      {/* Flow indicator */}
      <div className="pt-4">
        <button
          onClick={onNext}
          className="inline-flex flex-col items-center gap-1.5 text-[9px] font-semibold tracking-widest text-[#F1F1F1]/50 hover:text-white transition duration-300 cursor-pointer"
        >
          <span className="uppercase font-mono">Explorar Funis Dominus</span>
          <ArrowDown size={11} className="animate-bounce text-[#19ffa2] mt-0.5" />
        </button>
      </div>

    </div>
  );
}
