import type { Missao } from "../types";

const missao: Missao = {
  id: "1-2",
  title: "Objeto",
  icon: "PiCircle",
  emblem: "Criatura Marinha",
  theory: `
## Otto encontra Ada

Otto está em expedição pelo oceano quando avista um polvo que não conhecia.

{{ada-card-objeto}}

Ela existe. Tem cor. Tem tamanho. Tem tentáculos. E sabe fazer coisas – nada, se camufla, solta tinta.

Para Otto, Ada é uma <destaque>caixa preta</destaque>: ele consegue observá-la e interagir com ela sem saber o que está dentro.

Isso é um <destaque>objeto</destaque>: uma entidade com características próprias e ações que sabe executar.

<conceito note="adapt. Weisfeld, 2019"><strong>Objeto</strong>: entidade que reúne, de forma inseparável, características próprias e as ações que é capaz de executar.</conceito>

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
  extra_exercises: [
    {
      id: '1-2-e1',
      question: 'Dois objetos criados a partir da mesma classe:',
      options: [
        'Sempre têm os mesmos valores de atributos',
        'Têm seus próprios valores, independentes dos outros',
        'Compartilham atributos numéricos, mas não textuais',
        'São idênticos até que um deles seja alterado manualmente',
      ],
      correct: 1,
      explanation: 'Cada objeto é independente. `rex = Cachorro("Rex")` e `buddy = Cachorro("Buddy")` são objetos distintos com seus próprios valores. Alterar `rex.nome` não afeta `buddy.nome`.',
    },
    {
      id: '1-2-e2',
      question: 'Em Python, qual linha cria um objeto a partir da classe `Carro`?',
      options: [
        '`meu_carro = Carro("vermelho")`',
        '`Carro = meu_carro("vermelho")`',
        '`object Carro("vermelho")`',
        '`new Carro("vermelho")`',
      ],
      correct: 0,
      explanation: 'Em Python, criamos objetos chamando a classe como se fosse uma função: `objeto = NomeDaClasse(argumentos)`. Não usamos `new` (como no Java) nem `object`. O resultado é uma instância da classe.',
    },
    {
      id: '1-2-e3',
      question: 'O que é uma "instância" de uma classe?',
      options: [
        'O nome dado ao arquivo onde a classe está definida',
        'Um método especial que inicializa a classe',
        'Uma cópia da classe sem modificações',
        'Um objeto concreto criado a partir da classe',
      ],
      correct: 3,
      explanation: 'Instância e objeto são termos intercambiáveis. Quando fazemos `ada = Polvo()`, `ada` é uma instância (objeto concreto) da classe `Polvo`. A classe é o molde; a instância é o produto fabricado com esse molde.',
    },
    {
      id: '1-2-e4',
      question: 'Num sistema com classes `Gato`, `Cachorro` e `Passaro`, quantos objetos podemos ter ao mesmo tempo?',
      options: [
        'Apenas um objeto por classe',
        'No máximo três objetos no total',
        'Qualquer quantidade de objetos de qualquer dessas classes',
        'Apenas objetos da última classe definida no código',
      ],
      correct: 2,
      explanation: 'Não há limite para o número de objetos. Podemos ter `felix = Gato()`, `tom = Gato()`, `rex = Cachorro()`, `tweety = Passaro()` — todos coexistindo no mesmo programa.',
    },
    {
      id: '1-2-e5',
      question: '`ada = Polvo("rosa", 8)` e `ana = Polvo("azul", 6)`. Qual afirmação é verdadeira?',
      options: [
        '`ada` e `ana` são objetos independentes com atributos distintos',
        '`ada` e `ana` compartilham os mesmos atributos por serem da mesma classe',
        'Não é possível criar dois objetos com o mesmo tipo simultaneamente',
        '`ana` é uma cópia de `ada` com valores modificados',
      ],
      correct: 0,
      explanation: 'Cada objeto tem sua própria "cópia" dos atributos. `ada.cor` é `"rosa"` e `ana.cor` é `"azul"`. Alterar `ada.tentaculos = 10` não afeta `ana.tentaculos`. Eles são completamente independentes.',
    },
    {
      id: '1-2-e6',
      question: 'Dois objetos `a = Gato("Mimi")` e `b = Gato("Mimi")` têm os mesmos valores. Eles são o mesmo objeto?',
      options: [
        'Sim. Objetos com os mesmos dados são considerados idênticos em Python',
        'Sim. Python reutiliza o mesmo espaço na memória para evitar duplicatas',
        'Não. Cada objeto é uma entidade distinta na memória, mesmo com dados iguais',
        'Depende — só são diferentes se criados em linhas de código distintas',
      ],
      correct: 2,
      explanation: 'Identidade significa que cada objeto é uma entidade distinta na memória. Mesmo que `a` e `b` tenham os mesmos dados, são dois objetos diferentes. Em Python, `a is b` retorna `False` — eles ocupam lugares distintos na memória.',
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
};

export default missao;
