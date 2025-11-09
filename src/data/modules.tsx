/* Módulos e lições - formato simples para uso local (Opção A) */

export type LessonData = { id: string; title: string; content: string };
export type ModuleData = { id: string; title: string; lessons: LessonData[] };

export const modules: ModuleData[] = [
  {
    id: 'm1',
    title: 'Módulo 1 — Introdução',
    lessons: [
      {
        id: 'l1',
        title: 'O que é POO?',
        content: `
          <h3>O que é POO?</h3>
          <p>A programação orientada a objetos (POO) é um paradigma que organiza código em objetos que combinam estado e comportamento.</p>
          <p>Conceitos-chave: <strong>classe</strong>, <strong>objeto</strong>, <strong>encapsulamento</strong>, <strong>herança</strong> e <strong>polimorfismo</strong>.</p>
        `,
      },
      {
        id: 'l2',
        title: 'Classes',
        content: `
          <h3>Classes</h3>
          <p>Uma classe é um molde que descreve as propriedades e métodos de um tipo de objeto.</p>
          <pre><code>// Exemplo em pseudocódigo
class Pessoa {
  nome
  idade
  falar() { console.log('Oi, eu sou ' + this.nome) }
}
</code></pre>
        `,
      },
      {
        id: 'l3',
        title: 'Objetos',
        content: `
          <h3>Objetos</h3>
          <p>Objeto é uma instância concreta de uma classe, com valores específicos para seus atributos.</p>
        `,
      },
      {
        id: 'l4',
        title: 'Métodos',
        content: `
          <h3>Métodos</h3>
          <p>Métodos são funções associadas a uma classe/objeto que definem comportamentos.</p>
        `,
      },
    ],
  },
  {
    id: 'm2',
    title: 'Módulo 2 — Conceitos Avançados',
    lessons: [
      { id: 'l1', title: 'Encapsulamento', content: '<p>Encapsulamento protege dados e expõe uma interface.</p>' },
      { id: 'l2', title: 'Herança', content: '<p>Herança permite reutilizar comportamento entre classes.</p>' },
      { id: 'l3', title: 'Polimorfismo', content: '<p>Polimorfismo permite tratar objetos diferentes de forma uniforme.</p>' },
    ],
  },
];

export default modules;
