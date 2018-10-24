---
title: Introdução ao ITIL
date: "2018-10-08"
tags: ["Faculdade", "Gestão de TI", "Metodologias"]
description: "Introdução à metodologia do ITIL que tem como objetivo melhorar a qualidade dos serviços de TI prestados, através das melhores práticas do mercado" 
---

## Como nasceu?
Através de uma necessidade do governo britânico de um manual de melhores práticas e procedimentos de TI.

## O que é?
Uma metodologia/melhores práticas para o gerenciamento de serviços de TI.

> Não é um modelo rígido.

## Pra que serve?
Melhorar a qualidade e eficiência dos serviços de TI através de manuais(livros) com as melhores práticas de cada área.

> É divido em livros onde cada um aborda um tema.

---
## Como Funciona?
Seu núcleo é formado por duas partes.

### 1. Operacional/Suporte a Serviços
mão de obra operacional para entrega dos serviços.

*Exemplo: Estou com problema na rede.*

- **Clientes**: propietários/donos dos serviços de TI.
- **Usuário**: usuário final que pertence a um cliente.
- **Super-usuários ou Especialistas**: pessoas designadas para agir como primeiro contato para incidentes e problemas.

#### Gerenciamento da Configuração

**Objetivos**: prover informações, monitorar e controlar a infra de TI.

**Responsabilidades**: identificar, controlar, prestar contas sobre *IC's*, além de dar informações para auditoria.

> IC é um hardware ou software(ativo) que deve possuir uma identificação única, como por exemplo uma placa de identificação de ativos fixo.
>
> BDGM é um banco de dados contendo todos os dados relevantes à um IC (Não é recomendado que seja um excel).

#### Central de Serviços

##### Nível 0 - Gerenciamento de chamados
- **Objetivos**: facilitar a restauração de serviços de forma rápida, através de um único canal de comunicação além de informar o usuário sobre o status dos chamados.
- **Responsabilidades**: Gerenciar o ciclo de vida dos chamados, fazer o escalonamento/encaminhamento correto destes, além de servir como recepção, registro e acompnhamento de chamados.

##### Nível 1 - Gerenciamento de Incidentes
- **Objetivos**: avaliar se o incidente pode ocorrer novamente, informar o gerente de problemas e manter uma comunicação contínua com o usuário.

- **Responsabilidades**: Investigação não detalhada e diagnóstico.

> Não é função da Gerencia de Incidentes, analisar e estudar o problema.
>
> Incidente é qualquer evento que possa causar a parada ou perca de qualidade de um serviço.
>
> Requisição de Serviço é a solicitação de algo novo, que não é uma falha.

##### Nível 2 - Gerente de Problemas

**Objetivos**: Encontrar a causa raiz dos problemas, para poder previnir futuros incidentes que podme vir a ocorrrer.

**Responsabilidades**: Gerar informações gerenciais, se atualizar e se previnir sobre problemas que podem vir a ocorrer, além de dar apoio na resolução de problemas mais graves.

> Um dos beneficios é a melhora de soluções referente à incidentes que já ocorreram, através da geração de conhecimento.
>
> Problema é uma causa raiz desconhecida
>
> Erro é uma causa raiz conhecida
>
> Erro conhecido é um erro no qual foi identificada uma solução

---
### 2. Gerencial/Entrega de Serviços
Mais entendido como consulta de dados.

*Exemplo: preciso de uma informação referente ao preço do notebook x*

Analisam o ambiente para **prover informações para a Central de Serviço**

#### Objetivos
- Equilibrio entre demanda e capacidade
- Melhoria continua da qualidade do serviço
- Gerar KPIs

> O contrato entre as empresas deve verificar os acordos de níveis de serviço para definição de prioridades.

#### Responsabilidades (Varia conforme o tipo de serviço)
  - Manter os documentos a seguir:
    - Catálogo de Serviços
    - Acordo de Nível de Serviço

#### 1. Gerenciamento de Responsabilidades

**Objetivo** Garantir que os serviços sejam entregues com base no acordo entre a organização de TI e os clientes.

**Responsabilidades** Produzir um plano de disponibilidades; gerar KPI para monitorar os níveis de disponbilidade para garantir os ANSs e ANOs; 

#### 2. Gerenciamento da Capacidade
**Objetivo** Garantir que a capacidade de processamento e amrazenamentos do serviços fornecidos acompanhem as demandas do negócio de maneira efetiva.

**Responsabilidade**
Gerenciar a capacidade do negócio, do serviço oferecido e dos recursos. 

#### 3. Gerenciamento Financeiro

**Objetivo**
Administar os recursos monetários da TI para fins de organização, como por exemplo, dimensionar o custo da TI.

**Responsabilidade**
Prever o orçamento, verificar como o dinheiro foi gasto e cobrar o cliente sobre o pagamento(faturar).

#### 4. Gerenciamento da Continuidade do Serviços

**Objetivos**
Garantir que todo o aparato técnico de TI possa ser recuperado dentro dos prazos de negócio necessários e acordados (Estilo a disponibilidade/continuidade de *datacenters*)

**Responsabilidade**
Criar e manter o plano de continuidade da TI