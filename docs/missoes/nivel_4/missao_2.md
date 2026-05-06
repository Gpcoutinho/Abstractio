# Missão 4-2 — Coesão

**Ícone:** 🎯
**Pontos:** 15

## Teoria

## Coesão

**Coesão** mede o quanto os elementos de uma classe estão relacionados entre si. Alta coesão significa que a classe tem **um único propósito bem definido**.

### Baixa coesão — o problema

```python
# Classe faz demais — baixa coesão
class Usuario:
    def __init__(self, nome, email):
        self.nome  = nome
        self.email = email

    def salvar_no_banco(self): ...           # responsabilidade de banco
    def enviar_email_boas_vindas(self): ...  # responsabilidade de email
    def gerar_relatorio_pdf(self): ...       # responsabilidade de relatório
    def validar_cpf(self): ...              # responsabilidade de validação
```

Quando qualquer coisa mudar (banco, email, PDF), você mexe em `Usuario` — arriscando quebrar as outras funcionalidades.

### Alta coesão — a solução

```python
class Usuario:
    def __init__(self, nome, email):
        self.nome  = nome
        self.email = email

class RepositorioUsuario:
    def salvar(self, usuario: Usuario): ...

class ServicoEmail:
    def boas_vindas(self, usuario: Usuario): ...

class ValidadorCPF:
    def validar(self, cpf: str) -> bool: ...
```

Agora cada classe tem **uma razão para mudar**. Isso é o princípio SRP (Single Responsibility) do SOLID.

### Como medir coesão?

Faça a pergunta: **"O que esta classe faz?"**
- Se a resposta tem muitos "e também..." → baixa coesão
- Se a resposta é uma frase curta e precisa → alta coesão

| Sinal | Coesão |
|---|---|
| Métodos usam os mesmos atributos | Alta |
| Métodos ignoram atributos da classe | Baixa |
| Classe difícil de nomear | Baixa |

## Mini-jogo

- [ ] Tem interativo

## Exercício

**Pergunta:** Como identificar que uma classe tem **baixa coesão**?

- [ ] A classe tem poucos métodos e atributos.
- [x] A classe é difícil de nomear e seus métodos têm responsabilidades não relacionadas entre si. ← correta
- [ ] A classe herda de mais de uma superclasse.
- [ ] A classe usa muitas outras classes do sistema.

**Explicação:** Baixa coesão se manifesta quando a classe acumula responsabilidades diferentes — o que a torna difícil de nomear, testar e manter.
