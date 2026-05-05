import type { Missao } from '../types';

const missao: Missao = {
  id: "1-3",
  title: "Objeto",
  icon: "🔵",
  theory: `
## O biscoito, não a forma

Na missão anterior, você aprendeu que a **classe** é o molde. Agora é hora de conhecer o produto: o **objeto**.

Se a classe \`Cachorro\` é o molde, então \`rex = Cachorro("Rex", "Labrador")\` cria o **objeto** — o cachorro Rex de verdade, que existe na memória do computador e tem seus próprios dados.

> **Objeto** = uma instância concreta criada a partir de uma classe.

"Instanciar" é o termo técnico para "criar um objeto a partir de uma classe".

---

## Cada objeto é independente

Esse é um dos pontos mais importantes da POO: **cada objeto tem seu próprio estado**.

\`\`\`python
class Carro:
    def __init__(self, modelo):
        self.modelo    = modelo
        self.ligado    = False      # todo carro começa desligado
        self.velocidade = 0         # todo carro começa parado

    def ligar(self):
        self.ligado = True
        return f"{self.modelo} ligado!"

    def acelerar(self, km):
        if self.ligado:
            self.velocidade += km
            return f"{self.modelo} a {self.velocidade} km/h"
        return f"{self.modelo} ainda está desligado!"

# Criando dois objetos a partir do mesmo molde
fusca = Carro("Fusca")
gol   = Carro("Gol")

# Cada um tem seu próprio estado — mexer em um não afeta o outro
print(fusca.ligar())        # Fusca ligado!
print(fusca.acelerar(60))   # Fusca a 60 km/h

print(gol.ligado)           # False — Gol continua desligado!
print(fusca.velocidade)     # 60
print(gol.velocidade)       # 0
\`\`\`

---

## As três características de todo objeto

Todo objeto em POO possui três propriedades fundamentais:

| Característica | O que significa | No exemplo acima |
|---|---|---|
| **Identidade** | O que diferencia um objeto do outro | \`fusca\` ≠ \`gol\`, mesmo modelo igual |
| **Estado** | Os valores atuais dos atributos | \`fusca.ligado = True\`, \`gol.ligado = False\` |
| **Comportamento** | O que o objeto pode fazer | \`.ligar()\`, \`.acelerar()\` |

---

## Quantos objetos você pode criar?

Quantos quiser! A classe é um molde reutilizável:

\`\`\`python
carros = [
    Carro("Fusca"),
    Carro("Gol"),
    Carro("Uno"),
    Carro("Palio"),
]

# Ligar todos de uma vez
for carro in carros:
    print(carro.ligar())

# Fusca ligado!
# Gol ligado!
# Uno ligado!
# Palio ligado!
\`\`\`

---

## Como verificar o tipo de um objeto

\`\`\`python
print(type(fusca))                # <class '__main__.Carro'>
print(isinstance(fusca, Carro))   # True — fusca é um Carro
\`\`\`

> **Resumindo:** Um objeto é uma instância concreta de uma classe — o "produto" criado a partir do "molde". Cada objeto tem seu próprio estado independente, mesmo que venha da mesma classe.
`,
  exercise: {
    question: "Dado `class Gato`, qual opção cria corretamente **dois objetos distintos**?",
    options: [
      "`gato1 = Gato` e `gato2 = Gato`",
      "`gato1 = Gato()` e `gato2 = Gato()`",
      "`gato1 = new Gato()` e `gato2 = new Gato()`",
      "`Gato.gato1()` e `Gato.gato2()`"
    ],
    correct: 1,
    explanation: "Correto! Em Python, instanciamos objetos chamando a classe como função: `Gato()`. Cada chamada cria uma instância independente."
  },
  has_interativo: false
};

export default missao;
