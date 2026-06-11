import React, { useState } from "react";
import { Sparkles, Coins, ShieldCheck, Landmark } from "lucide-react";

interface Props {
  onPrev: () => void;
}

export default function Dobra6Pitch({ onPrev }: Props) {
  // Slider state variables initialized to match user's screenshot
  const [ticketPrice, setTicketPrice] = useState<number>(127);
  const [monthlySales, setMonthlySales] = useState<number>(300);
  const [upsellPrice, setUpsellPrice] = useState<number>(147);
  const [upsellTakeRate, setUpsellTakeRate] = useState<number>(30); //%

  // Calculations
  const baseRevenue = ticketPrice * monthlySales;
  const extraSales = Math.round(monthlySales * (upsellTakeRate / 100));
  const extraRevenue = extraSales * upsellPrice;
  const totalRevenue = baseRevenue + extraRevenue;
  const percentIncrease = baseRevenue > 0 ? Math.round((extraRevenue / baseRevenue) * 100) : 0;

  return (
    <div className="relative text-white py-12 md:py-20" id="proposta-container">
      
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#19ffa2]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Header section */}
      <div className="space-y-4 max-w-4xl mx-auto text-center mb-10 md:mb-14 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#19ffa2]/10 border border-[#19ffa2]/20 text-[#19ffa2] text-[10px] font-bold tracking-widest rounded-full uppercase font-mono">
          <Coins size={11} />
          PROVISÃO FINANCEIRA COPRODUÇÃO
        </div>
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold uppercase tracking-tight leading-none text-white">
          Simulador Técnico de Ganhos
        </h2>
        <p className="font-sans text-zinc-400 text-sm max-w-xl mx-auto leading-relaxed">
          Arraste as alças para calcular o incremento imediato de receita que nossa coprodução trará:
        </p>
      </div>

      {/* Core Simulator Widget */}
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="bg-black p-6 md:p-10 rounded-3xl border border-white/5 shadow-2.5xl space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
            
            {/* Left side: Inputs */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              {/* Slider 1 */}
              <div className="space-y-1">
                <label className="text-[10px] text-zinc-400 font-mono uppercase flex justify-between tracking-wider font-extrabold pb-1">
                  <span>Preço do infoproduto principal</span>
                  <span className="text-white font-bold">R$ {ticketPrice}</span>
                </label>
                <input
                  type="range"
                  min="47"
                  max="497"
                  step="10"
                  value={ticketPrice}
                  onChange={(e) => setTicketPrice(Number(e.target.value))}
                  className="w-full h-[3px] bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-[#19ffa2]"
                />
              </div>

              {/* Slider 2 */}
              <div className="space-y-1">
                <label className="text-[10px] text-zinc-400 font-mono uppercase flex justify-between tracking-wider font-extrabold pb-1">
                  <span>Vendas mensais esperadas</span>
                  <span className="text-white font-bold">{monthlySales} unidades</span>
                </label>
                <input
                  type="range"
                  min="50"
                  max="1500"
                  step="50"
                  value={monthlySales}
                  onChange={(e) => setMonthlySales(Number(e.target.value))}
                  className="w-full h-[3px] bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-[#19ffa2]"
                />
              </div>

              {/* Slider 3 */}
              <div className="space-y-1">
                <label className="text-[10px] text-zinc-400 font-mono uppercase flex justify-between tracking-wider font-extrabold pb-1">
                  <span>Preço sugerido do Upsell</span>
                  <span className="text-white font-bold">R$ {upsellPrice}</span>
                </label>
                <input
                  type="range"
                  min="47"
                  max="297"
                  step="10"
                  value={upsellPrice}
                  onChange={(e) => setUpsellPrice(Number(e.target.value))}
                  className="w-full h-[3px] bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-[#19ffa2]"
                />
              </div>

              {/* Slider 4 */}
              <div className="space-y-1">
                <label className="text-[10px] text-zinc-400 font-mono uppercase flex justify-between tracking-wider font-extrabold pb-1">
                  <span>Opção de Conversão do Upsell pós-compra</span>
                  <span className="text-white font-bold">{upsellTakeRate}%</span>
                </label>
                <input
                  type="range"
                  min="15"
                  max="45"
                  step="5"
                  value={upsellTakeRate}
                  onChange={(e) => setUpsellTakeRate(Number(e.target.value))}
                  className="w-full h-[3px] bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-[#19ffa2]"
                />
              </div>

            </div>

            {/* Right side: Outputs Grid matching user's custom design */}
            <div className="lg:col-span-5 bg-zinc-950 p-6 md:p-8 rounded-2xl border border-white/[0.04] flex flex-col justify-between space-y-6">
              
              <div className="space-y-5">
                
                {/* Base billing row */}
                <div className="flex justify-between items-center pb-3 border-b border-white/[0.04]">
                  <span className="text-[11px] text-zinc-400 font-sans uppercase tracking-widest font-extrabold">Faturamento Base</span>
                  <span className="text-sm font-mono font-extrabold text-[#F1F1F1]">R$ {baseRevenue.toLocaleString("pt-BR")},00</span>
                </div>

                {/* Upsell additional gains row */}
                <div className="flex justify-between items-center bg-[#1B4D3E]/5 p-3 rounded-xl border border-[#1B4D3E]/15">
                  <div>
                    <span className="text-[11px] text-[#19ffa2] font-heading uppercase font-bold tracking-wider block">Ganhos de Upsell</span>
                    <span className="text-[9px] text-[#F1F1F1]/40 font-mono tracking-wider">({extraSales} compradores agregados)</span>
                  </div>
                  <span className="text-md font-mono font-extrabold text-[#19ffa2]">+ R$ {extraRevenue.toLocaleString("pt-BR")},00</span>
                </div>

                {/* Giant total accumulated projection */}
                <div className="pt-3 text-center space-y-1.5">
                  <span className="text-[9px] text-zinc-500 font-sans text-center block uppercase tracking-widest font-bold">PROJEÇÃO TOTAL ACUMULADA</span>
                  <div className="text-center font-heading font-extrabold text-2xl md:text-3xl lg:text-[34px] tracking-tight text-white leading-none">
                    R$ {totalRevenue.toLocaleString("pt-BR")},00
                  </div>
                </div>

              </div>

              {/* Bottom footer metadata bar inside output cards */}
              <div className="pt-4 border-t border-white/[0.04] flex justify-between items-center">
                <div>
                  <span className="text-[9px] font-sans text-zinc-400 uppercase block tracking-wider leading-none font-bold pb-1">Aumento de Receita</span>
                  <span className="text-[#19ffa2] font-heading font-extrabold text-xs uppercase tracking-wider">+{percentIncrease}% LTV</span>
                </div>
                <div className="bg-[#19ffa2]/10 border border-[#19ffa2]/25 text-[#19ffa2] text-[9px] px-3 py-1 rounded-full font-bold uppercase tracking-widest font-mono">
                  Mapeado por Coprodução
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Contract terms to complete the proposal beautifully */}
      <div className="max-w-4xl mx-auto mt-12 px-4 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 text-xs text-zinc-400 justify-center">
          <ShieldCheck size={14} className="text-[#19ffa2]" />
          <span className="font-heading font-extrabold uppercase text-[10px] tracking-widest">Segurança de nosso Contrato Experimental</span>
        </div>
        <p className="font-sans text-zinc-400 text-xs max-w-xl mx-auto leading-relaxed">
          Iniciamos com um período experimental de 60 dias assinado digitalmente pelo GOV.BR. Se você não estiver satisfeita com o entrosamento e os resultados gerados, encerramos a coprodução amigavelmente e sem qualquer burocracia ou multa.
        </p>
        
        {/* Return Button */}
        <div className="pt-6">
          <button 
            onClick={onPrev}
            className="px-6 py-2.5 bg-zinc-950 hover:bg-zinc-900 text-zinc-400 hover:text-white border border-white/5 hover:border-white/10 text-xs font-bold uppercase tracking-wider rounded-full transition active:scale-95 cursor-pointer"
          >
            Voltar para A Parceria
          </button>
        </div>
      </div>

    </div>
  );
}
