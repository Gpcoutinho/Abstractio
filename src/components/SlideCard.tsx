import React, { useState, useEffect } from "react";

interface SlideCardProps {
  title?: string;
  className?: string;
  slides: React.ReactNode[];
  externalCurrent?: number;
  hideNav?: boolean;
}

const SlideCard: React.FC<SlideCardProps> = ({ title, className = "", slides, externalCurrent, hideNav = false }) => {
  const [internal, setInternal] = useState(0);
  const current = externalCurrent !== undefined ? externalCurrent : internal;
  const isFirst = current === 0;
  const isLast = current === slides.length - 1;

  const [shownIndex, setShownIndex] = useState(current);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (shownIndex === current) return;
    setIsVisible(false);
    const t = setTimeout(() => {
      setShownIndex(current);
      setIsVisible(true);
    }, 150);
    return () => clearTimeout(t);
  }, [current]);

  return (
    <div className={`bg-bgSecondary border border-borderDark rounded-xl p-6 my-6 flex flex-col gap-6 ${className}`}>
      {title && (
        <p className="text-xs font-semibold text-textSecondary uppercase tracking-wider pb-4 border-b border-borderDark m-0">
          {title}
        </p>
      )}
      <div
        className="min-h-[80px] transition-opacity duration-150 ease-in-out"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        {slides[shownIndex]}
      </div>
      {!hideNav && (
        <div className="flex items-center justify-between pt-4 border-t border-borderDark">
          <div>
            {!isFirst && (
              <button
                onClick={() => setInternal((c) => c - 1)}
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
                onClick={() => setInternal(0)}
                className="text-sm text-accent hover:text-secondary transition-colors"
              >
                Voltar ao início
              </button>
            ) : (
              <button
                onClick={() => setInternal((c) => c + 1)}
                className="text-sm text-accent hover:text-secondary transition-colors"
              >
                Próximo →
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SlideCard;
