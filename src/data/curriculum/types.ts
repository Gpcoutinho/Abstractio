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
