import React, { useState, useEffect } from "react";
import PolvinhoSVG from "./PolvinhoSVG";
import type { AcaoPolvo } from "./PolvinhoSVG";

export type NivelAdaCard = "objeto" | "atributos" | "metodos";

const ACOES_CLICK: NonNullable<AcaoPolvo>[] = ["acenar", "pirueta"];

const AdaCard: React.FC<{ nivel: NivelAdaCard }> = ({ nivel }) => {
  const [acao, setAcao] = useState<AcaoPolvo>(null);
  const [acaoKey, setAcaoKey] = useState(0);

  const handleClick = () => {
    const next = ACOES_CLICK[Math.floor(Math.random() * ACOES_CLICK.length)];
    setAcao(next);
    setAcaoKey((k) => k + 1);
  };

  useEffect(() => {
    if (!acao) return;
    const t = setTimeout(() => setAcao(null), 2000);
    return () => clearTimeout(t);
  }, [acaoKey]);

  return (
    <div className="not-prose my-6 flex flex-col items-center gap-3">
      <div className="w-52 rounded-xl border border-borderDark bg-bgSecondary overflow-hidden">

        {/* Header */}
        <div className="px-4 py-2.5 border-b border-borderDark text-center">
          <span className="text-xs font-bold text-textPrimary tracking-wide">Ada</span>
        </div>

        {/* Polvo */}
        <div className="flex justify-center py-6">
          <PolvinhoSVG
            cor="Rosa"
            tentaculos={8}
            acao={acao}
            acaoKey={acaoKey}
            width={100}
            onClick={handleClick}
          />
        </div>

        {/* Características — missão 3+ */}
        {(nivel === "atributos" || nivel === "metodos") && (
          <div className="px-4 pt-3 pb-4 border-t border-borderDark space-y-1">
            <p className="text-xs font-mono">
              <span className="text-textSecondary">nome: </span>
              <span className="text-textPrimary">"Ada"</span>
            </p>
            <p className="text-xs font-mono">
              <span className="text-textSecondary">cor: </span>
              <span className="text-textPrimary">"rosa"</span>
            </p>
            <p className="text-xs font-mono">
              <span className="text-textSecondary">tentaculos: </span>
              <span className="text-textPrimary">8</span>
            </p>
          </div>
        )}

        {/* Métodos — missão 4 */}
        {nivel === "metodos" && (
          <div className="px-4 pt-3 pb-4 border-t border-borderDark space-y-1">
            <p className="text-xs font-mono text-textSecondary">nadar()</p>
            <p className="text-xs font-mono text-textSecondary">camuflar()</p>
            <p className="text-xs font-mono text-textSecondary">soltarTinta()</p>
          </div>
        )}

      </div>

      {/* Nota caixa preta — apenas missão 2 */}
      {nivel === "objeto" && (
        <p className="text-xs text-textSecondary/50 text-center max-w-[200px] leading-relaxed italic">
          Ada existe. Você pode interagir com ela — mas o que está dentro ainda não é visível.
        </p>
      )}
    </div>
  );
};

export default AdaCard;
