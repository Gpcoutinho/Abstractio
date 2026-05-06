# Missão 1-2 — Objeto

**Ícone:** 🔵
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

## O biscoito, não a forma

Imagine uma **forma de cortar biscoitos** em formato de estrela. Com ela você faz quantas estrelas quiser — cada uma com sua própria cobertura e decoração.

A forma é o molde. O biscoito é o **produto real**.

Em POO, o **objeto** é esse produto — algo concreto que existe na memória do computador, com seus próprios dados.

> **Objeto** = uma coisa concreta criada a partir de um molde (a classe). Cada objeto tem seus próprios dados e existe de forma independente.

"Criar um objeto" também é chamado de **instanciar**. O objeto é uma **instância** da classe.

---

## Cada objeto tem seu próprio estado

Esse é o ponto mais importante: **mexer em um objeto não afeta os outros**.

```python
class Carro:
    def __init__(self, modelo):
        self.modelo     = modelo
        self.ligado     = False   # começa desligado
        self.velocidade = 0       # começa parado

    def ligar(self):
        self.ligado = True
        return f"{self.modelo} ligado!"

    def acelerar(self, km):
        if self.ligado:
            self.velocidade += km
            return f"{self.modelo} a {self.velocidade} km/h"
        return f"{self.modelo} está desligado!"

# Dois objetos criados do mesmo molde
fusca = Carro("Fusca")
gol   = Carro("Gol")

print(fusca.ligar())       # Fusca ligado!
print(fusca.acelerar(60))  # Fusca a 60 km/h

print(gol.ligado)          # False — Gol continua desligado
print(fusca.velocidade)    # 60
print(gol.velocidade)      # 0
```

---

## As três propriedades de todo objeto

| Propriedade | O que é | No exemplo |
|---|---|---|
| **Identidade** | O que diferencia um do outro | `fusca` ≠ `gol` |
| **Estado** | Os valores atuais dos dados | `fusca.ligado = True`, `gol.ligado = False` |
| **Comportamento** | O que o objeto sabe fazer | `.ligar()`, `.acelerar()` |

> [svg: painel único centralizado "Objetos Criados" (borda azul). Dois cards internos — "rex" (nome: Rex, raça: Lab) e "bolt" (nome: Bolt, raça: Husky) — em azul escuro com borda azul. Legenda: "Cada objeto existe de forma independente na memória". Animação de fade+slide para cima.]

---

## Você pode criar quantos objetos quiser

A classe é um molde reutilizável infinitamente:

```python
frota = [Carro("Fusca"), Carro("Gol"), Carro("Uno"), Carro("Palio")]

for carro in frota:
    print(carro.ligar())
# Fusca ligado!
# Gol ligado!
# Uno ligado!
# Palio ligado!
```

> **Resumindo:** Um objeto é a instância concreta criada a partir de uma classe. Cada objeto tem seu próprio estado independente — mexer em um não afeta os outros.

## Mini-jogo

- [ ] Tem interativo

## Exercício

**Pergunta:** Dado `class Gato`, qual opção cria corretamente **dois objetos distintos**?

- [ ] `gato1 = Gato` e `gato2 = Gato`
- [x] `gato1 = Gato()` e `gato2 = Gato()` ← correta
- [ ] `gato1 = new Gato()` e `gato2 = new Gato()`
- [ ] `Gato.gato1()` e `Gato.gato2()`

**Explicação:** Em Python, instanciamos objetos chamando a classe como função: `Gato()`. Cada chamada cria uma instância independente.
