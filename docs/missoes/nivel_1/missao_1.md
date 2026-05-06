# Missão 1-1 — O que é POO?

**Ícone:** 🧩
**Pontos:** 15

## Teoria

## Olhe ao seu redor

Cadeira. Celular. Cachorro. Caneta.

Todo objeto do mundo real tem duas coisas em comum:

- **Características** — como ele *é* (cor, nome, tamanho, peso...)
- **Comportamentos** — o que ele *faz* (latir, carregar, rolar, escrever...)

> [svg: três cards lado a lado — Cachorro, Celular e Carro — cada um com fundo escuro e borda roxa. Cada card tem o nome em roxo claro no topo, um emoji no centro, uma linha separadora, atributos listados em cinza abaixo (ex: nome, raça, idade) e métodos em verde (ex: latir(), buscar()). Os cards aparecem com animação de fade+slide para cima em sequência. Legenda: "Características em roxo · comportamentos em verde".]

A **Programação Orientada a Objetos (POO)** usa exatamente essa lógica para organizar programas: em vez de uma lista enorme de instruções soltas, você cria **objetos** que imitam coisas do mundo real — cada um com seus próprios dados e ações.

---

## O problema que a POO resolve

Antes da POO, programar um sistema com vários animais ficava assim — **variáveis soltas, impossível de organizar:**

```python
nome_cachorro1 = "Rex"
idade_cachorro1 = 3
nome_cachorro2 = "Bolt"
idade_cachorro2 = 5
nome_cachorro3 = "Mia"
idade_cachorro3 = 2
```

Para 3 cachorros já confunde. Para 100? Um pesadelo.

> [svg: comparação lado a lado — painel esquerdo vermelho escuro "❌ Sem POO" listando as variáveis soltas do código acima; seta roxa no centro; painel direito verde escuro "✓ Com POO" mostrando três cards compactos (rex, bolt, mia) cada um com nome e idade organizados. Legenda: "Variáveis soltas vs. objetos organizados".]

Com POO, tudo que pertence a um cachorro fica junto dentro de um **objeto Cachorro**. A estrutura é sempre a mesma — só os dados mudam.

---

## Os três ingredientes da POO

Toda a POO é construída sobre três ideias. Pense em biscoitos:

| Ingrediente | O que é | Analogia do biscoito |
|---|---|---|
| **Classe** | O molde, a receita | A forma de cortar a massa |
| **Objeto** | O produto criado | O biscoito em si |
| **Método** | O que o objeto faz | Comer, decorar, guardar |

Cada missão deste nível explora um desses ingredientes em detalhe.

---

## No oceano do Polvinho

> [svg: cena submarina escura com o Polvinho roxo à esquerda (corpo oval, 6 tentáculos com animação de ondulação individual, olhos brancos com pupilas escuras), bolhas subindo animadas, e à direita um bloco de código mostrando `polvo = CriaturaMarina("Polvinho", tentaculos=8)` e `polvo.explorar()`. Fundo com gradiente do azul marinho para azul mais escuro.]

Polvinho vive num oceano repleto de criaturas — polvos, baleias, peixes, corais. Cada ser tem características únicas e comportamentos próprios. Para explorar e entender tudo isso sem se perder, ele criou um **sistema de registro**: um jeito de organizar cada criatura com seus dados e ações.

Esse sistema é exatamente a **Programação Orientada a Objetos** — e ao longo desta trilha, você vai construí-lo do zero junto com Polvinho.

## Mini-jogo

- [x] Tem interativo

**Arquivo:** `interativos/nivel_1_missao_1.html`
**Descrição:** Drag & drop — associar objetos do mundo real às suas características e comportamentos.

## Exercício

**Pergunta:** Qual das alternativas melhor define a Programação Orientada a Objetos?

- [ ] Uma sequência linear de instruções que o computador executa.
- [x] Um paradigma que organiza o software em torno de objetos com atributos e métodos. ← correta
- [ ] Uma linguagem de programação específica como Python ou Java.
- [ ] Um método exclusivo para criar interfaces gráficas.

**Explicação:** POO é um paradigma que organiza o código em objetos com atributos (dados) e métodos (comportamentos).
