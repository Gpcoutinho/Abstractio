# Missão 1-1 — O que é POO?

**Ícone:** 🧩
**Pontos:** 15

## Teoria


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


## No oceano do Polvinho

> [svg: ilustração submarina centralizada (max-width 400px). Fundo escuro com gradiente azul marinho. Bolhas subindo animadas em várias posições. Polvinho roxo centralizado — corpo oval arroxeado, 6 tentáculos com animação de ondulação individual, olhos brancos com pupilas escuras e brilho. Sem texto dentro do SVG — é puramente ilustrativo. Legenda abaixo: "Polvinho e o início da jornada POO".]

Polvinho vive num oceano repleto de criaturas — polvos, baleias, peixes, corais. Cada ser tem características únicas e comportamentos próprios. Para explorar e entender tudo isso sem se perder, ele criou um **sistema de registro**: um jeito de organizar cada criatura com seus dados e ações.

Cada criatura é um objeto com dados e ações:

```python
polvo  = CriaturaMarina("Polvinho", tentaculos=8)
baleia = CriaturaMarina("Baleia",   barbatanas=2)
polvo.explorar()  # Polvinho mergulha!
```

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
