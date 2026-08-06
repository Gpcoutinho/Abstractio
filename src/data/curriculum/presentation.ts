// Único conteúdo do currículo que ainda vive no front — decisão de apresentação
// que a API não expõe (ícone é escolha visual; minigame_html é um asset local
// carregado via `?raw`). Teoria, perguntas, emblema e título vêm do tentacle.
export interface MissaoPresentacao {
  icon: string;
  minigameHtml?: string;
}

export const apresentacaoPorSlug: Record<string, MissaoPresentacao> = {
  '1-0': { icon: 'PiWaveform' },
  '1-1': { icon: 'PiPuzzlePiece' },
  '1-2': { icon: 'PiCircle' },
  '1-3': { icon: 'PiTag' },
  '1-4': { icon: 'PiGear' },
  '1-5': { icon: 'PiRuler' },
  '1-6': { icon: 'PiBuilding' },
  '1-7': { icon: 'PiClipboard', minigameHtml: 'interativos/nivel_1_missao_7.html' },
  '2-1': { icon: 'PiGlobe' },
  '2-2': { icon: 'PiSpinner' },
  '2-3': { icon: 'PiLock' },
  '2-4': { icon: 'PiDna' },
  '2-5': { icon: 'PiMaskHappy' },
  '2-6': { icon: 'PiClipboard' },
  '3-1': { icon: 'PiCity' },
  '3-2': { icon: 'PiPencil' },
  '3-3': { icon: 'PiShuffle' },
  '3-4': { icon: 'PiBank' },
  '3-5': { icon: 'PiPlug' },
  '3-6': { icon: 'PiArrowsHorizontal' },
  '3-7': { icon: 'PiFactory' },
  '3-8': { icon: 'PiClipboard' },
  '4-1': { icon: 'PiBank' },
  '4-2': { icon: 'PiTarget' },
  '4-3': { icon: 'PiLockOpen' },
  '4-4': { icon: 'PiDiamond' },
  '4-5': { icon: 'PiFlask' },
  '4-6': { icon: 'PiMapTrifold' },
  '4-7': { icon: 'PiClipboard' },
};
