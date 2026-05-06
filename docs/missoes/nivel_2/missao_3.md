# Missão 2-3 — Encapsulamento

**Ícone:** 🔒
**Pontos:** 15

## Teoria

## Encapsulamento

**Encapsulamento** é o princípio de esconder os detalhes internos de um objeto e expor apenas o necessário através de uma interface controlada.

Em Python, convenções de nomenclatura indicam visibilidade:

| Prefixo | Visibilidade | Exemplo |
|---|---|---|
| `atributo` | Público | `self.nome` |
| `_atributo` | Protegido (convenção) | `self._agencia` |
| `__atributo` | Privado (name mangling) | `self.__saldo` |

```python
class ContaCorrente:
    def __init__(self, titular, saldo):
        self.titular = titular     # público
        self._agencia = "0001"     # protegido
        self.__saldo = saldo       # privado

    def get_saldo(self):
        return self.__saldo

    def depositar(self, valor):
        if valor > 0:
            self.__saldo += valor

conta = ContaCorrente("João", 500)
print(conta.titular)      # João — OK
print(conta.get_saldo())  # 500 — OK via getter
# conta.__saldo           # AttributeError!
```

### `@property` — getters e setters elegantes

```python
@property
def saldo(self):
    return self.__saldo

@saldo.setter
def saldo(self, valor):
    if valor >= 0:
        self.__saldo = valor
```

## Mini-jogo

- [ ] Tem interativo

## Exercício

**Pergunta:** Qual é o principal objetivo do encapsulamento em POO?

- [ ] Permitir que qualquer parte do código acesse e modifique os dados livremente.
- [x] Esconder os detalhes internos do objeto e controlar o acesso aos seus dados. ← correta
- [ ] Fazer com que uma classe herde comportamentos de outra.
- [ ] Substituir funções globais por métodos de classe.

**Explicação:** Encapsulamento protege os dados internos e expõe apenas uma interface controlada e segura.
