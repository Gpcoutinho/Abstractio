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

Para Otto, Ada é uma <destaque>caixa preta</destaque>: ele consegue observá-la e interagir com ela mesmo sem conhecer todos os seus detalhes.

Isso é um <destaque>objeto</destaque>: uma entidade (algo que existe de forma independente) com características próprias e ações que sabe executar.

<conceito note="adapt. Weisfeld, 2019"><strong>Objeto</strong>: entidade que reúne, de forma inseparável, características próprias e as ações que é capaz de executar.</conceito>

{{duvida-entidade-definicao}}

---

## Cada objeto é único

No oceano de Otto há outros polvos. Cada um é uma entidade separada – mesma natureza, dados completamente diferentes.

Ada é rosa com 8 tentáculos. Ao lado dela há outros dois polvos – cada um com sua própria cor e seus próprios dados.

Mudar algo em Ada não muda os outros. Cada objeto guarda seus próprios dados de forma independente.

Mas o que torna Ada *ela mesma* – e não qualquer outro polvo?

Python simplificado – para demonstrar o conceito, dois objetos com os mesmos dados:

\`\`\`python
ada   = {"cor": "rosa", "tentaculos": 8}
outra = {"cor": "rosa", "tentaculos": 8}
\`\`\`

Cada um recebe um endereço único na memória:

\`\`\`python
print(id(ada))    # 4371856896
print(id(outra))  # 4371857024
\`\`\`

Endereços diferentes – entidades diferentes. Agora a comparação:

\`\`\`python
print(ada == outra)  # True  – mesmas características
print(ada is outra)  # False – entidades distintas
\`\`\`

\`==\` compara os dados; \`is\` compara a identidade. Mesmo com dados idênticos, Ada e \`outra\` são entidades distintas. Ada é Ada.

---

## Objetos estão em todo lugar

*Você já pensa em objetos sem perceber.*

Ada não é um caso especial.

Olhe ao redor – cadeira, celular, cachorro, caneta. Cada um deles também tem características próprias e ações que sabe executar.

O oceano de Otto é uma metáfora do mundo real: tudo que existe pode ser pensado como um objeto.

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
      resposta: "Entidade é qualquer coisa que existe de forma independente – um animal, um documento, um evento. Em programação, usamos o termo para dizer que um objeto tem existência própria: ocupa um lugar na memória, tem uma identidade única e persiste enquanto o programa precisar dele. Ada é uma entidade porque existe por conta própria, independente de qualquer outro polvo.",
    },
  },
};

export default missao;
