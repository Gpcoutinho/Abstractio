import React, { useState } from "react";
import type { Reference } from "../data/curriculum/types";

interface Props {
  references: Reference[];
}

const ReferenciasBlock: React.FC<Props> = ({ references }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-8 border-t border-borderDark/30 pt-4">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-xs text-textSecondary hover:text-textPrimary transition-colors select-none"
      >
        <span
          className={`inline-block transition-transform duration-200 text-[10px] ${open ? "rotate-90" : ""}`}
        >
          ▶
        </span>
        Referências
      </button>

      {open && (
        <ul className="mt-3 space-y-3">
          {references.map((ref, i) => (
            <li key={i} className="text-xs text-textSecondary leading-relaxed">
              <span className="text-textPrimary font-medium">{ref.author}</span>
              {ref.year && ` (${ref.year})`}
              {". "}
              <em>{ref.title}</em>
              {ref.location && `. ${ref.location}`}
              {"."}
              {ref.note && (
                <span className="block text-textSecondary/60 mt-0.5 pl-3">
                  ↳ {ref.note}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReferenciasBlock;
