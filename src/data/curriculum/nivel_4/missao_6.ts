import type { Missao } from '../types';

const missao: Missao = {
  id: "4-6",
  title: "Design Patterns",
  icon: "PiMapTrifold",
  emblem: "Engenheiro(a) das Fossas Marianas",
  theory: `
## Design Patterns

**Design Patterns** (Padrões de Projeto) são soluções consagradas para problemas recorrentes em design de software. Foram catalogados por Erich Gamma et al. no livro "Design Patterns" (Gang of Four).

Não são código pronto — são **modelos de solução** adaptáveis ao contexto.

### As 3 categorias

| Categoria | Foco | Exemplos |
|---|---|---|
| **Criacionais** | Como objetos são criados | Factory, Singleton, Builder |
| **Estruturais** | Como classes se organizam | Adapter, Decorator, Facade |
| **Comportamentais** | Como objetos se comunicam | Strategy, Observer, Command |

---

### Strategy — comportamento intercambiável

\`\`\`python
from abc import ABC, abstractmethod

class EstrategiaOrdenacao(ABC):
    @abstractmethod
    def ordenar(self, dados: list) -> list: pass

class BubbleSort(EstrategiaOrdenacao):
    def ordenar(self, dados):
        d = dados[:]
        for i in range(len(d)):
            for j in range(len(d) - i - 1):
                if d[j] > d[j+1]:
                    d[j], d[j+1] = d[j+1], d[j]
        return d

class PythonSort(EstrategiaOrdenacao):
    def ordenar(self, dados):
        return sorted(dados)

class Processador:
    def __init__(self, estrategia: EstrategiaOrdenacao):
        self._estrategia = estrategia

    def processar(self, dados):
        return self._estrategia.ordenar(dados)

p = Processador(PythonSort())
print(p.processar([3, 1, 4, 1, 5]))  # [1, 1, 3, 4, 5]
\`\`\`

---

### Observer — notificação de eventos

\`\`\`python
class EventoEstoque:
    def __init__(self):
        self._observadores = []

    def assinar(self, obs):
        self._observadores.append(obs)

    def notificar(self, produto, quantidade):
        for obs in self._observadores:
            obs.atualizar(produto, quantidade)

class AlertaEmail:
    def atualizar(self, produto, qtd):
        print(f"📧 Email: {produto} — restam {qtd} unidades.")

class AlertaSMS:
    def atualizar(self, produto, qtd):
        print(f"📱 SMS: Estoque baixo de {produto}!")

evento = EventoEstoque()
evento.assinar(AlertaEmail())
evento.assinar(AlertaSMS())
evento.notificar("Caneta", 3)
\`\`\`

---

### Factory — criação centralizada

\`\`\`python
class ConexaoBanco(ABC):
    @abstractmethod
    def conectar(self): pass

class MySQL(ConexaoBanco):
    def conectar(self): return "Conectado ao MySQL"

class PostgreSQL(ConexaoBanco):
    def conectar(self): return "Conectado ao PostgreSQL"

def fabrica_banco(tipo: str) -> ConexaoBanco:
    bancos = {"mysql": MySQL, "postgres": PostgreSQL}
    return bancos[tipo]()

db = fabrica_banco("postgres")
print(db.conectar())
\`\`\`
`,
  exercise: {
    question: "O padrão **Strategy** é mais adequado quando:",
    options: [
      "Você precisa garantir que uma classe tenha apenas uma instância no sistema.",
      "Você quer poder trocar o algoritmo ou comportamento de um objeto em tempo de execução sem alterar o código que o usa.",
      "Você precisa notificar múltiplos objetos quando o estado de outro muda.",
      "Você quer criar objetos complexos passo a passo."
    ],
    correct: 1,
    explanation: "Correto! Strategy encapsula algoritmos intercambiáveis — o objeto que os usa não precisa saber qual estratégia está ativa, apenas chamá-la."
  },
  has_interativo: false
};

export default missao;
