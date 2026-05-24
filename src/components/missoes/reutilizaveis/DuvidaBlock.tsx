import React from "react";
import interrogacao from "../../../assets/ponto-de-interrogacao.png";

interface DuvidaBlockProps {
  pergunta: string;
  resposta: string;
}

const DuvidaBlock: React.FC<DuvidaBlockProps> = ({ pergunta, resposta }) => (
  <div
    className="not-prose my-6"
    style={{
      background: "#13122b",
      borderRadius: "8px",
      padding: "16px 20px",
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
    }}
  >
    <img
      src={interrogacao}
      alt=""
      aria-hidden="true"
      style={{
        width: "22px",
        height: "22px",
        flexShrink: 0,
        marginTop: "2px",
        filter: "invert(1)",
        opacity: 0.85,
      }}
    />
    <div>
      <p
        style={{
          fontWeight: 700,
          color: "#c4b5fd",
          margin: "0 0 8px 0",
          fontSize: "15px",
          lineHeight: "1.5",
        }}
      >
        {pergunta}
      </p>
      <p
        style={{
          color: "#9090c0",
          margin: 0,
          fontSize: "14px",
          lineHeight: "1.6",
        }}
      >
        {resposta}
      </p>
    </div>
  </div>
);

export default DuvidaBlock;
