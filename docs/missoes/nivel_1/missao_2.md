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

### Linha narrativa
- Otto encontra Ada no oceano. Observa características e ações sem saber como foi criada.
- Metáfora da caixa preta: introduzida na abertura.
- Variável `outra` usada nos exemplos de código para demonstrar identidade distinta com dados idênticos.
- Segundo polvo sem nome: aparece no exercício (azul, 6 tentáculos).
- Nenhuma `class` aparece em nenhum momento.

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

**Visuais:**
- `{{ada-card-objeto}}` → componente `AdaCard` com `nivel="objeto"` – Seção 1

---

### Seção de identidade na memória (código Python)

Incluir mini-seção mostrando que dois objetos com características idênticas são entidades distintas.
Rótulo: **Python simplificado** (usa dict como proxy – Polvo ainda não existe nesta missão).

```python
ada   = {"nome": "Ada", "cor": "rosa", "num_tentaculos": 8}
outra = {"nome": "Ada", "cor": "rosa", "num_tentaculos": 8}

print(id(ada))    # 4371856896
print(id(outra))  # 4371857024

print(ada == outra)  # True  – mesmas características
print(ada is outra)  # False – entidades distintas
```

`id()` = "digital" única de cada objeto na memória. `==` compara características; `is` compara identidade.

---

### Dúvidas previstas
- `{{duvida-entidade-definicao}}` – "O que significa 'entidade'?" → ativa nesta missão
  - Resposta: 'Entidade' é um termo central em POO e nos diagramas UML. Significa algo que existe de forma independente, com identidade própria, distinguível de tudo o mais. Ada é uma entidade: ela existe e é única.
- `{{duvida-objeto-unico}}` – O que define quais características e ações farão parte de um objeto? → removida desta missão; reservada para outra

---

### Resumo (campo `resumo` no .ts)

Adicionado em 2025-05-25. Aparece como card com `<h2>` "Resumo" + `<hr>` separador, entre o mini-jogo e o exercício.

Itens:
- **Objeto** – entidade que reúne, de forma inseparável, características e ações
- **Identidade** – cada objeto existe de forma única na memória, distinguível de qualquer outro
- **Características** – os dados que o objeto carrega
- **Ações** – o que o objeto sabe executar
- **Caixa preta** – você pode observar e interagir com um objeto sem conhecer seus detalhes internos

---

### Ordem das seções na página (Missao.tsx)

Válida para todas as missões a partir de 2025-05-25:

1. Teoria
2. Mini-jogo *(se `has_minigame: true`)*
3. Resumo *(se `resumo` preenchido)*
4. Exercício
5. Footer (Concluída / Marcar como concluída)
6. Baú de Conchas *(se `extra_exercises` preenchido)*
7. Referências bibliográficas *(colapsável; se `references` preenchido)*
8. Navegação de rodapé

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

Para Otto, Ada é uma "caixa preta": ele consegue observá-la e interagir com ela mesmo sem conhecer todos os seus detalhes.

Isso é um <destaque>objeto</destaque>: uma <destaque-reto>entidade</destaque-reto> (algo que existe de forma independente) com características próprias e ações que sabe executar.

{{duvida-entidade-definicao}}

<conceito note="adapt. Weisfeld, 2019"><strong>Objeto</strong>: entidade que reúne, de forma inseparável, características próprias e as ações que é capaz de executar.</conceito>

> [interativo: card Ada como caixa preta – só o polvo visível, sem dados internos]

---

### Cada objeto é único

No oceano de Otto há outros polvos. Cada um é uma entidade separada – mesma natureza, dados completamente diferentes.

Ada é rosa com 8 tentáculos. Mas no oceano há outros polvos – cada um com sua própria cor e seus próprios dados.

Se você pedir para o Python te mostrar a estrutura interna da "caixa-preta" que é o objeto, ele vai te mostrar algo parecido com isso:

```python-simplificado
ada = {
    "nome": "Ada",
    "cor": "rosa",
    "num_tentaculos": 8
}
```

Ou seja, ele vai te mostrar a estrutura essencial de um objeto no universo da POO – o seu "nome" (que chamamos de "rótulo") ('ada') e as chaves contendo suas características. Guarde esse formato: rótulo + chaves + características.

Mudar algo em Ada não muda os outros. Cada objeto guarda seus próprios dados de forma independente – ou seja, se Ada mudar de cor agora, os outros polvos continuam exatamente como estavam.

> [svg: três polvos lado a lado – Ada (rosa, 8 tentáculos) + dois outros – cada um com card de dados abaixo.]

Mas o que torna Ada *ela mesma* – e não qualquer outro polvo?

Vejamos a seguir o que acontece quando dois objetos carregam exatamente os mesmos dados:

```python-simplificado
ada   = {"nome": "Ada", "cor": "rosa", "num_tentaculos": 8}
outra = {"nome": "Ada", "cor": "rosa", "num_tentaculos": 8}
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

`==` compara os dados – ou seja, pergunta "têm o mesmo conteúdo?". `is` compara a identidade – isto é, pergunta "são a mesma coisa?". Mesmo com dados idênticos, `ada` e `outra` são entidades distintas. Ada é Ada.

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

- [ ] Tem mini-jogo

## Resumo

**Nesta missão:**

- **Objeto** – entidade que reúne, de forma inseparável, características e ações
- **Identidade** – cada objeto existe de forma única na memória, distinguível de qualquer outro
- **Características** – os dados que o objeto carrega
- **Ações** – o que o objeto sabe executar
- **Caixa preta** – você pode observar e interagir com um objeto sem conhecer seus detalhes internos

## Exercício

**Pergunta:** Otto encontra dois polvos: Ada (rosa, 8 tentáculos) e um segundo polvo (azul, 6 tentáculos). Ele muda a cor de Ada para verde. O que acontece com o segundo polvo?

- [ ] O segundo polvo também fica verde – objetos do mesmo tipo compartilham características.
- [x] O segundo polvo continua azul – cada objeto guarda seus próprios dados de forma independente. ← correta
- [ ] O segundo polvo desaparece – só pode existir um polvo de cada vez.
- [ ] O segundo polvo perde todas as características – qualquer mudança afeta todos os objetos.

**Explicação:** Cada objeto existe de forma independente. Mudar Ada não afeta o outro polvo – cada um carrega seus próprios dados.

**Explicações incorretas:**

- Não. Cada objeto é independente – tem seus próprios dados. Mudar Ada não afeta o outro polvo em nada.
- *(correta – sem explicação de erro)*
- Não. Vários objetos do mesmo tipo podem existir ao mesmo tempo. São entidades separadas e independentes.
- Não. Mudar uma característica de Ada só afeta Ada. O outro polvo é uma entidade independente com seus próprios dados intactos.

## Baú de Conchas (exercícios extras)

### 1-2-e1

**Pergunta:** Dois objetos criados a partir da mesma classe:

- [ ] Sempre têm os mesmos valores de atributos
- [x] Têm seus próprios valores, independentes dos outros ← correta
- [ ] Compartilham atributos numéricos, mas não textuais
- [ ] São idênticos até que um deles seja alterado manualmente

**Explicação:** Cada objeto é independente. `rex = Cachorro("Rex")` e `buddy = Cachorro("Buddy")` são objetos distintos com seus próprios valores. Alterar `rex.nome` não afeta `buddy.nome`.

---

### 1-2-e2

**Pergunta:** Em Python, qual linha cria um objeto a partir da classe `Carro`?

- [x] `meu_carro = Carro("vermelho")` ← correta
- [ ] `Carro = meu_carro("vermelho")`
- [ ] `object Carro("vermelho")`
- [ ] `new Carro("vermelho")`

**Explicação:** Em Python, criamos objetos chamando a classe como se fosse uma função: `objeto = NomeDaClasse(argumentos)`. Não usamos `new` (como no Java) nem `object`. O resultado é uma instância da classe.

---

### 1-2-e3

**Pergunta:** O que é uma "instância" de uma classe?

- [ ] O nome dado ao arquivo onde a classe está definida
- [ ] Um método especial que inicializa a classe
- [ ] Uma cópia da classe sem modificações
- [x] Um objeto concreto criado a partir da classe ← correta

**Explicação:** Instância e objeto são termos intercambiáveis. Quando fazemos `ada = Polvo()`, `ada` é uma instância (objeto concreto) da classe `Polvo`. A classe é o molde; a instância é o produto fabricado com esse molde.

---

### 1-2-e4

**Pergunta:** Num sistema com classes `Gato`, `Cachorro` e `Passaro`, quantos objetos podemos ter ao mesmo tempo?

- [ ] Apenas um objeto por classe
- [ ] No máximo três objetos no total
- [x] Qualquer quantidade de objetos de qualquer dessas classes ← correta
- [ ] Apenas objetos da última classe definida no código

**Explicação:** Não há limite para o número de objetos. Podemos ter `felix = Gato()`, `tom = Gato()`, `rex = Cachorro()`, `tweety = Passaro()` – todos coexistindo no mesmo programa.

---

### 1-2-e5

**Pergunta:** `ada = Polvo("rosa", 8)` e `ana = Polvo("azul", 6)`. Qual afirmação é verdadeira?

- [x] `ada` e `ana` são objetos independentes com atributos distintos ← correta
- [ ] `ada` e `ana` compartilham os mesmos atributos por serem da mesma classe
- [ ] Não é possível criar dois objetos com o mesmo tipo simultaneamente
- [ ] `ana` é uma cópia de `ada` com valores modificados

**Explicação:** Cada objeto tem sua própria "cópia" dos atributos. `ada.cor` é `"rosa"` e `ana.cor` é `"azul"`. Alterar `ada.num_tentaculos = 10` não afeta `ana.num_tentaculos`. Eles são completamente independentes.

---

### 1-2-e6

**Pergunta:** Dois objetos `a = Gato("Mimi")` e `b = Gato("Mimi")` têm os mesmos valores. Eles são o mesmo objeto?

- [ ] Sim. Objetos com os mesmos dados são considerados idênticos em Python
- [ ] Sim. Python reutiliza o mesmo espaço na memória para evitar duplicatas
- [x] Não. Cada objeto é uma entidade distinta na memória, mesmo com dados iguais ← correta
- [ ] Depende — só são diferentes se criados em linhas de código distintas

**Explicação:** Identidade significa que cada objeto é uma entidade distinta na memória. Mesmo que `a` e `b` tenham os mesmos dados, são dois objetos diferentes. Em Python, `a is b` retorna `False` – eles ocupam lugares distintos na memória.
