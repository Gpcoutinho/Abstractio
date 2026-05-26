import type { Missao } from '../types';

const missao: Missao = {
  id: "4-3",
  title: "Acoplamento",
  icon: "PiLockOpen",
  emblem: "Desacorrentador(a) de Tentáculos",
  theory: `
## Acoplamento

**Acoplamento** mede o grau de dependência entre classes. **Alto acoplamento** significa que mudanças em uma classe forçam mudanças em outras — o sistema vira uma "bola de neve".

### Alto acoplamento — o problema

\`\`\`python
class Pedido:
    def finalizar(self):
        db   = MySQLConexao("localhost", "root", "senha")  # dependência direta
        db.salvar(self)
        smtp = SMTPEmailSender("smtp.gmail.com", 587)      # dependência direta
        smtp.enviar("Pedido confirmado!")
\`\`\`

\`Pedido\` conhece detalhes de banco e email. Trocar MySQL por PostgreSQL exige mexer em \`Pedido\`.

### Baixo acoplamento — a solução (Injeção de Dependência)

\`\`\`python
from abc import ABC, abstractmethod

class Repositorio(ABC):
    @abstractmethod
    def salvar(self, pedido): pass

class Notificador(ABC):
    @abstractmethod
    def enviar(self, msg: str): pass

class Pedido:
    def __init__(self, repo: Repositorio, notif: Notificador):
        self.repo  = repo   # recebe dependência de fora
        self.notif = notif

    def finalizar(self):
        self.repo.salvar(self)
        self.notif.enviar("Pedido confirmado!")

# Trocar implementações sem tocar em Pedido:
class MySQLRepositorio(Repositorio):
    def salvar(self, pedido): ...

class EmailNotificador(Notificador):
    def enviar(self, msg): ...

pedido = Pedido(MySQLRepositorio(), EmailNotificador())
pedido.finalizar()
\`\`\`

### Coesão x Acoplamento

| | Alta Coesão | Baixo Acoplamento |
|---|---|---|
| Foco | Dentro da classe | Entre classes |
| Meta | Classe com propósito único | Classes com poucas dependências |
| Benefício | Fácil de manter | Fácil de trocar partes |

> O objetivo é sempre: **alta coesão + baixo acoplamento**.
`,
  exercise: {
    question: "O que é Injeção de Dependência e como ela reduz o acoplamento?",
    options: [
      "É uma técnica de herança que injeta métodos de uma classe em outra automaticamente.",
      "É passar as dependências de uma classe de fora para dentro (via construtor ou método), em vez de criá-las internamente.",
      "É um padrão que aumenta o acoplamento para garantir mais controle sobre as dependências.",
      "É injetar código diretamente no banco de dados para reduzir chamadas externas."
    ],
    correct: 1,
    explanation: "Correto! Injeção de dependência desacopla a classe de suas implementações concretas — ela recebe o que precisa de fora, facilitando troca e testes."
  },
  has_minigame: false
};

export default missao;
