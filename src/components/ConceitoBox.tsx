import React from "react";
import lapisImg from "../assets/lapis.png";

const ConceitoBox: React.FC<{ children?: React.ReactNode; note?: string }> = ({
  children,
  note,
}) => (
  <div className="not-prose my-5 rounded-xl border border-borderDark bg-bgSecondary overflow-hidden">
    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-borderDark">
      <img
        src={lapisImg}
        alt=""
        className="w-6 h-6 object-contain brightness-0 invert"
      />
      <span className="text-sm font-bold text-accent uppercase tracking-widest">
        Conceito
      </span>
    </div>
    <p className="px-4 pt-3 pb-2 text-sm text-textBody leading-relaxed m-0">
      {children}
    </p>
    {note && (
      <p className="px-4 pb-3 text-xs text-textSecondary/50 m-0 italic">
        {note}
      </p>
    )}
  </div>
);

export default ConceitoBox;
