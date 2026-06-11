import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Instagram, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

interface Props {
  onNext: () => void;
  onPrev?: () => void;
}

export default function Dobra4Equipe({ onNext }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: "https://dominus.site/slides/mariana/img/110k.png",
      title: "Post de Sucesso: Sentada em Consulta",
      badge: "🔥 110k Visualizações",
      subtitle: "Formato Autoridade Premium + Dor Clara",
      description: "Seu melhor desempenho orgânico. Posicionamento profissional intocável que gerou conexão imediata com quem tem rotina corrida e deseja emagrecer.",
    },
    {
      img: "https://dominus.site/slides/mariana/img/4k.png",
      title: "Quebra de Ritmo (Vago)",
      badge: "⚠️ 4k | Forra do Algoritmo",
      subtitle: "Mostrar na explicação porque não deu certo",
      description: "Replicação tardia (3 semanas depois) com promessa diluída ('4 refeições que eu faria') em vez de focar na dor principal. Sem gancho, o algoritmo congelou a entrega.",
    },
    {
      img: "https://dominus.site/slides/mariana/img/29.9k.png",
      title: "Top 10 Alimentos & Dicas",
      badge: "💡 29.9k | Educacional Prático",
      subtitle: "Foco em Utilidade e Salvamento",
      description: "Nível técnico primoroso. Retém o público qualificado pela utilidade extrema das dicas, mas precisa de ganchos iniciais de 3 segundos para quebrar padrão de scroll.",
    },
  ];

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative text-white py-12 md:py-20">
      
      {/* Category Header Badge */}
      <div className="space-y-6 max-w-4xl mx-auto text-center mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#19ffa2]/10 border border-[#19ffa2]/20 text-[#19ffa2] text-[10px] font-bold tracking-widest rounded-full uppercase font-mono">
          <Sparkles size={11} className="animate-pulse" />
          Estudo de Caso Prático
        </div>
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold uppercase tracking-tight leading-none text-white">
          Exemplos na Prática
        </h2>
        <p className="font-sans text-zinc-400 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
          Analisando a diferença crítica entre produzir posts esporádicos e estruturar funis virais consistentes.
        </p>
      </div>

      {/* Main Grid: Mariana on the Left, Bruno on the Right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start max-w-6xl mx-auto px-4">
        
        {/* Left Column: Mariana's Contents with Interactive Carousel */}
        <div className="bg-zinc-950/40 border border-white/5 p-6 md:p-8 rounded-3xl space-y-6 shadow-2xl flex flex-col justify-between min-h-[640px]">
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xl md:text-2xl font-heading font-extrabold uppercase text-white tracking-wide">
                Seus Melhores Conteúdos
              </h3>
              <a 
                href="https://www.instagram.com/maricontinonutri/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase font-mono tracking-wider font-bold text-[#19ffa2]/80 hover:text-white transition flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 shrink-0"
              >
                <Instagram size={11} />
                <span>@maricontinonutri</span>
              </a>
            </div>
            <p className="font-sans text-xs text-zinc-400 leading-relaxed font-normal">
              Clique na imagem para abrir o Instagram ou utilize os controles abaixo para analisar cada uma das postagens.
            </p>
          </div>

          {/* Interactive Carousel Frame */}
          <div className="relative group overflow-hidden rounded-2xl bg-black/40 border border-white/10 p-2 flex flex-col justify-center">
            
            {/* Main Interactive Slide Image Wrapper */}
            <a 
              href="https://www.instagram.com/maricontinonutri/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full overflow-hidden rounded-xl border border-white/5 select-none bg-zinc-950"
            >
              <img 
                src={slides[currentSlide].img}
                alt={slides[currentSlide].title}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[380px] object-contain block mx-auto transition-all duration-300 group-hover:scale-[1.01]"
              />
              
              {/* Instagram link overlay watermark hint */}
              <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md text-[8.5px] font-mono text-[#19ffa2] uppercase bg-[#19ffa2]/10 border border-[#19ffa2]/20 rounded-lg px-2 py-0.5 pointer-events-none tracking-wider">
                Ver no Instagram ↗
              </div>
            </a >

            {/* Slider Controls Overlay to avoid blocking image click */}
            <div className="flex items-center justify-between mt-4 px-2">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-xl bg-zinc-900 border border-white/10 text-white hover:bg-zinc-800 hover:text-[#19ffa2] transition active:scale-95 cursor-pointer"
                title="Slide Anterior"
              >
                <ChevronLeft size={16} />
              </button>

              {/* Dot Indicators */}
              <div className="flex items-center gap-1.5">
                {slides.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? "w-6 bg-[#19ffa2]" : "w-1.5 bg-zinc-700 hover:bg-zinc-600"
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={nextSlide}
                className="p-2 rounded-xl bg-zinc-900 border border-white/10 text-white hover:bg-zinc-800 hover:text-[#19ffa2] transition active:scale-95 cursor-pointer"
                title="Próximo Slide"
              >
                <ChevronRight size={16} />
              </button>
            </div>

          </div>

          {/* Current Slide Info Card */}
          <div className="bg-black/60 border border-white/5 p-4 rounded-2xl space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-2">
              <h4 className="font-heading font-extrabold uppercase text-xs text-white tracking-wide">
                {slides[currentSlide].title}
              </h4>
              <span className="text-[10px] font-mono text-[#19ffa2] bg-[#19ffa2]/10 border border-[#19ffa2]/20 px-2 py-0.5 rounded-full font-bold">
                {slides[currentSlide].badge}
              </span>
            </div>
            <p className="text-[10px] uppercase tracking-widest font-mono text-zinc-400 font-semibold">
              {slides[currentSlide].subtitle}
            </p>
            <p className="font-sans text-xs text-zinc-450 leading-relaxed font-normal">
              {slides[currentSlide].description}
            </p>
          </div>

        </div>

        {/* Right Column: Bruno Goytacaz Strategy Details */}
        <div className="bg-zinc-950/40 border border-white/5 p-6 md:p-8 rounded-3xl space-y-6 shadow-2xl flex flex-col justify-between min-h-[640px]">
          
          <div className="space-y-3">
            <h3 className="text-xl md:text-2xl font-heading font-extrabold uppercase text-white tracking-wide">
              Porque os grandes perfís viralizam?
            </h3>
            <p className="font-sans text-xs text-zinc-400 leading-relaxed">
              Análise sistemática sobre consistência, replicação estrita de padrões de entrega e engenharia de retenção em escala.
            </p>
          </div>

          {/* Bruno Goytacaz Profile Layout */}
          <div className="bg-black/40 border border-white/10 rounded-2xl p-5 space-y-4">
            
            {/* Bruno Goytacaz Header Info resembling profile */}
            <div className="flex items-center gap-4 border-b border-white/5 pb-4">
              <img 
                src="https://dominus.site/slides/mariana/img/bruno.png"
                alt="Bruno Goytacaz Profile Image"
                referrerPolicy="no-referrer"
                className="w-16 h-16 rounded-full border border-[#19ffa2]/30 object-cover p-0.5 shrink-0"
              />
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h4 className="font-heading font-extrabold uppercase text-sm text-white">
                    Bruno Goytacaz
                  </h4>
                  <span className="text-[8px] uppercase tracking-widest font-mono font-bold px-1.5 py-0.5 bg-zinc-900 border border-white/10 text-zinc-400 rounded-md">
                    Caso de Referência
                  </span>
                </div>
                <p className="text-[10px] font-mono text-[#19ffa2] uppercase tracking-wider font-semibold">
                  Mapeou o Formato Ideal • Escala Sequencial
                </p>
              </div>
            </div>

            {/* Strategic Analysis Content */}
            <p className="font-sans text-xs md:text-sm text-zinc-300 leading-relaxed">
              Identificou o formato campeão de comparação de alimentos e o replicou <strong className="text-white">IMEDIATAMENTE</strong> (usando o mesmo casaco, mesmo lugar, mesma iluminação) de forma inteligente para surfar a onda do algoritmo repetidas vezes em escala.
            </p>

            {/* Viral Sequence representation */}
            <div className="space-y-3 pt-2">
              <h5 className="text-[10px] font-mono uppercase tracking-widest text-[#19ffa2] font-semibold">
                Análise da Sequência de Virais:
              </h5>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-zinc-950/80 border border-white/5 p-3 rounded-xl flex flex-col justify-between">
                  <span className="text-[9px] text-zinc-400 font-mono tracking-wider uppercase block">Post de Gancho</span>
                  <span className="text-white font-heading font-extrabold text-base md:text-lg">PROVA DE ALTA</span>
                  <span className="text-[#19ffa2] text-[10px] font-mono mt-1 font-bold">Consistência Exata</span>
                </div>
                <div className="bg-zinc-950/80 border border-white/5 p-3 rounded-xl flex flex-col justify-between">
                  <span className="text-[9px] text-zinc-400 font-mono tracking-wider uppercase block">Entrega Sequencial</span>
                  <span className="text-white font-heading font-extrabold text-base md:text-lg font-mono">2M+ REACH</span>
                  <span className="text-emerald-400 text-[10px] font-mono mt-1 font-bold">Sem Fricção de Modelo</span>
                </div>
              </div>
            </div>

          </div>

          <div className="bg-black/60 border border-white/5 p-4 rounded-2xl space-y-1">
            <div className="flex items-center gap-2 text-white">
              <TrendingUp size={13} className="text-[#19ffa2]" />
              <span className="text-[10px] uppercase font-mono tracking-wider text-white font-bold">Visão de Conversão Dominus</span>
            </div>
            <p className="font-sans text-[11px] text-zinc-400 leading-relaxed font-normal">
              A diferença entre um perfil de alta autoridade estagnado e um negócio digital multimilionário escalando é a substituição do trabalho empírico por um funil planejado de VSL, mantendo a tração do público e monetizando o desejo de compra imediato de cada viral.
            </p>
          </div>

        </div>

      </div>

      {/* Primary Transition Flow Interactive Button */}
      <div className="pt-10 md:pt-14 text-center">
        <button 
          onClick={onNext}
          className="inline-flex items-center gap-2 px-8 py-3 bg-[#19ffa2] hover:bg-[#15db8b] text-black font-extrabold text-xs tracking-wider uppercase rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#19ffa2]/20 scale-100 hover:scale-[1.02] active:scale-[0.98] select-none cursor-pointer"
        >
          <span>Avançar</span>
          <ArrowRight size={13} className="text-black" />
        </button>
      </div>

    </div>
  );
}
