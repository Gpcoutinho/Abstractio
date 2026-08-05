![Abstractio](public\abstractio_landing_page.png)

# Abstractio 🐙

Plataforma educacional gamificada para o ensino de **Programação Orientada a Objetos (POO) em Python** com foco em aprendizado visual, analogias do mundo real e interatividade.

---

## 🌊 Visão Geral

O **Abstractio** utiliza a metáfora do mundo subaquático para guiar iniciantes e desenvolvedores através dos conceitos fundamentais e avançados de POO. Acompanhado por **Otto**, o mascote polvo da plataforma, o aluno evolui através de níveis, resolve exercícios, interage com simulações e desbloqueia recompensas na loja de avatares.

---

## 🚀 Principais Funcionalidades

- **Trilha Pedagógica Visual (Objects-First):** 4 níveis e 28 missões estruturadas para ensinar conceitos antes de sintaxe complexa.
- **Estrutura Tripla por Missão:** 
  1. *Teoria:* Conteúdo expositivo rico em analogias e elementos visuais (animações/diagramas).
  2. *Interativo:* Mini-jogos e simulações executados em ambiente isolado.
  3. *Exercício:* Questões conceituais com sistema de recompensa e explicações detalhadas por alternativa.
- **Sistema Financeiro & Gamificação:** Acúmulo de conchas (*shells*) por missões concluídas e respostas corretas.
- **Loja & Avatares:** Personalização de perfil com molduras, acessórios e cores comprados na loja.
- **Progresso & Conquistas:** Estante de troféus e acompanhamento da evolução do aluno.

---

## 📚 Estrutura do Currículo

| Nível | Título | Foco Pedagógico | Missões |
|---|---|---|:---:|
| **Nível 1** | O despertar do Polvinho | Fundamentos (Objetos, Atributos, Métodos, Classes e Construtor) | 8 |
| **Nível 2** | As leis do oceano | Os 4 Pilares (Abstração, Encapsulamento, Herança e Polimorfismo) | 6 |
| **Nível 3** | A sociedade dos objetos | Relações (Sobrescrita, Sobrecarga, Interfaces, Associação, Composição) | 8 |
| **Nível 4** | A engenharia submarina | Arquitetura (SOLID, Coesão, Acoplamento, Generics, Design Patterns) | 7 |

---

## 🛠️ Tech Stack

### Frontend (Este Repositório)
- **Core:** React 19, TypeScript, Vite
- **Roteamento:** React Router
- **Estilização:** Tailwind CSS
- **Autenticação:** Firebase Authentication
- **Comunicação HTTP:** Axios
- **Iconografia:** Phosphor Icons

### Backend ([Tentacle 🐙](https://github.com/seu-usuario/tentacle))
- Node.js + Express + TypeScript
- PostgreSQL (sem ORM, queries SQL puras com `pg`)
- Firebase Admin SDK (Validação de tokens)
- Zod (Validação de schemas/DTOs)

---

## 📁 Estrutura do Projeto

```text
src/
├── assets/         # Recursos estáticos e mini-jogos HTML isolados (interativos)
├── components/     # Componentes React reutilizáveis (UI, modais, headers)
├── contexts/       # Estado global (Autenticação, Perfil, Progresso)
├── data/           # Dados de fallback e apresentações estáticas
├── lib/            # Clientes de integração (Axios, Firebase)
├── pages/          # Telas da aplicação (Trilha, Missão, Loja, Conquistas)
└── routes/         # Definição e proteção das rotas da aplicação

```

---

## ⚙️ Como Executar o Projeto

### Pré-requisitos

* Node.js (versão LTS recomendada)
* Instância do backend **Tentacle** em execução (para dados persistidos em API)

### Passo a Passo

1. **Clone o repositório e instale as dependências:**
```bash
git clone [https://github.com/seu-usuario/abstractio.git](https://github.com/seu-usuario/abstractio.git)
cd abstractio
npm install

```


2. **Configure as Variáveis de Ambiente:**
Crie um arquivo `.env` baseado no arquivo de exemplo `.env.example`:
```bash
cp .env.example .env

```


Preencha as chaves do Firebase e o endereço da API backend:
```env
VITE_FIREBASE_API_KEY=seu-firebase-api-key
VITE_FIREBASE_AUTH_DOMAIN=seu-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seu-project-id
VITE_FIREBASE_APP_ID=seu-app-id
VITE_API_BASE_URL=http://localhost:3000/api/v1

```


3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev

```


A aplicação estará acessível em `http://localhost:5173`.

---

## 🧰 Scripts Disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor local de desenvolvimento via Vite |
| `npm run build` | Compila o projeto TypeScript e gera o bundle de produção |
| `npm run preview` | Executa localmente o build de produção para testes |
| `npm run lint` | Executa a verificação estática do código com ESLint |

---

## 🔗 Repositórios Relacionados

* **[Tentacle (Backend API)](https://www.google.com/url?sa=E&source=gmail&q=https://github.com/seu-usuario/tentacle):** API RESTful em Node.js/PostgreSQL responsável pela persistência de usuários, inventário, respostas e histórico de conchas.