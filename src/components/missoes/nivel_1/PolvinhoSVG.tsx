import React from "react";

export type CorPolvo = "Rosa" | "Azul" | "Verde";
export type AcaoPolvo = "nadar" | "pirueta" | "acenar" | "tinta" | "camuflar" | null;

export const COR_MAP: Record<CorPolvo, { body: string; light: string }> = {
  Rosa:  { body: "#db2777", light: "#f472b6" },
  Azul:  { body: "#2c6ea8", light: "#5090d0" },
  Verde: { body: "#1e8858", light: "#3aaa78" },
};

const TENTACULOS_DATA = [
  { d: "M40,70 C28,84 18,96 25,112",    dur: "2.2s", vals: "-5,40,70;5,40,70;-5,40,70"    },
  { d: "M48,73 C36,87 28,100 33,114",   dur: "2.1s", vals: "4,48,73;-4,48,73;4,48,73"     },
  { d: "M56,75 C46,89 40,102 44,115",   dur: "2.6s", vals: "-3,56,75;3,56,75;-3,56,75"    },
  { d: "M62,76 C56,90 52,104 55,116",   dur: "1.9s", vals: "3,62,76;-3,62,76;3,62,76"     },
  { d: "M68,76 C74,90 78,104 75,116",   dur: "2.3s", vals: "-3,68,76;3,68,76;-3,68,76"    },
  { d: "M75,75 C84,89 90,102 86,115",   dur: "2.0s", vals: "4,75,75;-4,75,75;4,75,75"     },
  { d: "M83,73 C94,87 102,100 97,114",  dur: "2.5s", vals: "-4,83,73;4,83,73;-4,83,73"    },
  { d: "M91,70 C106,84 112,96 105,112", dur: "2.2s", vals: "5,91,70;-5,91,70;5,91,70"     },
];

interface Props {
  cor: CorPolvo;
  tentaculos: 6 | 8;
  femea?: boolean;
  acao?: AcaoPolvo;
  acaoKey?: number;
  scale?: number;
  width?: number;
  onClick?: () => void;
  className?: string;
}

const PolvinhoSVG: React.FC<Props> = ({
  cor,
  tentaculos,
  femea = false,
  acao = null,
  acaoKey = 0,
  scale = 1,
  width = 110,
  onClick,
  className = "",
}) => {
  const { body, light } = COR_MAP[cor];
  const gradId = `pv-g-${cor}`;
  const activeTentacles = tentaculos === 6 ? TENTACULOS_DATA.slice(1, 7) : TENTACULOS_DATA;

  const wrapperStyle: React.CSSProperties =
    acao === "nadar"
      ? { animation: "pv-nadar 1.4s ease-in-out 2", transformOrigin: "center" }
      : acao === "pirueta"
      ? { animation: "pv-pirueta 0.9s ease-in-out 1", transformOrigin: "center" }
      : acao === "acenar"
      ? { animation: "pv-acenar 0.5s ease-in-out 3", transformOrigin: "center" }
      : acao === "camuflar"
      ? { animation: "pv-camuflar 1.8s ease-in-out 1", transformOrigin: "center" }
      : { transform: `scale(${scale})`, transformOrigin: "center" };

  return (
    <div className={`inline-block ${onClick ? "cursor-pointer select-none" : ""} ${className}`}>
      <style>{`
        @keyframes pv-nadar {
          0%,100% { transform: scale(${scale}) translateX(0); }
          25%     { transform: scale(${scale}) translateX(-16px); }
          75%     { transform: scale(${scale}) translateX(16px); }
        }
        @keyframes pv-pirueta {
          from { transform: scale(${scale}) rotate(0deg); }
          to   { transform: scale(${scale}) rotate(360deg); }
        }
        @keyframes pv-acenar {
          0%   { transform: scale(${scale}) translateY(0) rotate(0deg); }
          20%  { transform: scale(${scale}) translateY(-8px) rotate(-8deg); }
          50%  { transform: scale(${scale}) translateY(0) rotate(0deg); }
          70%  { transform: scale(${scale}) translateY(-5px) rotate(5deg); }
          100% { transform: scale(${scale}) translateY(0) rotate(0deg); }
        }
        @keyframes pv-camuflar {
          0%, 100% { opacity: 1; filter: saturate(1); }
          25%, 75% { opacity: 0.08; filter: saturate(0); }
        }
        @keyframes pv-tinta {
          0%   { opacity: 0; transform: scale(0.4); }
          35%  { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.4); }
        }
      `}</style>

      <div key={acaoKey} style={wrapperStyle} onClick={onClick}>
        <svg
          viewBox="0 0 130 130"
          width={width}
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: "visible" }}
        >
          <defs>
            <radialGradient id={gradId} cx="38%" cy="30%" r="65%">
              <stop offset="0%" stopColor={light} />
              <stop offset="100%" stopColor={body} />
            </radialGradient>
          </defs>

          {/* Tentáculos */}
          {activeTentacles.map((t, i) => (
            <path key={i} d={t.d} stroke={body} strokeWidth="4.5" fill="none" strokeLinecap="round">
              <animateTransform
                attributeName="transform"
                type="rotate"
                values={t.vals}
                dur={t.dur}
                repeatCount="indefinite"
              />
            </path>
          ))}

          {/* Corpo */}
          <path
            d="M65,16 C87,16 94,32 93,50 C92,64 83,76 65,76 C47,76 38,64 37,50 C36,32 43,16 65,16 Z"
            fill={`url(#${gradId})`}
          />

          {/* Bochechas */}
          <ellipse cx="44" cy="57" rx="8" ry="5.5" fill={light} opacity="0.3" />
          <ellipse cx="86" cy="57" rx="8" ry="5.5" fill={light} opacity="0.3" />

          {/* Olhos — brancos */}
          <ellipse cx="53" cy="46" rx="6.5" ry="7" fill="white" />
          <ellipse cx="77" cy="46" rx="6.5" ry="7" fill="white" />

          {/* Pupilas */}
          <ellipse cx="54" cy="47" rx="3.5" ry="4" fill="#1a0a30" />
          <ellipse cx="78" cy="47" rx="3.5" ry="4" fill="#1a0a30" />

          {/* Brilho dos olhos */}
          <circle cx="52" cy="45" r="1.3" fill="white" opacity="0.9" />
          <circle cx="76" cy="45" r="1.3" fill="white" opacity="0.9" />

          {/* Cílios — apenas para fêmeas
               Mesmo shape base rotacionado em ângulos diferentes.
               Olho esquerdo: fios apontam para a esquerda (-60°, -85°, -110° a partir do eixo Y).
               Olho direito: espelho (+60°, +85°, +110°). */}
          {femea && (
            <>
              <g transform="translate(47,41) rotate(-60)"><path d="M0,0 C0.4,-1.5 0.5,-3.2 0,-5" stroke="#1a0a30" strokeWidth="1.1" fill="none" strokeLinecap="round" /></g>
              <g transform="translate(47,42) rotate(-85)"><path d="M0,0 C0.4,-1.5 0.5,-3.2 0,-5" stroke="#1a0a30" strokeWidth="1.1" fill="none" strokeLinecap="round" /></g>
              <g transform="translate(47,43) rotate(-110)"><path d="M0,0 C0.4,-1.5 0.5,-3.2 0,-5" stroke="#1a0a30" strokeWidth="1.1" fill="none" strokeLinecap="round" /></g>
              <g transform="translate(83,41) rotate(60)"><path d="M0,0 C-0.4,-1.5 -0.5,-3.2 0,-5" stroke="#1a0a30" strokeWidth="1.1" fill="none" strokeLinecap="round" /></g>
              <g transform="translate(83,42) rotate(85)"><path d="M0,0 C-0.4,-1.5 -0.5,-3.2 0,-5" stroke="#1a0a30" strokeWidth="1.1" fill="none" strokeLinecap="round" /></g>
              <g transform="translate(83,43) rotate(110)"><path d="M0,0 C-0.4,-1.5 -0.5,-3.2 0,-5" stroke="#1a0a30" strokeWidth="1.1" fill="none" strokeLinecap="round" /></g>
            </>
          )}

          {/* Sorriso */}
          <path d="M57,59 Q65,66 73,59" stroke={light} strokeWidth="2" fill="none" strokeLinecap="round" />

          {/* Tinta */}
          {acao === "tinta" && (
            <ellipse
              cx="65" cy="96" rx="26" ry="11"
              fill="#0a0614"
              style={{ animation: "pv-tinta 1.5s ease-out forwards", transformOrigin: "65px 96px" }}
            />
          )}
        </svg>
      </div>
    </div>
  );
};

export default PolvinhoSVG;
