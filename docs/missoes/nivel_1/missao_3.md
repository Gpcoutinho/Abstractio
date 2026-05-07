# Missão 1-3 — Classe

**Ícone:** 📐
**Pontos:** 15

## Teoria

## A forma de fazer biscoito

Na missão anterior, você conheceu o **objeto** — o biscoito. Agora é hora de conhecer o **molde**: a **classe**.

A forma de cortar biscoitos não é um biscoito. Ela é a instrução de como criar biscoitos. Uma classe funciona exatamente assim: define como os objetos daquele tipo devem ser.

> **Classe** = o molde que descreve como os objetos serão criados — quais dados eles têm e o que sabem fazer.

---

**Cuidado para não confundir os bolos**

Se você já aprendeu que "um algoritmo é como uma receita de bolo", prepare-se — na POO usamos a mesma analogia com um papel diferente, e isso costuma dar um nó. A diferença está no foco:

- **Receita (Procedural):** foca em **verbos** — *quebre* os ovos, *misture* a farinha, *asse* por 40 minutos. A receita *é* o programa: executa de cima a baixo uma vez e produz um resultado.
- **Classe (POO):** foca em **substantivos** — não importa como você fez a massa; importa a *estrutura*: "todo bolo que sair daqui seguirá este molde". A classe não executa sozinha — ela existe para criar objetos.

Resumindo: a receita é uma **lista de tarefas**. A classe é uma **fábrica**.

> [animação: dois painéis lado a lado. Esquerdo — "Receita (Procedural)": lista de 3 passos com seta e um único 🎂, legenda "executa uma vez". Direito — "Classe (POO)": bloco "class Bolo:" com botão "Produzir Bolo" que a cada clique adiciona um 🎂 abaixo. Legenda: "Mesma palavra, papéis opostos."]

---

## Criando uma classe

```python
# "class" avisa o Python: "estou criando um molde"
class Cachorro:
    def __init__(self, nome, raca):
        self.nome = nome   # dado que todo cachorro tem
        self.raca = raca   # dado que todo cachorro tem

    def apresentar(self):
        return f"Au! Sou {self.nome}, um {self.raca}!"
```

Criando cachorros a partir do molde:

```python
rex  = Cachorro("Rex",  "Labrador")
bolt = Cachorro("Bolt", "Husky")
mia  = Cachorro("Mia",  "Poodle")

print(rex.apresentar())   # Au! Sou Rex, um Labrador!
print(bolt.apresentar())  # Au! Sou Bolt, um Husky!
print(mia.apresentar())   # Au! Sou Mia, um Poodle!
```

**Uma classe, três objetos diferentes** — o molde é o mesmo, cada produto é único.

> [svg: dois painéis conectados por seta — "class Cachorro" (ícone 📐, borda roxa, legenda "O Molde") → seta "Cria" → "Objetos Criados" com cards rex e bolt (borda azul). Animação de fade em sequência. Legenda: "A classe é o molde — os objetos são os produtos criados a partir dela".]

---

## O que uma classe pode ter

| Parte | O que é | Exemplo |
|---|---|---|
| **Atributo** | Uma característica | `self.nome`, `self.raca` |
| **Método** | Um comportamento | `def apresentar(self)` |
| **Construtor** | O setup inicial | `def __init__(self, ...)` |

Cada uma dessas partes terá sua própria missão neste nível.

---

## Regra de nomenclatura

Por convenção, nomes de classes em Python usam **PascalCase** — cada palavra começa com maiúscula:

```python
class Cachorro:       # correto
class ContaBancaria:  # correto
class cachorro:       # evitar
class conta_bancaria: # evitar
```

> **Resumindo:** Uma classe é o molde que define como um tipo de objeto deve ser — com suas características e comportamentos. A partir de uma classe, você cria quantos objetos quiser.

## Mini-jogo

- [ ] Tem interativo

## Exercício

**Pergunta:** Escolha a alternativa que melhor define o que é uma **classe**:

- [ ] Um objeto específico criado em tempo de execução.
- [x] Um molde que descreve as propriedades e comportamentos de um tipo de objeto. ← correta
- [ ] Uma biblioteca externa usada para executar a linguagem.
- [ ] Um erro de sintaxe comum em Python.

**Explicação:** Uma classe é um molde. A partir dela criamos quantos objetos (instâncias) quisermos.
