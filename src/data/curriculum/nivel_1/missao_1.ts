import type { Missao } from '../types';
import { diagramRow, oceanPolvo, objectCard, codeCard } from '../../visuals';

// prettier-ignore
const diagrama = diagramRow([oceanPolvo('meu_polvo'), objectCard('Entidade', 'meu_polvo', { nome: '"Polvonilson"', cor: '"Roxo"' }), codeCard('Código Python', `meu_polvo = {\n    "nome": "Polvonilson",\n    "cor": "Roxo"\n}`)]);

const missao: Missao = {
  id: "1-1",
  title: "O que é POO?",
  icon: "🧩",
  theory: `
E aí, vamos dar o primeiro passo na nossa trilha?

Se você já cursou a disciplina de Introdução à Programação (provavelmente em C ou Python), você aprendeu a programar no paradigma **Procedural**. Lembre que a programação procedural é como uma **receita de bolo**: o código é um algoritmo linear, um passo a passo. Você cria variáveis soltas e depois cria funções separadas para mexer nelas.

## Mas afinal, o que é a Orientação a Objetos (POO)?

De forma bem direta: é simplesmente **uma maneira diferente de organizar o seu código**, pensando em **entidades vivas** em vez de listas de comandos.

Em vez de focar apenas no passo a passo (o algoritmo), a POO foca nos **atores** que fazem o programa funcionar. A gente para de pensar em variáveis espalhadas e passa a pensar em pacotes chamados **Objetos**.

{{card:0}}

## O problema que a POO resolve

**"Mas como assim? Por que eu deveria trocar a procedural pela POO?"**

Vamos entender isso no contexto da nossa própria trilha. Imagine que precisamos colocar o nosso mascote, o Polvo, flutuando aqui na sua tela.

Na abordagem Procedural, nós criaríamos variáveis totalmente separadas:

\`\`\`python
polvo1_nome = "Polvonilson"
polvo1_cor = "Roxo"

polvo2_nome = "Azulão"
polvo2_cor = "Azul"
\`\`\`

E assim por diante para cada polvo — muitas variáveis soltas!

Até aqui, tudo bem, certo? Mas e se precisarmos de 100 polvos no nosso oceano? Na programação procedural, isso viraria um caos. Você teria que criar listas gigantescas e garantir que os dados não se misturassem.

É exatamente aqui que a POO entra para salvar o dia. Na POO, nós paramos de lidar com variáveis soltas e criamos um pacote auto-suficiente chamado **Objeto** que guarda toda a informação necessária sobre aquela entidade.

A mágica da POO acontece porque o código te permite materializar o seu modelo mental. Olha como fica fácil definir a estrutura do nosso mascote:

${diagrama}

Olha que limpo! Todas as características estão unidas nesse pacote.

Percebe como a POO ajuda muito mais? Se quisermos 100 polvos agora, é só usar essa mesma estrutura 100 vezes. O código fica limpo, organizado e faz sentido para a mente humana.

Por esses motivos, te incentivamos a continuar a trilha! Cada missão vai reforçar cada vez mais o seu entendimento e construir a sua base como Cientista. Vamos para a próxima etapa?
`,
  exercise: {
    question: "Qual das alternativas melhor define a Programação Orientada a Objetos?",
    options: [
      "Uma sequência linear de instruções que o computador executa.",
      "Um paradigma que organiza o software em torno de objetos com atributos e métodos.",
      "Uma linguagem de programação específica como Python ou Java.",
      "Um método exclusivo para criar interfaces gráficas."
    ],
    correct: 1,
    explanation: "POO é um paradigma que organiza o código em objetos com atributos (dados) e métodos (comportamentos)."
  },
  cards: [
    {
      slides: [
        "**Slide 1** — placeholder de especificação.",
        "**Slide 2** — placeholder de especificação.",
        "**Slide 3** — placeholder de especificação.",
      ],
    },
  ],
  has_interativo: false
};

export default missao;
