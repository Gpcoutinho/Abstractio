import type { Missao } from '../types';

const missao: Missao = {
  id: "1-3",
  title: "Atributos",
  icon: "PiTag",
  emblem: "Pintor(a) de Tentáculos",
  theory: `
## Otto abre o caderno

Na missão anterior, Otto encontrou Ada no oceano. Ela existe, é única, tem identidade própria.

Agora Otto tira o caderno de campo e começa a registrar tudo o que observa: cor, tamanho, número de tentáculos, espécie...

Cada informação registrada é um **atributo** — um dado que pertence especificamente a Ada.

> **Atributo** = uma informação que pertence a um objeto. Cada objeto guarda os seus próprios valores.

<ficha-interativo></ficha-interativo>

---

## O ponto — como acessar um atributo

Em Python, o ponto (\`.\`) é a forma de acessar um atributo de um objeto. É como Otto apontando para Ada e dizendo: *"me dê sua cor"*.

<ficha-acesso></ficha-acesso>

A estrutura é sempre: \`objeto.atributo\`.

---

## Cada polvo guarda os seus

No oceano há outros polvos. Cada um carrega seus próprios atributos — completamente independentes entre si.

\`\`\`python
print(ada.cor)     # rosa
print(ana.cor)     # azul
print(douglas.cor) # verde
\`\`\`

Mudar a cor de Ada não afeta Ana. Mudar Ana não afeta Douglas. Cada objeto é uma entidade separada com seus próprios dados.

---

## Atributos podem mudar

O estado de um objeto pode evoluir. Otto observa Ada se camuflando e atualiza o caderno:

\`\`\`python
ada.cor = "transparente"
print(ada.cor)  # transparente
\`\`\`

Só \`ada.cor\` mudou. Ana e Douglas continuam com as suas.
`,
  exercise: {
    question: "Otto lê `ada.cor` e vê `\"rosa\"`. Em seguida escreve `ana.cor = \"verde\"`. O que acontece com `ada.cor`?",
    options: [
      "Muda para \"verde\" — objetos do mesmo tipo compartilham atributos.",
      "Continua \"rosa\" — cada objeto guarda seus próprios atributos.",
      "Fica indefinido — só um polvo pode ter cor definida por vez.",
      "Gera um erro — não é possível alterar atributos de objetos separados."
    ],
    correct: 1,
    explanation: "Atributos pertencem a cada objeto individualmente. Mudar `ana.cor` não afeta `ada.cor` — são dados completamente independentes.",
    wrong_explanations: [
      "Não. Atributos são independentes por objeto. Mudar `ana.cor` só afeta Ana — Ada mantém seus próprios dados intactos.",
      "",
      "Não. Vários objetos podem ter o mesmo atributo definido ao mesmo tempo. Ada e Ana são entidades independentes, cada uma com sua própria `cor`.",
      "Não. Alterar o atributo de um objeto nunca afeta o de outro. `ana.cor = \"verde\"` é válido e só modifica Ana."
    ]
  },
  exercicios: [
    {
      id: '1-3-e1',
      question: 'Na POO, um atributo é:',
      options: [
        'Uma ação que o objeto sabe executar',
        'Uma informação que pertence especificamente a um objeto',
        'Uma função externa que acessa os dados do objeto',
        'O tipo de dado que o objeto representa',
      ],
      correct: 1,
      explanation: 'Atributo é um dado que pertence ao objeto — uma característica sua. Cor, tamanho, nome: cada informação registrada sobre um objeto é um atributo.',
    },
    {
      id: '1-3-e2',
      question: 'Em Python, a sintaxe `objeto.atributo` serve para:',
      options: [
        'Criar um novo objeto do tipo `atributo`',
        'Acessar uma informação que pertence a esse objeto',
        'Chamar uma função chamada `atributo`',
        'Comparar dois objetos entre si',
      ],
      correct: 1,
      explanation: 'O ponto é a forma de acessar um atributo de um objeto — como apontar para ele e dizer: "me dê essa informação". A estrutura é sempre `objeto.atributo`.',
    },
    {
      id: '1-3-e3',
      question: 'Ada começa com `cor = \'rosa\'`. Otto observa ela se camuflando e atualiza: `ada.cor = \'transparente\'`. O que essa mudança representa?',
      options: [
        'Ada virou um objeto diferente — mudar um atributo cria uma nova entidade',
        'O estado de Ada mudou, mas ela continua sendo a mesma entidade',
        'Ada perdeu sua identidade ao alterar a cor',
        'Atributos não podem ser alterados depois que o objeto é criado',
      ],
      correct: 1,
      explanation: 'Mudar um atributo altera o estado do objeto, não a sua identidade. Ada continua sendo Ada — a mesma entidade. O que mudou foi apenas o valor de `cor`.',
    },
    {
      id: '1-3-e4',
      question: 'Para atualizar o atributo `velocidade` do objeto `carro` para `120`, a sintaxe correta é:',
      options: [
        '`velocidade.carro = 120`',
        '`set(carro, velocidade, 120)`',
        '`carro[velocidade] = 120`',
        '`carro.velocidade = 120`',
      ],
      correct: 3,
      explanation: 'A notação ponto serve tanto para leitura (`carro.velocidade`) quanto para atribuição (`carro.velocidade = 120`). A estrutura é a mesma: `objeto.atributo = novo_valor`.',
    },
    {
      id: '1-3-e5',
      question: 'Considerando um objeto `celular`, qual dos itens abaixo representa um atributo?',
      options: [
        '`ligar()` — uma ação que o celular sabe executar',
        '`bateria` — uma informação que descreve o estado do celular',
        '`tirar_foto()` — um comportamento do celular',
        'O celular em si — a entidade completa',
      ],
      correct: 1,
      explanation: 'Atributos são informações — dados que descrevem o estado do objeto. Ações como `ligar()` e `tirar_foto()` são outra coisa. `bateria`, `modelo`, `cor` são exemplos de atributos.',
    },
    {
      id: '1-3-e6',
      question: 'O valor de um atributo pode ser alterado depois que o objeto foi criado?',
      options: [
        'Sim — o estado de um objeto pode evoluir ao longo do tempo',
        'Não — atributos são fixos após a criação do objeto',
        'Sim, porém apenas atributos do tipo texto podem ser alterados',
        'Apenas se o objeto for completamente recriado com novos valores',
      ],
      correct: 0,
      explanation: 'O estado de um objeto pode evoluir. Basta usar a notação ponto: `objeto.atributo = novo_valor`. Só esse objeto é afetado — os demais continuam com os seus próprios valores.',
    },
  ],
  has_interativo: false
};

export default missao;
