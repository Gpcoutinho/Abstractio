# Missão 1-3 — Atributos

**Ícone:** PiTag
**Emblema:** Pintor(a) de Tentáculos

## Teoria

### Polvonilson abre o caderno

Na missão anterior, Polvonilson encontrou Thiago no oceano. Ele existe, é único, tem identidade própria.

Agora Polvonilson tira o caderno de campo e começa a registrar tudo o que observa: cor, tamanho, número de tentáculos, espécie...

Cada informação registrada é um **atributo** — um dado que pertence especificamente a Thiago.

> **Atributo** = uma informação que pertence a um objeto. Cada objeto guarda os seus próprios valores.

> [interativo: FichaInterativo — ficha de observação de Thiago com atributos clicáveis. Ao clicar em cada atributo, revela o valor e a linha Python correspondente: `thiago.cor → "roxo"`. Thiago aparece ao lado com a característica destacada visualmente.]

<ficha-interativo></ficha-interativo>

---

### O ponto — como acessar um atributo

Em Python, o ponto (`.`) é a forma de acessar um atributo de um objeto. É como Polvonilson apontando para Thiago e dizendo: *"me dê sua cor"*.

```python
print(thiago.nome)             # Thiago
print(thiago.cor)              # roxo
print(thiago.num_tentaculos)   # 8
print(thiago.tamanho_cm)       # 25
print(thiago.especie)          # Octopus vulgaris
```

A estrutura é sempre: `objeto.atributo`.

---

### Cada polvo guarda os seus

No oceano há outros polvos. Cada um carrega seus próprios atributos — completamente independentes entre si.

```python
print(thiago.cor)    # roxo
print(ana.cor)       # azul
print(douglas.cor)   # verde
```

Mudar a cor de Thiago não afeta Ana. Mudar Ana não afeta Douglas. Cada objeto é uma entidade separada com seus próprios dados.

---

### Atributos podem mudar

O estado de um objeto pode evoluir. Polvonilson observa Thiago se camuflando e atualiza o caderno:

```python
thiago.cor = "transparente"
print(thiago.cor)  # transparente
```

Só `thiago.cor` mudou. Ana e Douglas continuam com as suas.

> [svg: diagrama simples — `thiago.cor` com valor `"roxo"` → seta de atribuição → valor `"transparente"`. Outros polvos ao lado sem alteração.]

---

## Mini-jogo

- [ ] Tem interativo

## Exercício

**Pergunta:** Polvonilson lê `thiago.cor` e vê `"roxo"`. Em seguida escreve `ana.cor = "verde"`. O que acontece com `thiago.cor`?

- [ ] Muda para `"verde"` — objetos do mesmo tipo compartilham atributos.
- [x] Continua `"roxo"` — cada objeto guarda seus próprios atributos. ← correta
- [ ] Fica indefinido — só um polvo pode ter cor definida por vez.
- [ ] Gera um erro — não é possível alterar atributos de objetos separados.

**Explicação:** Atributos pertencem a cada objeto individualmente. Mudar `ana.cor` não afeta `thiago.cor` — são dados completamente independentes.
