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
  exercicio: {
    question:
      "Em um sistema de loja online, um produto tem nome, preço e estoque, e pode ser vendido e ter o estoque atualizado. Ele é um objeto porque:",
    options: [
      "Reúne características próprias e ações que sabe executar",
      "Tem um nome que o identifica dentro do sistema",
      "Está registrado em um banco de dados da loja",
      "Possui mais de uma informação cadastrada",
    ],
    correct: 0,
    explanation:
      "Um objeto é uma entidade que reúne, de forma inseparável, características próprias e as ações que sabe executar. O produto tem características (nome, preço, estoque) e ações (ser vendido, atualizar estoque) — os dois elementos que definem um objeto.",
    wrong_explanations: [
      "",
      "Não. Ter um identificador é importante, mas não é o que define um objeto. O que define é reunir características e ações numa mesma entidade.",
      "Não. Estar em um banco de dados é uma questão de armazenamento, não de definição. Um objeto pode existir em memória sem banco de dados.",
      "Não. Ter várias informações não basta. O que define um objeto é reunir características e ações — não a quantidade de dados.",
    ],
  },
  exercicios: [
    {
      id: '1-2-e1',
      question: 'A missão descreve um objeto como uma "caixa preta". Isso significa que:',
      options: [
        'Um objeto só pode ser usado por quem conhece seus detalhes internos',
        'Um objeto não possui características que possam ser observadas',
        'Os dados de um objeto ficam ocultos e nunca podem ser acessados',
        'É possível usar um objeto sem saber como ele funciona por dentro',
      ],
      correct: 3,
      explanation: 'É possível trabalhar com um objeto — observá-lo e interagir com ele — sem saber exatamente o que acontece por dentro. O que importa são as características que ele expõe e as ações que sabe executar.',
      wrong_explanations: [
        'Não. "Só pode ser usado por quem conhece os detalhes internos" não é o que a metáfora da caixa preta descreve.',
        'Não. Um objeto tem características observáveis — cor, saldo, tamanho. O conceito de caixa preta não diz nada sobre isso.',
        'Não. Dados de um objeto podem ser acessados. Caixa preta não significa que os dados estão bloqueados.',
        '',
      ],
    },
    {
      id: '1-2-e2',
      question: 'Quais são os três elementos que todo objeto possui, independentemente do que ele representa?',
      options: [
        'Identidade, características e ações',
        'Entrada, processamento e saída',
        'Criação, estado e destruição',
        'Nome, tipo e valor',
      ],
      correct: 0,
      explanation: 'Todo objeto pode ser descrito pelos mesmos três elementos: Identidade (o que o torna único), Características (os dados que carrega) e Ações (o que sabe fazer). Isso vale para qualquer objeto — do mundo natural ou do código.',
      wrong_explanations: [
        '',
        'Não. Esse trio descreve o fluxo de um programa, não a estrutura de um objeto.',
        'Não. Esses são momentos do ciclo de vida de um objeto — não os elementos que o definem.',
        'Não. Nome, tipo e valor descrevem uma variável — não os três elementos de um objeto.',
      ],
    },
    {
      id: '1-2-e3',
      question: 'Dois objetos criados com a mesma estrutura existem de forma:',
      options: [
        'Compartilhada — alterações em um objeto refletem no outro',
        'Independente — cada objeto carrega seus próprios dados',
        'Dependente — um objeto sempre acompanha as mudanças do outro',
        'Sincronizada — os dados de todos são mantidos iguais automaticamente',
      ],
      correct: 1,
      explanation: 'Cada objeto existe de forma independente. Mudar um dado em um objeto não afeta os outros — mesmo que tenham sido criados a partir da mesma estrutura.',
      wrong_explanations: [
        'Não. "Compartilhada" implicaria que mudar um objeto alteraria os outros automaticamente — o que não acontece.',
        '',
        'Não. "Dependente" implicaria que um objeto acompanha as mudanças de outro automaticamente — o que também não acontece.',
        'Não. Não há nenhum mecanismo que mantenha os dados de objetos distintos sincronizados automaticamente.',
      ],
    },
    {
      id: '1-2-e4',
      question: 'Uma biblioteca gerencia livros. Cada livro tem título e número de páginas, e pode ser emprestado ou devolvido. No contexto de POO, "ser emprestado" é um exemplo de:',
      options: [
        'Uma característica que o livro possui',
        'A identidade que torna o livro único',
        'Um dado compartilhado por todos os livros do sistema',
        'Uma ação que o objeto Livro sabe executar',
      ],
      correct: 3,
      explanation: 'Ações são o que um objeto sabe fazer — não o que ele é ou o que tem. "Ser emprestado" e "ser devolvido" são comportamentos do livro, assim como nadar e se camuflar são ações de Ada.',
      wrong_explanations: [
        'Não. Características são os dados que o objeto possui — como título e número de páginas. "Ser emprestado" não é um dado.',
        'Não. Identidade é o que torna cada livro único como entidade. "Ser emprestado" não define isso.',
        'Não. "Ser emprestado" não é um dado registrado no livro. Pense nos dois tipos de elementos que todo objeto possui.',
        '',
      ],
    },
    {
      id: '1-2-e5',
      question: 'Imagine dois carros idênticos, que saíram da mesma fábrica com mesmo modelo, motor e cor. No contexto de objetos, podemos afirmar que:',
      options: [
        'Eles são objetos distintos, cada um com sua própria identidade.',
        'Eles são o mesmo objeto, pois têm origem e características idênticas.',
        'Eles são objetos síncronos, o que faz suas ações acontecerem juntas.',
        'Eles compartilham a mesma identidade e o mesmo endereço na memória.',
      ],
      correct: 0,
      explanation: 'Mesmo com dados idênticos, dois objetos distintos ocupam endereços de memória diferentes. A identidade é o que torna cada objeto único — não os dados que ele carrega.',
      wrong_explanations: [
        '',
        'Não. Ter a mesma origem ou características idênticas não torna dois objetos um só — cada um existe como entidade separada.',
        'Não. Objetos distintos não sincronizam ações entre si. Cada um existe e age de forma independente.',
        'Não. Entidades distintas nunca compartilham o mesmo endereço de memória — esse endereço é exatamente o que as diferencia.',
      ],
    },
    {
      id: '1-2-e6',
      question: 'Um celular (modelo, bateria; ligar, tirar foto) e uma conta bancária (saldo, titular; depositar, sacar) seguem o mesmo princípio de objeto porque:',
      options: [
        'São implementados na mesma linguagem de programação',
        'Ambos possuem características próprias e ações que sabem executar',
        'Têm o mesmo número de características e ações',
        'Pertencem ao mesmo sistema de software',
      ],
      correct: 1,
      explanation: 'O princípio de objeto é universal. Qualquer entidade com características próprias e ações que sabe executar é um objeto. O contexto muda; o princípio é o mesmo.',
      wrong_explanations: [
        'Não. A linguagem de implementação não define o que é um objeto — o princípio é independente de tecnologia.',
        '',
        'Não. O número de características e ações não é o que os aproxima. Pense no que qualquer objeto — independente do contexto — sempre tem.',
        'Não. Eles podem pertencer a sistemas completamente diferentes. O que os aproxima é algo mais fundamental do que isso.',
      ],
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
