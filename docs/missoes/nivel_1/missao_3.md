<!-- NOTAS DE DESENVOLVIMENTO – não são conteúdo da missão -->

## [notas] Referências e decisões para esta missão

### Fontes bibliográficas

**Phillips – Python 3 Object-Oriented Programming, p. 6 (Cap. 1) — ALTA PRIORIDADE**

"Data typically represents the individual characteristics of a certain object.
A class can define specific sets of characteristics that are shared by all objects of
that class. Any specific object can have different data values for the given
characteristics. For example, our three oranges on the table could each weigh a
different amount. The orange class could then have a weight attribute. All instances
of the orange class have a weight attribute, but each orange has a different value
for this attribute."

→ Adaptado com polvos: Ada (rosa), Caju (amarela), Muriel (ciano) – mesma estrutura,
  atributo `cor` em comum, valores completamente próprios.
  Base direta para a seção "Cada objeto guarda os seus" e para o `<conceito>`.

---

**Weisfeld – The Object-Oriented Thought Process, p. 10 (guardados.txt, Bloco 6) — ALTA PRIORIDADE**

"The data stored within an object represents the state of the object.
In OO programming terminology, this data is called attributes."

→ Atributo = estado do objeto em um dado momento. Mudar um atributo = mudar o estado.
  Reforça a seção "Atributos podem mudar" e fundamenta o `<conceito>`.
  Atenção: "estado" é termo técnico – reformular de forma acessível no texto.

---

**BlueJ – Kölling et al. (2003) — ALTA PRIORIDADE**

Princípio Objects First: o aluno deve perceber sozinho que objetos do mesmo tipo têm
os mesmos atributos, mas valores diferentes. A visualização side-by-side de dois objetos
torna isso imediato – sem precisar de explicação.

→ Justifica o SVG com Ada, Caju e Muriel lado a lado com seus cards de atributos.
  O visual faz o trabalho antes do texto.

---

**Phillips – p. 10 (Cap. 1, Bloco 4) — MÉDIA PRIORIDADE**

"Objects typically represent nouns in the original problem, while methods are
normally verbs. Attributes can often be picked up as adjectives."

→ Heurística linguística: atributos como adjetivos do objeto (rosa, amarela, ciano).
  Útil como frase narrativa leve – não como regra formal.
  Usar com cautela; não funciona para todos os casos (ex: `id`, `num_tentaculos`).

---

**BlueJ – Kölling et al. (2003) — MÉDIA PRIORIDADE**

"Objetos são manipulados por operações (métodos) que alteram seu estado."

→ Bridge natural ao final de "Atributos podem mudar": estado mudou via atribuição direta;
  na próxima missão veremos operações que fazem isso de forma mais estruturada.
  Usar apenas se a seção comportar sem ficar pesada.

---

### Personagens desta missão
- **Ada** – rosa (`"rosa"`) — já estabelecida desde a missão 2
- **Caju** – amarela (`"amarela"`) — personagem guardada, reaparece aqui
- **Muriel** – ciano (`"ciano"`) — nova personagem; introduzida nesta missão

---

### Linha narrativa
- Otto já conhece Ada (missão 2). Agora abre o caderno de campo e começa a registrar o que vê.
- Gancho: retomada das "características" da missão anterior → como o Python guarda isso → atributo.
- Três polvos na seção de independência: Ada, Caju e Muriel – mesma espécie, cores próprias.
- Ada se camuflando na seção de mutação – atualização do caderno como metáfora de atribuição.
- Nenhuma `class` ou `__init__` aparece nesta missão.

---

### Dúvidas previstas
- `{{duvida-atributo-variavel}}` – "Atributo é a mesma coisa que variável?" → resposta: quase, mas o atributo pertence a um objeto específico e só faz sentido junto a ele; variável é um conceito mais genérico.
- `{{duvida-quais-atributos}}` – "O que define quais características e ações farão parte de um objeto?" → resposta: o modelador decide o que é relevante registrar. Teaser para missões seguintes (abstração, classe).

---

### Estrutura das seções
1. Otto abre o caderno – gancho a partir das "características" da missão 2; introdução do atributo
2. O ponto – notação `objeto.atributo` para acessar dados
3. Cada objeto guarda os seus – independência entre instâncias (Phillips + BlueJ)
4. Atributos podem mudar – mutação, atribuição e estado (Weisfeld)

**Visuais:**
- Seção 1: Otto com caderno aberto, pares nome–valor listados; Ada ao lado com cada característica destacada
- Seção 3: Ada (rosa), Caju (amarela) e Muriel (ciano) com cards de atributos independentes; seta indicando que mudar Ada não afeta as outras

---

### Interativos (dois componentes separados)

**Componente 1 – `FichaAcesso` (seção "O ponto")**
O aluno completa a linha de código escolhendo o atributo a acessar.
- Exibe: `print(ada.` + **dropdown** + `)`
- Opções no dropdown: `.nome`, `.cor`, `.num_tentaculos`
- À direita: painel "Retorno na tela" atualiza conforme a seleção
  - `.nome` → `Ada`
  - `.cor` → `rosa`
  - `.num_tentaculos` → `8`
- Tag na teoria: `{{ficha-acesso}}`
- Componente: `src/components/missoes/nivel_1/FichaAcesso.tsx` (já registrado em Missao.tsx)

**Componente 2 – `TresPolvosAcesso` (seção "Cada objeto guarda os seus")**
Seletor de polvo + card de atributos + painel de acesso integrados.
- Seletor: botões ada / caju / muriel; ao trocar, card e dropdown resetam
- Card: imagem proporcional ao tamanho (Ada 90px, Caju 65px, Muriel 115px) + atributos somente-leitura
- Painel: `print( [polvo] . [dropdown de atributo] )` com retorno correspondente
- Tag na teoria: `{{tres-polvos-acesso}}`
- Componente: `src/components/missoes/nivel_1/missao_3/TresPolvosAcesso.tsx`

**Componente 3 – `FichaInterativo` (seção "Atributos podem mudar")**
O aluno personaliza os atributos de Ada e vê o card atualizar em tempo real.
- Exibe o AdaCard com campos editáveis:
  - `cor:` dropdown com 3 opções de cor
  - `qte_tentaculos:` dropdown com 3 opções numéricas
- O polvo (PolvinhoSVG) atualiza conforme as seleções
- Tag na teoria: `<ficha-interativo></ficha-interativo>`
- Componente: `src/components/missoes/nivel_1/missao_3/FichaInterativo.tsx`

---

### Resumo (campo `resumo` no .ts)
- **Atributo** – dado nomeado que pertence a um objeto e guarda seu estado
- **Notação ponto** – `objeto.atributo` – como acessar um atributo em Python
- **Independência** – cada objeto guarda seus próprios valores; mudar um não afeta os outros
- **Mutação** – o valor de um atributo pode ser alterado; isso muda o estado do objeto

<!-- FIM DAS NOTAS -->

---

# Missão 1-3 – Atributos

**Ícone:** PiTag
**Emblema:** Pintor(a) de Tentáculos

## Teoria

### O que Ada carrega

Na missão anterior, Otto descobriu que todo objeto tem três marcas: <destaque-reto>identidade, características e ações</destaque-reto>.

Nesta missão, daremos enfoque especial às <destaque-marker>características</destaque-marker> de Ada que foram apresentadas anteriormente: ela é rosa, tem 8 tentáculos. Também vamos adicionar mais uma: ela mede 25 cm.

Vamos adicionar essas informações ao nosso caderno de campo? Ficaria assim:

{{ada-card-rotulado}}

> [svg: AdaCard com atributos em grid de duas colunas — sem setas.]

Mas como o Python guarda isso? Se Otto precisasse descrever Ada *para um computador*, o que escreveria?

Na missão anterior, vimos a forma como o Python guarda esses dados relacionados a Ada:

```python-simplificado
ada = {
    "nome": "Ada",
    "cor": "rosa",
    "num_tentaculos": 8
}
```

Atualizando com a nova característica:

```python-simplificado
ada = {
    "nome": "Ada",
    "cor": "rosa",
    "num_tentaculos": 8,
    "tamanho_cm": 25     <-- nova característica adicionada
}
```

Agora que já sabemos a estrutura que o Python entende, vamos aprender a nomear suas partes da maneira correta.

Cada um desses campos – 'nome', 'cor', 'num_tentaculos' e 'tamanho_cm' – tem um nome específico na POO: são os <destaque>atributos</destaque> de 'ada'. Cada atributo é um dado rotulado que pertence a esse objeto e guarda uma de suas características.

<conceito note="adapt. Phillips, 2015; Weisfeld, 2019"><strong>Atributo</strong>: dado rotulado que pertence a um objeto e representa seu estado em um momento específico.</conceito>

Ou seja: no momento atual, o objeto 'ada' possui o atributo 'cor' com o valor 'rosa' e o atributo 'num_tentaculos' com o valor '8'. Esses atributos são como campos que guardam informações sobre Ada – eles descrevem seu estado atual.

E por que estamos insistindo nessa palavra "atual"? Porque os atributos de um objeto podem mudar ao longo do tempo. Ada pode se camuflar e ficar transparente, ou crescer e passar a medir 30 cm. O que define Ada não é o valor específico de seus atributos, mas sim o fato de que ela tem esses atributos – e que eles podem evoluir.

{{duvida-atributo-variavel}}

> [svg: Otto segurando um caderno aberto. Na página do caderno: lista de pares nome–valor (cor: rosa, num_tentaculos: 8, tamanho_cm: 25, especie: Octopus vulgaris). Ada ao lado, com cada característica destacada visualmente conforme listada.]

---

### O ponto: acessando um atributo

Em Python, o ponto (`.`) é a forma de acessar um atributo de um objeto. É como Otto apontando para Ada e dizendo: *"me diga sua cor"*.

A estrutura é sempre a mesma:

```pseudocodigo
objeto.atributo
```

Veja como fica com Ada:

```python
# print() — comando para exibir um valor na tela
print(ada.nome)            # impresso na tela: "Ada"
print(ada.cor)             # impresso na tela: "rosa"
print(ada.num_tentaculos)  # impresso na tela: 8
print(ada.tamanho_cm)      # impresso na tela: 25
```

Cada linha pede um atributo diferente pelo nome. O Python vai até o objeto, encontra o dado e devolve o valor.

<ficha-acesso></ficha-acesso>

---

### Cada objeto guarda os seus

No oceano há outros polvos. Ada não é a única.

Otto avista Caju – amarela, curiosa, menor que Ada. E mais adiante, Muriel – ciano, veloz, difícil de fotografar. Os três são polvos: mesma espécie, mesmo conjunto de atributos. Mas cada um carrega seus próprios valores.

> [interativo: TresPolvosAcesso — seletor de polvo (ada/caju/muriel); card com imagem proporcional ao tamanho e atributos; painel print(objeto.atributo) com retorno na tela]

{{tres-polvos-acesso}}

Ou seja, para acessar a cor de Caju, Otto escreve `caju.cor`. Para acessar a cor de Muriel, escreve `muriel.cor`. O ponto é o que conecta o nome do objeto ao nome do atributo. Ele é como um caminho que leva até o dado específico daquele objeto.

Se quiséssemos imprimir na tela usando Python, seria exatamente assim:

```python
# print() — comando para exibir um valor na tela
print(ada.cor)    # impresso na tela: "rosa"
print(caju.cor)   # impresso na tela: "amarela"
print(muriel.cor) # impresso na tela: "ciano"
```

---

### Atributos podem mudar

O estado de um objeto pode evoluir. Otto observa Ada se camuflando e atualiza o caderno:

```python
# atribuindo um novo valor ao atributo cor de ada
ada.cor = "transparente"
```

Agora:

```python
# print() — comando para exibir um valor na tela
print(ada.cor)  # impresso na tela: "transparente"
```

O estado de Ada mudou – só o dela. Caju continua amarela. Muriel continua ciano. A atribuição age sobre um objeto específico, nunca sobre todos ao mesmo tempo.

<ficha-interativo></ficha-interativo>

{{duvida-quais-atributos}}

---

## Mini-jogo

- [ ] Tem mini-jogo

## Resumo

**Nesta missão:**

- **Atributo** – dado nomeado que pertence a um objeto e guarda seu estado
- **Notação ponto** – `objeto.atributo` – como acessar um atributo em Python
- **Independência** – cada objeto guarda seus próprios valores; mudar um não afeta os outros
- **Mutação** – o valor de um atributo pode ser alterado; isso muda o estado do objeto

## Exercício

**Pergunta:** Otto lê `ada.cor` e vê `"rosa"`. Em seguida escreve `caju.cor = "transparente"`. O que acontece com `ada.cor`?

- [ ] Muda para `"transparente"` – objetos do mesmo tipo compartilham atributos.
- [x] Continua `"rosa"` – cada objeto guarda seus próprios atributos. ← correta
- [ ] Fica indefinido – só um polvo pode ter cor definida por vez.
- [ ] Gera um erro – não é possível alterar atributos de objetos separados.

**Explicação:** Atributos pertencem a cada objeto individualmente. Mudar `caju.cor` não afeta `ada.cor` – são dados completamente independentes.
