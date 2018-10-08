---
title: Aula de Redes Neurais
date: "2018-10-05"
tags: ["Tópicos"]
categorias: ["Faculdade"]
description: Relatório da aula de Tópicos onde foi dada uma introdução sobre o conceito de redes neurais e uma implementação simples em python
---

## Redes Neurais Artificiais

### Representação de um neurônio artificial
1. Um conjunto de sinapses ou elos de ligação
1. Somador para as entradas iniciais
1. Função de ativação para restringir a saída do neuronio

> Professor não sabe explicar o motivo da existência da variável bias.

### Função de Ativação
Serve para transformar os valores e alocar eles dentro de 0 e 1.

### Aprendizado Supervisionado e Não Supervisionado
- **Supervisionado** possui uma tabela que serve para comparar o resultado obtido pela rede neural e pela tabela pré-existente.
- **Não Supervisionado** não possui uma tabela, busca apenas um padrão para as entradas e saídas.

---

### Código implementado na aula

```python
listas = [[0, 1, 2, -1], [0, 2, -5, 1], [1, -2, 3, -1]]
pesos = [0.5, 0.5, 0.5, 0.5]
valores_desejados = [-1, 1, 1]
bias = -1
taxa_de_aprendizagem = 0.5
lista_erros_instantaneos = []

# precisa passar um lista das listas


def primeira_funcao(lista):
    soma = 0.0
    for i in range(len(lista)):
        soma += (lista[i] * pesos[i])

    return soma


def segunda_funcao(resultado_primeira_funcao):
    sinal_de_saida = funcao_ativacao(resultado_primeira_funcao + bias)
    return sinal_de_saida


# verificar se o erro não foi 0
def terceira_funcao(resultado_segunda_funcao, iteracao):
    erro = valores_desejados[iteracao] - resultado_segunda_funcao

    erro_instantaneo(erro)

    return erro


def quarta_funcao(lista, resultado_terceira_funcao):
    for i in range(len(lista)):
        resultado_quarta_funcao = taxa_de_aprendizagem * \
            resultado_terceira_funcao * lista[i]

        quinta_funcao(i, resultado_quarta_funcao)


def quinta_funcao(iteracao, resultado_quarta_funcao):
    pesos[iteracao] += resultado_quarta_funcao


def erro_instantaneo(erro):
    lista_erros_instantaneos.append(0.5 * pow(erro, 2))


def funcao_ativacao(v):
    if v > 0:
        return 1
    if v == 0:
        return 0
    if v < 0:
        return -1


for j in range(100):
    print("\n Iteração " + str(j))
    for i in range(len(listas)):
        resultado_primeira = primeira_funcao(listas[i])
        resultado_segunda = segunda_funcao(resultado_primeira)
        resultado_terceira = terceira_funcao(resultado_segunda, i)

        if(resultado_terceira != 0):
            quarta_funcao(listas[i], resultado_terceira)
            print("["+str(j)+"]" + str(pesos))
        else:
            print("["+str(j)+"]" + str(pesos) + " - erro 0")


print("\n[i] erros instantaneos: " + str(lista_erros_instantaneos))
```