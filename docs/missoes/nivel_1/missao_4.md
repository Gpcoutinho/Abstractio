<!-- NOTAS DE DESENVOLVIMENTO – não são conteúdo da missão -->

## [notas] Referências e decisões para esta missão

### Fontes bibliográficas

**Phillips – Python 3 Object-Oriented Programming, p. 7 (Cap. 1) — ALTA PRIORIDADE**

"Behaviors are actions that can occur on an object. The behaviors that can be performed
on a specific class of objects are called methods. At the programming level, methods are
like functions in structured programming, but they magically have access to all the data
associated with this object. Like functions, methods can also accept parameters and return values."

→ Base do `<conceito>` e motivação para os quatro tipos. Reformular "magically have access"
  como "já conhece os atributos do objeto por dentro".

---

**Phillips – p. 30 (Cap. 2, Bloco 6) — ALTA PRIORIDADE**

"Now, having objects with attributes is great, but object-oriented programming is really
about the interaction between objects. We're interested in invoking actions that cause things
to happen to those attributes. It is time to add behaviors to our classes.

class Point:
    def reset(self):
        self.x = 0
        self.y = 0

Notice that when we call the p.reset() method, we do not have to pass the self argument
into it. Python automatically takes care of this for us."

→ Explicação de self mais clara e direta disponível nas referências. Base para a seção
  "Definindo um método em Python". O padrão def + self + corpo é exatamente o que ensinamos.

---

**Weisfeld – The Object-Oriented Thought Process, p. 11 (guardados.txt, Bloco 6) — ALTA PRIORIDADE**

"The behavior of an object is what the object can do. In OO programming terminology
these behaviors are contained in methods."

→ Par simétrico com atributo: atributo = estado, método = comportamento.
  Reforça a abertura e fundamenta o `<conceito>`.

---

**BlueJ – Kölling et al. (2003) — ALTA PRIORIDADE**

"Objetos são manipulados por operações (métodos) que alteram seu estado.
Algumas operações retornam informações sobre o estado."

→ Frase-chave que conecta método a estado (atributo). Fundamento da seção de tipos:
  um tipo age, outro altera estado, outro retorna informação.

---

### Personagens desta missão
- **Ada** – rosa, 8 tentáculos – já estabelecida
- **Caju** e **Muriel** – não aparecem na teoria; reservadas para o exercício se necessário

---

### Linha narrativa
- Missão 2 apresentou as três marcas de todo objeto: identidade, características, ações.
- Missão 3 aprofundou características → atributos.
- Missão 4 aprofunda ações → métodos.
- Gancho: retomada do terceiro elemento da tabela da missão 2 ("ações").
- Nenhuma `class`, `def` ou `self` sem explicação – desta vez a definição de método
  É mostrada, mas com o wrapper `class Polvo:` indicado como "veremos na Missão 5".
- Métodos usados: nadar, camuflar, soltar_tinta, capturar_presa – todos já citados nas
  missões anteriores – mais __str__ como tipo "retorna".

---

### Dúvidas previstas
- `{{duvida-self-passado}}` – "Por que self aparece no def mas não na chamada?"
  Resposta: Python faz isso automaticamente. Quando você escreve `ada.nadar()`, o Python já
  sabe que `self = ada` e passa sozinho. Você não precisa – e não deve – passá-lo na chamada.
- `{{duvida-metodo-funcao}}` – "Método e função são a mesma coisa?"
  Resposta: quase. Função existe sozinha, fora de qualquer objeto. Método vive dentro de um
  objeto e, graças ao `self`, já conhece os atributos desse objeto sem que ninguém os passe.
- `{{duvida-str-quando}}` – "Quando exatamente o Python chama `__str__`?"
  Resposta: toda vez que você usa `print(objeto)` ou `str(objeto)`. Python chama `__str__`
  automaticamente – você não precisa escrever `ada.__str__()` diretamente.

---

### Estrutura das seções
1. Ada tem ações – gancho missão 2; `<conceito>` de método; `{{ada-card-metodos}}`
2. Definindo um método em Python – def, self, corpo; chamada; `{{ficha-definicao}}`
3. Tipos de método:
   a. Age – nadar(), soltar_tinta()
   b. Modifica o estado – camuflar()
   c. Com parâmetro – capturar_presa("caranguejo")
   d. Devolve um valor – __str__()
4. Teaser missão 5

**Visuais:**
- Seção 1: `{{ada-card-metodos}}` → `AdaCard nivel="metodos"` – já existente
- Seção 2: `{{ficha-definicao}}` → novo componente; mapeia partes do `def` para conceitos

---

### Interativos

Nenhum interativo nesta versão – missão lançada sem componente customizado.

**Reservado para iteração futura – `FichaDefinicao`**
Apresentaria a anatomia de uma definição de método com partes destacadas em hover/click
(def, nome, self, corpo) e o resultado da chamada correspondente no painel direito.
Componente planejado: `src/components/missoes/nivel_1/missao_4/FichaDefinicao.tsx`

---

### Resumo (campo `resumo` no .ts)
- **Método** – ação que um objeto sabe executar, com acesso direto aos seus próprios atributos
- **`def`** – palavra-chave que inicia a definição de um método em Python
- **`self`** – referência ao próprio objeto dentro do método; Python passa automaticamente na chamada
- **Parâmetro** – informação extra que o método precisa receber para agir
- **`__str__`** – método especial que define como o objeto se apresenta quando impresso

<!-- FIM DAS NOTAS -->

---

# Missão 1-4 – Métodos

**Ícone:** PiPlay
**Emblema:** Coreógrafo(a) de Polvos

## Teoria

### Ada tem ações

Na missão anterior, Otto mergulhou nas <destaque-reto>características</destaque-reto> de Ada – cor, número de tentáculos, tamanho. Aprendeu a lê-las, a atualizá-las, a entender que cada polvo guarda os seus próprios valores.

Mas na missão 2, quando Otto descreveu os três elementos de todo objeto, havia um terceiro que ficou esperando:

| Elemento | O que é | Ada |
|---|---|---|
| **Identidade** | O que a torna única | Ada é uma entidade única |
| **Características** | Os dados que carrega | cor: rosa, tentáculos: 8 |
| **Ações** | O que ela sabe fazer | nadar, camuflar, soltar tinta... |

Otto estudou características a fundo. Agora é a vez das ações.

Na POO, as ações que um objeto sabe executar têm um nome: <destaque>métodos</destaque>.

<conceito note="adapt. Phillips, 2015; Weisfeld, 2019"><strong>Método</strong>: ação que um objeto sabe executar, com acesso direto aos seus próprios atributos.</conceito>

{{ada-card-metodos}}

O card de Ada agora mostra dois blocos: atributos acima, métodos abaixo. Os atributos descrevem *o que ela é*. Os métodos descrevem *o que ela faz*.

---

### Definindo um método em Python

Otto sabe que Ada nada. Mas como o Python sabe disso? Alguém precisou ensinar Ada a nadar – e fazer isso tem uma sintaxe específica.

Aqui está como um método é definido em Python:

```python-simplificado
def nadar(self):
    print(f"{self.nome} está nadando!")
```

Cada parte tem um papel:

| Parte | O que significa |
|---|---|
| `def` | "aqui começa a definição de um método" |
| `nadar` | o nome da ação |
| `self` | referência ao próprio objeto – para `ada.nadar()`, `self` é `ada` |
| corpo indentado | o que acontece quando o método é chamado |

O `self` é o ponto-chave. Ele é o que permite que o método diga `self.nome`, `self.cor`, `self.num_tentaculos` – acessando os atributos do objeto de dentro da ação. Sem ele, o método não saberia de qual polvo estava falando.

{{duvida-self-passado}}

Mas na chamada, você não passa `self`:

```python-simplificado
ada.nadar()  # Ada está nadando!
```

Ao usar `ada.nadar()`, Python já sabe que `self = ada` – e passa-o sozinho. Você nunca precisa incluí-lo na chamada.

---

### Tipos de método

Com a sintaxe clara, Otto observa que os métodos de Ada fazem coisas diferentes. Há quatro padrões principais.

{{duvida-metodo-funcao}}

#### Age – executa e não muda nada

O mais simples: o método faz algo – imprime uma mensagem, produz um efeito – sem alterar nenhum atributo e sem devolver nada.

```python-simplificado
def soltar_tinta(self):
    print("Ada liberou uma nuvem de tinta!")
```

Chamada e resultado:

```python-simplificado
ada.soltar_tinta()  # Ada liberou uma nuvem de tinta!
```

`nadar()` segue o mesmo padrão: age, não altera, não devolve.

---

#### Modifica o estado – altera um atributo

Aqui o método acessa um atributo via `self` e atualiza seu valor. O estado do objeto muda.

```python-simplificado
def camuflar(self):
    self.cor = "transparente"
```

Otto confirma antes e depois:

```python-simplificado
print(ada.cor)  # "rosa"
ada.camuflar()
print(ada.cor)  # "transparente"
```

Sem que Otto escrevesse nada no caderno – Ada agiu por conta própria.

---

#### Com parâmetro – precisa de informação externa

Algumas ações dependem de dados que vêm de fora. Otto não diz apenas *"capture"* – ele aponta a presa. Esse dado extra entra como <destaque>parâmetro</destaque>.

```python-simplificado
def capturar_presa(self, presa):
    print(f"{self.nome} capturou um(a) {presa}!")
```

Chamada:

```python-simplificado
ada.capturar_presa("caranguejo")  # Ada capturou um(a) caranguejo!
```

O parâmetro `presa` aparece após `self` no `def` e recebe o valor passado na chamada.

---

#### Devolve um valor – `__str__`

Alguns métodos *respondem* com uma informação. O principal exemplo em Python é o `__str__`: define como o objeto se apresenta quando impresso.

```python-simplificado
def __str__(self):
    return f"{self.nome} | cor: {self.cor} | tentáculos: {self.num_tentaculos}"
```

A palavra `return` diz ao Python: *"devolva este valor para quem chamou"*. Aqui, devolve uma string com os dados de Ada.

O especial de `__str__` é que Python o chama automaticamente quando você usa `print()` sobre o objeto:

```python-simplificado
print(ada)  # Ada | cor: rosa | tentáculos: 8
```

Não foi preciso chamar `ada.__str__()` – `print(ada)` já fez isso.

{{duvida-str-quando}}

---

### O que vem a seguir

Otto já sabe o que Ada faz e como essas ações são descritas em Python. Mas ainda há uma pergunta sem resposta: *quem ensinou Ada a nadar? Quem definiu que ela teria cor, tentáculos e saberia se camuflar?*

Isso você descobre na **Missão 5**.

---

## Mini-jogo

- [ ] Tem mini-jogo

## Resumo

**Nesta missão:**

- **Método** – ação que um objeto sabe executar, com acesso direto aos seus próprios atributos
- **`def`** – palavra-chave que inicia a definição de um método em Python
- **`self`** – referência ao próprio objeto dentro do método; Python passa automaticamente na chamada
- **Parâmetro** – informação extra que o método precisa receber para agir
- **`__str__`** – método especial que define como o objeto se apresenta quando impresso com `print()`

## Exercício

**Pergunta:** Otto escreve `print(ada)` e vê `Ada | cor: rosa | tentáculos: 8` na tela. O que aconteceu?

- [ ] `print()` formatou o objeto automaticamente – Python sabe como exibir qualquer objeto.
- [ ] Otto precisaria ter escrito `print(ada.__str__())` – `print()` não chama métodos sozinho.
- [x] Python chamou `__str__()` automaticamente – `print(objeto)` sempre busca esse método. ← correta
- [ ] O resultado veio dos atributos diretamente – `print()` lê `ada.nome`, `ada.cor` e monta a string.

**Explicação:** Quando você usa `print()` sobre um objeto, Python chama `__str__()` automaticamente. É o método que define a "apresentação" do objeto. Se `__str__` não existir, Python exibe algo como `<__main__.Polvo object at 0x...>` – funcional, mas inútil para o aluno.
