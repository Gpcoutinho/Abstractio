<!-- NOTAS DE DESENVOLVIMENTO – não são conteúdo da missão -->

## [notas] Referências e decisões para esta missão

### Linha narrativa
- Otto usa folhas de papel soltas para anotar dados de criaturas – metáfora do código procedural.
- Marta, Pedro e Joana introduzem o caos de dados compartilhados sem estrutura.
- Ada aparece como criatura catalogada – primeiro contato com o nome antes da missão 2.
- A ficha de Ada como "pacote completo" é o gancho para o conceito de objeto.

---

### Terminologia
Usar sempre "características" e "ações" – nunca "estado", "comportamento", "atributos" ou "métodos".

---

### Componentes implementados
- `{{caderno-abertura}}` → `CadernoAbertura` – abertura da teoria
- `{{caos-anotacoes}}` → `CaosAnotacoes` – após o caderno
- `{{dados-globais}}` → `DadosGlobais` – demonstração do problema de dados soltos
- `{{slides-poo}}` → `SlidesPOO` – definição de POO

---

### Exercício
Pergunta sobre a definição de POO. Baú de Conchas com 6 extras.

<!-- FIM DAS NOTAS -->

---

# Missão 1-1 — O que é POO?

**Ícone:** 🧩
**Pontos:** 15

## Teoria

E aí, vamos dar o primeiro passo na nossa trilha?

Se você já pagou a cadeira de Introdução à Programação (provavelmente em C ou Python), você aprendeu a programar no paradigma **Procedural**. Pense na programação procedural como uma **receita de bolo**: o código é um algoritmo linear, um passo a passo. Você cria variáveis soltas e depois cria funções separadas para mexer nelas.

## Mas afinal, o que é a Orientação a Objetos (POO)?

De forma bem direta: é simplesmente **uma maneira diferente de organizar o seu código**, pensando em **entidades vivas** em vez de listas de comandos.

Em vez de focar apenas no passo a passo (o algoritmo), a POO foca nos **atores** que fazem o programa funcionar. A gente para de pensar em variáveis espalhadas e passa a pensar em pacotes chamados **Objetos**.

## O problema que a POO resolve

**"Mas como assim? Por que eu deveria trocar a procedural pela POO?"**

Vamos entender isso no contexto da nossa própria trilha. Imagine que precisamos colocar o nosso mascote, o Polvo, flutuando aqui na sua tela.

Na abordagem Procedural, nós criaríamos variáveis totalmente separadas:

```python
polvo1_nome = "Otto"
polvo1_cor = "Roxo"

polvo2_nome = "Azulão"
polvo2_cor = "Azul"
```

E assim por diante para cada polvo — muitas variáveis soltas!

Até aqui, tudo bem, certo? Mas e se precisarmos de 100 polvos no nosso oceano? Na programação procedural, isso viraria um caos. Você teria que criar listas gigantescas e garantir que os dados não se misturassem.

É exatamente aqui que a POO entra para salvar o dia. Na POO, nós paramos de lidar com variáveis soltas e criamos um pacote auto-suficiente chamado **Objeto** que guarda toda a informação necessária sobre aquela entidade.

A mágica da POO acontece porque o código te permite materializar o seu modelo mental. Olha como fica fácil definir a estrutura do nosso mascote:

> [svg: fundo oceano escuro. Esquerda: polvinho roxo animado (6 tentáculos ondulando) com tag "meu_polvo" abaixo. Seta roxa "→" ao centro. Direita: card escuro com header roxo "meu_polvo", barra lateral roxa e dois atributos — nome = "Otto" (azul/verde) e cor = "Roxo" (azul/verde).]

```python
meu_polvo = {
    "nome": "Otto",
    "cor": "Roxo"
}
```

Olha que limpo! Todas as características estão unidas nesse pacote.

Percebe como a POO ajuda muito mais? Se quisermos 100 polvos agora, é só usar essa mesma estrutura 100 vezes. O código fica limpo, organizado e faz sentido para a mente humana.

Por esses motivos, te incentivamos a continuar a trilha! Cada missão vai reforçar cada vez mais o seu entendimento e construir a sua base como Cientista. Vamos para a próxima etapa?

## Mini-jogo

- [ ] Tem mini-jogo

## Exercício

**Pergunta:** Qual das alternativas melhor define a Programação Orientada a Objetos?

- [ ] Uma sequência linear de instruções que o computador executa.
- [x] Um paradigma que organiza o software em torno de objetos com características e ações. ← correta
- [ ] Uma linguagem de programação específica como Python ou Java.
- [ ] Um método exclusivo para criar interfaces gráficas.

**Explicação:** POO é um paradigma que organiza o código em objetos com características (dados) e ações (comportamentos).
