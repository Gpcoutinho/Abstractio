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
  extra_exercises: [
    {
      id: '1-3-e1',
      question: 'Para acessar o atributo `nome` do objeto `ada`, qual é a sintaxe correta em Python?',
      options: [
        '`ada.nome`',
        '`nome.ada`',
        '`ada[nome]`',
        '`get(ada, nome)`',
      ],
      correct: 0,
      explanation: 'Em Python, atributos são acessados com a notação ponto: `objeto.atributo`. Para ler o nome de `ada`, escrevemos `ada.nome`. Essa "notação ponto" é usada em toda linguagem orientada a objetos.',
    },
    {
      id: '1-3-e2',
      question: 'O que o `self` representa dentro dos métodos de uma classe?',
      options: [
        'A classe em si, como um todo',
        'O próprio objeto que está sendo criado ou manipulado naquele momento',
        'O valor do primeiro atributo da classe',
        'Um parâmetro opcional de identificação',
      ],
      correct: 1,
      explanation: '`self` é uma referência ao objeto atual. Quando escrevemos `self.cor = "rosa"`, estamos dizendo: "guarda `"rosa"` no atributo `cor` deste objeto específico". Sem `self`, não saberíamos em qual objeto estamos atuando.',
    },
    {
      id: '1-3-e3',
      question: 'Qual código atribui o valor `120` ao atributo `velocidade` do objeto `moto`?',
      options: [
        '`velocidade.moto = 120`',
        '`moto[velocidade] = 120`',
        '`set moto.velocidade = 120`',
        '`moto.velocidade = 120`',
      ],
      correct: 3,
      explanation: 'A notação ponto funciona tanto para leitura (`moto.velocidade`) quanto para atribuição (`moto.velocidade = 120`). É como preencher um campo de um formulário que pertence especificamente àquele objeto.',
    },
    {
      id: '1-3-e4',
      question: 'Onde atributos de instância costumam ser definidos, por boas práticas?',
      options: [
        'Dentro do método `__init__`, usando `self.atributo = valor`',
        'Fora da classe, como variáveis globais',
        'Em um arquivo separado de configuração',
        'Diretamente na linha `class NomeDaClasse:`',
      ],
      correct: 0,
      explanation: 'Por convenção e boa prática, atributos de instância são definidos no `__init__`. Assim, todo objeto criado começa com seus atributos já inicializados — como preencher a certidão de nascimento no momento em que o objeto "nasce".',
    },
    {
      id: '1-3-e5',
      question: 'Qual afirmação sobre atributos de objetos Python está INCORRETA?',
      options: [
        'Um atributo pode guardar qualquer tipo de dado: número, texto, lista, etc.',
        'É possível adicionar novos atributos a um objeto fora da classe',
        'Dois objetos da mesma classe compartilham os valores dos seus atributos automaticamente',
        'Atributos são acessados usando a notação ponto',
      ],
      correct: 2,
      explanation: 'Atributos de instância são independentes para cada objeto. `rex.nome` e `buddy.nome` são campos distintos — alterar um não afeta o outro. As outras afirmativas são verdadeiras: Python permite qualquer tipo de dado e é possível adicionar atributos dinamicamente.',
    },
    {
      id: '1-3-e6',
      question: 'Dado `class Carro:\n    def __init__(self, cor):\n        self.cor = cor`. Após `c = Carro("vermelho")`, `c.cor` vale:',
      options: [
        '`None`',
        '`Carro`',
        '`"vermelho"`',
        '`"cor"`',
      ],
      correct: 2,
      explanation: 'Quando executamos `c = Carro("vermelho")`, o `__init__` é chamado com `cor = "vermelho"`. A linha `self.cor = cor` armazena `"vermelho"` no atributo `cor` do objeto `c`. Por isso, `c.cor` retorna `"vermelho"`.',
    },
  ],
  has_interativo: false
};

export default missao;
