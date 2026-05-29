export interface Duvida {
  pergunta: string;
  resposta: string;
}

export interface Reference {
  author: string;
  title: string;
  year?: number;
  location?: string;
  note?: string;
}

export interface Exercicio {
  id?: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  wrong_explanations?: string[];
}

export interface SlideCardData {
  title?: string;
  slides: string[];
}

export interface Missao {
  id: string;
  title: string;
  icon: string;
  emblem?: string;
  theory: string;
  resumo?: string[];
  cards?: SlideCardData[];
  exercicio?: Exercicio;
  exercicios?: Exercicio[];
  has_interativo: boolean;
  interativo_html?: string;
  references?: Reference[];
  duvidas?: Record<string, Duvida>;
}

export interface Nivel {
  id: number;
  title: string;
  short: string;
  missoes: Missao[];
}
