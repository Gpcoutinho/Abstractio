import React from 'react';
import lapisImg from '../assets/lapis.png';

const ConceitoBox: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div className="not-prose my-5 rounded-xl border border-borderDark bg-bgSecondary overflow-hidden">
    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-borderDark">
      <img src={lapisImg} alt="" className="w-6 h-6 object-contain brightness-0 invert" />
      <span className="text-sm font-bold text-accent uppercase tracking-widest">Conceito:</span>
    </div>
    <p className="px-4 py-3 text-sm text-textBody leading-relaxed m-0">{children}</p>
  </div>
);

export default ConceitoBox;
