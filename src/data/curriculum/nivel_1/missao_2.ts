import type { Missao } from "../types";

const missao: Missao = {
  id: "1-2",
  title: "Objeto",
  icon: "PiCircle",
  emblem: "Criatura Marinha",
  theory: `
## Objetos estão em todo lugar

Olhe ao redor. Cadeira. Celular. Cachorro. Caneta.

Todo objeto do mundo real tem duas coisas em comum:

- **Características** — como ele *é* (cor, nome, tamanho, peso...)
- **Ações** — o que ele *faz* (latir, carregar, rolar, escrever...)

Em programação, os objetos funcionam exatamente igual: possuem características próprias e realizam ações. Na nossa jornada, utilizaremos o universo marinho, em especial os polvos, que são animais muito versáteis - assim como a POO - para ilustrar o funcionamento desses objetos.

{{duvida-objeto-unico}}

---

## Otto encontra Ada

Otto está em expedição pelo oceano quando avista uma criatura que nunca viu.

Ela existe. Tem uma cor. Um tamanho. Um número de tentáculos. E sabe fazer coisas — nada, se camufla, solta tinta.

Otto não sabe como essa criatura foi criada. Não importa — ele consegue observá-la e interagir com ela. Isso é um **objeto**: algo com características próprias e ações que sabe executar.


---

## Cada objeto é único

No oceano de Otto há outros polvos. Cada um é uma entidade separada — mesma natureza, dados completamente diferentes.

Ada é rosa com 8 tentáculos. Ana é azul com 6. Douglas é verde.

Mude as características de um — o outro não muda. Cada objeto guarda seus próprios dados de forma independente.


---

## As três marcas de todo objeto

Todo objeto — de um polvo a um celular — carrega três marcas:

| Marca | O que é | Exemplo |
|---|---|---|
| **Identidade** | O que o diferencia dos outros | Ada ≠ Ana ≠ Douglas |
| **Estado** | As características que carrega no momento | cor: Rosa, tentáculos: 8 |
| **Comportamento** | O que ele sabe fazer | nadar, dar pirueta, soltar tinta |

---

## De onde Ada veio?

Otto observa, interage, anota. Mas uma pergunta fica no ar:

*Quem definiu que Ada seria rosa? Que teria 8 tentáculos? Que saberia nadar?*

A resposta ainda é um mistério. A caixa preta ainda está fechada.

Isso você descobre na **Missão 5**.
`,
  exercise: {
    question:
      "Otto encontra dois polvos: Ada (rosa, 8 tentáculos) e Ana (azul, 6 tentáculos). Ele muda a cor de Ada para verde. O que acontece com Ana?",
    options: [
      "Ana também fica verde — objetos do mesmo tipo compartilham características.",
      "Ana continua azul — cada objeto guarda seus próprios dados de forma independente.",
      "Ana desaparece — só pode existir um polvo de cada vez.",
      "Ana perde todas as características — qualquer mudança afeta todos os objetos.",
    ],
    correct: 1,
    explanation:
      "Cada objeto existe de forma independente. Mudar Ada não afeta Ana — cada um carrega seus próprios dados.",
    wrong_explanations: [
      "Não. Cada objeto é independente — tem seus próprios dados. Mudar Ada não afeta Ana em nada.",
      "",
      "Não. Vários objetos do mesmo tipo podem existir ao mesmo tempo. Ada e Ana são entidades separadas e independentes.",
      "Não. Mudar uma característica de Ada só afeta Ada. Ana é uma entidade independente com seus próprios dados intactos.",
    ],
  },
  has_interativo: false,
};

export default missao;
