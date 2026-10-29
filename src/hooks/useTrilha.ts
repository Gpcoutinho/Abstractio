import { useContext, useMemo } from 'react';
import { TrilhaContext } from '../contexts/TrilhaContext';
import { apresentacaoPorSlug } from '../data/curriculum/presentation';

export interface MissaoView {
  id: string; // slug, ex: "1-1"
  title: string;
  icon: string;
  emblem: string | null;
  hasMinigame: boolean;
  minigame_html?: string;
  rewardShells: number;
}

export interface NivelView {
  id: number; // levelId
  title: string;
  short: string;
  missoes: MissaoView[];
}

// Devolve a trilha no mesmo formato que `niveis` (currículo local) tinha, para que
// as telas troquem `import { niveis }` por `useTrilha()` com o mínimo de atrito.
export function useTrilha() {
  const ctx = useContext(TrilhaContext);
  if (!ctx) throw new Error('useTrilha deve ser usado dentro de TrilhaProvider');
  const { trail, loading, error, refetch } = ctx;

  const niveis: NivelView[] = useMemo(() => {
    if (!trail) return [];
    return trail.levels.map(level => ({
      id: level.id,
      title: level.title,
      short: level.shortTitle,
      missoes: level.missions.map(m => ({
        id: m.slug,
        title: m.title,
        icon: apresentacaoPorSlug[m.slug]?.icon ?? '',
        emblem: m.emblem,
        hasMinigame: m.hasMinigame,
        minigame_html: apresentacaoPorSlug[m.slug]?.minigameHtml,
        rewardShells: m.rewardShells,
      })),
    }));
  }, [trail]);

  const totalMissoes = trail?.totalMissions ?? 0;

  return { trail, niveis, totalMissoes, loading, error, refetch };
}
