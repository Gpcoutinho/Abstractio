# Linha Narrativa â€” Exemplos Marinhos por MissÃ£o

Roteiro de referÃªncia para manter coerÃªncia do universo marinho ao longo de toda a trilha.
Cada missÃ£o deve ter um exemplo principal dentro desse universo. Aplicar ao repassar cada `.md`.

---

## Arco Geral

O **Sr. Otto** Ã© um polvo cientista curioso que estuda e organiza o oceano ao seu redor usando Python + POO.
A trilha acompanha sua jornada em quatro etapas:

| NÃ­vel | Etapa | CenÃ¡rio |
|---|---|---|
| 1 | Fundamentos | Otto aprende a estruturar seus dados de campo |
| 2 | Pilares | Descobre as leis que governam o oceano da POO |
| 3 | RelaÃ§Ãµes | Estuda como as criaturas do oceano se relacionam |
| 4 | Arquitetura | Projeta e engenharia a Base de Pesquisa Submarina |

---

## NÃ­vel 1 â€” Fundamentos: O despertar do Ada

| MissÃ£o | Conceito | Elemento marinho central | Nomes sugeridos | NÃºcleo do exemplo |
|---|---|---|---|---|
| 1-0 | Antes de comeÃ§ar | ApresentaÃ§Ã£o do Sr. Otto | â€” | Sem cÃ³digo. Narrativa jÃ¡ estabelecida na missÃ£o. |
| 1-1 | O que Ã© POO? | Dados soltos de polvos | `polvo1_nome`, `polvo1_cor`, `meu_polvo` | Sem POO: variÃ¡veis soltas `polvo1_nome`, `polvo1_cor`... caos com 100 polvos. Com POO: cada polvo vira um objeto organizado. Narrativa jÃ¡ parcialmente escrita na missÃ£o atual. |
| 1-2 | Objeto | Ada encontrado no oceano | `Ada`, `azulao`, `marinho` | Otto *encontra* Ada no oceano. NÃ£o sabe ainda como ele foi criado â€” apenas observa que ele existe, tem identidade prÃ³pria (`nome`, `cor`) e Ã© diferente de outros polvos. MetÃ¡fora da caixa preta: vocÃª usa sem saber o que hÃ¡ dentro. Nenhuma `class` aparece ainda. |
| 1-3 | Atributos | Ficha de observaÃ§Ã£o de Ada | `Ada.nome`, `Ada.cor`, `Ada.num_tentaculos`, `Ada.tamanho_cm`, `Ada.especie` | Otto *lÃª* os atributos de Ada preenchendo a ficha de campo. Ele acessa dados de um objeto que jÃ¡ existe â€” nÃ£o define nada ainda. ReforÃ§ar: atributo Ã© informaÃ§Ã£o que pertence ao objeto, cada polvo guarda os seus prÃ³prios valores. |
| 1-4 | MÃ©todos | Otto assiste Ada agir | `Ada.nadar()`, `Ada.camuflar()`, `Ada.soltar_tinta()`, `Ada.capturar_presa(presa)` | Otto *observa* Ada executando comportamentos â€” ele chama os mÃ©todos e vÃª os resultados. Ainda nÃ£o sabe como esses comportamentos foram definidos. ReforÃ§ar: mÃ©todo Ã© o que um objeto sabe fazer, chamado de fora como uma instruÃ§Ã£o. |
| 1-5 | Classe | O grimÃ³rio â€” de onde Ada veio? | `class Polvo`, `Ada`, `azulao`, `marinho` | **O grande reveal.** ApÃ³s 3 missÃµes usando Ada, a missÃ£o abre com a pergunta: *"mas de onde ele veio? Quem definiu que teria `nome`, `cor` e saberia `nadar()`?"* Otto abre o grimÃ³rio e finalmente vÃª a `class Polvo`. Tom de descoberta â€” a classe nÃ£o Ã© ponto de partida, Ã© a explicaÃ§Ã£o de tudo que veio antes. |
| 1-6 | Construtor | Nascimento do polvo (instanciaÃ§Ã£o) | `__init__`, `Polvo("Ada", "roxo", "Octopus vulgaris")` | Quando um polvo nasce (Ã© instanciado), o `__init__` define seus valores iniciais â€” como uma certidÃ£o de nascimento oceÃ¢nica emitida pelo prÃ³prio objeto. |
| 1-7 | Resumo | Caderno de campo completo | `class Polvo` finalizada | Classe `Polvo` consolidada com atributos, construtor e mÃ©todos. RevisÃ£o de todos os fundamentos do nÃ­vel. |

---

## NÃ­vel 2 â€” Pilares: As leis do oceano

| MissÃ£o | Conceito | Elemento marinho central | Nomes sugeridos | NÃºcleo do exemplo |
|---|---|---|---|---|
| 2-1 | IntroduÃ§Ã£o ao nÃ­vel | Os 4 pilares como leis do oceano | â€” | Sem cÃ³digo principal. Contextualiza os 4 pilares como princÃ­pios que governam o ecossistema da POO. |
| 2-2 | AbstraÃ§Ã£o | O que anotar no caderno de campo | `class Polvo` (simplificada), `class SistemaNervoso` (nÃ£o abstraÃ­da) | Otto nÃ£o registra cada cÃ©lula do polvo no caderno â€” abstrai sÃ³ o que Ã© relevante para a pesquisa. A classe `Polvo` jÃ¡ Ã© uma abstraÃ§Ã£o: esconde a biologia real e expÃµe apenas o que importa. |
| 2-3 | Encapsulamento | O reservatÃ³rio de tinta do polvo | `self.__reservatorio_tinta`, `soltar_tinta()`, `get_nivel_tinta()` | O reservatÃ³rio de tinta Ã© interno e privado â€” nenhuma criatura externa acessa diretamente. SÃ³ o polvo decide quando liberar (`soltar_tinta()`). O que Ã© interno fica protegido. |
| 2-4 | HeranÃ§a | A famÃ­lia dos CefalÃ³podes | `class Cefalopode`, `class Polvo(Cefalopode)`, `class Lula(Cefalopode)`, `class Sepia(Cefalopode)` | Polvos, lulas e sÃ©pias compartilham caracterÃ­sticas (tentÃ¡culos, corpo mole, tinta). Em vez de repetir cÃ³digo, `Polvo`, `Lula` e `Sepia` herdam de `Cefalopode`. O que Ã© comum sobe para o pai. |
| 2-5 | Polimorfismo | Criaturas com `mover()` diferente | `class Polvo`, `class Peixe`, `class Tartaruga`, mÃ©todo `mover()` | Polvo usa propulsÃ£o a jato, peixe bate as nadadeiras, tartaruga nada com as patas. Mesma interface `mover()`, comportamentos completamente distintos. |
| 2-6 | Resumo | Ecossistema com os 4 pilares | â€” | RevisÃ£o dos 4 pilares com exemplos marinhos. |

---

## NÃ­vel 3 â€” RelaÃ§Ãµes: A sociedade dos objetos

| MissÃ£o | Conceito | Elemento marinho central | Nomes sugeridos | NÃºcleo do exemplo |
|---|---|---|---|---|
| 3-1 | IntroduÃ§Ã£o ao nÃ­vel | A sociedade do oceano | â€” | Sem cÃ³digo principal. O oceano nÃ£o Ã© feito de criaturas isoladas â€” elas interagem, formam hierarquias e dependem umas das outras. |
| 3-2 | Sobrescrita | Polvo redefine o jeito de nadar | `class Cefalopode` com `mover()`, `class Polvo(Cefalopode)` sobrescrevendo | `Polvo` herda `mover()` de `Cefalopode` mas sobrescreve com propulsÃ£o a jato. O mÃ©todo pai ainda existe e pode ser chamado via `super().mover()`. |
| 3-3 | Sobrecarga | Otto registra observaÃ§Ãµes de formas diferentes | `registrar(nome)`, `registrar(nome, local="desconhecido")`, `registrar(nome, local, profundidade=0)` | Em Python, sobrecarga se faz com parÃ¢metros padrÃ£o e `*args`. Otto pode registrar com sÃ³ o nome do polvo, ou com localizaÃ§Ã£o, ou com profundidade â€” a mesma funÃ§Ã£o aceita todas as formas. |
| 3-4 | Classes Abstratas | `AnimalMarinho` como contrato | `class AnimalMarinho(ABC)`, `@abstractmethod respirar()`, `@abstractmethod mover()` | Nenhuma criatura Ã© "sÃ³ um animal marinho" â€” Ã© sempre polvo, tubarÃ£o, peixe especÃ­fico. Mas todo animal marinho *deve* ter `respirar()` e `mover()`. `AnimalMarinho` define o contrato sem poder ser instanciada. |
| 3-5 | Interfaces | `Camuflavel` sem parentesco | `class Camuflavel(ABC)`, `class Polvo(AnimalMarinho, Camuflavel)`, `class Linguado(AnimalMarinho, Camuflavel)` | Polvo e Linguado nÃ£o tÃªm relaÃ§Ã£o entre si, mas ambos se camuflam. `Camuflavel` Ã© uma interface (ABC) que define `camuflar()` â€” contrato sem hierarquia de heranÃ§a. |
| 3-6 | AssociaÃ§Ã£o | Otto e a Caverna de Pesquisa | `class Otto`, `class CavernaSubmarina`, referÃªncia via atributo | Otto *usa* uma `CavernaSubmarina` â€” objetos independentes que se conhecem. Se um deixar de existir, o outro continua. RelaÃ§Ã£o fraca entre dois objetos autÃ´nomos. |
| 3-7 | AgregaÃ§Ã£o e ComposiÃ§Ã£o | Cardume de peixes e tentÃ¡culos do polvo | `class Cardume`, `class Peixe` (agregaÃ§Ã£o); `class Polvo`, `class Tentaculo` (composiÃ§Ã£o) | **AgregaÃ§Ã£o:** `Cardume` contÃ©m `Peixe` â€” os peixes existem independente do cardume. **ComposiÃ§Ã£o:** `Polvo` Ã© composto de `Tentaculo` â€” um tentÃ¡culo nÃ£o existe fora do polvo. |
| 3-8 | Resumo | Mapa de relaÃ§Ãµes do ecossistema | â€” | RevisÃ£o de todos os tipos de relacionamento com exemplos marinhos. |

---

## NÃ­vel 4 â€” Arquitetura: A engenharia submarina

| MissÃ£o | Conceito | Elemento marinho central | Nomes sugeridos | NÃºcleo do exemplo |
|---|---|---|---|---|
| 4-1 | IntroduÃ§Ã£o ao nÃ­vel | Otto como engenheiro da Base | â€” | Sem cÃ³digo principal. Otto agora projeta o software completo da Base de Pesquisa Submarina. |
| 4-2 | CoesÃ£o | Classe que faz coisa demais | `class PolvoManager` (ruim), `class RegistroOceanico`, `class MonitorAmbiental`, `class GestorCardume` (bom) | `PolvoManager` que monitora temperatura, registra observaÃ§Ãµes E gerencia cardume = incoerente. Cada classe deve ter uma responsabilidade clara e bem delimitada. |
| 4-3 | Acoplamento | Sensor substituÃ­vel na base | `class SensorSonarin3000` (ruim, concreto), `class ISensor(ABC)`, `class BaseSubmarina(ISensor)` | O sistema nÃ£o deve depender de `SensorSonarin3000` diretamente â€” e se mudarem o sensor? Depender da abstraÃ§Ã£o `ISensor` reduz o acoplamento e permite trocar o hardware sem reescrever nada. |
| 4-4 | SOLID | Os 5 princÃ­pios na Base Submarina | `RelatorioOceanico`, `EmailNotificador`, `AnalisadorOceanico`, `PolvoGigante(Polvo)`, `ISensor` | Cada princÃ­pio com exemplo da base: **S** = cada mÃ³dulo tem uma funÃ§Ã£o; **O** = adicionar anÃ¡lise sem modificar `AnalisadorOceanico`; **L** = `PolvoGigante` substitui `Polvo` em qualquer contexto; **I** = `AnimalTerraFirme` nÃ£o precisa de `nadar()`; **D** = `BaseSubmarina` depende de `ISensor`, nÃ£o do sensor especÃ­fico. |
| 4-5 | Generics | AquÃ¡rio genÃ©rico da base | `Aquario[T]`, `Aquario[Polvo]`, `Aquario[Tubarao]`, `TypeVar`, `Generic` | O aquÃ¡rio da base pode conter qualquer tipo de animal. `Aquario[Polvo]` sÃ³ aceita polvos, `Aquario[Tubarao]` sÃ³ aceita tubarÃµes â€” o container Ã© genÃ©rico mas type-safe. |
| 4-6 | Design Patterns | TrÃªs padrÃµes no sistema da base | `OceanoDatabase` (Singleton), `MonitorTemperatura` + observadores (Observer), `FabricaDeAnimais` (Factory) | **Singleton:** `OceanoDatabase` â€” sÃ³ existe uma instÃ¢ncia do banco de dados. **Observer:** criaturas reagem quando a temperatura do oceano muda. **Factory:** `FabricaDeAnimais` cria o animal certo baseado no habitat descrito. |
| 4-7 | Resumo | Arquitetura completa da base | â€” | VisÃ£o geral de todos os padrÃµes e princÃ­pios integrados. Encerramento da trilha. |

---

## Notas de ConsistÃªncia

- O protagonista Ã© sempre **Sr. Otto** â€” polvo cientista, nunca "o programador" ou "o desenvolvedor".
- O polvo principal chama-se **Ada** (roxo, `Octopus vulgaris`, o que aparece na tela inicial).
- A hierarquia de heranÃ§a estabelecida Ã©: `Molusco â†’ Cefalopode â†’ Polvo / Lula / Sepia`.
- Criaturas secundÃ¡rias recorrentes: `Peixe`, `Tubarao`, `Tartaruga`, `Linguado`.
- CenÃ¡rios principais: oceano aberto (N1â€“N2), sociedade do recife (N3), Base de Pesquisa Submarina (N4).
