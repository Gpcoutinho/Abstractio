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

## As três marcas de todo objeto

Todo objeto – de um polvo a um celular – carrega três marcas:

| Marca | O que é | Em Ada |
|---|---|---|
| **Identidade** | O que a diferencia das outras | Ada é uma entidade única |
| **Características** | Os dados que carrega | cor: rosa, tentáculos: 8 |
| **Ações** | O que ela sabe fazer | nadar, camuflar, soltar tinta |

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
