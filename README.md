# Abstractio 🐙

![Abstractio](public\abstractio_landing_page.png)

O **Abstractio** é uma plataforma web educacional e gamificada para o ensino de **Programação Orientada a Objetos (POO) em Python**. 

Com uma abordagem *"Objects-First"* (Objetos Primeiro), a plataforma ensina o aluno a manipular objetos antes de escrever sua primeira linha de classe. Guiado por **Otto**, o polvo mascote do projeto, o aprendizado utiliza analogias do mundo real, simulações visuais e um tema narrativo subaquático para tornar conceitos complexos em algo intuitivo.

🌐 **Acesse em produção:** [abstractio.com.br](https://abstractio.com.br)

## 🌊 O que é o Abstractio?

Diferente de cursos tradicionais focados puramente em sintaxe, o Abstractio prioriza a **compreensão conceitual e visual**. A plataforma combina teoria ricamente ilustrada, minijogos práticos e elementos de RPG onde a evolução do aluno reflete no seu progresso no jogo.

### Destaques do App
- **Navegação Livre:** Trilha sem bloqueio sequencial rígido — o aluno pode explorar ou revisar qualquer missão a qualquer momento.
- **Estrutura Tripla por Missão:**
  1. **Teoria Visual:** Explicações com analogias e suporte visual obrigatório (animações, diagramas ou simuladores).
  2. **Interativos:** Minijogos e simulações rodando em iframe isolado para experimentação prática.
  3. **Exercícios Conceituais:** Questões com recompensas em moedas do jogo (*conchas*) e explicações detalhadas para cada alternativa (correta ou incorreta).
- **Gamificação & Loja:** Acúmulo de conchas (*shells*) ao concluir missões para comprar itens cosméticos (molduras, acessórios e cores) e personalizar o avatar.
- **Conquistas & Ranks:** Progressão de título baseada na evolução pela trilha (Polvinho → Explorador → Mestre dos Mares → Kraken).

## 📚 Estrutura do Currículo

O conteúdo pedagógico é dividido em 4 níveis e 28 missões:

| Nível | Título | Foco Pedagógico | Missões |
|---|---|---|:---:|
| **Nível 1** | O despertar do Polvinho | **Fundamentos:** Objetos, Atributos, Métodos, Classes e Construtores | 8 |
| **Nível 2** | As leis do oceano | **Os 4 Pilares:** Abstração, Encapsulamento, Herança e Polimorfismo | 6 |
| **Nível 3** | A sociedade dos objetos | **Relações:** Sobrescrita, Sobrecarga, Interfaces, Associação, Agregação e Composição | 8 |
| **Nível 4** | A engenharia submarina | **Arquitetura:** Coesão, Acoplamento, SOLID, Generics e Design Patterns | 7 |

## 🏗️ Arquitetura do Ecossistema

O ecossistema do Abstractio é composto por duas aplicações independentes:

1. **Abstractio (Este repositório):** Frontend SPA (Single Page Application) responsável pela interface, navegação, execução dos minijogos e experiência do aluno.
2. **[Tentacle 🐙](https://github.com/fpcoutinho/tentacle):** API RESTful em Node.js, Express, TypeScript e PostgreSQL. Gerencia usuários, persistência de progresso, livro-razão (*ledger*) das conchas, inventário e conteúdo das missões.

> **Comunicação & Autenticação:** O frontend consome a API sob a rota `/api/v1` via Axios. O fluxo de login e validação de identidade é unificado com **Firebase Authentication**.

## 🛠️ Stack Tecnológica (Frontend)

- **Core:** React 19, TypeScript, Vite
- **Roteamento:** React Router
- **Estilização:** Tailwind CSS (Tema Dark com acentos roxo e ciano)
- **Iconografia:** Phosphor Icons
- **Comunicação & Auth:** Axios, Firebase Authentication

## 📁 Estrutura de Pastas

```text
src/
├── assets/         # Imagens, ícones e os HTMLs autossuficientes dos minijogos
├── components/     # Componentes de UI reutilizáveis, modais e visuais de missão
├── contexts/       # Contextos globais (Autenticação, Estado do Usuário e Progresso)
├── data/           # Dados de fallback e arquivos de apoio
├── lib/            # Configuração de clientes de integração (Axios/API e Firebase)
├── pages/          # Telas da aplicação (Trilha, Missão, Loja, Conquistas, Perfil)
└── routes/         # Configuração de rotas públicas e protegidas
```

## ⚙️ Como Rodar Localmente

### Pré-requisitos

* **Node.js** (versão 18 ou superior)
* Backend **Tentacle** em execução (localmente ou remoto) para recursos de persistência e loja

### Passo a Passo

1. **Clone o repositório e instale as dependências:**
```bash
git clone [https://github.com/Gpcoutinho/Abstractio](https://github.com/Gpcoutinho/Abstractio)
cd abstractio
npm install
```


2. **Configure as Variáveis de Ambiente:**
Copie o arquivo de exemplo `.env.example` para `.env`:
```bash
cp .env.example .env
```


Preencha o arquivo `.env` com suas credenciais do Firebase e o endereço do backend:
```env
VITE_FIREBASE_API_KEY=seu-firebase-api-key
VITE_FIREBASE_AUTH_DOMAIN=seu-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seu-project-id
VITE_FIREBASE_APP_ID=seu-app-id
VITE_API_BASE_URL=http://localhost:3000/api/v1
```


3. **Execute o servidor de desenvolvimento:**
```bash
npm run dev
```


Acesse no navegador através de `http://localhost:5173`.

## 🧰 Scripts Disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor local de desenvolvimento (Vite) |
| `npm run build` | Compila o código TypeScript e gera os arquivos otimizados em `dist/` |
| `npm run preview` | Serve os arquivos compilados da pasta `dist/` para teste de produção |
| `npm run lint` | Executa a verificação de código estático com ESLint |
