import { useState } from "react";
import { Sparkles, Percent, ShoppingBag, ArrowUpRight } from "lucide-react";

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function Dobra3Upsell({ onNext }: Props) {
  // Simulator state variables
  const [ticketPrice, setTicketPrice] = useState<number>(97);
  const [monthlySales, setMonthlySales] = useState<number>(300);
  const [upsellTakeRate, setUpsellTakeRate] = useState<number>(30); //%
  const [upsellPrice, setUpsellPrice] = useState<number>(147);

  // Calculations
  const baseRevenue = ticketPrice * monthlySales;
  const extraSales = Math.round(monthlySales * (upsellTakeRate / 100));
  const extraRevenue = extraSales * upsellPrice;
  const totalRevenue = baseRevenue + extraRevenue;
  const percentIncrease = baseRevenue > 0 ? Math.round((extraRevenue / baseRevenue) * 100) : 0;

  // Tabs for interactive checkout
  const [activeTab, setActiveTab] = useState<"standard" | "upsell">("upsell");

  return (
    <div className="relative text-white py-10 md:py-16">
      <div className="space-y-16">
        
        {/* Title block */}
        <div className="space-y-4 max-w-3xl text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black border border-[#1B4D3E]/30 text-emerald-400 text-[10px] font-semibold tracking-wider rounded-full uppercase">
            <Percent size={11} className="text-[#19ffa2]" />
            Rentabilidade em Escala (LTV)
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold uppercase tracking-tight leading-none text-white">
            Upsell pós-compra imediato
          </h2>
          <p className="font-sans text-[#F1F1F1]/70 text-sm leading-relaxed max-w-xl">
            O lucro do jogo digital está no pós-venda. Após pagar o custo por clique, qualquer oferta adicional aceita pelo cliente vira lucro imediato para a sua operação.
          </p>
        </div>

        {/* Analogy and Simulated Checkout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-5 flex flex-col justify-between bg-black p-6 md:p-8 rounded-3xl border border-white/5 space-y-6">
            <div className="space-y-3">
              <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-white">Otimização de LTV</h3>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                Grande parte dos infoprodutores não utiliza checkout de um clique para complementos imediatos, perdendo até 45% de lucro potencial por comprador ativo.
              </p>
            </div>

            <div className="bg-[#1B4D3E]/5 p-4 rounded-2xl border border-[#1B4D3E]/10 space-y-2">
              <span className="text-[9px] font-semibold text-[#19ffa2] uppercase tracking-wider block">Seu fluxo de compra em análise</span>
              <p className="font-sans text-[11px] text-zinc-400 leading-relaxed">
                O direcionamento pós-venda atual pula ofertas adicionais fundamentais. Propomos preencher essa lacuna no mesmo instante.
              </p>
            </div>
          </div>

          {/* Interactive Flow Preview */}
          <div className="lg:col-span-7 bg-zinc-950 p-6 rounded-3xl border border-white/5 flex flex-col justify-between space-y-6">
            
            <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
              <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <ShoppingBag size={12} className="text-zinc-400" />
                Preview Interativo de Compra
              </h3>
              
              <div className="flex bg-black rounded-full p-1 border border-zinc-900">
                <button
                  onClick={() => setActiveTab("standard")}
                  className={`px-3 py-1 text-[9px] font-semibold rounded-full cursor-pointer transition uppercase tracking-wider ${
                    activeTab === "standard" ? "bg-white/5 text-zinc-300" : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  Tradicional (Atual)
                </button>
                <button
                  onClick={() => setActiveTab("upsell")}
                  className={`px-3.5 py-1 text-[9px] font-bold rounded-full cursor-pointer transition uppercase tracking-wider ${
                    activeTab === "upsell" ? "bg-[#19ffa2] text-black" : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  Com Upsell Dominus
                </button>
              </div>
            </div>

            {/* Simulated Checkout Box */}
            <div className="bg-black rounded-2xl p-6 border border-zinc-900 flex-1 flex flex-col justify-center min-h-[180px]">
              {activeTab === "standard" ? (
                <div className="text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 text-zinc-500 flex items-center justify-center mx-auto border border-zinc-800">
                    ✕
                  </div>
                  <div>
                    <h4 className="text-white font-heading font-extrabold text-xs uppercase tracking-wider">Checkout Aprovado</h4>
                    <p className="text-[9px] text-[#F1F1F1]/40 mt-1 uppercase tracking-widest font-mono">Fim da Transação • R$ 0 faturado adicional</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-[#1B4D3E]/10 border border-[#1B4D3E]/20 p-3 rounded-xl text-xs text-white">
                    <span className="font-heading font-bold text-[9px] tracking-wider uppercase">Compra inicial ok!</span>
                    <span className="font-mono text-[9px] bg-[#19ffa2] text-black px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Aguarde...</span>
                  </div>
                  
                  <div className="border border-white/5 bg-zinc-950 p-4 rounded-2xl space-y-3">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                          <Sparkles size={11} className="text-[#19ffa2]" />
                          Consultoria Premium + Áudio Exclusivo
                        </h4>
                        <p className="font-sans text-[11px] text-zinc-400 mt-1 leading-relaxed">
                          Oferta de alta compatibilidade mostrada no timing cirúrgico pós-pagamento.
                        </p>
                      </div>
                      <div className="text-right flex-none">
                        <p className="line-through text-zinc-700 text-[9.5px] font-mono">R$ 297</p>
                        <p className="text-xs font-bold text-emerald-400 font-mono">Por R$ 147</p>
                      </div>
                    </div>

                    <p className="text-[9px] font-sans text-zinc-600 leading-relaxed italic">
                      *Renato Cariani e Guto Galamba oferecem upgrades imediatos em sua jornada de compras idêntica a essa.
                    </p>

                    <button className="w-full py-2.5 bg-white text-black font-bold text-[9.5px] rounded-full uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#F1F1F1] transition shadow-lg active:scale-97">
                      Adicionar por 1-Clique
                      <ArrowUpRight size={11} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Earnings Simulator Widget */}
        <div className="bg-black p-6 md:p-8 rounded-3xl border border-white/5 space-y-8">
          <div className="space-y-1.5 text-left">
            <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-[#F1F1F1]">
              Simulador Técnico de Ganhos
            </h3>
            <p className="font-sans text-xs text-zinc-400">
              Arraste as alças para calcular o incremento imediato de receita que nossa coprodução trará:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div className="md:col-span-2 space-y-5">
              <div>
                <label className="text-[9px] text-zinc-500 font-mono uppercase flex justify-between tracking-wider font-bold">
                  <span>Preço do infoproduto principal</span>
                  <span className="text-[#F1F1F1] font-semibold">R$ {ticketPrice}</span>
                </label>
                <input
                  type="range"
                  min="47"
                  max="497"
                  step="10"
                  value={ticketPrice}
                  onChange={(e) => setTicketPrice(Number(e.target.value))}
                  className="w-full h-1 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-[#19ffa2] mt-2.5"
                />
              </div>

              <div>
                <label className="text-[9px] text-zinc-500 font-mono uppercase flex justify-between tracking-wider font-bold">
                  <span>Vendas mensais esperadas</span>
                  <span className="text-[#F1F1F1] font-semibold">{monthlySales} unidades</span>
                </label>
                <input
                  type="range"
                  min="50"
                  max="1500"
                  step="50"
                  value={monthlySales}
                  onChange={(e) => setMonthlySales(Number(e.target.value))}
                  className="w-full h-1 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-[#19ffa2] mt-2.5"
                />
              </div>

              <div>
                <label className="text-[9px] text-zinc-500 font-mono uppercase flex justify-between tracking-wider font-bold">
                  <span>Preço sugerido do Upsell</span>
                  <span className="text-[#F1F1F1] font-semibold">R$ {upsellPrice}</span>
                </label>
                <input
                  type="range"
                  min="47"
                  max="297"
                  step="10"
                  value={upsellPrice}
                  onChange={(e) => setUpsellPrice(Number(e.target.value))}
                  className="w-full h-1 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-[#19ffa2] mt-2.5"
                />
              </div>

              <div>
                <label className="text-[9px] text-zinc-500 font-mono uppercase flex justify-between tracking-wider font-bold">
                  <span>Opção de Conversão do Upsell pós-compra</span>
                  <span className="text-[#F1F1F1] font-semibold">{upsellTakeRate}%</span>
                </label>
                <input
                  type="range"
                  min="15"
                  max="45"
                  step="5"
                  value={upsellTakeRate}
                  onChange={(e) => setUpsellTakeRate(Number(e.target.value))}
                  className="w-full h-1 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-[#19ffa2] mt-2.5"
                />
              </div>
            </div>

            {/* Simulated Projected Outputs */}
            <div className="md:col-span-2 bg-zinc-950 p-6 rounded-2xl border border-white/[0.04] flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2.5 border-b border-zinc-900">
                  <span className="text-xs text-zinc-400 font-sans uppercase tracking-wider font-medium">Faturamento Base</span>
                  <span className="text-xs font-mono font-bold text-zinc-400">R$ {baseRevenue.toLocaleString("pt-BR")},00</span>
                </div>

                <div className="flex justify-between items-center pb-2.5 border-b border-zinc-900 bg-[#1B4D3E]/5 p-2 rounded-xl border border-[#1B4D3E]/10">
                  <div>
                    <span className="text-xs text-emerald-400 font-heading uppercase font-bold tracking-wider block">Ganhos de Upsell</span>
                    <span className="text-[8.5px] text-zinc-500 font-mono tracking-wider">({extraSales} compradores agregados)</span>
                  </div>
                  <span className="text-sm font-mono font-bold text-[#19ffa2]">+ R$ {extraRevenue.toLocaleString("pt-BR")},00</span>
                </div>

                <div className="pt-2">
                  <span className="text-[8.5px] text-zinc-500 font-sans text-center block mb-1 uppercase tracking-widest font-bold">PROJEÇÃO TOTAL ACUMULADA</span>
                  <div className="text-center font-heading font-extrabold text-2xl lg:text-3xl text-white">
                    R$ {totalRevenue.toLocaleString("pt-BR")},00
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-900 flex justify-between items-center">
                <div>
                  <span className="text-[8px] font-sans text-zinc-400 uppercase block tracking-wider leading-none">Aumento de Receita</span>
                  <span className="text-[#19ffa2] font-heading font-bold text-sm">+{percentIncrease}% LTV</span>
                </div>
                <div className="bg-[#1B4D3E]/30 text-emerald-400 text-[8.5px] px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider">
                  Mapeado por Coprodução
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
