import type { Missao } from "../types";

const missao: Missao = {
  id: "1-3",
  title: "Atributos",
  icon: "PiTag",
  emblem: "Pintor(a) de Tentáculos",
  theory: `
## O que Ada carrega

Na missão anterior, Otto descobriu que todo objeto tem três marcas: <destaque-reto>identidade, características e ações</destaque-reto>.

Nesta missão, daremos enfoque especial às <destaque-marker>características</destaque-marker> de Ada que foram apresentadas anteriormente: ela é rosa, tem 8 tentáculos. Também vamos adicionar mais uma: ela mede 25 cm.

Vamos adicionar essas informações ao nosso caderno de campo? Ficaria assim:

{{ada-card-rotulado}}

Mas como o Python guarda isso? Se Otto precisasse descrever Ada *para um computador*, o que escreveria? 

Na missão anterior, vimos a forma como o Python guarda esses dados relacionados a Ada:

\`\`\`python-simplificado
ada = {
    "nome": "Ada",
    "cor": "rosa",
    "num_tentaculos": 8
}
\`\`\`

Atualizando com a nova característica:

\`\`\`python-simplificado
ada = {
    "nome": "Ada",
    "cor": "rosa",
    "num_tentaculos": 8,
    "tamanho_cm": 25     <-- nova característica adicionada
}
\`\`\`

Note que \`"rosa"\` é um texto e \`8\` é um número inteiro – cada atributo pode guardar um tipo diferente de dado.

Agora que já sabemos a estrutura que o Python entende, vamos aprender a nomear suas partes da maneira correta.

Cada um desses campos – 'nome', 'cor', 'num_tentaculos' e 'tamanho_cm' – tem um nome específico na POO: são os <destaque>atributos</destaque> de 'ada'. Cada atributo é um dado rotulado que pertence a esse objeto e guarda uma de suas características.


<conceito note="adapt. Phillips, 2015; Weisfeld, 2019"><strong>Atributo</strong>: dado rotulado que pertence a um objeto e representa seu estado em um momento específico.</conceito>

Ou seja: no momento atual, o objeto 'ada' possui o atributo 'cor' com o valor 'rosa' e o atributo 'num_tentaculos' com o valor '8'. Esses atributos são como campos que guardam informações sobre Ada – eles descrevem seu estado atual.

E por que estamos insistindo nessa palavra "atual"? Porque os atributos de um objeto podem mudar ao longo do tempo. Ada pode se camuflar e ficar transparente, ou crescer e passar a medir 30 cm. O que define Ada não é o valor específico de seus atributos, mas sim o fato de que ela tem esses atributos – e que eles podem evoluir.

{{duvida-atributo-variavel}}

---

## O ponto: acessando um atributo

Em Python, o ponto (\`.\`) é a forma de acessar um atributo de um objeto. É como Otto apontando para Ada e dizendo: *"me diga sua cor"*.

A estrutura é sempre a mesma:

\`\`\`pseudocodigo
objeto.atributo
\`\`\`

Veja como fica com Ada:

\`\`\`python
# print() — comando para exibir um valor na tela
print(ada.nome)            # exibido na tela: "Ada"
print(ada.cor)             # exibido na tela: "rosa"
print(ada.num_tentaculos)  # exibido na tela: 8
print(ada.tamanho_cm)      # exibido na tela: 25
\`\`\`

Cada linha pede um atributo diferente pelo nome. O Python vai até o objeto, encontra o dado e devolve o valor.

<ficha-acesso></ficha-acesso>

Em Python, é possível indicar o tipo esperado de cada atributo – você verá isso com detalhes quando chegarmos às classes.

---

## Cada objeto guarda os seus

No oceano há outros polvos. Ada não é a única.

Otto avista Caju – amarela, curiosa, menor que Ada. E mais adiante, Muriel – ciano, veloz, difícil de fotografar. Os três são polvos: mesma espécie, mesmo conjunto de atributos. Mas cada um carrega seus próprios valores.

{{tres-polvos-acesso}}

Ou seja, para acessar a cor de Caju, Otto escreve \`caju.cor\`. Para acessar a cor de Muriel, escreve \`muriel.cor\`. O ponto é o que conecta o nome do objeto ao nome do atributo. Ele é como um caminho que leva até o dado específico daquele objeto.

Se quiséssemos imprimir na tela usando Python, seria exatamente assim:


\`\`\`python
# print() — comando para exibir um valor na tela
print(ada.cor)    # impresso na tela: "rosa"
print(caju.cor)   # impresso na tela: "amarela"
print(muriel.cor) # impresso na tela: "ciano"
\`\`\`


---

## Atributos podem mudar

O estado de um objeto pode evoluir. Otto observa Ada se camuflando e atualiza o caderno:

{{animacao-camuflagem}}

O estado de Ada mudou – só o dela. Caju continua amarela. Muriel continua ciano. A <destaque>atribuição</destaque> – ato de dar um novo valor a um atributo – age sobre um objeto específico, nunca sobre todos ao mesmo tempo.

<conceito note="adapt. Weisfeld, 2019"><strong>Atribuição</strong>: operação que define ou modifica o valor de um atributo em um objeto específico.</conceito>

E no código, como funciona essa atribuição? Para mudar a cor de Ada para transparente, Otto escreve:

\`\`\`python
# atribuindo um novo valor ao atributo cor de ada
ada.cor = "transparente"
\`\`\`

Ou seja, para atribuir um novo valor a um atributo, usamos a mesma notação ponto (\`.\`), mas com o sinal de igual (\`=\`) para indicar que estamos definindo um novo valor. O Python entende que queremos atualizar o atributo 'cor' do objeto 'ada' para o novo valor 'transparente'.

Acessando o atributo depois da mudança:

\`\`\`python
# print() — comando para exibir um valor na tela
print(ada.cor)  # impresso na tela: "transparente"
\`\`\`

Agora, ao acessar \`ada.cor\`, o Python devolve "transparente". O estado de Ada mudou, mas os estados de Caju e Muriel permanecem inalterados. Cada objeto é independente – mudar um não afeta os outros.

{{duvida-quais-atributos}}
`,
  duvidas: {
    "duvida-atributo-variavel": {
      pergunta: "Atributo é a mesma coisa que variável?",
      resposta:
        "Quase – mas não exatamente. Uma variável é um nome que aponta para qualquer valor, em qualquer lugar do código. Um atributo é um dado que pertence a um objeto específico: ele vive dentro do objeto e só faz sentido junto a ele. Todo atributo se comporta como uma variável, mas uma variável solta não é um atributo.",
    },
    "duvida-quais-atributos": {
      pergunta:
        "O que define quais características e ações farão parte de um objeto?",
      resposta:
        "Essa decisão cabe ao modelador – ou seja, à pessoa que está criando aquele objeto. Ela decide o que é importante registrar e o que pode ser ignorado. Você verá isso em detalhes nas missões seguintes.",
    },
  },
  resumo: [
    "**Atributo** – dado rotulado que pertence a um objeto e guarda seu estado",
    "**Notação ponto** – `objeto.atributo` – como acessar um atributo em Python",
    "**Independência** – cada objeto guarda seus próprios valores; mudar um não afeta os outros",
    "**Atribuição** – `objeto.atributo = valor` – operação que define ou modifica o valor de um atributo",
    "**Mutação** – o valor de um atributo pode ser alterado; isso muda o estado do objeto",
  ],
  exercicio: {
    question:
      'Otto lê `ada.cor` e vê `"rosa"`. Em seguida escreve `caju.cor = "transparente"`. O que acontece com `ada.cor`?',
    options: [
      'Muda para `"transparente"` – objetos do mesmo tipo compartilham atributos.',
      'Continua `"rosa"` – cada objeto guarda seus próprios atributos.',
      "Fica indefinido – só um polvo pode ter cor definida por vez.",
      "Gera um erro – não é possível alterar atributos de objetos separados.",
    ],
    correct: 1,
    explanation:
      "Atributos pertencem a cada objeto individualmente. Mudar `caju.cor` não afeta `ada.cor` – são dados completamente independentes.",
    wrong_explanations: [
      "Não. Atributos são independentes por objeto. Mudar `caju.cor` só afeta Caju – Ada mantém seus próprios dados intactos.",
      "",
      "Não. Vários objetos podem ter o mesmo atributo definido ao mesmo tempo. Ada e Caju são entidades independentes, cada uma com sua própria `cor`.",
      'Não. Alterar o atributo de um objeto nunca afeta o de outro. `caju.cor = "transparente"` é válido e só modifica Caju.',
    ],
  },
  exercicios: [
    {
      id: '1-3-e1',
      question: 'Na POO, um atributo é:',
      options: [
        'Uma ação que o objeto sabe executar',
        'Uma função externa que acessa os dados do objeto',
        'O tipo de dado que o objeto representa',
        'Uma informação que pertence especificamente a um objeto',
      ],
      correct: 3,
      explanation: 'Atributo é um dado que pertence ao objeto — uma característica sua. Cor, tamanho, nome: cada informação registrada sobre um objeto é um atributo.',
      wrong_explanations: [
        'Não. Ações são o que o objeto sabe fazer. Atributo é outra coisa — pense no que Otto registrou no caderno sobre Ada.',
        'Não. Um atributo não é uma função externa. Ele pertence ao próprio objeto e descreve uma característica sua.',
        'Não. O tipo do objeto é uma questão de implementação. Atributo é algo mais concreto — uma informação que o objeto carrega.',
        '',
      ],
    },
    {
      id: '1-3-e2',
      question: 'Em Python, a sintaxe `objeto.atributo` serve para:',
      options: [
        'Acessar uma informação que pertence a esse objeto',
        'Criar um novo objeto do tipo `atributo`',
        'Chamar uma função chamada `atributo`',
        'Comparar dois objetos entre si',
      ],
      correct: 0,
      explanation: 'O ponto é a forma de acessar um atributo de um objeto — como apontar para ele e dizer: "me dê essa informação". A estrutura é sempre `objeto.atributo`.',
      wrong_explanations: [
        '',
        'Não. `objeto.atributo` não cria nada — é uma forma de acessar algo que já existe dentro do objeto.',
        'Não. Chamar uma função usaria parênteses: `objeto.atributo()`. Sem parênteses, estamos acessando um dado, não executando uma ação.',
        'Não. Para comparar objetos usaríamos operadores como `==`. O ponto acessa uma informação de dentro do objeto.',
      ],
    },
    {
      id: '1-3-e3',
      question: "Ada começa com `cor = 'rosa'`. Otto observa ela se camuflando e atualiza: `ada.cor = 'transparente'`. O que essa mudança representa?",
      options: [
        'Ada virou um objeto diferente — mudar um atributo cria uma nova entidade',
        'Ada perdeu sua identidade ao alterar a cor',
        'O estado de Ada mudou, mas ela continua sendo a mesma entidade',
        'Atributos não podem ser alterados depois que o objeto é criado',
      ],
      correct: 2,
      explanation: 'Mudar um atributo altera o estado do objeto, não a sua identidade. Ada continua sendo Ada — a mesma entidade. O que mudou foi apenas o valor de `cor`.',
      wrong_explanations: [
        'Não. Mudar um atributo não cria uma nova entidade — Ada continua ocupando o mesmo espaço na memória.',
        'Não. Identidade não depende dos valores dos atributos. Ada é Ada independentemente da cor que tiver.',
        '',
        'Não. Atributos podem ser alterados a qualquer momento — a missão mostra exatamente isso acontecendo com Ada.',
      ],
    },
    {
      id: '1-3-e4',
      question: 'Para atualizar o atributo `velocidade` do objeto `carro` para `120`, a sintaxe correta é:',
      options: [
        '`carro.velocidade = 120`',
        '`velocidade.carro = 120`',
        '`set(carro, velocidade, 120)`',
        '`carro[velocidade] = 120`',
      ],
      correct: 0,
      explanation: 'A notação ponto serve tanto para leitura (`carro.velocidade`) quanto para atribuição (`carro.velocidade = 120`). A estrutura é a mesma: `objeto.atributo = novo_valor`.',
      wrong_explanations: [
        '',
        'Não. A ordem importa: primeiro vem o objeto, depois o atributo. `velocidade.carro` inverte essa lógica.',
        'Não. Python não usa uma função `set()` para isso. A atribuição de atributos segue a notação ponto.',
        'Não. Colchetes são usados para acessar itens de listas e dicionários, não atributos de objetos.',
      ],
    },
    {
      id: '1-3-e5',
      question: 'Considerando um objeto `celular`, qual dos itens abaixo representa um atributo?',
      options: [
        '`ligar()` — uma ação que o celular sabe executar',
        '`tirar_foto()` — um comportamento do celular',
        '`bateria` — uma informação que descreve o estado do celular',
        'O celular em si — a entidade completa',
      ],
      correct: 2,
      explanation: 'Atributos são informações — dados que descrevem o estado do objeto. Ações como `ligar()` e `tirar_foto()` são outra coisa. `bateria`, `modelo`, `cor` são exemplos de atributos.',
      wrong_explanations: [
        'Não. `ligar()` tem parênteses — é uma ação que o celular executa, não uma informação que ele carrega.',
        'Não. `tirar_foto()` também é uma ação. Atributo é um dado que descreve o estado do objeto, não algo que ele faz.',
        '',
        'Não. O celular inteiro é o objeto — não um dos seus atributos. Atributo é uma informação específica que ele carrega.',
      ],
    },
    {
      id: '1-3-e6',
      question: 'O valor de um atributo pode ser alterado depois que o objeto foi criado?',
      options: [
        'Não — atributos são fixos após a criação do objeto',
        'Sim, porém apenas atributos do tipo texto podem ser alterados',
        'Sim — o estado de um objeto pode evoluir ao longo do tempo',
        'Apenas se o objeto for completamente recriado com novos valores',
      ],
      correct: 2,
      explanation: 'O estado de um objeto pode evoluir. Basta usar a notação ponto: `objeto.atributo = novo_valor`. Só esse objeto é afetado — os demais continuam com os seus próprios valores.',
      wrong_explanations: [
        'Não. A missão mostra Ada mudando de cor. Atributos não são fixos — o estado de um objeto pode evoluir.',
        'Não. Qualquer tipo de atributo pode ser alterado — não só texto. Números, booleanos, qualquer valor.',
        '',
        'Não. Não é necessário recriar o objeto. Basta usar a notação ponto para atribuir um novo valor.',
      ],
    },
  ],
  has_minigame: false,
  references: [
    {
      author: "Phillips, D.",
      year: 2015,
      title: "Python 3 Object-Oriented Programming",
      location: "Cap. 1, p. 6",
      note: "Atributo como dado individual do objeto; instâncias do mesmo tipo têm o mesmo atributo, cada uma com seu próprio valor.",
    },
    {
      author: "Weisfeld, M.",
      year: 2019,
      title: "The Object-Oriented Thought Process",
      location: "Cap. 1, p. 10",
      note: "Atributos como representação do estado do objeto.",
    },
    {
      author: "Kölling, M.; Quig, B.; Patterson, A.; Rosenberg, J.",
      year: 2003,
      title: "The BlueJ System and Its Pedagogy",
      location: "Journal of Computer Science Education, Vol. 13, No. 4",
      note: "Princípio Objects First: objetos do mesmo tipo têm os mesmos atributos, mas valores independentes.",
    },
  ],
};

export default missao;
