import type { Missao } from '../types';

const missao: Missao = {
  id: "4-7",
  title: "Resumo",
  icon: "PiClipboard",
  emblem: "O(A) Kraken do Código",
  theory: `
## Resumo — O arquiteto mestre

Parabéns! Você concluiu a trilha completa de Orientação a Objetos.

### O que você domina agora

| Nível | Conquista |
|---|---|
| **Fundamentos** | Criar classes, objetos, métodos e construtores |
| **Pilares** | Aplicar abstração, encapsulamento, herança e polimorfismo |
| **Relações** | Modelar sistemas com sobrescrita, contratos e relacionamentos |
| **Arquitetura** | Projetar com coesão, baixo acoplamento, SOLID, generics e patterns |

### O checklist do arquiteto

Ao projetar uma classe, pergunte-se:

- [ ] **Coesão** — esta classe tem um propósito único?
- [ ] **Acoplamento** — ela depende de abstrações, não de implementações?
- [ ] **SRP** — há apenas uma razão para ela mudar?
- [ ] **OCP** — posso estendê-la sem modificar o código existente?
- [ ] **LSP** — as subclasses respeitam o contrato da superclasse?
- [ ] **ISP** — as interfaces são específicas o suficiente?
- [ ] **DIP** — as dependências são injetadas, não criadas internamente?

### O caminho não para aqui

Design de software é uma habilidade que se aprofunda com prática. Os próximos passos naturais são:

- **Clean Architecture** — organização de sistemas em camadas
- **Domain-Driven Design** — modelagem centrada no domínio do negócio
- **Test-Driven Development** — design guiado por testes

> *"Qualquer tolo pode escrever código que um computador entende. Bons programadores escrevem código que humanos entendem."* — Martin Fowler
`,
  exercise: {
    question: "Qual combinação representa o objetivo central do nível de arquitetura?",
    options: [
      "Máximo de classes possível + mínimo de métodos por classe.",
      "Alta coesão + baixo acoplamento + princípios SOLID.",
      "Usar todos os design patterns disponíveis em cada projeto.",
      "Evitar generics e abstrações para manter o código simples."
    ],
    correct: 1,
    explanation: "Exato! Alta coesão (propósito único por classe) + baixo acoplamento (dependências via abstração) + SOLID é a fórmula do design orientado a objetos de qualidade."
  },
  has_minigame: false
};

export default missao;
