import type { Missao } from "../types";

const missao: Missao = {
  id: "1-2",
  title: "Objeto",
  icon: "PiCircle",
  emblem: "Criatura Marinha",
  theory: `
## Otto encontra Ada

Otto está em expedição pelo oceano quando avista um polvo que não conhecia... Ada.

{{ada-card-objeto}}

Ela tem uma cor, um tamanho e um número de tentáculos. E sabe fazer coisas – nada, se camufla, solta tinta.

Para Otto, Ada é uma "caixa preta": ele consegue observá-la e interagir com ela mesmo sem conhecer todos os seus detalhes.

Isso é um <destaque>objeto</destaque>: uma <destaque-reto>entidade</destaque-reto> (algo que existe de forma independente) com características próprias e ações que sabe executar.

{{duvida-entidade-definicao}}

<conceito note="adapt. Weisfeld, 2019"><strong>Objeto</strong>: entidade que reúne, de forma inseparável, <destaque-marker>características</destaque-marker> próprias e as <destaque-marker>ações</destaque-marker> que é capaz de executar.</conceito>

---

## Cada objeto é único

No oceano de Otto há outros polvos. Cada um é uma entidade separada – mesma natureza, dados completamente diferentes.

Ada é rosa com 8 tentáculos. Mas no oceano há outros polvos – cada um com sua própria cor e seus próprios dados.

Abaixo você pode ver a estrutura essencial de um objeto no universo da POO – o seu nome de referência e as chaves contendo suas características. Guarde esse formato:

\`\`\`python-simplificado
ada = {
    "cor": "rosa",
    "tentaculos": 8
}
\`\`\`

Mudar algo em Ada não muda os outros. Cada objeto guarda seus próprios dados de forma independente – ou seja, se Ada mudar de cor agora, os outros polvos continuam exatamente como estavam.

Mas o que torna Ada *ela mesma* – e não qualquer outro polvo?

Vejamos a seguir o que acontece quando dois objetos carregam exatamente os mesmos dados:

\`\`\`python-simplificado
ada   = {"cor": "rosa", "tentaculos": 8}
outra = {"cor": "rosa", "tentaculos": 8}
\`\`\`

O que será que aconteceria se perguntássemos ao Python qual é o endereço de memória de cada um? Será que, tendo as mesmas características, o Python englobaria os dois em um só? Ou criaria duas variáveis com endereços diferentes? Veredito: se temos dois objetos distintos, então cada um recebe um endereço único na memória. Veja:

\`\`\`python-simplificado
print(id(ada))    # 4371856896
print(id(outra))  # 4371857024
\`\`\`

Endereços diferentes – entidades diferentes. Ou seja: mesmo com dados idênticos, Ada e \`outra\` são dois objetos distintos. Agora a comparação:

\`\`\`python-simplificado
print(ada == outra)  # True  – mesmas características
print(ada is outra)  # False – entidades distintas
\`\`\`

\`==\` compara os dados – ou seja, pergunta "têm o mesmo conteúdo?". \`is\` compara a identidade – isto é, pergunta "são a mesma coisa?". Mesmo com dados idênticos, \`ada\` e \`outra\` são entidades distintas. Ada é Ada.

---

## Objetos estão em todo lugar

*Você já pensa em objetos sem perceber.*

Otto olha para Ada e percebe: o que ela é – uma entidade com características e ações – não é exclusividade do oceano.

Um celular tem características (modelo, bateria) e ações (ligar, tirar foto). Uma conta bancária tem características (saldo, titular) e ações (depositar, sacar). O princípio é o mesmo – só o contexto muda.

E é exatamente esse princípio que aparece no mercado de trabalho. Objetos como \`ContaBancaria\`, \`Usuario\` e \`Produto\` são tão reais quanto Ada – têm características próprias, existem de forma independente e cada um carrega seus próprios dados.

Veja como o padrão se repete:

| | Ada | ContaBancaria |
|---|---|---|
| **Características** | cor, tentáculos | saldo, titular |
| **Ações** | nadar, camuflar, soltar tinta | depositar, sacar, consultar saldo |

O oceano é uma metáfora. Os objetos são reais.

---

## Os três elementos de todo objeto

Não importa se é um polvo ou uma conta bancária – todo objeto pode ser descrito pelos mesmos três elementos:

| Elemento | O que é | Ada | ContaBancaria |
|---|---|---|---|
| **Identidade** | O que a torna única | Ada é uma entidade única | cada conta é única |
| **Características** | Os dados que carrega | cor: rosa, tentáculos: 8 | saldo, titular |
| **Ações** | O que ela sabe fazer | nadar, camuflar, soltar tinta | depositar, sacar, consultar saldo |

<destaque-marker>Identidade, características e ações</destaque-marker>. Onde houver um objeto, esses três estarão presentes.

---

## De onde Ada veio?

Otto observa, interage, anota. Mas uma pergunta fica no ar:

*Quem definiu que Ada seria rosa? Que teria 8 tentáculos? Que saberia nadar?*

A resposta ainda é um mistério. A caixa preta ainda está fechada.

Isso você descobre na **Missão 5**.
`,
  exercise: {
    question:
      "Otto encontra dois polvos: Ada (rosa, 8 tentáculos) e um segundo polvo (azul, 6 tentáculos). Ele muda a cor de Ada para verde. O que acontece com o segundo polvo?",
    options: [
      "O segundo polvo também fica verde – objetos do mesmo tipo compartilham características.",
      "O segundo polvo continua azul – cada objeto guarda seus próprios dados de forma independente.",
      "O segundo polvo desaparece – só pode existir um polvo de cada vez.",
      "O segundo polvo perde todas as características – qualquer mudança afeta todos os objetos.",
    ],
    correct: 1,
    explanation:
      "Cada objeto existe de forma independente. Mudar Ada não afeta o outro polvo – cada um carrega seus próprios dados.",
    wrong_explanations: [
      "Não. Cada objeto é independente – tem seus próprios dados. Mudar Ada não afeta o outro polvo em nada.",
      "",
      "Não. Vários objetos do mesmo tipo podem existir ao mesmo tempo. São entidades separadas e independentes.",
      "Não. Mudar uma característica de Ada só afeta Ada. O outro polvo é uma entidade independente com seus próprios dados intactos.",
    ],
  },
  exercicios: [
    {
      id: '1-2-e1',
      question: 'A missão descreve um objeto como uma "caixa preta". Isso significa que:',
      options: [
        'O objeto não pode ser usado sem conhecer todos os seus detalhes internos',
        'O objeto não possui características visíveis',
        'É possível observar e interagir com um objeto mesmo sem conhecer como ele funciona por dentro',
        'O objeto esconde dados que nunca podem ser acessados',
      ],
      correct: 2,
      explanation: 'É possível trabalhar com um objeto — observá-lo e interagir com ele — sem saber exatamente o que acontece por dentro. O que importa são as características que ele expõe e as ações que sabe executar.',
    },
    {
      id: '1-2-e2',
      question: 'Quais são os três elementos que todo objeto possui, independentemente do que ele representa?',
      options: [
        'Tipo, valor e referência',
        'Identidade, características e ações',
        'Nome, tamanho e posição na memória',
        'Classe, método e atributo',
      ],
      correct: 1,
      explanation: 'Todo objeto pode ser descrito pelos mesmos três elementos: Identidade (o que o torna único), Características (os dados que carrega) e Ações (o que sabe fazer). Isso vale para qualquer objeto — do mundo natural ou do código.',
    },
    {
      id: '1-2-e3',
      question: 'Dois objetos criados com a mesma estrutura existem de forma:',
      options: [
        'Compartilhada — alterações em um refletem no outro',
        'Dependente — o segundo sempre acompanha as mudanças do primeiro',
        'Independente — cada um carrega seus próprios dados',
        'Sincronizada — os dados são mantidos iguais automaticamente',
      ],
      correct: 2,
      explanation: 'Cada objeto existe de forma independente. Mudar um dado em um objeto não afeta os outros — mesmo que tenham sido criados a partir da mesma estrutura.',
    },
    {
      id: '1-2-e4',
      question: 'Em Python, `==` e `is` comparam coisas diferentes. `is` verifica:',
      options: [
        'Se os objetos têm os mesmos valores de características',
        'Se os objetos são do mesmo tipo',
        'Se os dois nomes se referem à mesma entidade na memória',
        'Se os objetos foram criados na mesma linha de código',
      ],
      correct: 2,
      explanation: '`==` compara conteúdo — "têm os mesmos dados?". `is` compara identidade — "são a mesma entidade?". Dois objetos com dados idênticos têm `==` True, mas `is` False: são entidades distintas.',
    },
    {
      id: '1-2-e5',
      question: 'Dois objetos com dados exatamente iguais possuem o mesmo endereço de memória?',
      options: [
        'Não — cada objeto é uma entidade distinta com seu próprio endereço',
        'Sim — Python reutiliza o mesmo espaço para evitar duplicatas',
        'Depende do tipo de dado armazenado',
        'Sim — objetos com dados idênticos são tratados como um só',
      ],
      correct: 0,
      explanation: 'Mesmo com dados idênticos, dois objetos distintos ocupam endereços de memória diferentes. A identidade é o que torna cada objeto único — não os dados que ele carrega.',
    },
    {
      id: '1-2-e6',
      question: 'Um celular (modelo, bateria; ligar, tirar foto) e uma conta bancária (saldo, titular; depositar, sacar) seguem o mesmo princípio de objeto porque:',
      options: [
        'São programados na mesma linguagem de programação',
        'Têm o mesmo número de características e ações',
        'Ambos possuem características próprias e ações que sabem executar',
        'Pertencem ao mesmo sistema de software',
      ],
      correct: 2,
      explanation: 'O princípio de objeto é universal. Qualquer entidade com características próprias e ações que sabe executar é um objeto. O contexto muda; o princípio é o mesmo.',
    },
  ],
  has_interativo: false,
  references: [
    {
      author: "Weisfeld, M.",
      year: 2019,
      title: "The Object-Oriented Thought Process",
      location: "5. ed. cap. 1, p. 6–14",
      note: "definição de objeto como entidade com dados e comportamentos; conceito de atributos e métodos",
    },
    {
      author: "Kölling, M., Quig, B., Patterson, A., Rosenberg, J.",
      year: 2003,
      title: "The BlueJ System and its Pedagogy",
      location: "Computer Science Education, 13(4), p. 249–268",
      note: "princípio Objects First: observar e interagir com objetos antes de qualquer formalização",
    },
  ],
  duvidas: {
    "duvida-entidade-definicao": {
      pergunta: "O que significa 'entidade'?",
      resposta:
        "'Entidade' é um termo central em POO e nos diagramas UML – você vai encontrá-lo com frequência. Significa algo que existe de forma independente, com identidade própria, distinguível de tudo o mais. Ada é uma entidade: ela existe e é única.",
    },
  },
};

export default missao;
