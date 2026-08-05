<div align="center">
  <img src="public/isotipo.png" alt="Abstractio" width="96" />

  # Abstractio

  App educacional gamificado para ensinar **Programação Orientada a Objetos (POO) em Python**.

  ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&labelColor=20232a)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white&labelColor=20232a)
  ![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white&labelColor=20232a)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white&labelColor=20232a)
  ![License](https://img.shields.io/badge/license-restrita-red)
</div>

---

## Sobre o projeto

**Abstractio** transforma o ensino de POO em uma trilha de missões gamificadas: teoria em linguagem acessível, mini-jogos interativos, exercícios e um sistema de progressão com pontuação, níveis e conquistas — pensado para tornar conceitos abstratos (classes, objetos, herança, encapsulamento) mais concretos para quem está aprendendo a programar.

<!-- TODO: adicionar screenshot ou GIF do app aqui -->
<!-- ![preview](docs/preview.png) -->

## Funcionalidades

- 🗺️ **Trilha de missões** organizada em níveis, com mapa de progresso visual
- 📖 **Teoria interativa** com slides, blocos de código com syntax highlight e caixas de conceito
- 🎮 **Mini-jogos** (drag & drop) integrados ao conteúdo
- ✅ **Exercícios** de fixação com feedback explicativo
- 🏆 **Sistema de conquistas** e pontuação, com progresso salvo localmente
- 📱 Layout responsivo (sidebar fixa no desktop, gaveta no mobile)

## Stack

| Categoria | Tecnologia |
|---|---|
| Build | Vite |
| Framework | React 19 + TypeScript |
| Roteamento | React Router v7 |
| Estilos | Tailwind CSS |
| Ícones | Heroicons, Phosphor Icons |
| Markdown | react-markdown + remark-gfm + rehype-raw |
| Syntax highlight | react-syntax-highlighter |
| Estado | React Context + localStorage (sem backend) |

## Como rodar localmente

```bash
# clonar o repositório
git clone https://github.com/Gpcoutinho/Abstractio.git
cd Abstractio

# instalar dependências
npm install

# rodar em modo desenvolvimento
npm run dev
```

Acesse `http://localhost:5173`.

### Mock do backend (Tentacle)

O frontend consome o backend `tentacle` (`/api/v1`). Para rodar localmente sem banco de dados real, use o mock server incluído na pasta `mock/`:

```bash
cd mock
npm install
node server.js
```

O mock sobe em `http://localhost:3000`, simula um usuário logado (`dummy-user-1`, começando com 0 conchas e inventário vazio) e responde às mesmas rotas `/api/v1` do backend real, mantendo o estado em memória enquanto o processo estiver rodando.

### Outros scripts

```bash
npm run build     # build de produção (pasta dist/)
npm run lint      # checagem de lint
npm run preview   # preview do build de produção
```

## Estrutura do projeto

```
src/
  pages/        # Telas principais (Home, Trilha, Missão, Conquistas)
  components/    # Componentes reutilizáveis (Sidebar, cards, avatar, etc.)
  contexts/      # Estado global de progresso (React Context)
  hooks/         # Hooks customizados
  data/curriculum/  # Conteúdo das missões, tipado em TypeScript
  assets/        # Mini-jogos interativos e demais assets
```

## 🏗️ Arquitetura do Ecossistema

O ecossistema do Abstractio é composto por duas aplicações independentes:

1. **Abstractio (Este repositório):** Frontend SPA (Single Page Application) responsável pela interface, navegação, execução dos minijogos e experiência do aluno.
2. **[Tentacle 🐙](https://github.com/seu-usuario/tentacle):** API RESTful em Node.js, Express, TypeScript e PostgreSQL. Gerencia usuários, persistência de progresso, livro-razão (*ledger*) das conchas, inventário e conteúdo das missões.

> **Comunicação & Autenticação:** O frontend consome a API sob a rota `/api/v1`.

## Autores

Desenvolvido por [Rebecca Nery](https://github.com/RebeccaNery) e [Gabriel Coutinho](https://github.com/Gpcoutinho).

## ⚖️ Licença e Direitos Autorais

O código-fonte do **Abstractio** está disponível publicamente neste repositório de forma **estritamente educacional e para demonstração de portfólio**. A cópia, reprodução, distribuição, uso comercial ou criação de trabalhos derivados a partir deste código, design ou interface são **proibidas** sem a autorização expressa dos autores. © 2026 Rebecca Nery e Gabriel. Todos os direitos reservados. Consulte o arquivo `LICENSE` para mais detalhes.
