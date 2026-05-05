import type { Missao } from '../types';

const missao: Missao = {
  id: "1-1",
  title: "O que é a Programação Orientada a Objetos?",
  icon: "🧩",
  theory: `
## Olhe ao seu redor

Cadeira. Celular. Cachorro. Caneta.

Todo objeto do mundo real tem duas coisas:

1. **Características** — como ele *é* (cor, nome, tamanho, peso...)
2. **Comportamentos** — o que ele *faz* (latir, carregar, rolar, escrever...)

A **Programação Orientada a Objetos (POO)** usa exatamente essa lógica para organizar programas: em vez de uma lista enorme de instruções soltas, você cria **objetos** que imitam coisas do mundo real — cada um com suas próprias características e comportamentos.

---

## O problema que a POO resolve

Antes da POO, programar um sistema com vários animais ficava assim:

\`\`\`python
# Sem POO — tudo solto, impossível de organizar
nome_cachorro1 = "Rex"
idade_cachorro1 = 3
nome_cachorro2 = "Bolt"
idade_cachorro2 = 5

# Para 2 cachorros já confunde. Para 100? Um pesadelo.
print(nome_cachorro1 + " tem " + str(idade_cachorro1) + " anos")
print(nome_cachorro2 + " tem " + str(idade_cachorro2) + " anos")
\`\`\`

Com POO, tudo que pertence a um cachorro fica junto dentro de um **objeto Cachorro**:

\`\`\`python
# Com POO — organizado como uma gaveta com etiqueta
cachorro1 = Cachorro("Rex", 3)
cachorro2 = Cachorro("Bolt", 5)

cachorro1.apresentar()  # Rex tem 3 anos
cachorro2.apresentar()  # Bolt tem 5 anos
# 100 cachorros? Só mais linhas iguais a essas.
\`\`\`

Você ainda não sabe escrever esse código — mas vai aprender em cada missão deste nível!

---

## Os três ingredientes da POO

Toda a POO é construída sobre três ideias. Pense em biscoitos:

| Ingrediente | O que é | Analogia do biscoito |
|---|---|---|
| **Classe** | O molde, a receita | A forma de cortar a massa |
| **Objeto** | O produto criado | O biscoito em si |
| **Método** | O que o objeto faz | Comer, decorar, guardar o biscoito |

Cada missão deste nível explora um desses ingredientes em detalhe.

---

## POO está em todo lugar

- Em **jogos**: cada personagem, inimigo e item é um objeto
- Em **apps de banco**: cada conta e transação é um objeto
- Em **redes sociais**: cada post, comentário e perfil é um objeto

> **Resumindo:** POO é uma forma de programar que organiza o código em objetos com características e comportamentos — igualzinho ao mundo real.
`,
  exercise: {
    question: "Qual das alternativas melhor define a Programação Orientada a Objetos?",
    options: [
      "Uma sequência linear de instruções que o computador executa.",
      "Um paradigma que organiza o software em torno de objetos com atributos e métodos.",
      "Uma linguagem de programação específica como Python ou Java.",
      "Um método exclusivo para criar interfaces gráficas."
    ],
    correct: 1,
    explanation: "Correto! POO é um paradigma que organiza o código em objetos com atributos (dados) e métodos (comportamentos)."
  },
  has_interativo: true,
  interativo_html: "interativos/nivel_1_missao_1.html"
};

export default missao;
