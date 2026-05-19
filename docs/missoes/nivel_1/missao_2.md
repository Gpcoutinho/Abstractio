# Missão 1-2 — Objeto

**Ícone:** PiCircle
**Emblema:** Criatura Marinha

## Teoria

### Objetos estão em todo lugar

Olhe ao redor. Cadeira. Celular. Cachorro. Caneta.

Todo objeto do mundo real tem duas coisas em comum:

- **Características** — como ele _é_ (cor, nome, tamanho, peso...)
- **Ações** — o que ele _faz_ (latir, carregar, rolar, escrever...)

> [svg: três cards — Cachorro, Celular e Carro — com seções explícitas "características" (dados em cinza) e "ações" (comportamentos em verde). Animação fade+slide em sequência. Adaptar labels do diagramaObjetos existente.]

Em programação, os objetos funcionam exatamente igual: possuem características próprias e realizam ações. Na nossa jornada, utilizaremos o universo marinho, em especial os polvos, que são animais muito versáteis - assim como a POO - para ilustrar o funcionamento desses objetos.

---

### Polvonilson encontra Polvinho

O Sr. Polvonilson está em expedição pelo oceano quando avista uma criatura que nunca viu.

Ela existe. Tem uma cor. Um tamanho. Um número de tentáculos. E sabe fazer coisas — nada, se camufla, solta tinta.

Polvonilson não sabe como essa criatura foi criada. Não importa — ele consegue observá-la e interagir com ela. Isso é um **objeto**: algo com características próprias e ações que sabe executar.

> [interativo: PolvosInterativo — painel esquerdo "Características" com seletores de cor (Roxo / Azul / Verde), tamanho (Pequeno / Grande) e tentáculos (6 / 8); painel direito "Ações" com botões Nadar, Dar pirueta, Soltar tinta; Polvinho no centro reage visualmente a cada seleção e ação. Sem código visível.]

---

### Cada objeto é único

No oceano de Polvonilson há outros polvos. Cada um é uma entidade separada — mesma natureza, dados completamente diferentes.

Polvinho é roxo e pequeno. Azulão é azul e grande. Marinho é verde.

Mudar algo em Polvinho não muda Azulão. Cada objeto guarda seus próprios dados de forma independente.

> [svg: três polvos lado a lado — Polvinho (roxo, pequeno, 8 tentáculos), Azulão (azul, grande, 6 tentáculos), Marinho (verde, médio, 8 tentáculos) — cada um com card de dados abaixo.]

---

### As três marcas de todo objeto

Todo objeto — de um polvo a um celular — carrega três marcas:

| Marca             | O que é                                   | Em Polvinho                      |
| ----------------- | ----------------------------------------- | -------------------------------- |
| **Identidade**    | O que o diferencia dos outros             | Polvinho ≠ Azulão ≠ Marinho      |
| **Estado**        | As características que carrega no momento | cor: Roxo, tentáculos: 8         |
| **Comportamento** | O que ele sabe fazer                      | nadar, dar pirueta, soltar tinta |

---

### De onde Polvinho veio?

Polvonilson observa, interage, anota. Mas uma pergunta fica no ar:

_Quem definiu que Polvinho seria roxo? Que teria 8 tentáculos? Que saberia nadar?_

A resposta ainda é um mistério. A caixa preta ainda está fechada.

Isso você descobre na **Missão 5**.

---

## Mini-jogo

- [ ] Tem interativo

## Exercício

**Pergunta:** Polvonilson encontra dois polvos: Polvinho (roxo, 8 tentáculos) e Azulão (azul, 6 tentáculos). Ele muda a cor de Polvinho para verde. O que acontece com Azulão?

- [ ] Azulão também fica verde — objetos do mesmo tipo compartilham características.
- [x] Azulão continua azul — cada objeto guarda seus próprios dados de forma independente. ← correta
- [ ] Azulão desaparece — só pode existir um polvo de cada vez.
- [ ] Azulão perde todas as características — qualquer mudança afeta todos os objetos.

**Explicação:** Cada objeto existe de forma independente. Mudar Polvinho não afeta Azulão — cada um carrega seus próprios dados.
