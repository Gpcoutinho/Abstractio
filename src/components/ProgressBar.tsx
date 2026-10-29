import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import type { NivelView } from '../hooks/useTrilha';
import MissionIcon from './MissionIcon';
import './ProgressBar.css';

interface ProgressBarProps {
  curriculum: NivelView[];
  completedMissions: string[];
  currentMissionId?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ curriculum, completedMissions, currentMissionId }) => {
  const navigate = useNavigate();
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const dragMovedRef = useRef(false);
  const dragStartXRef = useRef(0);
  const touchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchHideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartPosRef = useRef<{ x: number; y: number } | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasOverflow, setHasOverflow] = useState(true);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [tooltipData, setTooltipData] = useState<{ text: string; x: number; y: number } | null>(null);

  const updateEdges = () => {
    if (!trackRef.current) return;
    const { scrollLeft: sl, clientWidth, scrollWidth } = trackRef.current;
    setAtStart(sl <= 1);
    setAtEnd(sl + clientWidth >= scrollWidth - 1);
  };

  useEffect(() => {
    const checkOverflow = () => {
      if (!trackRef.current) return;
      const isOverflowing = trackRef.current.scrollWidth > trackRef.current.clientWidth;
      setHasOverflow(isOverflowing);
      updateEdges();
    };
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  // Centraliza a missão ativa no carregamento
  useEffect(() => {
    const id = setTimeout(() => {
      if (!trackRef.current) return;
      const missions = trackRef.current.querySelectorAll<HTMLElement>('.pb-mission');
      const scrollIdx = viewingIndex >= 0 ? viewingIndex : activeIndex;
      const activeEl = missions[scrollIdx];
      if (!activeEl) return;
      const track = trackRef.current;
      const trackRect = track.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();
      const scrollTarget = track.scrollLeft + activeRect.left - trackRect.left - trackRect.width / 2 + activeRect.width / 2;
      track.scrollTo({ left: scrollTarget, behavior: 'smooth' });
    }, 120);
    return () => clearTimeout(id);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleMissionEnter = (e: React.MouseEvent<HTMLDivElement>, title: string) => {
    if (isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipData({ text: title, x: rect.left + rect.width / 2, y: rect.bottom + 8 });
  };

  const handleMissionLeave = () => setTooltipData(null);

  const handleMissionTouchStart = (e: React.TouchEvent<HTMLDivElement>, title: string) => {
    if (touchHideTimerRef.current) clearTimeout(touchHideTimerRef.current);
    const touch = e.touches[0];
    touchStartPosRef.current = { x: touch.clientX, y: touch.clientY };
    const rect = e.currentTarget.getBoundingClientRect();
    touchTimerRef.current = setTimeout(() => {
      setTooltipData({ text: title, x: rect.left + rect.width / 2, y: rect.bottom + 8 });
      touchHideTimerRef.current = setTimeout(() => setTooltipData(null), 2000);
    }, 500);
  };

  const handleMissionTouchEnd = () => {
    if (touchTimerRef.current) { clearTimeout(touchTimerRef.current); touchTimerRef.current = null; }
  };

  const handleMissionTouchMove = (e: React.TouchEvent) => {
    if (!touchTimerRef.current || !touchStartPosRef.current) return;
    const t = e.touches[0];
    if (Math.abs(t.clientX - touchStartPosRef.current.x) > 10 || Math.abs(t.clientY - touchStartPosRef.current.y) > 10) {
      clearTimeout(touchTimerRef.current);
      touchTimerRef.current = null;
    }
  };

  const handleMissionClick = (nivelIdx: number, missaoIdx: number) => {
    if (!dragMovedRef.current) {
      navigate(`/missao/${nivelIdx + 1}/${missaoIdx + 1}`);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!hasOverflow || !trackRef.current) return;
    setIsDragging(true);
    setTooltipData(null);
    dragMovedRef.current = false;
    dragStartXRef.current = e.pageX;
    setStartX(e.pageX);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX;
    if (Math.abs(x - dragStartXRef.current) > 5) dragMovedRef.current = true;
    trackRef.current.scrollLeft = scrollLeft - (x - startX) * 1.5;
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTrackScroll = () => updateEdges();

  const handleScrollLeft = (e: React.MouseEvent) => {
    e.stopPropagation();
    trackRef.current?.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const handleScrollRight = (e: React.MouseEvent) => {
    e.stopPropagation();
    trackRef.current?.scrollBy({ left: 200, behavior: 'smooth' });
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
  const doneCount = flatMissions.filter(m => completedMissions.includes(m.id)).length;
  const pct = total > 0 ? Math.round((doneCount / total) * 100) : 0;
  const activeIndex = flatMissions.findIndex(m => !completedMissions.includes(m.id));
  const viewingIndex = currentMissionId ? flatMissions.findIndex(m => m.id === currentMissionId) : -1;

  const levelProgress = curriculum.map(nivel => ({
    total: nivel.missoes.length,
    done: nivel.missoes.filter(m => completedMissions.includes(m.id)).length,
  }));

  return (
    <>
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
          <div className="flex items-center gap-2">
            {hasOverflow && (
              <div className="flex items-center gap-0.5">
                <button onClick={handleScrollLeft} disabled={atStart} className="pb-scroll-btn">
                  <ChevronLeftIcon className="w-3 h-3" />
                </button>
                <button onClick={handleScrollRight} disabled={atEnd} className="pb-scroll-btn">
                  <ChevronRightIcon className="w-3 h-3" />
                </button>
              </div>
            )}
            <span className="pb-percent">
              {doneCount}/{total} missões &nbsp;·&nbsp; {pct}%
            </span>
          </div>
        </div>

        <div className={`pb-track-wrap${atStart ? ' at-start' : ''}${atEnd ? ' at-end' : ''}`}>
          <div className="pb-track" ref={trackRef} onScroll={handleTrackScroll}>
            {curriculum.map((nivel, nIdx) => {
              const lvl = levelProgress[nIdx];
              const lvlComplete = lvl.done === lvl.total;

              return (
                <React.Fragment key={nIdx}>
                  {nIdx > 0 && <div className="pb-level-divider" />}
                  <div className="pb-level-group">
                    <div className="pb-level-header">
                      <span className="pb-sep-label">{nivel.short}</span>
                      <span className="pb-sep-divider">·</span>
                      <span className={`pb-sep-count${lvlComplete ? ' complete' : ''}`}>{lvl.done}/{lvl.total}</span>
                    </div>
                    <div className="pb-level-dots">
                      {nivel.missoes.map((missao, mIdx) => {
                        const flatIdx = flatMissions.findIndex(m => m.id === missao.id);
                        const isDone = completedMissions.includes(missao.id);
                        const isActive = flatIdx === activeIndex;
                        const isCurrent = flatIdx === viewingIndex;

                        return (
                          <React.Fragment key={missao.id}>
                            {mIdx > 0 && (
                              <div className={`pb-connector${isDone ? ' done' : ''}${isActive ? ' active' : ''}`} />
                            )}
                            <div
                              className={`pb-mission${isDone ? ' done' : ''}${isActive ? ' active' : ''}${isCurrent ? ' current' : ''}`}
                              onMouseEnter={(e) => handleMissionEnter(e, missao.title)}
                              onMouseLeave={handleMissionLeave}
                              onTouchStart={(e) => handleMissionTouchStart(e, missao.title)}
                              onTouchEnd={handleMissionTouchEnd}
                              onTouchMove={handleMissionTouchMove}
                              onClick={() => handleMissionClick(nIdx, mIdx)}
                            >
                              <div className="pb-dot-layer" />
                              <MissionIcon
                                iconName={missao.icon}
                                completed={isDone}
                                className={`pb-icon-layer w-6 h-6${isActive && !isDone ? ' !text-accent' : ''}`}
                              />
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>

      </div>

      {tooltipData && (
        <div className="pb-tooltip" style={{ left: tooltipData.x, top: tooltipData.y }}>
          {tooltipData.text}
        </div>
      )}
    </>
  );
};

export default ProgressBar;
