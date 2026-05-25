 Missão 1-3 — Atributos

**Ícone:** PiTag
**Emblema:** Pintor(a) de Tentáculos

## Teoria

### Otto abre o caderno

Na missão anterior, Otto encontrou Ada no oceano. Ele existe, é único, tem identidade própria.

Agora Otto tira o caderno de campo e começa a registrar tudo o que observa: cor, tamanho, número de tentáculos, espécie...

Cada informação registrada é um **atributo** — um dado que pertence especificamente a Ada.

> **Atributo** = uma informação que pertence a um objeto. Cada objeto guarda os seus próprios valores.

> [interativo: FichaInterativo — ficha de observação de Ada com atributos clicáveis. Ao clicar em cada atributo, revela o valor e a linha Python correspondente: `Ada.cor → "rosa"`. Ada aparece ao lado com a característica destacada visualmente.]

<ficha-interativo></ficha-interativo>

---

### O ponto — como acessar um atributo

Em Python, o ponto (`.`) é a forma de acessar um atributo de um objeto. É como Otto apontando para Ada e dizendo: *"me dê sua cor"*.

```python
print(Ada.nome)             # Ada
print(Ada.cor)              # rosa
print(Ada.num_tentaculos)   # 8
print(Ada.tamanho_cm)       # 25
print(Ada.especie)          # Octopus vulgaris
```

A estrutura é sempre: `objeto.atributo`.

---

### Cada polvo guarda os seus

No oceano há outros polvos. Cada um carrega seus próprios atributos — completamente independentes entre si.

```python
print(Ada.cor)    # rosa
print(ana.cor)       # azul
print(douglas.cor)   # verde
```

Mudar a cor de Ada não afeta Ana. Mudar Ana não afeta Douglas. Cada objeto é uma entidade separada com seus próprios dados.

---

### Atributos podem mudar

O estado de um objeto pode evoluir. Otto observa Ada se camuflando e atualiza o caderno:

```python
Ada.cor = "transparente"
print(Ada.cor)  # transparente
```

Só `Ada.cor` mudou. Ana e Douglas continuam com as suas.

> [svg: diagrama simples — `Ada.cor` com valor `"rosa"` → seta de atribuição → valor `"transparente"`. Outros polvos ao lado sem alteração.]

---

## Mini-jogo

- [ ] Tem interativo

## Exercício

**Pergunta:** Otto lê `Ada.cor` e vê `"rosa"`. Em seguida escreve `ana.cor = "verde"`. O que acontece com `Ada.cor`?

- [ ] Muda para `"verde"` — objetos do mesmo tipo compartilham atributos.
- [x] Continua `"rosa"` — cada objeto guarda seus próprios atributos. ← correta
- [ ] Fica indefinido — só um polvo pode ter cor definida por vez.
- [ ] Gera um erro — não é possível alterar atributos de objetos separados.

**Explicação:** Atributos pertencem a cada objeto individualmente. Mudar `ana.cor` não afeta `Ada.cor` — são dados completamente independentes.
