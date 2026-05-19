# Linha Narrativa — Exemplos Marinhos por Missão

Roteiro de referência para manter coerência do universo marinho ao longo de toda a trilha.
Cada missão deve ter um exemplo principal dentro desse universo. Aplicar ao repassar cada `.md`.

---

## Arco Geral

O **Sr. Polvonilson** é um polvo cientista curioso que estuda e organiza o oceano ao seu redor usando Python + POO.
A trilha acompanha sua jornada em quatro etapas:

| Nível | Etapa | Cenário |
|---|---|---|
| 1 | Fundamentos | Polvonilson aprende a estruturar seus dados de campo |
| 2 | Pilares | Descobre as leis que governam o oceano da POO |
| 3 | Relações | Estuda como as criaturas do oceano se relacionam |
| 4 | Arquitetura | Projeta e engenharia a Base de Pesquisa Submarina |

---

## Nível 1 — Fundamentos: O despertar do Polvinho

| Missão | Conceito | Elemento marinho central | Nomes sugeridos | Núcleo do exemplo |
|---|---|---|---|---|
| 1-0 | Antes de começar | Apresentação do Sr. Polvonilson | — | Sem código. Narrativa já estabelecida na missão. |
| 1-1 | O que é POO? | Dados soltos de polvos | `polvo1_nome`, `polvo1_cor`, `meu_polvo` | Sem POO: variáveis soltas `polvo1_nome`, `polvo1_cor`... caos com 100 polvos. Com POO: cada polvo vira um objeto organizado. Narrativa já parcialmente escrita na missão atual. |
| 1-2 | Objeto | Polvinho encontrado no oceano | `polvinho`, `azulao`, `marinho` | Polvonilson *encontra* Polvinho no oceano. Não sabe ainda como ele foi criado — apenas observa que ele existe, tem identidade própria (`nome`, `cor`) e é diferente de outros polvos. Metáfora da caixa preta: você usa sem saber o que há dentro. Nenhuma `class` aparece ainda. |
| 1-3 | Atributos | Ficha de observação de Polvinho | `polvinho.nome`, `polvinho.cor`, `polvinho.num_tentaculos`, `polvinho.tamanho_cm`, `polvinho.especie` | Polvonilson *lê* os atributos de Polvinho preenchendo a ficha de campo. Ele acessa dados de um objeto que já existe — não define nada ainda. Reforçar: atributo é informação que pertence ao objeto, cada polvo guarda os seus próprios valores. |
| 1-4 | Métodos | Polvonilson assiste Polvinho agir | `polvinho.nadar()`, `polvinho.camuflar()`, `polvinho.soltar_tinta()`, `polvinho.capturar_presa(presa)` | Polvonilson *observa* Polvinho executando comportamentos — ele chama os métodos e vê os resultados. Ainda não sabe como esses comportamentos foram definidos. Reforçar: método é o que um objeto sabe fazer, chamado de fora como uma instrução. |
| 1-5 | Classe | O grimório — de onde Polvinho veio? | `class Polvo`, `polvinho`, `azulao`, `marinho` | **O grande reveal.** Após 3 missões usando Polvinho, a missão abre com a pergunta: *"mas de onde ele veio? Quem definiu que teria `nome`, `cor` e saberia `nadar()`?"* Polvonilson abre o grimório e finalmente vê a `class Polvo`. Tom de descoberta — a classe não é ponto de partida, é a explicação de tudo que veio antes. |
| 1-6 | Construtor | Nascimento do polvo (instanciação) | `__init__`, `Polvo("Polvinho", "roxo", "Octopus vulgaris")` | Quando um polvo nasce (é instanciado), o `__init__` define seus valores iniciais — como uma certidão de nascimento oceânica emitida pelo próprio objeto. |
| 1-7 | Resumo | Caderno de campo completo | `class Polvo` finalizada | Classe `Polvo` consolidada com atributos, construtor e métodos. Revisão de todos os fundamentos do nível. |

---

## Nível 2 — Pilares: As leis do oceano

| Missão | Conceito | Elemento marinho central | Nomes sugeridos | Núcleo do exemplo |
|---|---|---|---|---|
| 2-1 | Introdução ao nível | Os 4 pilares como leis do oceano | — | Sem código principal. Contextualiza os 4 pilares como princípios que governam o ecossistema da POO. |
| 2-2 | Abstração | O que anotar no caderno de campo | `class Polvo` (simplificada), `class SistemaNervoso` (não abstraída) | Polvonilson não registra cada célula do polvo no caderno — abstrai só o que é relevante para a pesquisa. A classe `Polvo` já é uma abstração: esconde a biologia real e expõe apenas o que importa. |
| 2-3 | Encapsulamento | O reservatório de tinta do polvo | `self.__reservatorio_tinta`, `soltar_tinta()`, `get_nivel_tinta()` | O reservatório de tinta é interno e privado — nenhuma criatura externa acessa diretamente. Só o polvo decide quando liberar (`soltar_tinta()`). O que é interno fica protegido. |
| 2-4 | Herança | A família dos Cefalópodes | `class Cefalopode`, `class Polvo(Cefalopode)`, `class Lula(Cefalopode)`, `class Sepia(Cefalopode)` | Polvos, lulas e sépias compartilham características (tentáculos, corpo mole, tinta). Em vez de repetir código, `Polvo`, `Lula` e `Sepia` herdam de `Cefalopode`. O que é comum sobe para o pai. |
| 2-5 | Polimorfismo | Criaturas com `mover()` diferente | `class Polvo`, `class Peixe`, `class Tartaruga`, método `mover()` | Polvo usa propulsão a jato, peixe bate as nadadeiras, tartaruga nada com as patas. Mesma interface `mover()`, comportamentos completamente distintos. |
| 2-6 | Resumo | Ecossistema com os 4 pilares | — | Revisão dos 4 pilares com exemplos marinhos. |

---

## Nível 3 — Relações: A sociedade dos objetos

| Missão | Conceito | Elemento marinho central | Nomes sugeridos | Núcleo do exemplo |
|---|---|---|---|---|
| 3-1 | Introdução ao nível | A sociedade do oceano | — | Sem código principal. O oceano não é feito de criaturas isoladas — elas interagem, formam hierarquias e dependem umas das outras. |
| 3-2 | Sobrescrita | Polvo redefine o jeito de nadar | `class Cefalopode` com `mover()`, `class Polvo(Cefalopode)` sobrescrevendo | `Polvo` herda `mover()` de `Cefalopode` mas sobrescreve com propulsão a jato. O método pai ainda existe e pode ser chamado via `super().mover()`. |
| 3-3 | Sobrecarga | Polvonilson registra observações de formas diferentes | `registrar(nome)`, `registrar(nome, local="desconhecido")`, `registrar(nome, local, profundidade=0)` | Em Python, sobrecarga se faz com parâmetros padrão e `*args`. Polvonilson pode registrar com só o nome do polvo, ou com localização, ou com profundidade — a mesma função aceita todas as formas. |
| 3-4 | Classes Abstratas | `AnimalMarinho` como contrato | `class AnimalMarinho(ABC)`, `@abstractmethod respirar()`, `@abstractmethod mover()` | Nenhuma criatura é "só um animal marinho" — é sempre polvo, tubarão, peixe específico. Mas todo animal marinho *deve* ter `respirar()` e `mover()`. `AnimalMarinho` define o contrato sem poder ser instanciada. |
| 3-5 | Interfaces | `Camuflavel` sem parentesco | `class Camuflavel(ABC)`, `class Polvo(AnimalMarinho, Camuflavel)`, `class Linguado(AnimalMarinho, Camuflavel)` | Polvo e Linguado não têm relação entre si, mas ambos se camuflam. `Camuflavel` é uma interface (ABC) que define `camuflar()` — contrato sem hierarquia de herança. |
| 3-6 | Associação | Polvonilson e a Caverna de Pesquisa | `class Polvonilson`, `class CavernaSubmarina`, referência via atributo | Polvonilson *usa* uma `CavernaSubmarina` — objetos independentes que se conhecem. Se um deixar de existir, o outro continua. Relação fraca entre dois objetos autônomos. |
| 3-7 | Agregação e Composição | Cardume de peixes e tentáculos do polvo | `class Cardume`, `class Peixe` (agregação); `class Polvo`, `class Tentaculo` (composição) | **Agregação:** `Cardume` contém `Peixe` — os peixes existem independente do cardume. **Composição:** `Polvo` é composto de `Tentaculo` — um tentáculo não existe fora do polvo. |
| 3-8 | Resumo | Mapa de relações do ecossistema | — | Revisão de todos os tipos de relacionamento com exemplos marinhos. |

---

## Nível 4 — Arquitetura: A engenharia submarina

| Missão | Conceito | Elemento marinho central | Nomes sugeridos | Núcleo do exemplo |
|---|---|---|---|---|
| 4-1 | Introdução ao nível | Polvonilson como engenheiro da Base | — | Sem código principal. Polvonilson agora projeta o software completo da Base de Pesquisa Submarina. |
| 4-2 | Coesão | Classe que faz coisa demais | `class PolvoManager` (ruim), `class RegistroOceanico`, `class MonitorAmbiental`, `class GestorCardume` (bom) | `PolvoManager` que monitora temperatura, registra observações E gerencia cardume = incoerente. Cada classe deve ter uma responsabilidade clara e bem delimitada. |
| 4-3 | Acoplamento | Sensor substituível na base | `class SensorSonarin3000` (ruim, concreto), `class ISensor(ABC)`, `class BaseSubmarina(ISensor)` | O sistema não deve depender de `SensorSonarin3000` diretamente — e se mudarem o sensor? Depender da abstração `ISensor` reduz o acoplamento e permite trocar o hardware sem reescrever nada. |
| 4-4 | SOLID | Os 5 princípios na Base Submarina | `RelatorioOceanico`, `EmailNotificador`, `AnalisadorOceanico`, `PolvoGigante(Polvo)`, `ISensor` | Cada princípio com exemplo da base: **S** = cada módulo tem uma função; **O** = adicionar análise sem modificar `AnalisadorOceanico`; **L** = `PolvoGigante` substitui `Polvo` em qualquer contexto; **I** = `AnimalTerraFirme` não precisa de `nadar()`; **D** = `BaseSubmarina` depende de `ISensor`, não do sensor específico. |
| 4-5 | Generics | Aquário genérico da base | `Aquario[T]`, `Aquario[Polvo]`, `Aquario[Tubarao]`, `TypeVar`, `Generic` | O aquário da base pode conter qualquer tipo de animal. `Aquario[Polvo]` só aceita polvos, `Aquario[Tubarao]` só aceita tubarões — o container é genérico mas type-safe. |
| 4-6 | Design Patterns | Três padrões no sistema da base | `OceanoDatabase` (Singleton), `MonitorTemperatura` + observadores (Observer), `FabricaDeAnimais` (Factory) | **Singleton:** `OceanoDatabase` — só existe uma instância do banco de dados. **Observer:** criaturas reagem quando a temperatura do oceano muda. **Factory:** `FabricaDeAnimais` cria o animal certo baseado no habitat descrito. |
| 4-7 | Resumo | Arquitetura completa da base | — | Visão geral de todos os padrões e princípios integrados. Encerramento da trilha. |

---

## Notas de Consistência

- O protagonista é sempre **Sr. Polvonilson** — polvo cientista, nunca "o programador" ou "o desenvolvedor".
- O polvo principal chama-se **Polvinho** (roxo, `Octopus vulgaris`, o que aparece na tela inicial).
- A hierarquia de herança estabelecida é: `Molusco → Cefalopode → Polvo / Lula / Sepia`.
- Criaturas secundárias recorrentes: `Peixe`, `Tubarao`, `Tartaruga`, `Linguado`.
- Cenários principais: oceano aberto (N1–N2), sociedade do recife (N3), Base de Pesquisa Submarina (N4).
