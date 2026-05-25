import React, { useState } from "react";
import PolvinhoSVG from "../PolvinhoSVG";
import type { CorPolvo } from "../PolvinhoSVG";

type NTentaculos = 6 | 8;

interface PolvoConfig {
  name: string;
  cor: CorPolvo;
  tentaculos: NTentaculos;
}

const INITIAL: PolvoConfig[] = [
  { name: "Ada",     cor: "Rosa",  tentaculos: 8 },
  { name: "Ana",     cor: "Azul",  tentaculos: 6 },
  { name: "Douglas", cor: "Verde", tentaculos: 8 },
];

const TresPolvosInterativo: React.FC = () => {
  const [polvos, setPolvos] = useState<PolvoConfig[]>(INITIAL);

  const update = (idx: number, patch: Partial<PolvoConfig>) => {
    setPolvos((prev) => prev.map((p, i) => (i === idx ? { ...p, ...patch } : p)));
  };

  const chip = (active: boolean) =>
    `px-2.5 py-0.5 text-[11px] rounded-full border transition-colors cursor-pointer ${
      active
        ? "bg-accent/20 border-accent text-accent"
        : "border-borderDark text-textSecondary hover:border-accent/50 hover:text-textPrimary"
    }`;

  return (
    <div className="not-prose my-6 rounded-xl border border-borderDark bg-bgSecondary overflow-hidden">
      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-borderDark">
        {polvos.map((polvo, idx) => (
          <div key={polvo.name} className="flex-1 p-5 flex flex-col items-center gap-3">
            <p className="text-sm font-bold text-textPrimary">{polvo.name}</p>

            <PolvinhoSVG
              cor={polvo.cor}
              tentaculos={polvo.tentaculos}
              width={90}
            />

            <div className="space-y-2 w-full">
              <div className="space-y-1">
                <p className="text-[10px] text-textSecondary uppercase tracking-wider">Cor</p>
                <div className="flex gap-1.5 flex-wrap">
                  {(["Rosa", "Azul", "Verde"] as CorPolvo[]).map((c) => (
                    <button key={c} onClick={() => update(idx, { cor: c })} className={chip(polvo.cor === c)}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-textSecondary uppercase tracking-wider">Tentáculos</p>
                <div className="flex gap-1.5">
                  {([6, 8] as NTentaculos[]).map((n) => (
                    <button key={n} onClick={() => update(idx, { tentaculos: n })} className={chip(polvo.tentaculos === n)}>
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-textSecondary/40 py-3 border-t border-borderDark">
        Cada polvo tem seus próprios dados — mudar um não afeta os outros.
      </p>
    </div>
  );
};

export default TresPolvosInterativo;
