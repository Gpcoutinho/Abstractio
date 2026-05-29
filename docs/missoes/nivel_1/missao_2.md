<!-- NOTAS DE DESENVOLVIMENTO – não são conteúdo da missão -->

## [notas] Referências e decisões para esta missão

### Fontes bibliográficas

**Weisfeld – Cap. 1, p. 10–14 ("What Exactly Is an Object?")**
Foco: objeto como entidade com dados e comportamentos. Apresentar sem ainda definir classe formalmente.

Trechos disponíveis:
- `referencias/Weisfeld/missao_2_trechos.txt` – definição central (p. 6): *"an object is an entity that contains both data and behavior"*
- `referencias/Weisfeld/guardados.txt` – Bloco 4: *"people already think in terms of objects"* → gancho de abertura
- `referencias/Weisfeld/guardados.txt` – Bloco 5: *"Objects are the building blocks of an OO program"* → encerramento conceitual
- `referencias/Weisfeld/guardados.txt` – Bloco 6: definições compactas de objeto, atributo e método

**BlueJ – Kölling et al. (2003)**
Princípio Objects First: o aluno observa e interage com objetos antes de qualquer formalização. A definição deve emergir da experiência, não antecedê-la.
Resumo completo: `referencias/BlueJ/resumo_bluej_pedagogy.txt`

---

### Linha narrativa (narrativa_exemplos.md)
- Otto *encontra* Ada no oceano. Não sabe como foi criada – apenas observa que existe, tem identidade própria e é diferente de outros polvos.
- Metáfora da caixa preta: você usa sem saber o que há dentro.
- Nenhuma `class` aparece ainda.
- Nomes: `Ada`, `azulao`, `marinho` (sem nome por enquanto – retornam com o interativo)

---

### Terminologia fixada para o app inteiro
Usar **sempre** estes termos – nunca misturar com "estado", "comportamento" ou "atributos":
- Dados do objeto → **características**
- O que o objeto faz → **ações**
- Tabela "três marcas": Identidade / **Características** / **Ações**

---

### Estrutura das seções (Objects First – BlueJ)
1. Otto encontra Ada → observação antes da definição
2. Cada objeto é único → multiplicidade, independência
3. Objetos estão em todo lugar → generalização para o mundo real (reescrita como expansão pós-Ada)
4. As três marcas de todo objeto → tabela com terminologia corrigida
5. De onde Ada veio? → gancho para missão 5

**Visuais disponíveis:**
- `diagramaObjetos` SVG (3 cards: Cachorro, Celular, Carro) → guardado em `docs/guardados.md`; pode voltar na Seção 3 com labels corrigidos
- Interativos `PolvosInterativo` e `TresPolvosInterativo` → removidos temporariamente; componentes mantidos em `src/components/missoes/nivel_1/missao_2/`

---

### Seção de identidade na memória (código Python)

Incluir mini-seção mostrando que dois objetos com características idênticas são entidades distintas.
Rótulo: **Python simplificado** (usa dict como proxy – Polvo ainda não existe nesta missão).

```python
ada   = {"cor": "rosa", "tentaculos": 8}
outra = {"cor": "rosa", "tentaculos": 8}

print(id(ada))    # 4371856896
print(id(outra))  # 4371857024

print(ada == outra)  # True  – mesmas características
print(ada is outra)  # False – entidades distintas
```

`id()` = "digital" única de cada objeto na memória. `==` compara características; `is` compara identidade.

---

### Dúvidas previstas
- `{{duvida-objeto-unico}}` – O que define quais características e ações farão parte de um objeto? → removida desta missão; reservada para outra

<!-- FIM DAS NOTAS -->

---

# Missão 1-2 – Objeto

**Ícone:** PiCircle
**Emblema:** Criatura Marinha

## Teoria

### Otto encontra Ada

Otto está em expedição pelo oceano quando avista um polvo que não conhecia... Ada.

{{ada-card-objeto}}

Ela tem uma cor, um tamanho e um número de tentáculos. E sabe fazer coisas – nada, se camufla, solta tinta.

Para Otto, Ada é uma <destaque>caixa preta</destaque>: ele consegue observá-la e interagir com ela mesmo sem conhecer todos os seus detalhes.

Isso é um <destaque>objeto</destaque>: uma <destaque-reto>entidade</destaque-reto> (algo que existe de forma independente) com características próprias e ações que sabe executar.

{{duvida-entidade-definicao}}

<conceito note="adapt. Weisfeld, 2019"><strong>Objeto</strong>: entidade que reúne, de forma inseparável, características próprias e as ações que é capaz de executar.</conceito>

> [interativo: card Ada como caixa preta – só o polvo visível, sem dados internos]

---

### Cada objeto é único

No oceano de Otto há outros polvos. Cada um é uma entidade separada – mesma natureza, dados completamente diferentes.

Ada é rosa com 8 tentáculos. Mas no oceano há outros polvos – cada um com sua própria cor e seus próprios dados.

Abaixo você pode ver a estrutura essencial de um objeto no universo da POO – o seu nome de referência e as chaves contendo suas características. Guarde esse formato:

```python-simplificado
ada = {
    "cor": "rosa",
    "tentaculos": 8
}
```

Mudar algo em Ada não muda os outros. Cada objeto guarda seus próprios dados de forma independente – ou seja, se Ada mudar de cor agora, os outros polvos continuam exatamente como estavam.

> [svg: três polvos lado a lado – Ada (rosa, 8 tentáculos) + dois outros – cada um com card de dados abaixo.]

Mas o que torna Ada *ela mesma* – e não qualquer outro polvo?

Vejamos a seguir o que acontece quando dois objetos carregam exatamente os mesmos dados:

```python-simplificado
ada   = {"cor": "rosa", "tentaculos": 8}
outra = {"cor": "rosa", "tentaculos": 8}
```

O que será que aconteceria se perguntássemos ao Python qual é o endereço de memória de cada um? Será que, tendo as mesmas características, o Python englobaria os dois em um só? Ou criaria duas variáveis com endereços diferentes? Veredito: se temos dois objetos distintos, então cada um recebe um endereço único na memória. Veja:

```python-simplificado
print(id(ada))    # 4371856896
print(id(outra))  # 4371857024
```

Endereços diferentes – entidades diferentes. Ou seja: mesmo com dados idênticos, Ada e `outra` são dois objetos distintos. Agora a comparação:

```python-simplificado
print(ada == outra)  # True  – mesmas características
print(ada is outra)  # False – entidades distintas
```

`==` compara os dados – ou seja, pergunta "têm o mesmo conteúdo?". `is` compara a identidade – isto é, pergunta "são a mesma coisa?". Mesmo com dados idênticos, Ada e `outra` são entidades distintas. Ada é Ada.

---

### Objetos estão em todo lugar

*Você já pensa em objetos sem perceber.*

Otto olha para Ada e percebe: o que ela é – uma entidade com características e ações – não é exclusividade do oceano.

Um celular tem características (modelo, bateria) e ações (ligar, tirar foto). Uma conta bancária tem características (saldo, titular) e ações (depositar, sacar). O princípio é o mesmo – só o contexto muda.

E é exatamente esse princípio que aparece no mercado de trabalho. Objetos como `ContaBancaria`, `Usuario` e `Produto` são tão reais quanto Ada – têm características próprias, existem de forma independente e cada um carrega seus próprios dados.

Veja como o padrão se repete:

| | Ada | ContaBancaria |
|---|---|---|
| **Características** | cor, tentáculos | saldo, titular |
| **Ações** | nadar, camuflar, soltar tinta | depositar, sacar, consultar saldo |

O oceano é uma metáfora. Os objetos são reais.

---

### Os três elementos de todo objeto

Não importa se é um polvo ou uma conta bancária – todo objeto pode ser descrito pelos mesmos três elementos:

| Elemento | O que é | Ada | ContaBancaria |
|---|---|---|---|
| **Identidade** | O que a torna única | Ada é uma entidade única | cada conta é única |
| **Características** | Os dados que carrega | cor: rosa, tentáculos: 8 | saldo, titular |
| **Ações** | O que ela sabe fazer | nadar, camuflar, soltar tinta | depositar, sacar, consultar saldo |

<destaque-marker>Identidade, características e ações</destaque-marker>. Onde houver um objeto, esses três estarão presentes.

---

### De onde Ada veio?

Otto observa, interage, anota. Mas uma pergunta fica no ar:

*Quem definiu que Ada seria rosa? Que teria 8 tentáculos? Que saberia nadar?*

A resposta ainda é um mistério. A caixa preta ainda está fechada.

Isso você descobre na **Missão 5**.

---

## Mini-jogo

- [ ] Tem interativo

## Exercício

**Pergunta:** Em um sistema de loja online, um produto tem nome, preço e estoque, e pode ser vendido e ter o estoque atualizado. Ele é um objeto porque:

- [ ] Tem um nome que o identifica dentro do sistema
- [x] Reúne características próprias e ações que sabe executar ← correta
- [ ] Está registrado em um banco de dados da loja
- [ ] Possui mais de uma informação cadastrada

**Explicação:** Um objeto é uma entidade que reúne, de forma inseparável, características próprias e as ações que sabe executar. O produto tem características (nome, preço, estoque) e ações (ser vendido, atualizar estoque) — os dois elementos que definem um objeto.

---

## Exercícios extras

**e1 – id: 1-2-e1**
A missão descreve um objeto como uma "caixa preta". Isso significa que:
- [ ] Um objeto só pode ser usado por quem conhece seus detalhes internos → Não. A ideia da caixa preta é o oposto — você usa um objeto sem precisar conhecer seus detalhes internos.
- [ ] Um objeto não possui características que possam ser observadas → Não. Um objeto tem características observáveis, como cor ou saldo. O que fica oculto é como ele funciona por dentro.
- [x] É possível usar um objeto sem saber como ele funciona por dentro ← correta
- [ ] Os dados de um objeto ficam ocultos e nunca podem ser acessados → Não. Os dados de um objeto podem ser acessados. A caixa preta descreve que você não precisa saber o que acontece internamente para interagir com ele.

Explicação: É possível trabalhar com um objeto — observá-lo e interagir com ele — sem saber exatamente o que acontece por dentro. O que importa são as características que ele expõe e as ações que sabe executar.

---

**e2 – id: 1-2-e2**
Quais são os três elementos que todo objeto possui, independentemente do que ele representa?
- [x] Identidade, características e ações ← correta
- [ ] Entrada, processamento e saída → Não. Esse trio descreve o fluxo de um programa, não a estrutura de um objeto.
- [ ] Criação, estado e destruição → Não. Esses são momentos do ciclo de vida de um objeto — não os elementos que o definem.
- [ ] Nome, tipo e valor → Não. Nome, tipo e valor descrevem uma variável — não os três elementos de um objeto.

Explicação: Todo objeto pode ser descrito pelos mesmos três elementos: Identidade (o que o torna único), Características (os dados que carrega) e Ações (o que sabe fazer). Isso vale para qualquer objeto — do mundo natural ou do código.

---

**e3 – id: 1-2-e3**
Dois objetos criados com a mesma estrutura existem de forma:
- [ ] Compartilhada — alterações em um objeto refletem no outro → Não. "Compartilhada" implicaria que mudar um objeto alteraria os outros automaticamente — o que não acontece.
- [ ] Dependente — um objeto sempre acompanha as mudanças do outro → Não. "Dependente" implicaria que um objeto acompanha as mudanças de outro automaticamente — o que também não acontece.
- [x] Independente — cada objeto carrega seus próprios dados ← correta
- [ ] Sincronizada — os dados de todos são mantidos iguais automaticamente → Não. Não há nenhum mecanismo que mantenha os dados de objetos distintos sincronizados automaticamente.

Explicação: Cada objeto existe de forma independente. Mudar um dado em um objeto não afeta os outros — mesmo que tenham sido criados a partir da mesma estrutura.

---

**e4 – id: 1-2-e4**
Uma biblioteca gerencia livros. Cada livro tem título e número de páginas, e pode ser emprestado ou devolvido. No contexto de POO, "ser emprestado" é um exemplo de:
- [ ] Uma característica que o livro possui → Não. Características são os dados que o objeto possui — como título e número de páginas. "Ser emprestado" não é um dado.
- [ ] A identidade que torna o livro único → Não. Identidade é o que torna cada livro único como entidade. "Ser emprestado" não define isso.
- [x] Uma ação que o objeto Livro sabe executar ← correta
- [ ] Um dado compartilhado por todos os livros do sistema → Não. "Ser emprestado" não é um dado registrado no livro. Pense nos dois tipos de elementos que todo objeto possui.

Explicação: Ações são o que um objeto sabe fazer — não o que ele é ou o que tem. "Ser emprestado" e "ser devolvido" são comportamentos do livro, assim como nadar e se camuflar são ações de Ada.

---

**e5 – id: 1-2-e5**
Imagine dois carros idênticos, que saíram da mesma fábrica com mesmo modelo, motor e cor. No contexto de objetos, podemos afirmar que:
- [ ] Eles são o mesmo objeto, pois têm origem e características idênticas. → Não. Ter a mesma origem ou características idênticas não torna dois objetos um só — cada um existe como entidade separada.
- [ ] Eles são objetos síncronos, o que faz suas ações acontecerem juntas. → Não. Objetos distintos não sincronizam ações entre si. Cada um existe e age de forma independente.
- [ ] Eles compartilham a mesma identidade e o mesmo endereço na memória. → Não. Entidades distintas nunca compartilham o mesmo endereço de memória — esse endereço é exatamente o que as diferencia.
- [x] Eles são objetos distintos, cada um com sua própria identidade. ← correta

Explicação: Mesmo com dados idênticos, dois objetos distintos ocupam endereços de memória diferentes. A identidade é o que torna cada objeto único — não os dados que ele carrega.

---

**e6 – id: 1-2-e6**
Um celular (modelo, bateria; ligar, tirar foto) e uma conta bancária (saldo, titular; depositar, sacar) seguem o mesmo princípio de objeto porque:
- [ ] São implementados na mesma linguagem de programação → Não. A linguagem de implementação não define o que é um objeto — o princípio é independente de tecnologia.
- [ ] Têm o mesmo número de características e ações → Não. O número de características e ações não é o que os aproxima. Pense no que qualquer objeto — independente do contexto — sempre tem.
- [x] Ambos possuem características próprias e ações que sabem executar ← correta
- [ ] Pertencem ao mesmo sistema de software → Não. Eles podem pertencer a sistemas completamente diferentes. O que os aproxima é algo mais fundamental do que isso.

Explicação: O princípio de objeto é universal. Qualquer entidade com características próprias e ações que sabe executar é um objeto. O contexto muda; o princípio é o mesmo.
