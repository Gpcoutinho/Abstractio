import React, { useState } from "react";

interface SlideCardProps {
  slides: React.ReactNode[];
}

const SlideCard: React.FC<SlideCardProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const isFirst = current === 0;
  const isLast = current === slides.length - 1;

  return (
    <div className="bg-bgSecondary border border-borderDark rounded-xl p-6 my-6 flex flex-col gap-6">
      <div className="min-h-[80px]">{slides[current]}</div>
      <div className="flex items-center justify-between pt-4 border-t border-borderDark">
        <div>
          {!isFirst && (
            <button
              onClick={() => setCurrent((c) => c - 1)}
              className="text-sm text-textSecondary hover:text-textPrimary transition-colors"
            >
              ← Anterior
            </button>
          )}
        </div>
        <span className="text-xs text-textSecondary">
          {current + 1} / {slides.length}
        </span>
        <div>
          {isLast ? (
            <button
              onClick={() => setCurrent(0)}
              className="text-sm text-accent hover:text-secondary transition-colors"
            >
              Voltar ao início
            </button>
          ) : (
            <button
              onClick={() => setCurrent((c) => c + 1)}
              className="text-sm text-accent hover:text-secondary transition-colors"
            >
              Próximo →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
