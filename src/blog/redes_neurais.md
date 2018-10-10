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

```python{numberLines: true}
LISTA_DE_NUMEROS_INICIAIS = [[0, 1, 2, -1], [0, 2, -5, 1], [1, -2, 3, -1]]
PESOS = [0.5, 0.5, 0.5, 0.5]
VALORES_DESEJADOS = [-1, 1, 1]
BIAS = -1
TAXA_DE_APRENDIZAGEM = 0.5
QUANTIDADE_DE_ITERACOES = 10000


class RedeNeural():
    def __init__(self, lista_de_numeros_iniciais, pesos, valores_desejados,
                 bias, taxa_de_aprendizagem, quantidade_de_iteracoes):
        self.lista_de_numeros_iniciais = lista_de_numeros_iniciais
        self.pesos = pesos
        self.valores_desejados = valores_desejados
        self.bias = bias
        self.taxa_de_aprendizagem = taxa_de_aprendizagem
        self.quantidade_de_iteracoes = quantidade_de_iteracoes

        self.lista_de_erros_instantaneos = []
        self.media_dos_erros_instantaneos = 0.0

    def primeira_funcao(self, lista):
        soma = 0.0
        for i in range(len(lista)):
            soma += (lista[i] * self.pesos[i])

        return soma

    def segunda_funcao(self, resultado_primeira_funcao):
        sinal_de_saida = self.funcao_ativacao(
            resultado_primeira_funcao + self.bias)
        return sinal_de_saida

    # verificar se o erro não foi 0

    def terceira_funcao(self, resultado_segunda_funcao, iteracao):
        erro = self.valores_desejados[iteracao] - resultado_segunda_funcao

        self.erro_instantaneo(erro)

        return erro

    def quarta_funcao(self, lista, resultado_terceira_funcao):
        for i in range(len(lista)):
            resultado_quarta_funcao = self.taxa_de_aprendizagem * \
                resultado_terceira_funcao * lista[i]

            self.quinta_funcao(i, resultado_quarta_funcao)

    def quinta_funcao(self, iteracao, resultado_quarta_funcao):
        self.pesos[iteracao] += resultado_quarta_funcao

    def erro_instantaneo(self, erro):
        self.lista_de_erros_instantaneos.append(0.5 * pow(erro, 2))

        self.media_dos_erros_instantaneos = float(self.calcular_media_dos_erros_instantaneos(
            self.lista_de_erros_instantaneos) / len(self.lista_de_erros_instantaneos))

    def calcular_media_dos_erros_instantaneos(self, lista_de_erros):
        total = 0
        for erro in range(len(lista_de_erros)):
            total += lista_de_erros[erro]

        return total

    def funcao_ativacao(self, v):
        if v > 0:
            return 1
        if v == 0:
            return 0
        if v < 0:
            return -1

    def executar(self):
        for iteracao in range(self.quantidade_de_iteracoes):
            print("\n Iteração " + str(iteracao))
            for i in range(len(self.lista_de_numeros_iniciais)):
                resultado_primeira = self.primeira_funcao(
                    self.lista_de_numeros_iniciais[i])
                resultado_segunda = self.segunda_funcao(resultado_primeira)
                resultado_terceira = self.terceira_funcao(
                    resultado_segunda, i)

                if(resultado_terceira != 0):
                    self.quarta_funcao(
                        self.lista_de_numeros_iniciais[i], resultado_terceira)
                    print("["+str(iteracao)+"]" + str(self.pesos))
                else:
                    print("["+str(iteracao)+"]" +
                          str(self.pesos) + " - erro 0")


rede_neural = RedeNeural(
    LISTA_DE_NUMEROS_INICIAIS, PESOS, VALORES_DESEJADOS, BIAS,
    TAXA_DE_APRENDIZAGEM, QUANTIDADE_DE_ITERACOES)

rede_neural.executar()

print("\n[i] erros instantaneos: " +
      str(rede_neural.lista_de_erros_instantaneos))

print("\nmédia dos erros instantaneos: " +
      str(rede_neural.media_dos_erros_instantaneos))

```