import type { Missao } from '../types';

const missao: Missao = {
  id: "2-2",
  title: "Sobrecarga",
  icon: "🔀",
  theory: `
## Sobrecarga (Overload)

**Sobrecarga** é a capacidade de um método aceitar diferentes conjuntos de argumentos. Em linguagens como Java e C++, isso é feito criando múltiplos métodos com o mesmo nome mas assinaturas diferentes.

Python não suporta sobrecarga tradicional — mas oferece mecanismos equivalentes e mais flexíveis.

### Abordagem 1 — Parâmetros com valor padrão

\`\`\`python
class Calculadora:
    def somar(self, a, b, c=0):
        return a + b + c

calc = Calculadora()
print(calc.somar(2, 3))     # 5
print(calc.somar(2, 3, 4))  # 9
\`\`\`

### Abordagem 2 — \`*args\` e \`**kwargs\`

\`\`\`python
class Relatorio:
    def gerar(self, *titulos, formato="txt"):
        conteudo = " | ".join(titulos)
        return f"[{formato.upper()}] {conteudo}"

r = Relatorio()
print(r.gerar("Vendas"))                           # [TXT] Vendas
print(r.gerar("Vendas", "Estoque", formato="pdf")) # [PDF] Vendas | Estoque
\`\`\`

### Abordagem 3 — \`@singledispatch\` (sobrecarga por tipo)

\`\`\`python
from functools import singledispatch

@singledispatch
def processar(dado):
    return f"Tipo desconhecido: {dado}"

@processar.register(int)
def _(dado):
    return f"Inteiro: {dado * 2}"

@processar.register(str)
def _(dado):
    return f"Texto: {dado.upper()}"

print(processar(5))       # Inteiro: 10
print(processar("ola"))   # Texto: OLA
\`\`\`
`,
  exercise: {
    question: "Como Python simula sobrecarga de métodos de forma nativa?",
    options: [
      "Criando múltiplos métodos com o mesmo nome e assinaturas diferentes, como em Java.",
      "Usando parâmetros com valor padrão, `*args`, `**kwargs` ou `@singledispatch`.",
      "Python não suporta nenhuma forma de sobrecarga ou alternativa equivalente.",
      "Usando herança múltipla para definir variações do mesmo método."
    ],
    correct: 1,
    explanation: "Correto! Python usa parâmetros opcionais e empacotamento de argumentos como alternativa flexível à sobrecarga tradicional."
  },
  has_interativo: false
};

export default missao;
