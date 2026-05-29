import type { Missao } from '../types';

const missao: Missao = {
  id: "2-1",
  title: "Introdução ao nível",
  icon: "PiGlobe",
  emblem: "Preparando o Submarino",
  theory: `
## Por que objetos precisam de regras?

Imagine que você acabou de construir uma cidade de LEGO. Você tem casas, carros, pessoas, árvores — tudo feito de blocos.

Agora imagine que alguém embaralha tudo: rodas de carros dentro das casas, pessoas onde deveriam estar as árvores, ninguém consegue mais entender nada.

Isso acontece em programas grandes quando os objetos não seguem regras. Você pode ter 500 classes e nenhuma delas conversar direito com as outras.

---

## As 4 leis dos objetos bem-comportados

No Nível 1, você aprendeu a **criar** objetos. Agora você aprende as **4 leis** que fazem objetos trabalharem bem juntos — são os chamados **Pilares da POO**.

| Pilar | Em uma frase | Analogia |
|---|---|---|
| **Abstração** | Mostre só o que importa | Controle remoto: você aperta o botão, não sabe o circuito |
| **Encapsulamento** | Proteja o que é interno | Caixa-forte: só quem tem a senha pode abrir |
| **Herança** | Reaproveite o que já existe | Receita de família: a base é a mesma, cada um adiciona seu tempero |
| **Polimorfismo** | Trate diferentes iguais | Tomada elétrica: funciona com qualquer aparelho que encaixe |

---

## Por que esses 4 e não outros?

Esses pilares não foram inventados do nada — foram destilados de **décadas** de programadores aprendendo da forma difícil o que causa problemas em sistemas grandes.

**Sem abstração:** você teria que entender o código interno de cada classe para usá-la.
**Sem encapsulamento:** qualquer parte do código poderia corromper os dados de qualquer objeto.
**Sem herança:** você copiaria e colaria o mesmo código em dezenas de lugares.
**Sem polimorfismo:** você teria intermináveis \`if\`/\`elif\` para tratar cada tipo de objeto.

Juntos, os 4 pilares produzem código que é:

- **Organizado** — cada coisa no seu lugar
- **Seguro** — dados protegidos de acidentes
- **Reutilizável** — escreva uma vez, use sempre
- **Extensível** — adicione novos tipos sem quebrar o que já funciona

> As próximas 4 missões exploram cada pilar em detalhe. Ao final, você vai ver tudo se encaixar em um único exemplo poderoso.
`,
  exercise: {
    question: "Qual é o principal objetivo dos 4 pilares da POO?",
    options: [
      "Tornar o código organizado, reutilizável, seguro e extensível.",
      "Aumentar o número de linhas de código para tornar o sistema mais robusto.",
      "Substituir completamente a programação procedural em todos os casos.",
      "Garantir que todas as classes herdem de uma única superclasse."
    ],
    correct: 0,
    explanation: "Correto! Os pilares são princípios que, juntos, produzem código de qualidade: organizado, reutilizável, seguro e extensível — sem precisar duplicar lógica ou quebrar tudo ao mudar uma coisa."
  },
  has_interativo: false
};

export default missao;
