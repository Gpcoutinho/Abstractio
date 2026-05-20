# MissÃ£o 1-2 â€” Objeto

**Ãcone:** PiCircle
**Emblema:** Criatura Marinha

## Teoria

### Objetos estÃ£o em todo lugar

Olhe ao redor. Cadeira. Celular. Cachorro. Caneta.

Todo objeto do mundo real tem duas coisas em comum:

- **CaracterÃ­sticas** â€” como ele _Ã©_ (cor, nome, tamanho, peso...)
- **AÃ§Ãµes** â€” o que ele _faz_ (latir, carregar, rolar, escrever...)

> [svg: trÃªs cards â€” Cachorro, Celular e Carro â€” com seÃ§Ãµes explÃ­citas "caracterÃ­sticas" (dados em cinza) e "aÃ§Ãµes" (comportamentos em verde). AnimaÃ§Ã£o fade+slide em sequÃªncia. Adaptar labels do diagramaObjetos existente.]

Em programaÃ§Ã£o, os objetos funcionam exatamente igual: possuem caracterÃ­sticas prÃ³prias e realizam aÃ§Ãµes. Na nossa jornada, utilizaremos o universo marinho, em especial os polvos, que sÃ£o animais muito versÃ¡teis - assim como a POO - para ilustrar o funcionamento desses objetos.

---

### Otto encontra Ada

Otto estÃ¡ em expediÃ§Ã£o pelo oceano quando avista uma criatura que nunca viu.

Ela existe. Tem uma cor. Um tamanho. Um nÃºmero de tentÃ¡culos. E sabe fazer coisas â€” nada, se camufla, solta tinta.

Otto nÃ£o sabe como essa criatura foi criada. NÃ£o importa â€” ele consegue observÃ¡-la e interagir com ela. Isso Ã© um **objeto**: algo com caracterÃ­sticas prÃ³prias e aÃ§Ãµes que sabe executar.

> [interativo: PolvosInterativo â€” painel esquerdo "CaracterÃ­sticas" com seletores de cor (Roxo / Azul / Verde), tamanho (Pequeno / Grande) e tentÃ¡culos (6 / 8); painel direito "AÃ§Ãµes" com botÃµes Nadar, Dar pirueta, Soltar tinta; Ada no centro reage visualmente a cada seleÃ§Ã£o e aÃ§Ã£o. Sem cÃ³digo visÃ­vel.]

---

### Cada objeto Ã© Ãºnico

No oceano de Otto hÃ¡ outros polvos. Cada um Ã© uma entidade separada â€” mesma natureza, dados completamente diferentes.

Ada Ã© roxo e pequeno. AzulÃ£o Ã© azul e grande. Marinho Ã© verde.

Mudar algo em Ada nÃ£o muda AzulÃ£o. Cada objeto guarda seus prÃ³prios dados de forma independente.

> [svg: trÃªs polvos lado a lado â€” Ada (roxo, pequeno, 8 tentÃ¡culos), AzulÃ£o (azul, grande, 6 tentÃ¡culos), Marinho (verde, mÃ©dio, 8 tentÃ¡culos) â€” cada um com card de dados abaixo.]

---

### As trÃªs marcas de todo objeto

Todo objeto â€” de um polvo a um celular â€” carrega trÃªs marcas:

| Marca             | O que Ã©                                   | Em Ada                      |
| ----------------- | ----------------------------------------- | -------------------------------- |
| **Identidade**    | O que o diferencia dos outros             | Ada â‰  AzulÃ£o â‰  Marinho      |
| **Estado**        | As caracterÃ­sticas que carrega no momento | cor: Roxo, tentÃ¡culos: 8         |
| **Comportamento** | O que ele sabe fazer                      | nadar, dar pirueta, soltar tinta |

---

### De onde Ada veio?

Otto observa, interage, anota. Mas uma pergunta fica no ar:

_Quem definiu que Ada seria roxo? Que teria 8 tentÃ¡culos? Que saberia nadar?_

A resposta ainda Ã© um mistÃ©rio. A caixa preta ainda estÃ¡ fechada.

Isso vocÃª descobre na **MissÃ£o 5**.

---

## Mini-jogo

- [ ] Tem interativo

## ExercÃ­cio

**Pergunta:** Otto encontra dois polvos: Ada (roxo, 8 tentÃ¡culos) e AzulÃ£o (azul, 6 tentÃ¡culos). Ele muda a cor de Ada para verde. O que acontece com AzulÃ£o?

- [ ] AzulÃ£o tambÃ©m fica verde â€” objetos do mesmo tipo compartilham caracterÃ­sticas.
- [x] AzulÃ£o continua azul â€” cada objeto guarda seus prÃ³prios dados de forma independente. â† correta
- [ ] AzulÃ£o desaparece â€” sÃ³ pode existir um polvo de cada vez.
- [ ] AzulÃ£o perde todas as caracterÃ­sticas â€” qualquer mudanÃ§a afeta todos os objetos.

**ExplicaÃ§Ã£o:** Cada objeto existe de forma independente. Mudar Ada nÃ£o afeta AzulÃ£o â€” cada um carrega seus prÃ³prios dados.
