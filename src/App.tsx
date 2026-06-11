import { useState, useEffect } from "react";
import { Mail, ArrowRight, Video, Sparkles, TrendingUp, Users, Award, Percent } from "lucide-react";

import Dobra1Hero from "./components/Dobra1Hero";
import Dobra2VSL from "./components/Dobra2VSL";
import Dobra3Upsell from "./components/Dobra3Upsell";
import Dobra4Equipe from "./components/Dobra4Equipe";
import Dobra5Oferta from "./components/Dobra5Oferta";
import Dobra6Pitch from "./components/Dobra6Pitch";

export default function App() {
  const [activeLever, setActiveLever] = useState<number>(1);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Monitor scroll state for some header dynamic opacity adjustments
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Quem Somos", href: "#faturamento" },
    { label: "O Método VSL", href: "#vsl" },
    { label: "A Parceria", href: "#oferta" },
    { label: "Proposta", href: "#proposta" },
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-zinc-800 selection:text-white">
      
      {/* iOS Style Glass Floating Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 pb-2 transition-all duration-300">
        <header 
          className={`max-w-6xl mx-auto rounded-full border transition-all duration-500 ${
            scrolled 
              ? "bg-black/80 backdrop-blur-xl border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.9)] py-2.5 px-6" 
              : "bg-transparent border-transparent py-4 px-6 md:px-8"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            
            {/* DOMINUS White Premium Logo */}
            <a href="#faturamento" className="flex items-center transition">
              <img 
                src="https://i.ibb.co/chkPHKnw/logo-extensa-branca.webp" 
                alt="DOMINUS" 
                referrerPolicy="no-referrer"
                className="h-5 md:h-5.5 w-auto object-contain brightness-105 active:scale-95 transition-transform"
              />
            </a>

            {/* Anchor links list - Fully Transparent (No box containers, as requested) */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[11px] font-sans font-medium text-[#F1F1F1]/70 hover:text-white uppercase tracking-wider transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Quick action white action button */}
            <div className="flex items-center">
              <a 
                href="#proposta"
                className="px-6 py-2 bg-white text-black text-xs font-bold rounded-full border border-white hover:bg-black hover:text-[#F1F1F1] hover:border-white/20 transition-all duration-300 active:scale-95 cursor-pointer"
              >
                Proposta
              </a>
            </div>

          </div>
        </header>
      </div>

      {/* Main Continuous Canvas Stage */}
      <main className="relative pt-0">
        
        {/* Glow Effects backdrop layout */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-zinc-900/20 rounded-full blur-[160px] pointer-events-none" />
        
        {/* 1st dob - Faturamento / Intro */}
        <section 
          id="faturamento" 
          className="scroll-mt-28 pt-24 pb-6 md:pt-32 md:pb-12 border-b border-zinc-900/50 bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.45) 50%, rgba(0, 0, 0, 0.95) 100%), url('https://dominus.site/slides/mariana/img/bk.png')"
          }}
        >
          {/* Subtle glow underneath */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[40vh] bg-[#1B4D3E]/10 rounded-full blur-[130px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <Dobra1Hero
              onNext={() => document.getElementById("vsl")?.scrollIntoView({ behavior: "smooth" })}
            />
          </div>
        </section>

        {/* 2nd dob - VSL Explanation & Comparison */}
        <section id="vsl" className="scroll-mt-28 py-12 lg:py-20 border-b border-zinc-900/50 bg-zinc-950/20">
          <div className="max-w-6xl mx-auto px-4">
            <Dobra2VSL
              onNext={() => document.getElementById("upsell")?.scrollIntoView({ behavior: "smooth" })}
              onPrev={() => document.getElementById("faturamento")?.scrollIntoView({ behavior: "smooth" })}
            />
          </div>
        </section>

        {/* 3rd dob - Upsell Maximization & Simulator */}
        <section id="upsell" className="scroll-mt-28 py-12 lg:py-20 border-b border-zinc-900/50">
          <div className="max-w-6xl mx-auto px-4">
            <Dobra3Upsell
              onNext={() => document.getElementById("equipe")?.scrollIntoView({ behavior: "smooth" })}
              onPrev={() => document.getElementById("vsl")?.scrollIntoView({ behavior: "smooth" })}
            />
          </div>
        </section>

        {/* 4th dob - Quem Somos & Virtual Workspace Office */}
        <section id="equipe" className="scroll-mt-28">
          <Dobra4Equipe
            onNext={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}
            onPrev={() => document.getElementById("upsell")?.scrollIntoView({ behavior: "smooth" })}
          />
        </section>

        {/* 5th dob - A Parceria e Escopo de Trabalho */}
        <section id="oferta" className="scroll-mt-28 py-12 lg:py-20 border-b border-zinc-900/50">
          <Dobra5Oferta
            onNext={() => document.getElementById("proposta")?.scrollIntoView({ behavior: "smooth" })}
            onPrev={() => document.getElementById("equipe")?.scrollIntoView({ behavior: "smooth" })}
          />
        </section>

        {/* 6th dob - Simulador de Alocação de Ganhos e Pitch Final */}
        <section 
          id="proposta" 
          className="scroll-mt-28 py-12 lg:py-24 border-t border-zinc-900/20 bg-cover bg-center bg-no-repeat relative animate-fade-in"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.3) 55%, rgba(0, 0, 0, 0.95) 100%), url('https://dominus.site/slides/mariana/img/bk.png')"
          }}
        >
          {/* Subtle glow underneath */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[40vh] bg-[#1B4D3E]/10 rounded-full blur-[130px] pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <Dobra6Pitch
              onPrev={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}
            />
          </div>
        </section>

      </main>

      {/* Elegant CTA Footer bar */}
      <footer className="bg-black border-t border-zinc-900/80 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="space-y-3">
            <img 
              src="https://i.ibb.co/chkPHKnw/logo-extensa-branca.webp" 
              alt="DOMINUS" 
              referrerPolicy="no-referrer"
              className="h-5 w-auto object-contain brightness-95"
            />
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm mt-3 font-sans">
              Engenharia estratégica de funis de Direct Response e coprodução premium para grandes autoridades digitais.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-wildest">Metas da Parceria</h4>
            <ul className="text-xs text-zinc-400 space-y-1.5 font-medium font-sans">
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 bg-[#19ffa2] rounded-full" />
                Dobra dos ganhos mensais de forma imediata via Upsell
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 bg-[#19ffa2] rounded-full" />
                Escala de 10x na entrega orgânica através de ganchos de 3s
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 bg-[#19ffa2] rounded-full" />
                Estruturação do roteiro VSL de alta conversão
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-wildest">Contato Direto</h4>
            <div className="space-y-2">
              <a 
                href="mailto:contacto@dominus.site" 
                className="flex items-center gap-2 text-xs text-zinc-300 hover:text-white transition font-sans"
              >
                <Mail size={13} className="text-[#19ffa2]" />
                <span>contacto@dominus.site</span>
              </a>
              <div className="text-[10px] text-zinc-500 font-mono">
                Planejado e executado por Gilberto & Felipe
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-zinc-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] text-zinc-500 font-mono uppercase tracking-widest">
          <span>© 1026 COPRODUÇÃO DOMINUS • TODOS OS DIREITOS RESERVADOS</span>
          <span>ESTATÍSTICAS VALIDADAS EM MARKETPLACE DR</span>
        </div>
      </footer>

    </div>
  );
}
