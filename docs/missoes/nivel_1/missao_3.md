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

---

## Exercícios extras

**e1 – id: 1-3-e1**
Na POO, um atributo é:
- [ ] Uma ação que o objeto sabe executar → Não. Ações são o que o objeto sabe fazer. Atributo é outra coisa — pense no que Otto registrou no caderno sobre Ada.
- [x] Uma informação que pertence especificamente a um objeto ← correta
- [ ] Uma função externa que acessa os dados do objeto → Não. Um atributo não é uma função externa. Ele pertence ao próprio objeto e descreve uma característica sua.
- [ ] O tipo de dado que o objeto representa → Não. O tipo do objeto é uma questão de implementação. Atributo é algo mais concreto — uma informação que o objeto carrega.

Explicação: Atributo é um dado que pertence ao objeto — uma característica sua. Cor, tamanho, nome: cada informação registrada sobre um objeto é um atributo.

---

**e2 – id: 1-3-e2**
Em Python, a sintaxe `objeto.atributo` serve para:
- [ ] Criar um novo objeto do tipo `atributo` → Não. `objeto.atributo` não cria nada — é uma forma de acessar algo que já existe dentro do objeto.
- [x] Acessar uma informação que pertence a esse objeto ← correta
- [ ] Chamar uma função chamada `atributo` → Não. Chamar uma função usaria parênteses: `objeto.atributo()`. Sem parênteses, estamos acessando um dado, não executando uma ação.
- [ ] Comparar dois objetos entre si → Não. Para comparar objetos usaríamos operadores como `==`. O ponto acessa uma informação de dentro do objeto.

Explicação: O ponto é a forma de acessar um atributo de um objeto — como apontar para ele e dizer: "me dê essa informação". A estrutura é sempre `objeto.atributo`.

---

**e3 – id: 1-3-e3**
Ada começa com `cor = 'rosa'`. Otto observa ela se camuflando e atualiza: `ada.cor = 'transparente'`. O que essa mudança representa?
- [ ] Ada virou um objeto diferente — mudar um atributo cria uma nova entidade → Não. Mudar um atributo não cria uma nova entidade — Ada continua ocupando o mesmo espaço na memória.
- [x] O estado de Ada mudou, mas ela continua sendo a mesma entidade ← correta
- [ ] Ada perdeu sua identidade ao alterar a cor → Não. Identidade não depende dos valores dos atributos. Ada é Ada independentemente da cor que tiver.
- [ ] Atributos não podem ser alterados depois que o objeto é criado → Não. Atributos podem ser alterados a qualquer momento — a missão mostra exatamente isso acontecendo com Ada.

Explicação: Mudar um atributo altera o estado do objeto, não a sua identidade. Ada continua sendo Ada — a mesma entidade. O que mudou foi apenas o valor de `cor`.

---

**e4 – id: 1-3-e4**
Para atualizar o atributo `velocidade` do objeto `carro` para `120`, a sintaxe correta é:
- [ ] `velocidade.carro = 120` → Não. A ordem importa: primeiro vem o objeto, depois o atributo. `velocidade.carro` inverte essa lógica.
- [ ] `set(carro, velocidade, 120)` → Não. Python não usa uma função `set()` para isso. A atribuição de atributos segue a notação ponto.
- [ ] `carro[velocidade] = 120` → Não. Colchetes são usados para acessar itens de listas e dicionários, não atributos de objetos.
- [x] `carro.velocidade = 120` ← correta

Explicação: A notação ponto serve tanto para leitura (`carro.velocidade`) quanto para atribuição (`carro.velocidade = 120`). A estrutura é a mesma: `objeto.atributo = novo_valor`.

---

**e5 – id: 1-3-e5**
Considerando um objeto `celular`, qual dos itens abaixo representa um atributo?
- [ ] `ligar()` — uma ação que o celular sabe executar → Não. `ligar()` tem parênteses — é uma ação que o celular executa, não uma informação que ele carrega.
- [x] `bateria` — uma informação que descreve o estado do celular ← correta
- [ ] `tirar_foto()` — um comportamento do celular → Não. `tirar_foto()` também é uma ação. Atributo é um dado que descreve o estado do objeto, não algo que ele faz.
- [ ] O celular em si — a entidade completa → Não. O celular inteiro é o objeto — não um dos seus atributos. Atributo é uma informação específica que ele carrega.

Explicação: Atributos são informações — dados que descrevem o estado do objeto. Ações como `ligar()` e `tirar_foto()` são outra coisa. `bateria`, `modelo`, `cor` são exemplos de atributos.

---

**e6 – id: 1-3-e6**
O valor de um atributo pode ser alterado depois que o objeto foi criado?
- [x] Sim — o estado de um objeto pode evoluir ao longo do tempo ← correta
- [ ] Não — atributos são fixos após a criação do objeto → Não. A missão mostra Ada mudando de cor. Atributos não são fixos — o estado de um objeto pode evoluir.
- [ ] Sim, porém apenas atributos do tipo texto podem ser alterados → Não. Qualquer tipo de atributo pode ser alterado — não só texto. Números, booleanos, qualquer valor.
- [ ] Apenas se o objeto for completamente recriado com novos valores → Não. Não é necessário recriar o objeto. Basta usar a notação ponto para atribuir um novo valor.

Explicação: O estado de um objeto pode evoluir. Basta usar a notação ponto: `objeto.atributo = novo_valor`. Só esse objeto é afetado — os demais continuam com os seus próprios valores.
