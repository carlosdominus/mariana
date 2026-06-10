import { useState } from "react";
import { CheckCircle2, Eye, AlertTriangle, FileText } from "lucide-react";
import { MARIANA_POSTS_ANALYSIS } from "../data";

interface Props {
  onPrev: () => void;
}

export default function Dobra5GanchosQA({ onPrev }: Props) {
  const [activePostIdx, setActivePostIdx] = useState<number>(0);
  
  // Q&A Answers state for interactive diagnostic
  const [answers, setAnswers] = useState({
    monetization: "Consultas individuais",
    team: "Apenas um editor simples",
    method: "Protocolo personalizado",
    time: "Foco integral, gravo 1 vez por semana",
  });

  const [diagnosticGenerated, setDiagnosticGenerated] = useState(false);

  return (
    <div className="relative text-white py-10 md:py-16">
      <div className="space-y-16">

        {/* Title Block */}
        <div className="space-y-4 max-w-3xl text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black border border-[#1B4D3E]/30 text-emerald-400 text-[10px] font-semibold tracking-wider rounded-full uppercase">
            <span>Análise & Diagnóstico</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold uppercase tracking-tight leading-none text-white">
            Ganchos de 3s & Diagnóstico
          </h2>
          <p className="font-sans text-[#F1F1F1]/70 text-sm leading-relaxed max-w-xl">
            Primeiros 3 segundos decidem o jogo. Ajustando esses instantes iniciais do seu vídeo, elevamos a chance de retenção instantaneamente.
          </p>
        </div>

        {/* Posts Tab bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Post Sidebar */}
          <div className="lg:col-span-4 flex flex-col justify-start space-y-4">
            <h3 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
              Postagens Analisadas:
            </h3>

            <div className="space-y-2">
              {MARIANA_POSTS_ANALYSIS.map((post, index) => (
                <button
                  key={post.title}
                  onClick={() => setActivePostIdx(index)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 group cursor-pointer ${
                    activePostIdx === index
                      ? "bg-black border-[#1B4D3E]/40"
                      : "bg-[#0e0e0e] border-white/[0.02] hover:bg-black"
                  }`}
                >
                  <div className="space-y-1.5">
                    <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider leading-snug">
                      {post.title}
                    </h4>
                    <p className="text-[9.5px] text-zinc-400 font-mono flex items-center gap-1">
                      <Eye size={10} className="text-[#19ffa2]" />
                      {post.views}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Analysis Panel */}
          <div className="lg:col-span-8 bg-black p-6 rounded-3xl border border-white/5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-900 pb-3">
                <div>
                  <span className="text-[9px] font-sans text-zinc-500 uppercase tracking-wider block">Auditoria de Vídeo</span>
                  <h3 className="font-heading text-xs font-bold text-[#19ffa2] uppercase tracking-wider mt-1">
                    {MARIANA_POSTS_ANALYSIS[activePostIdx].subtitle}
                  </h3>
                </div>
              </div>

              {/* Positives */}
              <div className="space-y-2">
                <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold">Pontos Fortes:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {MARIANA_POSTS_ANALYSIS[activePostIdx].goodPoints.map((point) => (
                    <div key={point} className="flex gap-2 items-start bg-zinc-950 p-3 rounded-xl border border-zinc-900 text-xs text-[#F1F1F1]/80">
                      <span className="text-[#19ffa2] font-bold">✓</span>
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feedback and Suggested Headlines */}
              <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-900 space-y-4">
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-sans">
                  <AlertTriangle size={12} className="text-[#19ffa2]" />
                  <span>Substituição Proposta para Alto Faturamento</span>
                </div>
                
                <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                  {MARIANA_POSTS_ANALYSIS[activePostIdx].ourFeedback}
                </p>

                <div className="space-y-1.5 pt-1">
                  <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider font-bold">Títulos Recomendados pela Dominus:</p>
                  <div className="space-y-1.5">
                    {MARIANA_POSTS_ANALYSIS[activePostIdx].suggestedHeadlines.map((hl) => (
                      <div key={hl} className="px-3 py-2 bg-black rounded-lg font-mono text-xs text-[#19ffa2] border border-[#1B4D3E]/10">
                        {hl}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Interactive Q&A diagnostic form */}
        <div className="bg-black p-6 md:p-8 rounded-3xl border border-white/5 space-y-8">
          <div className="border-b border-zinc-900 pb-4">
            <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-[#F1F1F1] flex items-center justify-start gap-2">
              <FileText size={13} className="text-[#19ffa2]" />
              Gerar Diagnóstico Personalizado
            </h3>
            <p className="font-sans text-xs text-zinc-500 mt-1">
              Calcule seu plano de escala com Gilberto & Felipe preenchendo as quatro perguntas rápidas abaixo:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* QA input form */}
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[9px] font-sans text-zinc-400 uppercase tracking-wider block font-semibold">
                  1. Formas de gerar receita hoje:
                </label>
                <input
                  type="text"
                  value={answers.monetization}
                  onChange={(e) => setAnswers({ ...answers, monetization: e.target.value })}
                  placeholder="Ex: Consultas individuais, cursos, mentorias"
                  className="w-full bg-[#0e0e0e] text-[#F1F1F1] rounded-xl border border-zinc-900 px-4 py-2.5 text-xs focus:border-[#1B4D3E]/50 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[9px] font-sans text-zinc-400 uppercase tracking-wider block font-semibold">
                  2. Estrutura de produção hoje:
                </label>
                <input
                  type="text"
                  value={answers.team}
                  onChange={(e) => setAnswers({ ...answers, team: e.target.value })}
                  placeholder="Ex: Crio tudo sozinha, tenho um designer..."
                  className="w-full bg-[#0e0e0e] text-[#F1F1F1] rounded-xl border border-zinc-900 px-4 py-2.5 text-xs focus:border-[#1B4D3E]/50 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[9px] font-sans text-zinc-400 uppercase tracking-wider block font-semibold">
                  3. Diferencial do seu método:
                </label>
                <textarea
                  value={answers.method}
                  onChange={(e) => setAnswers({ ...answers, method: e.target.value })}
                  rows={2}
                  placeholder="Ex: Protocolo clínico focado em rotinas aceleradas"
                  className="w-full bg-[#0e0e0e] text-[#F1F1F1] rounded-xl border border-zinc-900 px-4 py-2.5 text-xs focus:border-[#1B4D3E]/50 focus:outline-none resize-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[9px] font-sans text-zinc-400 uppercase tracking-wider block font-semibold">
                  4. Horas disponíveis p/ gravação:
                </label>
                <input
                  type="text"
                  value={answers.time}
                  onChange={(e) => setAnswers({ ...answers, time: e.target.value })}
                  placeholder="Ex: Consigo gravar 1 a 2 horas semanais"
                  className="w-full bg-[#0e0e0e] text-[#F1F1F1] rounded-xl border border-zinc-900 px-4 py-2.5 text-xs focus:border-[#1B4D3E]/50 focus:outline-none"
                />
              </div>

              <button
                onClick={() => setDiagnosticGenerated(true)}
                className="w-full py-3 bg-[#FFFFFF] text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-[#F1F1F1] transition duration-300 shadow-md cursor-pointer active:scale-97"
              >
                Gerar Diagnóstico Estratégico
              </button>
            </div>

            {/* Diagnostic results box */}
            <div className="bg-zinc-950 p-6 rounded-2xl border border-[#1B4D3E]/10 flex flex-col justify-between space-y-4">
              {diagnosticGenerated ? (
                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-2 text-[#19ffa2] font-heading font-extrabold text-xs uppercase tracking-wider">
                    <CheckCircle2 size={13} />
                    <span>Plano de Escala Liberado</span>
                  </div>

                  <div className="space-y-3 pt-1 text-xs text-zinc-400 font-sans">
                    <p className="leading-relaxed">
                      Mariana, unindo suas respostas, propomos nosso escopo executivo de coprodução silenciosa:
                    </p>
                    <div className="p-4 bg-black rounded-xl border border-zinc-900 space-y-2">
                      <p className="font-heading font-extrabold text-white text-[9px] uppercase tracking-widest text-zinc-300">Ganhos Imediatos:</p>
                      <ul className="list-disc pl-4 space-y-1 text-zinc-400 text-[11px] leading-relaxed">
                        <li>Foco em unificar seu faturamento no <strong className="text-white">Funil VSL</strong> automático.</li>
                        <li>Estrutura de Upsell em 1-clique com complementos exclusivos do seu método.</li>
                        <li>Nossos roteiros reduzem seu tempo de gravação técnica para apenas 1h30m semanais.</li>
                      </ul>
                    </div>

                    <div className="bg-[#1B4D3E]/10 p-3 rounded-lg border border-[#1B4D3E]/20 text-[10.5px] text-[#19ffa2] leading-relaxed">
                      Assumimos toda a operação e o investimento de tráfego, criativos, páginas e automações de escala.
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-4 space-y-3">
                  <span className="text-xl">📊</span>
                  <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider">Metas de Parceria</h4>
                  <p className="font-sans text-xs text-zinc-500 max-w-xs leading-relaxed">
                    Insira as informações do questionário para visualizar as diretivas sugeridas para a sua marca.
                  </p>
                </div>
              )}

              <div className="pt-4 border-t border-zinc-900 flex justify-between items-center text-[9px] text-zinc-500 font-mono uppercase tracking-widest">
                <span>Dominus Coprodução</span>
                <span className="text-white">COPRO-DR</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
