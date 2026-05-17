import React, { useRef, useState, useEffect } from 'react';
import type { Nivel } from '../data/curriculum/types';
import './ProgressBar.css';

interface ProgressBarProps {
  curriculum: Nivel[];
  completedMissions: string[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ curriculum, completedMissions }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasOverflow, setHasOverflow] = useState(true);

  useEffect(() => {
    const checkOverflow = () => {
      if (trackRef.current) {
        const isOverflowing = trackRef.current.scrollWidth > trackRef.current.clientWidth;
        setHasOverflow(isOverflowing);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!hasOverflow || !trackRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 1.5;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const flatMissions = curriculum.flatMap((nivel, nIdx) =>
    nivel.missoes.map((missao, mIdx) => ({
      ...missao,
      nivelIdx: nIdx,
      missaoIdx: mIdx,
      nivelLabel: nivel.short,
    })),
  );

  const total = flatMissions.length;
  const doneCount = flatMissions.filter(missao => completedMissions.includes(missao.id)).length;
  const pct = total > 0 ? Math.round((doneCount / total) * 100) : 0;
  const activeIndex = flatMissions.findIndex(missao => !completedMissions.includes(missao.id));

  return (
    <div
      className={`pb-wrap ${isDragging ? 'dragging' : ''} ${!hasOverflow ? 'no-scroll' : ''}`}
      ref={wrapRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="pb-header">
        <span className="pb-title">Progresso da Trilha</span>
        <span className="pb-percent">
          {doneCount}/{total} missões &nbsp;·&nbsp; {pct}%
        </span>
      </div>

      <div
        className="pb-track"
        ref={trackRef}
      >
        {flatMissions.map((missao, idx) => {
          const isFirstOfNivel = idx === 0 || missao.nivelIdx !== flatMissions[idx - 1].nivelIdx;
          const isDone = completedMissions.includes(missao.id);
          const isActive = idx === activeIndex;

          return (
            <React.Fragment key={missao.id}>
              {isFirstOfNivel && (
                <div className="pb-separator">
                  <div className="pb-sep-label">{missao.nivelLabel}</div>
                  <div className="pb-sep-line" />
                </div>
              )}

              {!isFirstOfNivel && (
                <div className={`pb-connector ${isDone ? 'done' : ''} ${idx === activeIndex ? 'active' : ''}`} />
              )}

              <div
                className={`pb-dot ${isDone ? 'done' : ''} ${isActive ? 'active' : ''}`}
                title={missao.title}
              >
                {isActive && <div className="dot-inner" />}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
