import type { Missao } from '../types';
import { diagramaObjetos } from '../../visuals/nivel_1';

const missao: Missao = {
  id: "1-2",
  title: "Objeto",
  icon: "PiCircle",
  emblem: "Criatura Marinha",
  theory: `
## Objetos estão em todo lugar

Olhe ao redor. Cadeira. Celular. Cachorro. Caneta.

Todo objeto do mundo real tem duas coisas em comum:

- **Características** — como ele *é* (cor, nome, tamanho, peso...)
- **Ações** — o que ele *faz* (latir, carregar, rolar, escrever...)

${diagramaObjetos}

Em programação, os objetos funcionam exatamente igual: possuem características próprias e realizam ações. Na nossa jornada, utilizaremos o universo marinho, em especial os polvos, que são animais muito versáteis - assim como a POO - para ilustrar o funcionamento desses objetos.

---

## Otto encontra Ada

Otto está em expedição pelo oceano quando avista uma criatura que nunca viu.

Ela existe. Tem uma cor. Um tamanho. Um número de tentáculos. E sabe fazer coisas — nada, se camufla, solta tinta.

Otto não sabe como essa criatura foi criada. Não importa — ele consegue observá-la e interagir com ela. Isso é um **objeto**: algo com características próprias e ações que sabe executar.

<polvos-interativo></polvos-interativo>

---

## Cada objeto é único

No oceano de Otto há outros polvos. Cada um é uma entidade separada — mesma natureza, dados completamente diferentes.

Ada é rosa com 8 tentáculos. Ana é azul com 6. Douglas é verde.

Mude as características de um — o outro não muda. Cada objeto guarda seus próprios dados de forma independente.

<tres-polvos-interativo></tres-polvos-interativo>

---

## As três marcas de todo objeto

Todo objeto — de um polvo a um celular — carrega três marcas:

| Marca | O que é | Exemplo |
|---|---|---|
| **Identidade** | O que o diferencia dos outros | Ada ≠ Ana ≠ Douglas |
| **Estado** | As características que carrega no momento | cor: Rosa, tentáculos: 8 |
| **Comportamento** | O que ele sabe fazer | nadar, dar pirueta, soltar tinta |

---

## De onde Ada veio?

Otto observa, interage, anota. Mas uma pergunta fica no ar:

*Quem definiu que Ada seria rosa? Que teria 8 tentáculos? Que saberia nadar?*

A resposta ainda é um mistério. A caixa preta ainda está fechada.

Isso você descobre na **Missão 5**.
`,
  exercise: {
    question: "Otto encontra dois polvos: Ada (rosa, 8 tentáculos) e Ana (azul, 6 tentáculos). Ele muda a cor de Ada para verde. O que acontece com Ana?",
    options: [
      "Ana também fica verde — objetos do mesmo tipo compartilham características.",
      "Ana continua azul — cada objeto guarda seus próprios dados de forma independente.",
      "Ana desaparece — só pode existir um polvo de cada vez.",
      "Ana perde todas as características — qualquer mudança afeta todos os objetos."
    ],
    correct: 1,
    explanation: "Cada objeto existe de forma independente. Mudar Ada não afeta Ana — cada um carrega seus próprios dados.",
    wrong_explanations: [
      "Não. Cada objeto é independente — tem seus próprios dados. Mudar Ada não afeta Ana em nada.",
      "",
      "Não. Vários objetos do mesmo tipo podem existir ao mesmo tempo. Ada e Ana são entidades separadas e independentes.",
      "Não. Mudar uma característica de Ada só afeta Ada. Ana é uma entidade independente com seus próprios dados intactos."
    ]
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
  has_interativo: false
};

export default missao;
