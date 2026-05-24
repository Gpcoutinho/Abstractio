import React from "react";

export type CorPolvo = "Rosa" | "Azul" | "Verde";
export type AcaoPolvo = "nadar" | "pirueta" | "acenar" | "tinta" | "camuflar" | null;

export const COR_MAP: Record<CorPolvo, { body: string; light: string }> = {
  Rosa:  { body: "#db2777", light: "#f472b6" },
  Azul:  { body: "#2c6ea8", light: "#5090d0" },
  Verde: { body: "#1e8858", light: "#3aaa78" },
};

const TENTACULOS_DATA = [
  { d: "M31,66 Q18,86 24,104",   dur: "2.2s", vals: "-5,31,66;5,31,66;-5,31,66"    },
  { d: "M41,70 Q29,90 35,108",   dur: "2.1s", vals: "4,41,70;-4,41,70;4,41,70"     },
  { d: "M51,74 Q42,94 47,112",   dur: "2.6s", vals: "-3,51,74;3,51,74;-3,51,74"    },
  { d: "M61,76 Q56,96 61,114",   dur: "1.9s", vals: "3,61,76;-3,61,76;3,61,76"     },
  { d: "M69,76 Q74,96 69,114",   dur: "2.3s", vals: "-3,69,76;3,69,76;-3,69,76"    },
  { d: "M79,74 Q88,94 83,112",   dur: "2.0s", vals: "4,79,74;-4,79,74;4,79,74"     },
  { d: "M89,70 Q101,90 95,108",  dur: "2.5s", vals: "-4,89,70;4,89,70;-4,89,70"    },
  { d: "M99,66 Q112,86 106,104", dur: "2.2s", vals: "5,99,66;-5,99,66;5,99,66"     },
];

interface Props {
  cor: CorPolvo;
  tentaculos: 6 | 8;
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
  acao = null,
  acaoKey = 0,
  scale = 1,
  width = 110,
  onClick,
  className = "",
}) => {
  const { body, light } = COR_MAP[cor];
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
          <ellipse cx="65" cy="42" rx="22" ry="20" fill={light} />
          <ellipse cx="65" cy="56" rx="26" ry="22" fill={body} />
          <circle cx="55" cy="42" r="5" fill="white" />
          <circle cx="75" cy="42" r="5" fill="white" />
          <circle cx="55" cy="43" r="2.8" fill="#1a0a30" />
          <circle cx="75" cy="43" r="2.8" fill="#1a0a30" />
          <circle cx="53.5" cy="41.5" r="1" fill="white" opacity="0.8" />
          <circle cx="73.5" cy="41.5" r="1" fill="white" opacity="0.8" />
          <path d="M59,53 Q65,59 71,53" stroke={light} strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {acao === "tinta" && (
            <ellipse
              cx="65" cy="92" rx="26" ry="11"
              fill="#0a0614"
              style={{ animation: "pv-tinta 1.5s ease-out forwards", transformOrigin: "65px 92px" }}
            />
          )}
        </svg>
      </div>
    </div>
  );
};

export default PolvinhoSVG;
