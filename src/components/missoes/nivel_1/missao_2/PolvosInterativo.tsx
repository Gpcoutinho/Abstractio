import React, { useState, useEffect } from "react";
import PolvinhoSVG from "../PolvinhoSVG";
import type { CorPolvo, AcaoPolvo } from "../PolvinhoSVG";

type Tamanho = "Pequeno" | "Grande";
type NTentaculos = 6 | 8;

const ACAO_MSG: Record<NonNullable<AcaoPolvo>, string> = {
  nadar:    "🌊 Ada está nadando!",
  pirueta:  "🌀 Ada deu uma pirueta!",
  acenar:   "👋 Ada acena para você!",
  tinta:    "🖤 Ada soltou tinta!",
  camuflar: "👻 Ada se camuflou!",
};

const PolvosInterativo: React.FC = () => {
  const [cor, setCor] = useState<CorPolvo>("Rosa");
  const [tamanho, setTamanho] = useState<Tamanho>("Pequeno");
  const [tentaculos, setTentaculos] = useState<NTentaculos>(8);
  const [acao, setAcao] = useState<AcaoPolvo>(null);
  const [acaoKey, setAcaoKey] = useState(0);

  const dispararAcao = (a: NonNullable<AcaoPolvo>) => {
    setAcao(a);
    setAcaoKey((k) => k + 1);
  };

  useEffect(() => {
    if (!acao) return;
    const t = setTimeout(() => setAcao(null), 3000);
    return () => clearTimeout(t);
  }, [acaoKey]);

  const scale = tamanho === "Grande" ? 1.35 : 1;

  const chip = (active: boolean) =>
    `px-3 py-1 text-xs rounded-full border transition-colors cursor-pointer ${
      active
        ? "bg-accent/20 border-accent text-accent"
        : "border-borderDark text-textSecondary hover:border-accent/50 hover:text-textPrimary"
    }`;

  return (
    <div className="not-prose my-6 rounded-xl border border-borderDark bg-bgSecondary overflow-hidden">
      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-borderDark">

        {/* Características */}
        <div className="p-5 md:w-52 space-y-4">
          <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Características</p>

          <div className="space-y-1.5">
            <p className="text-xs text-textSecondary">Cor</p>
            <div className="flex gap-2 flex-wrap">
              {(["Rosa", "Azul", "Verde"] as CorPolvo[]).map((c) => (
                <button key={c} onClick={() => setCor(c)} className={chip(cor === c)}>{c}</button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <p className="text-xs text-textSecondary">Tamanho</p>
            <div className="flex gap-2 flex-wrap">
              {(["Pequeno", "Grande"] as Tamanho[]).map((t) => (
                <button key={t} onClick={() => setTamanho(t)} className={chip(tamanho === t)}>{t}</button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <p className="text-xs text-textSecondary">Tentáculos</p>
            <div className="flex gap-2 flex-wrap">
              {([6, 8] as NTentaculos[]).map((n) => (
                <button key={n} onClick={() => setTentaculos(n)} className={chip(tentaculos === n)}>{n}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Polvinho */}
        <div className="flex-1 flex flex-col items-center justify-center py-10 gap-4">
          <PolvinhoSVG
            cor={cor}
            tentaculos={tentaculos}
            acao={acao}
            acaoKey={acaoKey}
            scale={scale}
            width={110}
          />
          <div className="h-6 flex items-center">
            {acao && (
              <p className="text-sm text-textSecondary animate-in fade-in duration-200">
                {ACAO_MSG[acao]}
              </p>
            )}
          </div>
        </div>

        {/* Ações */}
        <div className="p-5 md:w-52 space-y-3">
          <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Ações</p>
          {([
            { id: "nadar"    as const, label: "Nadar",        emoji: "🌊" },
            { id: "camuflar" as const, label: "Camuflar",     emoji: "👻" },
            { id: "tinta"    as const, label: "Soltar tinta", emoji: "🖤" },
          ]).map(({ id, label, emoji }) => (
            <button
              key={id}
              onClick={() => dispararAcao(id)}
              className="w-full flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-borderDark text-textSecondary hover:border-accent/50 hover:text-textPrimary active:scale-95 transition-all text-sm cursor-pointer"
            >
              <span>{emoji}</span>
              {label}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PolvosInterativo;
