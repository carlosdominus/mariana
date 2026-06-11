import React from "react";
import { ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { StaggerTestimonials } from "./ui/stagger-testimonials";

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function Dobra5Oferta({ onNext, onPrev }: Props) {
  return (
    <div className="relative text-white py-12 md:py-20" id="oferta-container">
      
      {/* Background lights */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#19ffa2]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header section with very clean copywriting */}
      <div className="space-y-4 max-w-6xl mx-auto text-left mb-12 md:mb-14 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-[#19ffa2]/20 text-[#19ffa2] text-[10px] font-bold tracking-widest rounded-full uppercase font-mono">
          <ShieldCheck size={11} />
          Parceria e Escopo Inclusos
        </div>
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold uppercase tracking-tight leading-none text-white">
          A Equipe ao seu Lado
        </h2>
        <p className="font-sans text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed">
          Nós financiamos e assessoramos toda a estrutura técnica, copy e edição. Você grava o conteúdo que domina, e nosso time cuida da escala operacional e distribuição de anúncios.
        </p>
      </div>

      {/* Interactive Staggered Testimonials showing the crew */}
      <div className="relative z-10 w-full overflow-hidden">
        <StaggerTestimonials />
      </div>

      {/* Brief extra details about our high-tech setup */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12 px-4 text-left">
        <div className="bg-zinc-950/40 border border-white/[0.03] p-5 rounded-2xl flex gap-4 items-start">
          <div className="p-2.5 h-10 w-10 rounded-lg bg-[#19ffa2]/5 border border-[#19ffa2]/15 flex items-center justify-center shrink-0">
            <Sparkles className="text-[#19ffa2]" size={16} />
          </div>
          <div className="space-y-1.5">
            <h4 className="text-xs font-heading font-extrabold uppercase text-white tracking-wide">
              Virtual Office Integrado
            </h4>
            <p className="text-[11px] text-zinc-400 leading-normal">
              Equipe síncrona trabalhando inside nosso QG virtual no Gather. De segunda a sexta, monitorando seu funil de vendas em tempo real.
            </p>
          </div>
        </div>
        <div className="bg-zinc-950/40 border border-white/[0.03] p-5 rounded-2xl flex gap-4 items-start">
          <div className="p-2.5 h-10 w-10 rounded-lg bg-[#19ffa2]/5 border border-[#19ffa2]/15 flex items-center justify-center shrink-0">
            <ShieldCheck className="text-[#19ffa2]" size={16} />
          </div>
          <div className="space-y-1.5">
            <h4 className="text-xs font-heading font-extrabold uppercase text-white tracking-wide">
              Custo Zero de Assinaturas
            </h4>
            <p className="text-[11px] text-zinc-400 leading-normal">
              Nossa agência cobre 100% de ferramentas Premium de IA, domínios, servidores, plataformas de vídeo e automação digital.
            </p>
          </div>
        </div>
      </div>

      {/* Transition navigation controls */}
      <div className="relative z-10 pt-12 md:pt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button 
          onClick={onPrev}
          className="px-6 py-2.5 bg-black hover:bg-zinc-900 text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 text-xs font-bold uppercase tracking-wider rounded-full transition active:scale-95 cursor-pointer"
        >
          Voltar para Prática
        </button>
        <button 
          onClick={onNext}
          className="inline-flex items-center gap-2 px-8 py-3 bg-[#19ffa2] hover:bg-[#15db8b] text-black font-extrabold text-xs tracking-wider uppercase rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#19ffa2]/20 scale-100 hover:scale-[1.02] active:scale-[0.98] select-none cursor-pointer"
        >
          <span>Conhecer a Proposta</span>
          <ArrowRight size={13} className="text-black" />
        </button>
      </div>

    </div>
  );
}
