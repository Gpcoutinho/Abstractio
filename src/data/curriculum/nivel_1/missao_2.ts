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
  resumo: [
    "**Objeto** – entidade que reúne, de forma inseparável, características e ações",
    "**Identidade** – cada objeto existe de forma única na memória, distinguível de qualquer outro",
    "**Características** – os dados que o objeto carrega",
    "**Ações** – o que o objeto sabe executar",
    "**Caixa preta** – você pode observar e interagir com um objeto sem conhecer seus detalhes internos",
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
