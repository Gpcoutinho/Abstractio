import type { Missao } from "../types";

const missao: Missao = {
  id: "1-3",
  title: "Atributos",
  icon: "PiTag",
  emblem: "Pintor(a) de Tentáculos",
  theory: `
## Otto abre o caderno

Na missão anterior, Otto descobriu que todo objeto tem três marcas: <destaque-reto>identidade, características e ações</destaque-reto>.

Nesta missão, daremos enfoque especial às <destaque-marker>características</destaque-marker> de Ada que foram apresentadas anteriormente: ela é rosa, tem 8 tentáculos. Também vamos adicionar mais uma: ela mede 25 cm.

Vamos adicionar essas informações ao nosso caderno de campo? Ficaria assim:

{{ada-card-rotulado}}

Mas como o Python guarda isso? Se Otto precisasse descrever Ada *para um computador*, o que escreveria? Na missão anterior, vimos a forma como o Python guarda esses dados relacionados a Ada:

\`\`\`python-simplificado
ada = {"cor": "rosa", "num_tentaculos": 8}
\`\`\`

Agora que já sabemos a estrutura que o Python entende, vamos aprender a nomear suas partes da maneira correta.

Esse bloco completo ada = {"cor": "rosa", "num_tentaculos": 8} é o <destaque-reto>objeto</destaque-reto>, que possui rótulo 'ada'. Dentro dele, há rótulos menores – 'cor' e 'num_tentaculos' – que guardam as <destaque-marker>características</destaque-marker> de Ada (rosa, 8 tentáculos). Na POO, esses dados rotulados que pertencem a um objeto têm um nome específico: são os <destaque>atributos</destaque> de 'ada'.


<conceito note="adapt. Phillips, 2015; Weisfeld, 2019"><strong>Atributo</strong>: dado rotulado que pertence a um objeto e representa seu estado em um momento específico.</conceito>

Ou seja: no momento atual, o objeto 'ada' possui o atributo 'cor' com o valor 'rosa' e o atributo 'num_tentaculos' com o valor '8'. Esses atributos são como campos que guardam informações sobre Ada – eles descrevem seu estado atual.

E por que estamos insistindo nessa palavra "atual"? Porque os atributos de um objeto podem mudar ao longo do tempo. Ada pode se camuflar e ficar transparente, ou crescer e passar a medir 30 cm. O que define Ada não é o valor específico de seus atributos, mas sim o fato de que ela tem esses atributos – e que eles podem evoluir.

{{duvida-atributo-variavel}}

---

## O ponto

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

---

## Cada objeto guarda os seus

No oceano há outros polvos. Ada não é a única.

Otto avista Caju – amarela, curiosa, menor que Ada. E mais adiante, Muriel – ciano, veloz, difícil de fotografar. Os três são polvos: mesma espécie, mesmo conjunto de atributos. Mas cada um carrega seus próprios valores.

\`\`\`python
# print() — comando para exibir um valor na tela
print(ada.cor)    # impresso na tela: "rosa"
print(caju.cor)   # impresso na tela: "amarela"
print(muriel.cor) # impresso na tela: "ciano"
\`\`\`

Mudar a cor de Ada não afeta Caju. Mudar Caju não afeta Muriel. Ou seja: os atributos de um objeto existem de forma isolada – o que acontece com um não contamina os outros.

---

## Atributos podem mudar

O estado de um objeto pode evoluir. Otto observa Ada se camuflando e atualiza o caderno:

\`\`\`python
# atribuindo um novo valor ao atributo cor de ada
ada.cor = "transparente"
\`\`\`

Agora:

\`\`\`python
# print() — comando para exibir um valor na tela
print(ada.cor)  # impresso na tela: "transparente"
\`\`\`

O estado de Ada mudou – só o dela. Caju continua amarela. Muriel continua ciano. A atribuição age sobre um objeto específico, nunca sobre todos ao mesmo tempo.

<ficha-interativo></ficha-interativo>

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
    "**Mutação** – o valor de um atributo pode ser alterado; isso muda o estado do objeto",
  ],
  exercise: {
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
  extra_exercises: [
    {
      id: "1-3-e1",
      question:
        "Para acessar o atributo `nome` do objeto `ada`, qual é a sintaxe correta em Python?",
      options: ["`ada.nome`", "`nome.ada`", "`ada[nome]`", "`get(ada, nome)`"],
      correct: 0,
      explanation:
        "Em Python, atributos são acessados com a notação ponto: `objeto.atributo`. Para ler o nome de `ada`, escrevemos `ada.nome`.",
    },
    {
      id: "1-3-e2",
      question:
        'Caju tem `cor = "amarela"` e Muriel tem `cor = "ciano"`. O que isso demonstra sobre atributos?',
      options: [
        "Objetos do mesmo tipo não podem ter o mesmo atributo.",
        "O último valor atribuído substitui os anteriores em todos os objetos.",
        "Cada objeto guarda seus próprios valores – mesma estrutura, dados independentes.",
        "Atributos só existem enquanto o objeto está sendo criado.",
      ],
      correct: 2,
      explanation:
        "Caju e Muriel são polvos – têm os mesmos atributos (inclusive `cor`). Mas cada uma carrega seu próprio valor. Mudar `caju.cor` não afeta `muriel.cor` e vice-versa.",
    },
    {
      id: "1-3-e3",
      question:
        "Qual código atribui o valor `120` ao atributo `velocidade` do objeto `moto`?",
      options: [
        "`velocidade.moto = 120`",
        "`moto[velocidade] = 120`",
        "`set moto.velocidade = 120`",
        "`moto.velocidade = 120`",
      ],
      correct: 3,
      explanation:
        "A notação ponto funciona tanto para leitura (`moto.velocidade`) quanto para atribuição (`moto.velocidade = 120`). É como atualizar um campo que pertence especificamente àquele objeto.",
    },
    {
      id: "1-3-e4",
      question:
        'Otto escreve `ada.cor = "transparente"`. O que aconteceu com Ada?',
      options: [
        "Ada foi substituída por um novo objeto com cor transparente.",
        "O estado de Ada mudou – o atributo `cor` agora guarda um novo valor.",
        "Todos os polvos ficaram transparentes.",
        "O atributo `cor` foi apagado de Ada.",
      ],
      correct: 1,
      explanation:
        "Atribuir um novo valor a `ada.cor` muda o estado de Ada naquele momento. O objeto continua o mesmo – o que mudou foi o dado guardado naquele atributo.",
    },
    {
      id: "1-3-e5",
      question: "Qual afirmação sobre atributos está INCORRETA?",
      options: [
        "Um atributo pode guardar qualquer tipo de dado: número, texto, lista, etc.",
        "Dois objetos da mesma espécie compartilham os valores dos seus atributos automaticamente.",
        "Atributos são acessados usando a notação ponto.",
        "O valor de um atributo pode mudar após o objeto ser criado.",
      ],
      correct: 1,
      explanation:
        "Atributos de cada objeto são independentes. `ada.cor` e `caju.cor` são campos distintos – alterar um não afeta o outro. As outras afirmativas são verdadeiras.",
    },
    {
      id: "1-3-e6",
      question:
        "Otto lê `ada.num_tentaculos` e obtém `8`. Em seguida lê `caju.num_tentaculos` e obtém `8` também. Isso significa que Ada e Caju são o mesmo objeto?",
      options: [
        "Sim – dois objetos com os mesmos valores são idênticos.",
        "Sim – atributos iguais indicam que compartilham memória.",
        "Não – objetos diferentes podem ter os mesmos valores sem serem o mesmo objeto.",
        "Não – isso indica um erro no código.",
      ],
      correct: 2,
      explanation:
        "Dois objetos distintos podem ter valores idênticos nos atributos e ainda assim serem entidades completamente separadas. Como vimos na missão anterior: `==` compara dados, `is` compara identidade.",
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
