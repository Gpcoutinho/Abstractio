import type { Missao } from '../types';

const missao: Missao = {
  id: "1-4",
  title: "Métodos",
  icon: "PiGear",
  emblem: "Coreógrafo(a) de Polvos",
  theory: `
## Ada tem ações

Na missão anterior, Otto mergulhou nas <destaque-reto>características</destaque-reto> de Ada – cor, número de tentáculos, tamanho. Aprendeu a lê-las, a atualizá-las, a entender que cada polvo guarda os seus próprios valores.

Mas na missão 2, quando Otto descreveu os três elementos de todo objeto, havia um terceiro que ficou esperando:

| Elemento | O que é | Ada |
|---|---|---|
| **Identidade** | O que a torna única | Ada é uma entidade única |
| **Características** | Os dados que carrega | cor: rosa, tentáculos: 8 |
| **Ações** | O que ela sabe fazer | nadar, camuflar, soltar tinta... |

Otto estudou características a fundo. Agora é a vez das <destaque-marker>ações</destaque-marker>.

Na POO, as ações que um objeto sabe executar têm um nome: <destaque>métodos</destaque>.

<conceito note="adapt. Phillips, 2015; Weisfeld, 2019"><strong>Método</strong>: ação que um objeto sabe executar, com acesso direto aos seus próprios atributos.</conceito>

{{ada-card-metodos}}

O card de Ada agora mostra dois blocos: atributos acima, métodos abaixo. Os atributos descrevem *o que ela é*. Os métodos descrevem *o que ela faz*.

---

## Definindo um método em Python

Otto sabe que Ada nada. Mas como o Python sabe disso? Alguém precisou ensinar Ada a nadar – e fazer isso tem uma sintaxe específica.

Aqui está como um método é definido em Python:

\`\`\`python-simplificado
def nadar(self):
    print(f"{self.nome} está nadando!")
\`\`\`

Cada parte tem um papel:

| Parte | O que significa |
|---|---|
| \`def\` | "aqui começa a definição de um método" |
| \`nadar\` | o nome da ação |
| \`self\` | referência ao próprio objeto – para \`ada.nadar()\`, \`self\` é \`ada\` |
| corpo indentado | o que acontece quando o método é chamado |

O \`self\` é o ponto-chave. Ele é o que permite que o método diga \`self.nome\`, \`self.cor\`, \`self.num_tentaculos\` – acessando os atributos do objeto de dentro da ação. Sem ele, o método não saberia de qual polvo estava falando.

{{duvida-self-passado}}

Mas na chamada, você não passa \`self\`:

\`\`\`python-simplificado
ada.nadar()  # Ada está nadando!
\`\`\`

Ao usar \`ada.nadar()\`, Python já sabe que \`self = ada\` – e passa-o sozinho. Você nunca precisa incluí-lo na chamada.

---

## Tipos de método

Com a sintaxe clara, Otto observa que os métodos de Ada fazem coisas diferentes. Há quatro padrões principais.

{{duvida-metodo-funcao}}

### Age – executa e não muda nada

O mais simples: o método faz algo – imprime uma mensagem, produz um efeito – sem alterar nenhum atributo e sem devolver nada.

\`\`\`python-simplificado
def soltar_tinta(self):
    print("Ada liberou uma nuvem de tinta!")
\`\`\`

Chamada e resultado:

\`\`\`python-simplificado
ada.soltar_tinta()  # Ada liberou uma nuvem de tinta!
\`\`\`

\`nadar()\` segue o mesmo padrão: age, não altera, não devolve.

---

### Modifica o estado – altera um atributo

Aqui o método acessa um atributo via \`self\` e atualiza seu valor. O estado do objeto muda.

\`\`\`python-simplificado
def camuflar(self):
    self.cor = "transparente"
\`\`\`

Otto confirma antes e depois:

\`\`\`python-simplificado
print(ada.cor)  # "rosa"
ada.camuflar()
print(ada.cor)  # "transparente"
\`\`\`

Sem que Otto escrevesse nada no caderno – Ada agiu por conta própria.

---

### Com parâmetro – precisa de informação externa

Algumas ações dependem de dados que vêm de fora. Otto não diz apenas *"capture"* – ele aponta a presa. Esse dado extra entra como <destaque>parâmetro</destaque>.

\`\`\`python-simplificado
def capturar_presa(self, presa):
    print(f"{self.nome} capturou um(a) {presa}!")
\`\`\`

Chamada:

\`\`\`python-simplificado
ada.capturar_presa("caranguejo")  # Ada capturou um(a) caranguejo!
\`\`\`

O parâmetro \`presa\` aparece após \`self\` no \`def\` e recebe o valor passado na chamada.

---

### Devolve um valor – \`__str__\`

Alguns métodos *respondem* com uma informação. O principal exemplo em Python é o \`__str__\`: define como o objeto se apresenta quando impresso.

\`\`\`python-simplificado
def __str__(self):
    return f"{self.nome} | cor: {self.cor} | tentáculos: {self.num_tentaculos}"
\`\`\`

A palavra \`return\` diz ao Python: *"devolva este valor para quem chamou"*. Aqui, devolve uma string com os dados de Ada.

O especial de \`__str__\` é que Python o chama automaticamente quando você usa \`print()\` sobre o objeto:

\`\`\`python-simplificado
print(ada)  # Ada | cor: rosa | tentáculos: 8
\`\`\`

Não foi preciso chamar \`ada.__str__()\` – \`print(ada)\` já fez isso.

{{duvida-str-quando}}

---

## O que vem a seguir

Otto já sabe o que Ada faz e como essas ações são descritas em Python. Mas ainda há uma pergunta sem resposta: *quem ensinou Ada a nadar? Quem definiu que ela teria cor, tentáculos e saberia se camuflar?*

Isso você descobre na **Missão 5**.
`,
  duvidas: {
    "duvida-self-passado": {
      pergunta: "Por que `self` aparece no `def` mas não na chamada?",
      resposta: "Python faz isso automaticamente. Quando você escreve `ada.nadar()`, o Python já sabe que `self = ada` e passa sozinho. Você não precisa – e não deve – passá-lo na chamada.",
    },
    "duvida-metodo-funcao": {
      pergunta: "Método e função são a mesma coisa?",
      resposta: "Quase. Função existe sozinha, fora de qualquer objeto. Método vive dentro de um objeto e, graças ao `self`, já conhece os atributos desse objeto sem que ninguém os passe.",
    },
    "duvida-str-quando": {
      pergunta: "Quando exatamente o Python chama `__str__`?",
      resposta: "Toda vez que você usa `print(objeto)` ou `str(objeto)`. Python chama `__str__` automaticamente – você não precisa escrever `ada.__str__()` diretamente.",
    },
  },
  resumo: [
    "**Método** – ação que um objeto sabe executar, com acesso direto aos seus próprios atributos",
    "**`def`** – palavra-chave que inicia a definição de um método em Python",
    "**`self`** – referência ao próprio objeto dentro do método; Python passa automaticamente na chamada",
    "**Parâmetro** – informação extra que o método precisa receber para agir",
    "**`__str__`** – método especial que define como o objeto se apresenta quando impresso com `print()`",
  ],
  exercicio: {
    question: "Otto escreve `print(ada)` e vê `Ada | cor: rosa | tentáculos: 8` na tela. O que aconteceu?",
    options: [
      "`print()` formatou o objeto automaticamente – Python sabe como exibir qualquer objeto.",
      "Otto precisaria ter escrito `print(ada.__str__())` – `print()` não chama métodos sozinho.",
      "Python chamou `__str__()` automaticamente – `print(objeto)` sempre busca esse método.",
      "O resultado veio dos atributos diretamente – `print()` lê `ada.nome`, `ada.cor` e monta a string.",
    ],
    correct: 2,
    explanation: "Quando você usa `print()` sobre um objeto, Python chama `__str__()` automaticamente. É o método que define como o objeto se apresenta ao ser impresso. Se `__str__` não existir, Python exibe algo como `<__main__.Polvo object at 0x...>` – funcional, mas sem utilidade para quem lê o resultado.",
  },
  exercicios: [
    {
      id: '1-4-e1',
      question: 'Na POO, um método é:',
      options: [
        'Uma ação que o objeto sabe executar, com acesso direto aos seus próprios atributos',
        'Um dado que o objeto armazena, como cor ou tamanho',
        'Uma função independente que processa dados externos',
        'Um tipo especial de atributo que guarda o estado do objeto',
      ],
      correct: 0,
      explanation: 'Método é a ação do objeto – o que ele sabe fazer. Diferente de um atributo (que descreve o que ele é), o método descreve o que ele faz, e tem acesso aos atributos do próprio objeto via self.',
      wrong_explanations: [
        '',
        'Não. Dados armazenados são atributos – como ada.cor ou ada.num_tentaculos. Método é outra coisa: é a ação que o objeto sabe executar.',
        'Não. Função e método têm uma diferença importante. Método vive dentro de um objeto e, graças ao self, conhece os atributos desse objeto. Função existe solta, sem esse vínculo.',
        'Não. Atributos guardam o estado. Métodos são as ações que o objeto sabe executar – como nadar() ou camuflar().',
      ],
    },
    {
      id: '1-4-e2',
      question: 'Em Python, o `self` em um método serve para:',
      options: [
        'Passar o nome do método para o Python durante a execução',
        'Indicar que o método não precisa de parâmetros',
        'Definir o tipo de dado que o método vai retornar',
        'Referenciar o próprio objeto, dando acesso aos seus atributos dentro do método',
      ],
      correct: 3,
      explanation: 'O self é a referência ao próprio objeto. É ele que permite que o método acesse self.cor, self.nome, self.num_tentaculos – os dados do objeto de dentro da ação. Sem self, o método não saberia de qual polvo estava falando.',
      wrong_explanations: [
        'Não. self não é sobre o nome do método – é sobre o objeto em si. É a referência que conecta o método aos dados do objeto.',
        'Não. self não indica ausência de parâmetros. Um método pode ter self e ainda receber outros parâmetros, como em capturar_presa(self, presa).',
        'Não. O tipo de retorno não é declarado em Python – o return determina o valor devolvido. self é outra coisa: é quem conecta o método ao objeto.',
        '',
      ],
    },
    {
      id: '1-4-e3',
      question: 'Otto define `def nadar(self)` e chama `ada.nadar()`. Por que `self` não aparece na chamada?',
      options: [
        'Porque `self` é opcional e pode ser omitido sempre que o método não usa atributos',
        'Porque `self` só existe na definição – na prática, o Python o ignora',
        'Porque Python passa `self` automaticamente ao identificar que `ada` é o objeto da chamada',
        'Porque `nadar()` não recebe parâmetros, e `self` nunca conta como parâmetro real',
      ],
      correct: 2,
      explanation: 'Quando você escreve ada.nadar(), o Python já sabe que self = ada e faz essa passagem automaticamente. Você não precisa – e não deve – incluir self na chamada.',
      wrong_explanations: [
        'Não. self não é opcional – ele sempre deve estar no def. O que acontece é que o Python o passa sozinho na chamada, então você não precisa incluí-lo.',
        'Não. self é fundamental – sem ele, o método não teria como acessar self.cor, self.nome e demais atributos. O Python só dispensa que você o passe explicitamente na chamada.',
        '',
        'Não. self é sempre um parâmetro – só que o Python o recebe e preenche automaticamente. Você pode ter outros parâmetros além de self, como em capturar_presa(self, presa).',
      ],
    },
    {
      id: '1-4-e4',
      question: "Otto escreve `ada.camuflar()` e logo depois `print(ada.cor)` exibe `'transparente'`. Isso indica que `camuflar()` é um método que:",
      options: [
        'Devolve o novo valor de cor como resultado da chamada',
        'Modifica o estado do objeto, alterando o valor de um atributo via `self`',
        'Age sobre o objeto sem alterar nenhum atributo',
        'Cria um novo objeto Ada com cor transparente',
      ],
      correct: 1,
      explanation: 'camuflar() acessa self.cor e atualiza seu valor. Isso é um método que modifica o estado: age sobre os dados do próprio objeto, alterando-os. O estado de Ada mudou – só o dela.',
      wrong_explanations: [
        'Não. camuflar() não usa return – ele não devolve nada. O que muda é o estado interno do objeto, não um valor retornado.',
        '',
        'Não. Se não alterasse nada, print(ada.cor) continuaria exibindo "rosa". Como exibiu "transparente", o método claramente modificou o atributo.',
        'Não. O mesmo objeto Ada foi modificado – não foi criado outro. Mudar um atributo não cria uma nova entidade.',
      ],
    },
    {
      id: '1-4-e5',
      question: 'Na definição `def capturar_presa(self, presa)`, o que representa `presa`?',
      options: [
        'Um atributo do objeto Ada que guarda a última presa capturada',
        'Uma cópia de `self` usada internamente pelo método',
        'O nome do objeto que vai chamar o método',
        'Uma informação extra que o método precisa receber de fora para executar sua ação',
      ],
      correct: 3,
      explanation: 'presa é um parâmetro – uma informação que vem de fora do objeto. Na chamada ada.capturar_presa("caranguejo"), o valor "caranguejo" é passado e o método o recebe como presa. Sem esse dado externo, o método não saberia o que capturar.',
      wrong_explanations: [
        'Não. Se presa fosse um atributo, seria acessado como self.presa. Parâmetro é diferente: é informação que vem de fora, passada na chamada.',
        'Não. self já é a referência ao objeto – não há cópia dele. presa é algo diferente: o dado externo que o método precisa para agir.',
        'Não. O objeto que chama o método é representado por self, não por presa. presa é o dado extra que a ação precisa receber.',
        '',
      ],
    },
    {
      id: '1-4-e6',
      question: 'Para que serve o método `__str__` em um objeto Python?',
      options: [
        'Para definir como o objeto se apresenta ao ser passado para `print()`',
        'Para comparar dois objetos e verificar se são iguais',
        'Para converter os atributos do objeto em variáveis locais',
        'Para inicializar os atributos do objeto no momento da criação',
      ],
      correct: 0,
      explanation: 'O __str__ define a representação textual do objeto. Quando você usa print(ada), Python chama __str__ automaticamente e exibe o que o método retorna. Sem ele, print(ada) mostraria algo como <__main__.Polvo object at 0x...>.',
      wrong_explanations: [
        '',
        'Não. Comparar objetos é papel do __eq__. O __str__ trata apenas da representação textual – como o objeto se descreve quando impresso.',
        'Não. __str__ não cria variáveis locais. Ele usa return para devolver uma string que descreve o objeto.',
        'Não. Inicializar atributos é o papel do __init__, que você verá na próxima missão. O __str__ cuida apenas de como o objeto se apresenta ao ser impresso.',
      ],
    },
  ],
  has_minigame: false,
  references: [
    {
      author: "Phillips, D.",
      year: 2015,
      title: "Python 3 Object-Oriented Programming",
      location: "Cap. 1, p. 7; Cap. 2, p. 30",
      note: "Métodos como comportamentos do objeto com acesso direto aos seus dados; explicação de self e por que não é passado na chamada.",
    },
    {
      author: "Weisfeld, M.",
      year: 2019,
      title: "The Object-Oriented Thought Process",
      location: "Cap. 1, p. 11",
      note: "Comportamento do objeto como o que ele sabe fazer; métodos como a representação OO desse comportamento.",
    },
    {
      author: "Kölling, M.; Quig, B.; Patterson, A.; Rosenberg, J.",
      year: 2003,
      title: "The BlueJ System and Its Pedagogy",
      location: "Journal of Computer Science Education, Vol. 13, No. 4",
      note: "Objetos manipulados por operações (métodos) que alteram seu estado; algumas operações retornam informações sobre o estado.",
    },
  ],
};

export default missao;
