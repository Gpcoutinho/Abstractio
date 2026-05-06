# Missão 3-2 — Sobrescrita

**Ícone:** ✏️
**Pontos:** 15

## Teoria

## Sobrescrita (Override)

**Sobrescrita** ocorre quando uma subclasse redefine um método da superclasse com a mesma assinatura, substituindo o comportamento original.

```python
class Notificacao:
    def enviar(self, mensagem):
        return f"Enviando: {mensagem}"

class NotificacaoEmail(Notificacao):
    def enviar(self, mensagem):          # sobrescreve
        return f"📧 Email: {mensagem}"

class NotificacaoSMS(Notificacao):
    def enviar(self, mensagem):          # sobrescreve
        return f"📱 SMS: {mensagem}"

class NotificacaoPush(Notificacao):
    def enviar(self, mensagem):          # sobrescreve
        return f"🔔 Push: {mensagem}"

canais = [NotificacaoEmail(), NotificacaoSMS(), NotificacaoPush()]
for canal in canais:
    print(canal.enviar("Sua compra foi aprovada!"))
```

### Estendendo com `super()`

Você pode sobrescrever **e ainda aproveitar** o comportamento original:

```python
class NotificacaoAuditada(Notificacao):
    def enviar(self, mensagem):
        resultado = super().enviar(mensagem)  # chama o original
        print(f"[LOG] Notificação registrada.")
        return resultado
```

### Regras da sobrescrita

| Regra | Descrição |
|---|---|
| Mesmo nome | O método na subclasse deve ter o mesmo nome |
| `super()` opcional | Use para aproveitar o comportamento pai |
| Polimorfismo | Objetos distintos se comportam diferente pelo mesmo método |

## Mini-jogo

- [ ] Tem interativo

## Exercício

**Pergunta:** Qual é a diferença entre sobrescrita e herança simples?

- [ ] Não há diferença — sobrescrita é apenas outro nome para herança.
- [x] Herança passa atributos e métodos para a subclasse; sobrescrita redefine um método herdado com novo comportamento. ← correta
- [ ] Sobrescrita elimina todos os métodos herdados da superclasse.
- [ ] Herança só funciona com `super()`, enquanto sobrescrita não precisa.

**Explicação:** Herança é o mecanismo de transmissão. Sobrescrita é a decisão da subclasse de redefinir um comportamento específico que herdou.
