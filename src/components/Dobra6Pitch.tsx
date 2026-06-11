import React, { useState } from "react";
import { Sparkles, ArrowRight, ShieldCheck, Zap, AlertTriangle, Coins, TrendingUp, Handshake, Landmark, FileText } from "lucide-react";

interface Props {
  onPrev: () => void;
}

export default function Dobra6Pitch({ onPrev }: Props) {
  // Scenario Toggle: "normal" (Spend 500k) or "difficult" (Spend 700k)
  const [scenario, setScenario] = useState<"normal" | "difficult">("normal");
  
  // Platform Selected
  const [platform, setPlatform] = useState<"eduzz" | "hotmart" | "kiwify">("eduzz font-bold");

  // Fixed Numbers from the requested copy
  const revenue = 1000000; // R$ 1 Million faturamento
  const taxRate = 0.06; // 6% taxes
  const teamToolsCost = 50000; // R$ 50k team and tools cost
  
  // Dynamic advertisement spend
  const adSpend = scenario === "normal" ? 500000 : 700000;
  
  // Standard rough calculation of platform fees (e.g. Eduzz / Hotmart: ~4.9% + R$ 1 or rounded for simple representation as 4.9%)
  const platformFeeRate = 0.049;
  const platformFee = revenue * platformFeeRate;

  // Let's calculate actual total expenses
  const totalExpenses = adSpend + platformFee + (revenue * taxRate) + teamToolsCost;
  
  // Net Profit
  const netProfit = Math.max(0, revenue - totalExpenses);

  // Profit Divisions:
  const split33percent = netProfit * 0.3333;
  const split50percent = netProfit * 0.50;

  // Dominus Model: 15% of FATURAMENTO (not profit)
  const dominusModel = revenue * 0.15;

  return (
    <div className="relative text-white py-12 md:py-24" id="pitch-container">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#19ffa2]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header section */}
      <div className="space-y-4 max-w-4xl mx-auto text-center mb-10 md:mb-16 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#19ffa2]/10 border border-[#19ffa2]/20 text-[#19ffa2] text-[10px] font-bold tracking-widest rounded-full uppercase font-mono">
          <Landmark size={11} />
          Alocação de Lucro e Faturamento
        </div>
        <h2 className="text-3xl md:text-5.5xl font-heading font-extrabold uppercase tracking-tight leading-none text-white">
          Proposta e Divisão de Riscos
        </h2>
        <p className="font-sans text-zinc-400 text-sm md:text-md max-w-xl mx-auto leading-relaxed">
          Compare os cenários práticos de rentabilidade e entenda o motivo pelo qual criamos o modelo mais seguro para sua carreira.
        </p>
      </div>

      {/* Interactive Simulator Wrapper */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* Left Column: Interactive Settings and Sim Panels */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="border border-white/5 bg-zinc-950/40 p-6 md:p-8 rounded-3xl space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
              <div>
                <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider font-bold">
                  Simulador de Cenários
                </h3>
                <p className="text-[11px] text-zinc-500">Selecione o desempenho operacional da campanha:</p>
              </div>

              {/* Toggles */}
              <div className="inline-flex bg-zinc-900 p-1 rounded-xl border border-white/5">
                <button
                  onClick={() => setScenario("normal")}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all uppercase cursor-pointer ${
                    scenario === "normal"
                      ? "bg-[#19ffa2] text-black"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Mês Saudável (ROI 2x)
                </button>
                <button
                  onClick={() => setScenario("difficult")}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all uppercase cursor-pointer ${
                    scenario === "difficult"
                      ? "bg-red-500 text-white"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  Mês Difícil (Tráfego Caro)
                </button>
              </div>
            </div>

            {/* Campaign core specs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-zinc-900/40 border border-white/5 p-4 rounded-2xl">
                <span className="text-[9px] font-mono text-zinc-500 uppercase block tracking-wider">Faturamento Gerado</span>
                <span className="text-lg md:text-xl font-heading font-extrabold text-white block mt-1">R$ 1.000.000</span>
                <span className="text-[10px] text-zinc-500 block mt-0.5">Meta base ideal</span>
              </div>
              <div className="bg-zinc-900/40 border border-white/5 p-4 rounded-2xl">
                <span className="text-[9px] font-mono text-zinc-500 uppercase block tracking-wider">Verba de Anúncio</span>
                <span className={`text-lg md:text-xl font-heading font-extrabold block mt-1 ${scenario === "normal" ? "text-white" : "text-red-400"}`}>
                  R$ {adSpend.toLocaleString()}
                </span>
                <span className="text-[10px] text-zinc-500 block mt-0.5">
                  {scenario === "normal" ? "Retorno de 2.0x" : "Retorno de 1.4x"}
                </span>
              </div>
              <div className="bg-zinc-900/40 border border-white/5 p-4 rounded-2xl">
                <span className="text-[9px] font-mono text-emerald-400 uppercase block tracking-wider">Custos de Equipe</span>
                <span className="text-lg md:text-xl font-heading font-extrabold text-emerald-400 block mt-1">Gratuito</span>
                <span className="text-[10px] text-zinc-500 block mt-0.5">Custeado pela Dominus</span>
              </div>
            </div>

            {/* Platform selection and other deductions */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-bold">
                Taxas & Custos Administrativos Deduzidos
              </h4>

              <div className="bg-black/40 border border-white/5 rounded-2xl p-4 md:p-5 space-y-3.5">
                
                {/* Platform select displaying Eduzz first */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                  <div className="flex items-center gap-2">
                    <Coins size={14} className="text-[#19ffa2]" />
                    <span className="text-xs text-zinc-300 font-sans">Selecione o Checkout e Gateway de Pagamentos:</span>
                  </div>
                  
                  <div className="flex text-[10px] font-mono font-bold uppercase gap-1 bg-zinc-900 rounded-lg p-1 border border-white/5">
                    <button 
                      onClick={() => setPlatform("eduzz")}
                      className={`px-3 py-1 rounded cursor-pointer transition ${platform.includes("eduzz") ? "bg-[#19ffa2] text-black font-extrabold" : "text-zinc-500 hover:text-white"}`}
                    >
                      👑 Eduzz (Seu Checkout)
                    </button>
                    <button 
                      onClick={() => setPlatform("hotmart")}
                      className={`px-3 py-1 rounded cursor-pointer transition ${platform === "hotmart" ? "bg-[#19ffa2] text-black font-extrabold" : "text-zinc-500 hover:text-white"}`}
                    >
                      Hotmart
                    </button>
                    <button 
                      onClick={() => setPlatform("kiwify")}
                      className={`px-3 py-1 rounded cursor-pointer transition ${platform === "kiwify" ? "bg-[#19ffa2] text-black font-extrabold" : "text-zinc-500 hover:text-white"}`}
                    >
                      Kiwify
                    </button>
                  </div>
                </div>

                {/* Costs details list */}
                <div className="space-y-2.5 text-xs text-zinc-400">
                  <div className="flex items-center justify-between">
                    <span>Taxas de processamento e segurança (Plataforma):</span>
                    <span className="font-mono text-zinc-200">~ R$ {platformFee.toLocaleString()} (4.9%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Impostos Estrito do Simples Nacional para Coprodução:</span>
                    <span className="font-mono text-zinc-200">R$ 60.000 (Taxa de 6% sobre faturamento)</span>
                  </div>
                  <div className="flex items-center justify-between text-emerald-400">
                    <span>Ferramentas operacionais de conversão, automação e servidores:</span>
                    <span className="font-mono font-bold">R$ 0 (R$ {teamToolsCost.toLocaleString()} custeado integralmente por nós)</span>
                  </div>
                  
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-white font-mono font-bold text-sm">
                    <span>Lucro Real Sobrado (Linha de Fundo):</span>
                    <span className={netProfit > 100000 ? "text-[#19ffa2]" : "text-yellow-500"}>
                      R$ {netProfit.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Model Comparison Blocks */}
            <div className="space-y-3 pt-2">
              <h4 className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-bold">
                Como você recebe? Comparativo Geral de Mercado
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* 33% Split model */}
                <div className="border border-white/5 bg-zinc-900/20 p-4 rounded-2xl flex flex-col justify-between space-y-2">
                  <div>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase block">Modelo 3 Partes</span>
                    <h5 className="font-heading font-extrabold text-[#F1F1F1] text-xs uppercase block mt-1">Divisão de Lucro (33%)</h5>
                    <p className="text-[10px] text-zinc-500 leading-snug mt-1">
                      Você recebe um terço do lucro líquido ajustado após todas as deduções de custo.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/5">
                    <span className="text-[10px] text-zinc-400 block">Seus ganhos neste mês:</span>
                    <span className="text-md md:text-lg font-heading font-extrabold text-zinc-300 block">
                      R$ {split33percent.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                </div>

                {/* 50% split model */}
                <div className="border border-white/5 bg-zinc-900/20 p-4 rounded-2xl flex flex-col justify-between space-y-2">
                  <div>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase block">Modelo Meio a Meio</span>
                    <h5 className="font-heading font-extrabold text-[#F1F1F1] text-xs uppercase block mt-1">Divisão Paritária (50%)</h5>
                    <p className="text-[10px] text-zinc-500 leading-snug mt-1">
                      O modelo tradicional onde se racha o lucro líquido obtido ao fim de 30 dias.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/5">
                    <span className="text-[10px] text-zinc-400 block">Seus ganhos neste mês:</span>
                    <span className="text-md md:text-lg font-heading font-extrabold text-zinc-300 block">
                      R$ {split50percent.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                </div>

                {/* Dominus Revenue Share (15% Faturamento) */}
                <div className="border-2 border-[#19ffa2] bg-[#19ffa2]/5 p-4 rounded-2xl flex flex-col justify-between space-y-2 relative">
                  <div className="absolute -top-2.5 right-3 px-2 py-0.5 bg-[#19ffa2] text-black font-mono text-[8px] font-bold uppercase rounded-md tracking-wider">
                    RECOMENDADO
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-[#19ffa2] uppercase block">Contrato Dominus</span>
                    <h5 className="font-heading font-extrabold text-white text-xs uppercase block mt-1">15% do FATURAMENTO</h5>
                    <p className="text-[10px] text-[#19ffa2]/80 leading-snug mt-1">
                      Independente dos gastos de anúncio ou ROI final, você tem ganho estrito garantido.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#19ffa2]/20">
                    <span className="text-[10px] text-white/70 block">Seus Ganhos Estáveis:</span>
                    <span className="text-lg md:text-xl font-heading font-extrabold text-[#19ffa2] block">
                      R$ {dominusModel.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Crucial feedback notice matching dialogue */}
            {scenario === "difficult" && (
              <div className="bg-red-950/25 border border-red-900/40 p-4 rounded-2xl flex gap-3 text-xs leading-relaxed text-red-300">
                <AlertTriangle size={16} className="shrink-0 text-red-400" />
                <p>
                  ⚠️ <strong>Repare no Perigo:</strong> Quando o mês vai mal e o custo de tráfego sobe, a divisão de lucro tradicional faz os seus ganhos desmoronarem para <strong>R$ {split50percent.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}</strong>. No modelo Dominus, você continua recebendo exatamente os mesmos <strong>R$ 150.000 (15%)</strong>. Nós assumimos toda a flutuação do tráfego.
                </p>
              </div>
            )}

          </div>

        </div>

        {/* Right Column: Copywriting Context & Close Terms of Offer */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Pitch dialog container */}
          <div className="bg-[#020d08]/80 border border-[#19ffa2]/15 p-6 rounded-3xl space-y-5">
            <span className="text-[9.5px] font-mono text-[#19ffa2] uppercase tracking-wider font-extrabold block">
              COMO FUNCIONA NA PRÁTICA:
            </span>
            
            <div className="space-y-4 text-xs font-sans text-zinc-300 leading-relaxed border-b border-white/5 pb-4">
              <p>
                "Foi por esse motivo que decidimos trabalhar em cima de <strong className="text-white">faturamento</strong>. Fazemos em um formato onde você recebe 15% de tudo o que entra, livre de riscos."
              </p>
              <p>
                "Se a empresa gastou mais em tráficos para bater a meta de 1 milhão, o risco é 100% nosso. Você continua recebendo seus R$ 150 mil garantidos."
              </p>
              <p>
                "Isso blinda a sua posição como expert de produção para que você se concentre naquilo que é excelente: <strong className="text-white">criar conteúdos e elevar nossa autoridade técnica</strong>, enquanto nós nos preocupamos com o marketing digital."
              </p>
            </div>

            {/* Split System */}
            <div className="space-y-3">
              <span className="text-[9.5px] font-mono text-[#19ffa2] uppercase tracking-wider font-extrabold block">
                TECNOLOGIA DE COPRODUÇÃO INTEGRADA:
              </span>
              <div className="text-xs text-zinc-400 space-y-2 font-sans">
                <div className="flex gap-2.5 items-start bg-black/40 p-3 rounded-xl border border-white/5">
                  <div className="flex items-center justify-center bg-zinc-900 p-1.5 rounded-lg text-white font-extrabold shrink-0 border border-white/10 text-[9.5px]">
                    Eduzz
                  </div>
                  <div>
                    <h5 className="font-bold text-white uppercase text-[10px] tracking-wider">Eduzz, Hotmart ou Kiwify</h5>
                    <p className="text-[11px] text-zinc-400">
                      O comissionamento é automatizado direto no checkout. Ao vender seu produto no balcão digital, a própria plataforma separa os 15% diretamente para o seu painel financeiro de forma imediata.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2.5 items-start bg-black/40 p-3 rounded-xl border border-white/5">
                  <Landmark className="text-[#19ffa2] shrink-0 mt-0.5" size={14} />
                  <div>
                    <h5 className="font-bold text-white uppercase text-[10px] tracking-wider">Sem Fricção de Novo CNPJ</h5>
                    <p className="text-[11px] text-zinc-400">
                      Não há necessidade de fusões fiscais ou abertura de novas estruturas contábeis complexas nesse estágio da parceria.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call Action & Closing Agreement terms */}
            <div className="pt-3 border-t border-white/5 space-y-3 text-xs text-zinc-400">
              <div className="flex items-center gap-2 text-white">
                <ShieldCheck size={14} className="text-[#19ffa2]" />
                <span className="font-heading font-extrabold uppercase text-[10.5px]">Segurança do contrato inicial:</span>
              </div>
              
              <ul className="list-disc pl-4 space-y-1.5 text-[11px] leading-relaxed">
                <li>Contrato inicial experimental com prazo de <strong className="text-white">60 dias</strong>.</li>
                <li>Se nos primeiros 2 meses de coprodução você não estiver satisfeita com o que construímos, encerramos a parceria sem multas ou burocracias.</li>
                <li>Tudo online e assinado digitalmente de forma oficial através da sua conta federal <strong className="text-white">GOV.BR</strong>.</li>
              </ul>
            </div>

            <div className="bg-[#19ffa2]/5 p-3 rounded-xl border border-[#19ffa2]/15 text-[11.5px] text-[#19ffa2] leading-snug">
              📍 <strong>Prazo Regulamentar:</strong> Mariana, enviaremos este documento para você analisar. Pedimos um prazo de <strong>24 horas</strong> para nos dar uma posição de aceite para avançarmos.
            </div>

          </div>

        </div>

      </div>

      {/* Footer Return Action Button */}
      <div className="relative z-10 pt-12 md:pt-16 text-center">
        <button 
          onClick={onPrev}
          className="px-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 text-xs font-bold uppercase tracking-wider rounded-full transition active:scale-95 cursor-pointer"
        >
          Voltar para Infraestrutura
        </button>
      </div>

    </div>
  );
}
