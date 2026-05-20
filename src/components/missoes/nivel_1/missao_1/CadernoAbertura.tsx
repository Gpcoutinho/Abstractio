import React from "react";
import postit from "../../../../assets/postit.png";

const PostIt: React.FC<{ text: string; rotation: string; className?: string }> = ({ text, rotation, className }) => (
  <div
    className={`relative w-40 ${className ?? ""}`}
    style={{ transform: `rotate(${rotation})` }}
  >
    <img src={postit} alt="" className="w-full" />
    <p
      className="absolute text-sm text-stone-700 text-center leading-snug m-0"
      style={{
        fontFamily: "'Playwrite GB J', cursive",
        top: "24%",
        left: "24%",
        right: "4%",
        bottom: "8%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {text}
    </p>
  </div>
);

const CadernoAbertura: React.FC = () => (
  <div className="not-prose my-6 mx-[-2rem] flex items-center justify-center gap-4">
    <div
      className="w-full max-w-sm rounded-sm shadow-xl px-8 py-7 shrink-0"
      style={{
        background: "#fdf6e3",
        fontFamily: "'Playwrite GB J', cursive",
      }}
    >
      <div className="border-l-4 border-amber-300 pl-3 mb-5">
        <p className="text-sm font-bold text-amber-800">
          Caderno de Campo — Vol. 1
        </p>
        <p className="text-sm text-amber-700">Pesquisador: Otto</p>
        <p className="text-sm text-amber-700">Dia 1 — Oceano Atlântico Sul</p>
      </div>

      <div
        className="text-base text-stone-700 space-y-[32px]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(transparent, transparent 31px, #d4c9a0 31px, #d4c9a0 32px)",
          lineHeight: "32px",
        }}
      >
        <p className="m-0">Encontrei hoje minha primeira criatura de estudo.</p>
        <p className="m-0">
          Um polvo. Fêmea. Rosa. Oito tentáculos. Tamanho médio.
        </p>
        <p className="m-0">
          Anotei o nome numa folha. A cor em outra.
          <br />O tamanho num pedacinho de papel que já não encontro.
        </p>
        <p className="m-0">
          Se eu encontrar 100 criaturas assim...
          <br />
          como vou organizar tudo isso?
        </p>
        <p className="m-0 font-semibold italic text-stone-800">
          Preciso de um método melhor.
        </p>
      </div>
    </div>

    <div className="flex flex-col gap-3 items-start">
      <PostIt text="ela se chama Ada" rotation="-5deg" />
      <PostIt text="cor de rosa" rotation="4deg" />
      <PostIt text="8 tentáculos, tamanho médio" rotation="-3deg" />
    </div>
  </div>
);

export default CadernoAbertura;
