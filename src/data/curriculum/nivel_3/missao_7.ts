import type { Missao } from '../types';

const missao: Missao = {
  id: "3-7",
  title: "Relacionamentos",
  icon: "🔗",
  theory: `
## Relacionamentos entre objetos

Objetos raramente existem sozinhos. Em sistemas reais, eles se conectam de formas diferentes — e cada tipo de conexão tem um nome e implicações diferentes.

### Os 3 tipos principais

| Tipo | Símbolo | Força | Analogia |
|---|---|---|---|
| **Associação** | → | Fraca | Motorista usa um carro |
| **Agregação** | ◇→ | Média | Time tem jogadores |
| **Composição** | ◆→ | Forte | Casa tem cômodos |

### A pergunta-chave: o que acontece quando o "todo" é destruído?

- **Associação** — a parte continua existindo (o carro não some se o motorista sair)
- **Agregação** — a parte continua existindo (jogadores continuam existindo sem o time)
- **Composição** — a parte é destruída junto (cômodos não existem sem a casa)

### Por que isso importa?

Modelar relações corretamente impacta:
- **Ciclo de vida** dos objetos (quem cria, quem destrói)
- **Responsabilidade** por memória e recursos
- **Flexibilidade** do design (o que pode ser trocado ou reutilizado)

> As próximas missões detalham cada tipo com exemplos práticos.
`,
  exercise: {
    question: "Qual pergunta central diferencia os 3 tipos de relacionamento entre objetos?",
    options: [
      "Quantos métodos cada objeto possui?",
      "O que acontece com a parte quando o objeto 'todo' é destruído?",
      "Qual objeto foi criado primeiro na memória?",
      "Quantas classes participam do relacionamento?"
    ],
    correct: 1,
    explanation: "Correto! A sobrevivência da parte quando o todo é destruído é o critério que define se a relação é associação, agregação ou composição."
  },
  has_interativo: false
};

export default missao;
