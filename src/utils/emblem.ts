import type { Genero } from '../contexts/ProgressContext';

// Padrão "não-espaço/não-paren" para combinar tokens de palavras com acentos
const W = '[^\\s/()]+';

export function resolveEmblem(emblem: string | undefined, genero: Genero): string | undefined {
  if (!emblem) return emblem;

  if (genero === 'feminino') {
    return emblem
      // O(A) — conteúdo maiúsculo em parens = substituição total da palavra anterior
      .replace(new RegExp(`${W}\\(([A-ZÁÉÍÓÚÃÕÂÊÎÔÛÇ]+)\\)`, 'g'), '$1')
      // Pintor(a) — conteúdo minúsculo = sufixo feminino
      .replace(new RegExp(`(${W})\\(([a-záéíóúãõâêîôûç]+)\\)`, 'g'), '$1$2')
      // Rei/Rainha — toma a segunda opção
      .replace(new RegExp(`${W}\\/(${W})`, 'g'), '$1');
  }

  // masculino, outro, '' → forma masculina (padrão)
  return emblem
    .replace(/\([^)]+\)/g, '')
    .replace(new RegExp(`(${W})\\/${W}`, 'g'), '$1')
    .replace(/  +/g, ' ')
    .trim();
}
