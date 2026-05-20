# MissÃ£o 1-3 â€” Atributos

**Ãcone:** PiTag
**Emblema:** Pintor(a) de TentÃ¡culos

## Teoria

### Otto abre o caderno

Na missÃ£o anterior, Otto encontrou Ada no oceano. Ele existe, Ã© Ãºnico, tem identidade prÃ³pria.

Agora Otto tira o caderno de campo e comeÃ§a a registrar tudo o que observa: cor, tamanho, nÃºmero de tentÃ¡culos, espÃ©cie...

Cada informaÃ§Ã£o registrada Ã© um **atributo** â€” um dado que pertence especificamente a Ada.

> **Atributo** = uma informaÃ§Ã£o que pertence a um objeto. Cada objeto guarda os seus prÃ³prios valores.

> [interativo: FichaInterativo â€” ficha de observaÃ§Ã£o de Ada com atributos clicÃ¡veis. Ao clicar em cada atributo, revela o valor e a linha Python correspondente: `Ada.cor â†’ "rosa"`. Ada aparece ao lado com a caracterÃ­stica destacada visualmente.]

<ficha-interativo></ficha-interativo>

---

### O ponto â€” como acessar um atributo

Em Python, o ponto (`.`) Ã© a forma de acessar um atributo de um objeto. Ã‰ como Otto apontando para Ada e dizendo: *"me dÃª sua cor"*.

```python
print(Ada.nome)             # Ada
print(Ada.cor)              # rosa
print(Ada.num_tentaculos)   # 8
print(Ada.tamanho_cm)       # 25
print(Ada.especie)          # Octopus vulgaris
```

A estrutura Ã© sempre: `objeto.atributo`.

---

### Cada polvo guarda os seus

No oceano hÃ¡ outros polvos. Cada um carrega seus prÃ³prios atributos â€” completamente independentes entre si.

```python
print(Ada.cor)    # rosa
print(ana.cor)       # azul
print(douglas.cor)   # verde
```

Mudar a cor de Ada nÃ£o afeta Ana. Mudar Ana nÃ£o afeta Douglas. Cada objeto Ã© uma entidade separada com seus prÃ³prios dados.

---

### Atributos podem mudar

O estado de um objeto pode evoluir. Otto observa Ada se camuflando e atualiza o caderno:

```python
Ada.cor = "transparente"
print(Ada.cor)  # transparente
```

SÃ³ `Ada.cor` mudou. Ana e Douglas continuam com as suas.

> [svg: diagrama simples â€” `Ada.cor` com valor `"rosa"` â†’ seta de atribuiÃ§Ã£o â†’ valor `"transparente"`. Outros polvos ao lado sem alteraÃ§Ã£o.]

---

## Mini-jogo

- [ ] Tem interativo

## ExercÃ­cio

**Pergunta:** Otto lÃª `Ada.cor` e vÃª `"rosa"`. Em seguida escreve `ana.cor = "verde"`. O que acontece com `Ada.cor`?

- [ ] Muda para `"verde"` â€” objetos do mesmo tipo compartilham atributos.
- [x] Continua `"rosa"` â€” cada objeto guarda seus prÃ³prios atributos. â† correta
- [ ] Fica indefinido â€” sÃ³ um polvo pode ter cor definida por vez.
- [ ] Gera um erro â€” nÃ£o Ã© possÃ­vel alterar atributos de objetos separados.

**ExplicaÃ§Ã£o:** Atributos pertencem a cada objeto individualmente. Mudar `ana.cor` nÃ£o afeta `Ada.cor` â€” sÃ£o dados completamente independentes.
