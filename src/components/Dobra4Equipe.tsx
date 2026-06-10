import { useState } from "react";
import { ShieldCheck, Cpu, PenTool, Radio, Users, CheckSquare } from "lucide-react";
import { TEAM_MEMBERS } from "../data";

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function Dobra4Equipe({ onNext }: Props) {
  const [tasks] = useState([
    {
      id: 1,
      title: "Roteirização de Ganchos Orgânicos (3s)",
      category: "Copywriting",
      assignedTo: "Gilberto",
      status: "Concluído",
      progress: 100,
    },
    {
      id: 2,
      title: "Desenho Técnico de Páginas & Checkout",
      category: "Infraestrutura",
      assignedTo: "Felipe",
      status: "Ativo",
      progress: 80,
    }
  ]);

  return (
    <div className="relative text-white py-10 md:py-16">
      <div className="space-y-16">
        
        {/* Title block */}
        <div className="space-y-4 max-w-3xl text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black border border-[#1B4D3E]/30 text-emerald-400 text-[10px] font-semibold tracking-wider rounded-full uppercase">
            <Users size={11} className="text-[#19ffa2]" />
            Suporte Operacional
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold uppercase tracking-tight leading-none text-white">
            Coprodução sem barreiras
          </h2>
          <p className="font-sans text-[#F1F1F1]/70 text-sm leading-relaxed max-w-xl">
            Sua missão é gerar conteúdo de excelência e crescer sua autoridade. Nós assumimos toda a burocracia técnica, copywriting de vendas e otimização de tráfego nos bastidores.
          </p>
        </div>

        {/* Team bios and interactive deliverable checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2">
              <ShieldCheck size={13} className="text-[#19ffa2]" />
              Equipe Dedicada
            </h3>

            <div className="space-y-4">
              {TEAM_MEMBERS.slice(0, 2).map((member, idx) => (
                <div
                  key={member.name}
                  className="bg-black p-5 rounded-2xl border border-white/5 transition duration-300 hover:border-[#1B4D3E]/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#1B4D3E]/10 border border-[#1B4D3E]/20 text-[#19ffa2] flex items-center justify-center shrink-0">
                      {idx === 0 ? <PenTool size={14} /> : <Radio size={14} />}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-baseline gap-2">
                        <h4 className="font-heading font-bold text-xs text-white uppercase">{member.name}</h4>
                        <span className="text-[9px] text-[#19ffa2] font-mono tracking-wider">{member.role}</span>
                      </div>
                      <p className="font-sans text-xs text-zinc-400 leading-relaxed font-normal">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Simulated deliveries box */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-black p-6 rounded-3xl border border-white/5 space-y-6">
            
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
              <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <Cpu size={13} className="text-[#19ffa2]" />
                Esteira de Entregas
              </h3>
              <div className="text-[9px] text-zinc-500 font-mono tracking-widest uppercase">
                Mariana Hub
              </div>
            </div>

            {/* Tasks list */}
            <div className="space-y-4 flex-1 justify-center flex flex-col">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-zinc-950 p-4 rounded-xl border border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <span className="text-[8.5px] text-[#19ffa2] uppercase tracking-wider block font-bold font-sans">{task.category}</span>
                    <p className="font-heading font-bold text-xs text-zinc-200 uppercase">{task.title}</p>
                    <p className="text-[10px] text-zinc-400 font-sans">Responsável: {task.assignedTo}</p>
                  </div>

                  <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                    <span className="text-[9px] font-mono text-[#F1F1F1] bg-[#1B4D3E]/20 border border-[#1B4D3E]/30 px-2 py-0.5 rounded-full">
                      {task.status}
                    </span>
                    <div className="w-16 bg-zinc-900 h-1 rounded-full overflow-hidden mt-1">
                      <div className="h-full bg-emerald-400" style={{ width: `${task.progress}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-zinc-950 p-3.5 rounded-xl border border-zinc-900 flex items-center gap-3">
              <CheckSquare size={16} className="text-[#19ffa2] shrink-0" />
              <div className="font-sans text-[11px] text-zinc-400 leading-relaxed">
                Você terá visibilidade total das implementações pelo seu celular. Cuidamos de tudo para que seu foco seja gerar conteúdo.
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
