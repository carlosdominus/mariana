import { useState } from "react";
import { Play } from "lucide-react";
import { IMAGES } from "../data";

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function Dobra2VSL({ onNext }: Props) {
  const [hoverCariani, setHoverCariani] = useState(false);
  const [hoverGuto, setHoverGuto] = useState(false);
  const [hoverIsa, setHoverIsa] = useState(false);

  return (
    <div className="relative text-white py-12 md:py-24">
      <div className="space-y-24">
        
        {/* Minimal Clear Section Header */}
        <div className="space-y-3 max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 text-[#19ffa2] text-[10px] font-semibold tracking-widest uppercase font-mono">
            <span className="w-1 h-1 rounded-full bg-[#19ffa2] animate-pulse" />
            Mecanismo de Conversão
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold uppercase tracking-tight leading-none text-white">
            PÁGINAS VSL EM PARCERIAS DE ESCALA
          </h2>
          <p className="font-sans text-[#F1F1F1]/70 text-xs md:text-sm leading-relaxed max-w-lg">
            Direcionar público frio diretamente para checkout reduz sua margem. Nossa metodologia converte audiência em desejo de compra antes da oferta.
          </p>
        </div>

        {/* 3 Case Study Rows with Alternate Grid Layouts and 6 Loose Images */}
        <div className="space-y-28">

          {/* Row 1: Cariani (Text Left, Image Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            
            {/* Text column */}
            <div className="space-y-4">
              <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase font-bold">Aceleração Fitness</span>
              <h3 className="text-2xl md:text-3.5xl font-heading font-extrabold uppercase leading-tight text-white">
                Renato Cariani
              </h3>
              <p className="font-sans text-xs md:text-sm text-zinc-400 leading-relaxed max-w-md">
                Unimos a potência do maior influenciador fitness do Brasil a um funil focado em auto-comprometimento de público. O resultado é a conversão em massa sem perdas de tráfego.
              </p>
              <div className="flex items-center gap-1.5 text-[9.5px] font-mono text-[#19ffa2] uppercase tracking-wider">
                <Play size={10} className="animate-pulse" />
                <span>Passe o mouse na imagem para ver o ambiente da VSL</span>
              </div>
            </div>

            {/* Loose Image column (No bulky containers) */}
            <div 
              className="relative aspect-video w-full overflow-hidden cursor-pointer rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#1B4D3E]/10"
              onMouseEnter={() => setHoverCariani(true)}
              onMouseLeave={() => setHoverCariani(false)}
              onTouchStart={() => setHoverCariani(!hoverCariani)}
            >
              <img
                src={hoverCariani ? IMAGES.vslCariani : IMAGES.instaRenato}
                alt="Case Renato Cariani"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>

          </div>

          {/* Row 2: Guto (Image Left, Text Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            
            {/* Loose Image column (No bulky containers) - Rendered Left first */}
            <div 
              className="relative aspect-video w-full overflow-hidden cursor-pointer rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#1B4D3E]/10 order-2 md:order-1"
              onMouseEnter={() => setHoverGuto(true)}
              onMouseLeave={() => setHoverGuto(false)}
              onTouchStart={() => setHoverGuto(!hoverGuto)}
            >
              <img
                src={hoverGuto ? IMAGES.vslGuto : IMAGES.instaGuto}
                alt="Case Guto Galamba"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>

            {/* Text column - Rendered Right */}
            <div className="space-y-4 order-1 md:order-2">
              <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase font-bold">Mentalidade & Foco</span>
              <h3 className="text-2xl md:text-3.5xl font-heading font-extrabold uppercase leading-tight text-white">
                Guto Galamba
              </h3>
              <p className="font-sans text-xs md:text-sm text-zinc-400 leading-relaxed max-w-md">
                Decomposição direta de crenças limitantes. O roteiro da VSL guia o espectador de forma lógica e irrecusável pelo método exclusivo de desenvolvimento do Guto.
              </p>
              <div className="flex items-center gap-1.5 text-[9.5px] font-mono text-[#19ffa2] uppercase tracking-wider">
                <Play size={10} className="animate-pulse" />
                <span>Passe o mouse na imagem para ver o ambiente da VSL</span>
              </div>
            </div>

          </div>

          {/* Row 3: Isa (Text Left, Image Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            
            {/* Text column */}
            <div className="space-y-4">
              <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase font-bold">Beleza & Negócios</span>
              <h3 className="text-2xl md:text-3.5xl font-heading font-extrabold uppercase leading-tight text-white">
                Isadora Nogueira
              </h3>
              <p className="font-sans text-xs md:text-sm text-zinc-400 leading-relaxed max-w-md">
                Otimização perfeita entre retenção visual do feed do Instagram e páginas de escala de carregamento ultrassônico. Menos fricção, mais lucratividade diária.
              </p>
              <div className="flex items-center gap-1.5 text-[9.5px] font-mono text-[#19ffa2] uppercase tracking-wider">
                <Play size={10} className="animate-pulse" />
                <span>Passe o mouse na imagem para ver o ambiente da VSL</span>
              </div>
            </div>

            {/* Loose Image column (No bulky containers) */}
            <div 
              className="relative aspect-video w-full overflow-hidden cursor-pointer rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#1B4D3E]/10"
              onMouseEnter={() => setHoverIsa(true)}
              onMouseLeave={() => setHoverIsa(false)}
              onTouchStart={() => setHoverIsa(!hoverIsa)}
            >
              <img
                src={hoverIsa ? IMAGES.vslIsa : IMAGES.instaIsadora}
                alt="Case Isadora Nogueira"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>

          </div>

        </div>

        {/* Minimal call to next phase */}
        <div className="pt-6 text-center">
          <button 
            onClick={onNext}
            className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase hover:text-white transition duration-300 cursor-pointer"
          >
            Avançar para Rentabilidade de Checkout ➜
          </button>
        </div>

      </div>
    </div>
  );
}
