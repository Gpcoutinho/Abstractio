# /commit — Criar commit seguindo as convenções do projeto

## Fluxo obrigatório

**Passo 1 — Verificar o que será commitado**

Rodar em paralelo:
- `git status` — ver arquivos modificados e não rastreados
- `git diff --stat` — ver **todas** as mudanças desde o último commit, não só a última alteração feita

A mensagem deve cobrir todas as mudanças listadas, não apenas a última. Se houver arquivos não relacionados entre si, propor commits separados.

**Passo 2 — Propor a mensagem**

Redigir a mensagem seguindo Conventional Commits em **pt-BR**:

```
tipo: descrição curta
```

Tipos aceitos: `feat`, `fix`, `refactor`, `style`, `docs`, `chore`

- Descrição em português, imperativo, minúscula, sem ponto final
- Focar no "por quê", não no "o quê"
- Se houver múltiplas mudanças independentes, propor commits separados

**Passo 3 — Apresentar e aguardar ok**

Mostrar:
- Arquivos que serão incluídos
- Mensagem proposta

**Aguardar confirmação explícita da Rebecca** antes de executar qualquer `git add` ou `git commit`. Nunca assumir que aprovação do código implica aprovação do commit.

**Passo 4 — Executar (somente após ok)**

- Adicionar apenas os arquivos relevantes (nunca `git add -A` ou `git add .` sem revisão)
- Não incluir `Co-Authored-By` na mensagem
- Não usar `--no-verify`
