# /repassar-reverse — Sincronizar no sentido inverso (.ts → .md ou .md → .txt)

Repassa conteúdo no sentido contrário ao fluxo normal — útil quando o `.ts` ou o `.md` foi editado diretamente e o arquivo de origem precisa ser atualizado para refletir isso.

## Uso

```
/repassar-reverse ts-md <nivel>-<missao>   ← atualiza o .md a partir do .ts
/repassar-reverse md-txt <nivel>-<missao>  ← atualiza o .txt a partir do .md
```

Exemplos: `/repassar-reverse ts-md 1-3`, `/repassar-reverse md-txt 2-1`

## Fluxo obrigatório

**Passo 1 — Localizar os arquivos**

Para `ts-md`:
- Fonte: `src/data/curriculum/nivel_<N>/missao_<M>.ts`
- Destino: `docs/missoes/nivel_<N>/missao_<M>.md`

Para `md-txt`:
- Fonte: `docs/missoes/nivel_<N>/missao_<M>.md`
- Destino: `docs/rascunhos/nivel_<N>_missao_<M>.txt` (ou caminho informado pela Rebecca)

**Passo 2 — Ler a fonte e identificar diferenças**

Ler os dois arquivos e apresentar um resumo do que mudou na fonte em relação ao destino:

- O que foi adicionado?
- O que foi removido ou alterado?
- Visuais (`<bolo-factory>`, SVGs inline, etc.) — como serão representados no destino?

Apresentar o resumo e **aguardar um "ok" explícito** da Rebecca antes de prosseguir.

**Passo 3 — Atualizar o destino (somente após ok)**

Mesclar as mudanças da fonte no destino — nunca apagar o que já estava. Apenas o que mudou na fonte deve ser refletido no destino; o restante permanece intacto.

**Regras adicionais:**

- Código inline no `.ts` (SVGs, HTML, variáveis de visuais) vira `> [svg: ...]`, `> [img: ...]` ou `> [animação: ...]` no `.md` — nunca colar o código bruto no `.md`
- Tags de componente como `<bolo-factory></bolo-factory>` no `.ts` viram a descrição `> [animação: ...]` correspondente no `.md`
- Nunca commitar após repassar — aguardar instrução da Rebecca
