import React from "react";
import { Sparkles, Video, PenTool, LifeBuoy, TrendingUp, Layers, Palette, ShieldCheck, CreditCard, ArrowRight } from "lucide-react";

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function Dobra5Oferta({ onNext, onPrev }: Props) {
  const offerings = [
    {
      icon: <Video className="text-[#19ffa2]" size={20} />,
      title: "Editores de Vídeo de Alta Retenção",
      desc: "Profissionais dedicados a cortar e dinamizar seus criativos e conteúdos orgânicos seguindo a engenharia dos 3 segundos cruciais."
    },
    {
      icon: <PenTool className="text-[#19ffa2]" size={20} />,
      title: "Copywriter & Roteirista Premium",
      desc: "Narrativas persuasivas escritas sob medida para os seus funis de VSL, anúncios de alto engajamento e sequências de conversão imediata."
    },
    {
      icon: <TrendingUp className="text-[#19ffa2]" size={20} />,
      title: "Gestor de Tráfego Dedicado",
      desc: "Distribuição cirúrgica do orçamento em canais de atração de público frio (Meta Ads, Google) visando conversão de alta escala e ROI de 2x+."
    },
    {
      icon: <Layers className="text-[#19ffa2]" size={20} />,
      title: "Gestão Avançada de Páginas e Projetos",
      desc: "Implementação, hospedagem rápida e suporte de infraestrutura técnica de funis sem você precisar saber configurar nenhuma linha de código."
    },
    {
      icon: <Palette className="text-[#19ffa2]" size={20} />,
      title: "Designer Gráfico Profissional",
      desc: "Criação de identidade visual, blocos de oferta premium, carrosséis educativos de alto impacto e criativos comerciais elegantes."
    },
    {
      icon: <LifeBuoy className="text-[#19ffa2]" size={20} />,
      title: "Suporte e Atendimento Ativo",
      desc: "Equipe de apoio em tempo real para tirar dúvidas dos alunos, garantir a entrega do infoproduto e aumentar o sentimento de cuidado pós-venda."
    },
    {
      icon: <CreditCard className="text-[#19ffa2]" size={20} />,
      title: "Custeamento Total de Ferramentas",
      desc: "Assumimos 100% dos custos com plataformas de e-mail marketing, hospedagem, automações (ManyChat), IA de edição e muito mais."
    }
  ];

  return (
    <div className="relative text-white py-12 md:py-24" id="oferta-container">
      
      {/* Dynamic background lights */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#19ffa2]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header section */}
      <div className="space-y-4 max-w-4xl mx-auto text-center mb-12 md:mb-16 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#19ffa2]/10 border border-[#19ffa2]/20 text-[#19ffa2] text-[10px] font-bold tracking-widest rounded-full uppercase font-mono">
          <ShieldCheck size={11} />
          Infraestrutura Inclusa
        </div>
        <h2 className="text-3xl md:text-5.5xl font-heading font-extrabold uppercase tracking-tight leading-none text-white">
          A Parceria do Seu Lado
        </h2>
        <p className="font-sans text-zinc-400 text-sm md:text-md max-w-xl mx-auto leading-relaxed">
          Assumimos todas as barreiras financeiras e operacionais para que você brilhe gravando o seu melhor conteúdo.
        </p>
      </div>

      {/* Content Layout Grid: Left (Oferta items) & Right (Team Evidence Image) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start max-w-6xl mx-auto px-4 z-10 relative">
        
        {/* Left: Interactive list of items */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          <div className="border border-white/5 bg-zinc-950/40 rounded-3xl p-6 md:p-8 space-y-6">
            <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest font-bold border-b border-white/5 pb-3">
              O modelo "Feito por nós para você ganhar mais"
            </h3>
            
            <div className="space-y-4">
              {offerings.map((item, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 p-4 rounded-xl border border-white/[0.03] bg-black/40 hover:border-[#19ffa2]/20 transition-all duration-300"
                >
                  <div className="p-2.5 h-11 w-11 rounded-lg bg-[#19ffa2]/5 border border-[#19ffa2]/15 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-heading font-extrabold uppercase text-white tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Social/Team Evidence Block (gather.jpeg) - Vertical print */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <div className="border border-[#19ffa2]/20 bg-gradient-to-b from-zinc-950/80 to-[#020d08]/90 rounded-3xl p-6 space-y-6 shadow-2xl relative overflow-hidden">
            
            <div className="space-y-2">
              <span className="text-[9px] font-mono text-[#19ffa2] uppercase tracking-widest font-bold">
                PROVA DE INFRAESTRUTURA REAL
              </span>
              <h3 className="text-lg md:text-xl font-heading font-extrabold uppercase text-white tracking-wide leading-tight">
                Escritório Virtual • Equipe Ativa
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Não somos apenas dois freelancers tentando dar conta do impossível. Nós mantemos um ecossistema ativo trabalhando de forma integrada no Gather para garantir o ritmo de postagens, tráfego e suporte.
              </p>
            </div>

            {/* Evidence Image Container (Vertical 4:5 ratio) */}
            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-black flex items-center justify-center relative group">
              <img 
                src="https://dominus.site/slides/mariana/img/gather.jpeg" 
                alt="Equipe no Gather"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback in case gather.jpeg is requested locally or from relative assets
                  (e.target as HTMLImageElement).src = 'gather.jpeg';
                }}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#19ffa2]/20 text-[8.5px] font-mono text-[#19ffa2] uppercase tracking-wider font-bold">
                Ambiente Virtual Ativo
              </div>
            </div>

            <div className="bg-[#19ffa2]/5 p-3.5 rounded-xl border border-[#19ffa2]/10 text-[11px] text-[#19ffa2]/90 font-mono leading-relaxed">
              💡 <strong>Tudo Coberto por Nós:</strong> Esse time trabalha do nosso lado. Zero custo operacional, contratação de CLT ou gerenciamento de pessoas do seu lado.
            </div>

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
