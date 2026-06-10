import { ArrowDown } from "lucide-react";
import { IMAGES } from "../data";

interface Props {
  onNext: () => void;
}

export default function Dobra1Hero({ onNext }: Props) {
  return (
    <div className="w-full relative py-12 md:py-24 text-center z-10 space-y-12">
      
      {/* Top micro pill (minimal styled, no container box) */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 text-emerald-400 text-[10px] font-mono font-medium tracking-widest rounded-full uppercase">
        <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
        Parceria Exclusiva & Coprodução
      </div>

      {/* Syne Display Title matching the requested minimal style */}
      <h1 className="text-4xl sm:text-5xl md:text-6.5xl font-heading font-extrabold uppercase tracking-tight leading-[1.08] text-white max-w-4xl mx-auto">
        O PRÓXIMO NÍVEL DO SEU <span className="text-[#19ffa2]">FATURAMENTO DIGITAL</span>
      </h1>

      {/* Highly shortened minimal explanation / textinho */}
      <p className="font-sans text-xs md:text-sm text-zinc-300 max-w-xl mx-auto leading-relaxed">
        Você foca em gerar conteúdo de valor e autoridade. Nós assumimos toda a complexidade técnica: do copywriting e páginas de carregamento sub-segundo à otimização constante de campanhas de tráfego.
      </p>

      {/* Action triggers */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <button
          onClick={onNext}
          className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-semibold text-xs rounded-full uppercase tracking-wider hover:bg-[#F1F1F1] transition-all duration-300 active:scale-97 cursor-pointer"
        >
          Conheça Nosso Método
        </button>
        <a
          href="#ganchos"
          className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/20 text-[#F1F1F1] hover:text-white hover:bg-white/[0.04] font-semibold text-xs rounded-full uppercase tracking-wider transition-all duration-300 active:scale-97 cursor-pointer text-center"
        >
          Diagnóstico de Escala
        </a>
      </div>

      {/* Large Loose-standing Placas Image (No wrappers, no containers, completely loose and raw) */}
      <div className="pt-12 max-w-4xl mx-auto">
        <img
          src={IMAGES.placas}
          alt="Resultados de Faturamento"
          referrerPolicy="no-referrer"
          className="w-full h-auto object-contain block mx-auto transition-transform duration-500 hover:scale-[1.01]"
        />
        <p className="text-[10px] text-zinc-500 mt-4 uppercase tracking-widest font-mono">
          Validação Real • R$ 3M+ Faturados em Lançamentos Ativos
        </p>
      </div>

      {/* Flow indicator */}
      <div className="pt-12">
        <button
          onClick={onNext}
          className="inline-flex flex-col items-center gap-2 text-[10px] font-semibold tracking-widest text-[#F1F1F1]/50 hover:text-white transition duration-300 cursor-pointer"
        >
          <span className="uppercase font-mono">Explorar Funis Dominus</span>
          <ArrowDown size={12} className="animate-bounce text-[#19ffa2] mt-1" />
        </button>
      </div>

    </div>
  );
}
