import React from "react";

interface PapelProps {
  titulo: string;
  anotacoes: string[];
  rotation: string;
}

const Papel: React.FC<PapelProps> = ({ titulo, anotacoes, rotation }) => (
  <div
    style={{
      transform: `rotate(${rotation})`,
      background: "#fef9c3",
      border: "1.5px solid #d97706",
      borderRadius: "4px",
      boxShadow: "2px 3px 6px rgba(0,0,0,0.12)",
      padding: "14px 16px",
      minWidth: "140px",
      flex: "1",
    }}
  >
    <p
      style={{
        fontFamily: "'Playwrite GB J', cursive",
        fontSize: "13px",
        fontWeight: 600,
        color: "#92400e",
        margin: "0 0 10px 0",
        lineHeight: 1.3,
      }}
    >
      {titulo}
    </p>
    <div
      style={{
        borderTop: "1px solid #d97706",
        paddingTop: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      }}
    >
      {anotacoes.map((linha, i) => (
        <p
          key={i}
          style={{
            fontFamily: "monospace",
            fontSize: "11px",
            color: "#78350f",
            margin: 0,
          }}
        >
          {linha}
        </p>
      ))}
    </div>
  </div>
);

const CaosAnotacoes: React.FC = () => (
  <div className="not-prose my-6 flex gap-4 items-start justify-center flex-wrap">
    <Papel
      titulo="ela se chama Ada"
      anotacoes={['nome = "Ada"', 'criatura: "Adinha"', "id_001"]}
      rotation="-2deg"
    />
    <Papel
      titulo="cor de rosa"
      anotacoes={["cor: rosa", "cor: pink", "cor: #FF69B4"]}
      rotation="1.5deg"
    />
    <Papel
      titulo="8 tentáculos"
      anotacoes={["num_tent = 8", 'tentaculos = "oito"', "membros: 8"]}
      rotation="-1deg"
    />
  </div>
);

export default CaosAnotacoes;
