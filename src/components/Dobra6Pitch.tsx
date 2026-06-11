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

  // Platform Fee Calculations
  const totalSalesCount = monthlySales + extraSales;

  // 1. Hotmart: até 5 dígitos = 9,9% + R$ 1,00 | 6 dígitos = 8,9% + R$ 1,00
  const isSixDigits = totalRevenue >= 100000;
  const hotmartRate = isSixDigits ? 0.089 : 0.099;
  const hotmartFee = (totalRevenue * hotmartRate) + (totalSalesCount * 1);
  const hotmartNet = Math.max(0, totalRevenue - hotmartFee);

  // 2. Eduzz: 4,90% + R$ 2,49 por transação
  const eduzzFee = (totalRevenue * 0.0490) + (totalSalesCount * 2.49);
  const eduzzNet = Math.max(0, totalRevenue - eduzzFee);

  // 3. Kiwify: 8,99% + R$ 2,49 por venda aprovada
  const kiwifyFee = (totalRevenue * 0.0899) + (totalSalesCount * 2.49);
  const kiwifyNet = Math.max(0, totalRevenue - kiwifyFee);

  return (
    <div className="relative text-white py-12 md:py-20" id="proposta-container">
      
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#19ffa2]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Header section */}
      <div className="space-y-4 max-w-4xl mx-auto text-center mb-10 md:mb-14 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#19ffa2]/10 border border-[#19ffa2]/20 text-[#19ffa2] text-xs font-bold tracking-widest rounded-full uppercase font-sans">
          <Coins size={12} />
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
        <div className="bg-black/40 backdrop-blur-md p-6 md:p-10 rounded-[32px] border border-white/5 shadow-2.5xl space-y-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
            
            {/* Left side: Inputs */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              
              {/* Slider 1 */}
              <div className="space-y-2">
                <label className="text-xs md:text-sm text-zinc-400 font-sans uppercase flex justify-between tracking-wider font-extrabold pb-0.5">
                  <span>Preço do infoproduto principal</span>
                  <span className="text-white text-lg md:text-xl font-black font-sans">R$ {ticketPrice}</span>
                </label>
                <input
                  type="range"
                  min="47"
                  max="497"
                  step="10"
                  value={ticketPrice}
                  onChange={(e) => setTicketPrice(Number(e.target.value))}
                  className="w-full h-[4px] bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-[#19ffa2]"
                />
              </div>

              {/* Slider 2 */}
              <div className="space-y-2">
                <label className="text-xs md:text-sm text-zinc-400 font-sans uppercase flex justify-between tracking-wider font-extrabold pb-0.5">
                  <span>Vendas mensais esperadas</span>
                  <span className="text-white text-lg md:text-xl font-black font-sans">{monthlySales} unidades</span>
                </label>
                <input
                  type="range"
                  min="50"
                  max="1500"
                  step="50"
                  value={monthlySales}
                  onChange={(e) => setMonthlySales(Number(e.target.value))}
                  className="w-full h-[4px] bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-[#19ffa2]"
                />
              </div>

              {/* Slider 3 */}
              <div className="space-y-2">
                <label className="text-xs md:text-sm text-zinc-400 font-sans uppercase flex justify-between tracking-wider font-extrabold pb-0.5">
                  <span>Preço sugerido do Upsell</span>
                  <span className="text-white text-lg md:text-xl font-black font-sans">R$ {upsellPrice}</span>
                </label>
                <input
                  type="range"
                  min="47"
                  max="297"
                  step="10"
                  value={upsellPrice}
                  onChange={(e) => setUpsellPrice(Number(e.target.value))}
                  className="w-full h-[4px] bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-[#19ffa2]"
                />
              </div>

              {/* Slider 4 */}
              <div className="space-y-2">
                <label className="text-xs md:text-sm text-zinc-400 font-sans uppercase flex justify-between tracking-wider font-extrabold pb-0.5">
                  <span>Conversão estimada de Upsell</span>
                  <span className="text-white text-lg md:text-xl font-black font-sans">{upsellTakeRate}%</span>
                </label>
                <input
                  type="range"
                  min="15"
                  max="45"
                  step="5"
                  value={upsellTakeRate}
                  onChange={(e) => setUpsellTakeRate(Number(e.target.value))}
                  className="w-full h-[4px] bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-[#19ffa2]"
                />
              </div>

            </div>

            {/* Right side: Outputs Grid matching user's custom design */}
            <div className="lg:col-span-5 bg-zinc-950/80 p-6 md:p-8 rounded-2xl border border-white/[0.04] flex flex-col justify-between space-y-6">
              
              <div className="space-y-5">
                
                {/* Base billing row */}
                <div className="flex justify-between items-center pb-3 border-b border-white/[0.04]">
                  <span className="text-xs text-zinc-400 font-sans uppercase tracking-widest font-extrabold">Faturamento Base</span>
                  <span className="text-lg md:text-xl font-sans font-black text-[#F1F1F1]">R$ {baseRevenue.toLocaleString("pt-BR")},00</span>
                </div>

                {/* Upsell additional gains row */}
                <div className="flex justify-between items-center bg-[#1B4D3E]/10 p-4 rounded-xl border border-[#1B4D3E]/20">
                  <div>
                    <span className="text-xs text-[#19ffa2] font-sans uppercase font-extrabold tracking-wider block">Ganhos de Upsell</span>
                    <span className="text-[10px] text-[#F1F1F1]/55 font-sans tracking-wide">({extraSales} compradores agregados)</span>
                  </div>
                  <span className="text-xl md:text-2xl font-sans font-black text-[#19ffa2]">+ R$ {extraRevenue.toLocaleString("pt-BR")},00</span>
                </div>

                {/* Giant total accumulated projection */}
                <div className="pt-3 text-center space-y-2">
                  <span className="text-[10px] text-zinc-500 font-sans text-center block uppercase tracking-widest font-black">PROJEÇÃO TOTAL ACUMULADA (Bruto)</span>
                  <div className="text-center font-sans font-black text-4xl md:text-5xl lg:text-[52px] tracking-tight text-[#19ffa2] leading-none">
                    R$ {totalRevenue.toLocaleString("pt-BR")},00
                  </div>
                </div>

              </div>

              {/* Bottom footer metadata bar inside output cards */}
              <div className="pt-4 border-t border-white/[0.04] flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-sans text-zinc-400 uppercase block tracking-wider leading-none font-bold pb-1">Aumento de Receita</span>
                  <span className="text-[#19ffa2] font-sans font-black text-base uppercase tracking-wider">+{percentIncrease}% LTV</span>
                </div>
                <div className="bg-[#19ffa2]/10 border border-[#19ffa2]/25 text-[#19ffa2] text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-widest font-sans">
                  Mapeado por Coprodução
                </div>
              </div>

            </div>

          </div>

          {/* Platform Fees Comparison Section */}
          <div className="pt-8 border-t border-white/5 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-sans font-extrabold uppercase tracking-wider text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#19ffa2] inline-block animate-pulse"></span>
                  Comparativo Real de Plataformas de Vendas
                </h3>
                <p className="text-xs text-zinc-400 font-sans mt-0.5">
                  Projeção de deduções operacionais simuladas para o seu faturamento total ({totalSalesCount} vendas enviadas)
                </p>
              </div>
              <div className="bg-[#19ffa2]/10 border border-[#19ffa2]/20 text-[#19ffa2] text-[10px] px-3 py-1 rounded-full font-extrabold uppercase tracking-widest font-sans shrink-0 self-start sm:self-center">
                Taxas Contratuais Reais
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              {/* Hotmart Card - Liquid Glass Light Background */}
              <div className="bg-white/95 backdrop-blur-md p-6 rounded-[24px] border border-white/85 shadow-lg flex flex-col justify-between space-y-5 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl text-zinc-900">
                <div className="flex justify-between items-center pb-3 border-b border-zinc-200/80">
                  <div className="h-6 w-24 flex items-center">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/1/16/Hotmart_Logo.svg" 
                      alt="Hotmart" 
                      referrerPolicy="no-referrer"
                      className="max-h-full max-w-full object-contain" 
                    />
                  </div>
                  <span className={`text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full font-black font-sans ${isSixDigits ? "bg-orange-600/10 text-orange-700 border border-orange-600/20" : "bg-zinc-100 border border-zinc-250 text-zinc-600"}`}>
                    {isSixDigits ? "6 Dígitos: 8.9%" : "Até 5 Dígitos: 9.9%"}
                  </span>
                </div>
                
                <div className="space-y-2.5">
                  <div className="flex justify-between text-xs text-zinc-500 font-sans">
                    <span className="font-semibold">Taxa Aplicada:</span>
                    <span className="text-zinc-900 font-black">{isSixDigits ? "8,9% + R$ 1,00" : "9,9% + R$ 1,00"}</span>
                  </div>
                  <div className="flex justify-between text-xs text-zinc-500 font-sans">
                    <span className="font-semibold">Taxas Operacionais:</span>
                    <span className="text-red-600 font-black">- R$ {hotmartFee.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="pt-2.5 border-t border-zinc-200/80 flex justify-between text-xs font-sans items-center">
                    <span className="text-zinc-700 font-bold">Repasse Líquido:</span>
                    <span className="text-emerald-700 font-black text-lg md:text-xl">R$ {hotmartNet.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                </div>
              </div>

              {/* Eduzz Card - Liquid Glass Light Background */}
              <div className="bg-white/95 backdrop-blur-md p-6 rounded-[24px] border border-white/85 shadow-lg flex flex-col justify-between space-y-5 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl text-zinc-900">
                <div className="flex justify-between items-center pb-3 border-b border-zinc-200/80">
                  <div className="h-6 w-24 flex items-center">
                    <img 
                      src="https://ajuda.eduzz.com/hubfs/EDUZZ.LOGO.1.png" 
                      alt="Eduzz" 
                      referrerPolicy="no-referrer"
                      className="max-h-full max-w-full object-contain filter brightness-95" 
                    />
                  </div>
                  <span className="bg-amber-600/10 text-amber-700 border border-amber-600/20 text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full font-black font-sans">
                    Venda Direta: 4.90%
                  </span>
                </div>
                
                <div className="space-y-2.5">
                  <div className="flex justify-between text-xs text-zinc-500 font-sans">
                    <span className="font-semibold">Taxa Aplicada:</span>
                    <span className="text-zinc-900 font-black">4,90% + R$ 2,49</span>
                  </div>
                  <div className="flex justify-between text-xs text-zinc-500 font-sans">
                    <span className="font-semibold">Taxas Operacionais:</span>
                    <span className="text-red-600 font-black">- R$ {eduzzFee.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="pt-2.5 border-t border-zinc-200/80 flex justify-between text-xs font-sans items-center">
                    <span className="text-zinc-700 font-bold">Repasse Líquido:</span>
                    <span className="text-emerald-700 font-black text-lg md:text-xl">R$ {eduzzNet.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                </div>
              </div>

              {/* Kiwify Card - Liquid Glass Light Background with Correct Branding Color */}
              <div className="bg-white/95 backdrop-blur-md p-6 rounded-[24px] border border-white/85 shadow-lg flex flex-col justify-between space-y-5 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl text-zinc-900">
                <div className="flex justify-between items-center pb-3 border-b border-zinc-200/80">
                  <div className="h-6 w-24 flex items-center">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Kiwify_logo_horizontal.svg" 
                      alt="Kiwify" 
                      referrerPolicy="no-referrer"
                      className="max-h-full max-w-full object-contain" 
                    />
                  </div>
                  <span className="bg-purple-600/10 text-purple-700 border border-purple-600/20 text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full font-black font-sans">
                    Taxa Fixa: 8.99%
                  </span>
                </div>
                
                <div className="space-y-2.5">
                  <div className="flex justify-between text-xs text-zinc-500 font-sans">
                    <span className="font-semibold">Taxa Aplicada:</span>
                    <span className="text-zinc-900 font-black">8,99% + R$ 2,49</span>
                  </div>
                  <div className="flex justify-between text-xs text-zinc-500 font-sans">
                    <span className="font-semibold">Taxas Operacionais:</span>
                    <span className="text-red-600 font-black">- R$ {kiwifyFee.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="pt-2.5 border-t border-zinc-200/80 flex justify-between text-xs font-sans items-center">
                    <span className="text-zinc-700 font-bold">Repasse Líquido:</span>
                    <span className="text-emerald-700 font-black text-lg md:text-xl">R$ {kiwifyNet.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="p-3 bg-[#19ffa2]/5 rounded-xl border border-[#19ffa2]/10 text-[11px] text-zinc-400 text-center font-sans">
              ℹ️ <strong>Nota Técnica:</strong> Os cálculos acima simulam as taxas de processamento bruto padrão de checkout. Na coprodução, configuramos o repasse líquido direto de comissões (“split de vendas”) diretamente pelas plataformas parceiras para máxima conformidade fiscal.
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
