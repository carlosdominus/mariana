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
      <div className="space-y-20">
        
        {/* Minimal Clear Section Header */}
        <div className="space-y-3 max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 text-[#41F20A] text-[10px] font-semibold tracking-widest uppercase font-mono">
            <span className="w-1 h-1 rounded-full bg-[#41F20A] animate-pulse" />
            Mecanismo de Conversão
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold uppercase tracking-tight leading-none text-white">
            QUEM ESTÁ UTILIZANDO VSL?
          </h2>
          <p className="font-sans text-[#F1F1F1]/70 text-xs md:text-sm leading-relaxed max-w-lg">
            Direcionar público frio diretamente para checkout reduz sua margem. Nossa metodologia converte audiência em desejo de compra antes da oferta.
          </p>
        </div>

        {/* 3 Case Study Rows with Alternate Grid Layouts and 6 Loose Images */}
        <div className="space-y-24">

          {/* Row 1: Cariani (Text Left, Image Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            
            {/* Text column */}
            <div className="space-y-4">
              <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase font-bold">Aceleração Fitness</span>
              <h3 className="text-2xl md:text-3.5xl font-heading font-extrabold uppercase leading-tight text-white">
                Renato Cariani
              </h3>
              <p className="font-sans text-xs md:text-sm text-zinc-400 leading-relaxed max-w-md">
                Unindo a potência do maior influenciador fitness do Brasil a um funil de VSL e alta escala. O resultado é a conversão em massa e multiplos 8 Digitos gerados todos os meses.
              </p>
              <div className="flex items-center gap-1.5 text-[9.5px] font-mono text-[#41F20A] uppercase tracking-wider">
                <Play size={10} className="animate-pulse" />
                <span>Passe o mouse para ver a VSL e clique para abrir a página</span>
              </div>
            </div>

            {/* Loose Image with seamless cross-fade transition wrapped in redirect link */}
            <a 
              href="https://cariani.com.br/secabarriga-vsl-d35/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full overflow-hidden cursor-pointer rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#41F20A]/15 border border-white/10"
              onMouseEnter={() => setHoverCariani(true)}
              onMouseLeave={() => setHoverCariani(false)}
              onTouchStart={() => setHoverCariani(!hoverCariani)}
            >
              {/* Image 1: Profile (Base) */}
              <img
                src="https://dominus.site/slides/mariana/img/insta-cariani.png"
                alt="Renato Cariani"
                referrerPolicy="no-referrer"
                className={`w-full h-auto block transition-opacity duration-500 ease-in-out ${
                  hoverCariani ? "opacity-0" : "opacity-100"
                }`}
              />
              {/* Image 2: VSL (Hovered) */}
              <img
                src={IMAGES.vslCariani}
                alt="VSL Renato Cariani"
                referrerPolicy="no-referrer"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                  hoverCariani ? "opacity-100" : "opacity-0"
                }`}
              />
            </a>

          </div>

          {/* Row 2: Guto (Image Left, Text Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            
            {/* Loose Image with seamless cross-fade transition wrapped in redirect link - Rendered Left */}
            <a 
              href="https://rmkt.gutogalamba.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full overflow-hidden cursor-pointer rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#41F20A]/15 border border-white/10 order-2 md:order-1"
              onMouseEnter={() => setHoverGuto(true)}
              onMouseLeave={() => setHoverGuto(false)}
              onTouchStart={() => setHoverGuto(!hoverGuto)}
            >
              {/* Image 3: Profile (Base) */}
              <img
                src="https://dominus.site/slides/mariana/img/insta-galamba.png"
                alt="Guto Galamba"
                referrerPolicy="no-referrer"
                className={`w-full h-auto block transition-opacity duration-500 ease-in-out ${
                  hoverGuto ? "opacity-0" : "opacity-100"
                }`}
              />
              {/* Image 4: VSL (Hovered) */}
              <img
                src={IMAGES.vslGuto}
                alt="VSL Guto Galamba"
                referrerPolicy="no-referrer"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                  hoverGuto ? "opacity-100" : "opacity-0"
                }`}
              />
            </a>

            {/* Text column - Rendered Right */}
            <div className="space-y-4 order-1 md:order-2">
              <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase font-bold">Mentalidade & Foco</span>
              <h3 className="text-2xl md:text-3.5xl font-heading font-extrabold uppercase leading-tight text-white">
                Guto Galamba
              </h3>
              <p className="font-sans text-xs md:text-sm text-zinc-400 leading-relaxed max-w-md">
                O roteiro da VSL guia o espectador de forma lógica e irrecusável pelo método exclusivo de desenvolvimento do Guto. Embalando a proposta unica e personalizada em um treinamento completo.
              </p>
              <div className="flex items-center gap-1.5 text-[9.5px] font-mono text-[#41F20A] uppercase tracking-wider">
                <Play size={10} className="animate-pulse" />
                <span>Passe o mouse para ver a VSL e clique para abrir a página</span>
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
                Com anuncios inteligentes e personalizados, Isadora conecta sua audiência a um funil de VSL promovendo seu info-produto através dos metodos que compartilha no instagram.
              </p>
              <div className="flex items-center gap-1.5 text-[9.5px] font-mono text-[#41F20A] uppercase tracking-wider">
                <Play size={10} className="animate-pulse" />
                <span>Passe o mouse para ver a VSL e clique para abrir a página</span>
              </div>
            </div>

            {/* Loose Image with seamless cross-fade transition wrapped in redirect link */}
            <a 
              href="https://protocolorestart.com/vsl-protocolo-restart-ab-ml-v2/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full overflow-hidden cursor-pointer rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#41F20A]/15 border border-white/10"
              onMouseEnter={() => setHoverIsa(true)}
              onMouseLeave={() => setHoverIsa(false)}
              onTouchStart={() => setHoverIsa(!hoverIsa)}
            >
              {/* Image 5: Profile (Base) */}
              <img
                src="https://dominus.site/slides/mariana/img/insta-isadora.png"
                alt="Isadora Nogueira"
                referrerPolicy="no-referrer"
                className={`w-full h-auto block transition-opacity duration-500 ease-in-out ${
                  hoverIsa ? "opacity-0" : "opacity-100"
                }`}
              />
              {/* Image 6: VSL (Hovered) */}
              <img
                src={IMAGES.vslIsa}
                alt="VSL Isadora Nogueira"
                referrerPolicy="no-referrer"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                  hoverIsa ? "opacity-100" : "opacity-0"
                }`}
              />
            </a>

          </div>

        </div>

        {/* Minimal call to next phase */}
        <div className="pt-6 text-center">
          <button 
            onClick={onNext}
            className="text-[10px] text-[#41F20A] font-mono tracking-widest uppercase hover:text-white transition duration-300 font-bold cursor-pointer"
          >
            Avançar
          </button>
        </div>

      </div>
    </div>
  );
}
