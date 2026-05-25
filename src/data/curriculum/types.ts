export interface Reference {
  author: string;
  title: string;
  year?: number;
  location?: string;
  note?: string;
}

export interface Exercise {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  wrong_explanations?: string[];
}

export interface ExtraExercise {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
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
  cards?: SlideCardData[];
  exercise?: Exercise;
  extra_exercises?: ExtraExercise[];
  has_interativo: boolean;
  interativo_html?: string;
  references?: Reference[];
}

export interface Nivel {
  id: number;
  title: string;
  short: string;
  missoes: Missao[];
}
