import type { Missao } from '../types';

const missao: Missao = {
  id: "1-3",
  title: "Atributos",
  icon: "PiTag",
  emblem: "Pintor(a) de Tentáculos",
  theory: `
## Otto abre o caderno

Na missão anterior, Otto encontrou Ada no oceano. Ela existe, é única, tem identidade própria.

Agora Otto tira o caderno de campo e começa a registrar tudo o que observa: cor, tamanho, número de tentáculos, espécie...

Cada informação registrada é um **atributo** — um dado que pertence especificamente a Ada.

> **Atributo** = uma informação que pertence a um objeto. Cada objeto guarda os seus próprios valores.

<ficha-interativo></ficha-interativo>

---

## O ponto — como acessar um atributo

Em Python, o ponto (\`.\`) é a forma de acessar um atributo de um objeto. É como Otto apontando para Ada e dizendo: *"me dê sua cor"*.

<ficha-acesso></ficha-acesso>

A estrutura é sempre: \`objeto.atributo\`.

---

## Cada polvo guarda os seus

No oceano há outros polvos. Cada um carrega seus próprios atributos — completamente independentes entre si.

\`\`\`python
print(ada.cor)     # rosa
print(ana.cor)     # azul
print(douglas.cor) # verde
\`\`\`

Mudar a cor de Ada não afeta Ana. Mudar Ana não afeta Douglas. Cada objeto é uma entidade separada com seus próprios dados.

---

## Atributos podem mudar

O estado de um objeto pode evoluir. Otto observa Ada se camuflando e atualiza o caderno:

\`\`\`python
ada.cor = "transparente"
print(ada.cor)  # transparente
\`\`\`

Só \`ada.cor\` mudou. Ana e Douglas continuam com as suas.
`,
  exercise: {
    question: "Otto lê `ada.cor` e vê `\"rosa\"`. Em seguida escreve `ana.cor = \"verde\"`. O que acontece com `ada.cor`?",
    options: [
      "Muda para \"verde\" — objetos do mesmo tipo compartilham atributos.",
      "Continua \"rosa\" — cada objeto guarda seus próprios atributos.",
      "Fica indefinido — só um polvo pode ter cor definida por vez.",
      "Gera um erro — não é possível alterar atributos de objetos separados."
    ],
    correct: 1,
    explanation: "Atributos pertencem a cada objeto individualmente. Mudar `ana.cor` não afeta `ada.cor` — são dados completamente independentes.",
    wrong_explanations: [
      "Não. Atributos são independentes por objeto. Mudar `ana.cor` só afeta Ana — Ada mantém seus próprios dados intactos.",
      "",
      "Não. Vários objetos podem ter o mesmo atributo definido ao mesmo tempo. Ada e Ana são entidades independentes, cada uma com sua própria `cor`.",
      "Não. Alterar o atributo de um objeto nunca afeta o de outro. `ana.cor = \"verde\"` é válido e só modifica Ana."
    ]
  },
  has_interativo: false
};

export default missao;
