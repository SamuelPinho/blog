---
title: Sistemas Especialistas
date: "2018-10-10"
tags: ["Faculdade", "Inteligência Artificial"]
description: "Explicação sobre o que são sistemas especialistas. Para o que eles servem. O que fazem. Como fazem. Do que são compostos." 
---

## O que são?
É um **sistema computacional**, que vai ser criado junto a um especialista da área para **alcançar a resolução de determinados problemas** e é formado por uma base de conhecimento de fatos e regras.

## É composto de
**Fatos e regras** que realizam a análise de problemas através de informações passadas na maioria das vezes pelos usuários.

## A quem se destina?
- Capcitação de agentes do processo, mas que não necessariamente são especialistas no assunto (sistema médico de hospitais).
- Apoio na atividade de especialistas.
- Como base para armazenar conhecimentos do negócio que são relevantes e valiosos.

## Categorias de Usuários

### Expertise
Conhecimento adquirido por treinamentos, leitura e experiência na área de atuação.
### Especialista
Nível de conhecimento e experiência, capaz de dar suporte à solução de problemas.
### Engenheiro do Conhecimento
Atua nos detalhes de sistemas especialistas, baseando-se nas **regras de aquisição e representação do conhecimento.**

## Objetivos
- Processar informações **não numéricas.**
- Ser capaz de formar um sistema baseado no conhecimento e que seja capaz de emular a especialização humana de algum domínio.
- Possui uma base de conhecimento **formada de fatos e regras**, e devem ser capazes de oferecer sugestões e conselhos aos usuários.

## Problemas na construção de um Sistema Especialista
- O conhecimento pode ser incompleto
    - O especialista(humano) pode não lembrar o conhecimento aprofundado para resolver um problema.
    - O especialista(humano) pode pular pontos importantes.
- O conhecimento pode estar incorreto
    - Afinal, quem garante que está correta? Já que apenas especialistas a entendem.

## Benefícios
- **É um repositório de conhecimento**
- Gera produtividade e Qualidade
- Capaz de resolver problemas complexos
- Flexivel e modular
- Credibilidade
- Operação com ambientes arriscados
- Pode trabalhar com informações incompletas e/ou incertas
- Fornecimento de treinamento

## Arquitetura de um Sistema Especialista
Possui um especialista depois vem o engenheiro de conhecimento e este vai criar a base de conhecimento o qual armazenará **regras e fatos**. Então vai ser criado uma **máquina de inferência** que basicamente via pegar essa *regras e fatos + informações* e vai entregar a resposta ao usuário.

## Componentes do Sistema Especialista
- Base de Conhecimento
- Máquina de Inferência
- Subsistema de aquisição de conhecimento
- Subsistema de explicação
- Interface do usuário

## Exericio dado em aula

Elabore um programa usando alinguagem c++, c# ou java que mostre os sintomas de uma determinada doença, assim como também permite consultar qual é a doença através dos sintomas.

| Doença     | Sintomas                                                                                             |
|------------|------------------------------------------------------------------------------------------------------|
| Amigdalite | Dor de Garganta, dores pelo corpo, febre, falta de apetite, dificuldade respiratório, dor de cabeça. |
| Asma       | Tosse, dificuldade respiratória, dor peitoral, chiado peitoral                                       |
| Pneumonia  | Febre alta, dificuldade respiratória, calafrio, dor no torax                                         |
| Gripe      | Cansaço físico, febre, dor de cabeça, irritação da garganta e coriza                                 |