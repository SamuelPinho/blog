---
title: Entendendo Algoritmo Genético
date: "2018-10-21"
tags: ["Faculdade", "Inteligência Artificial", "Algoritmo Genético"]
description: Um estudo sobre o que é, de onde veio, para onde vai uma das áreas da inteligência artificial chamada de computação evolutiva.
---

## História

### 1859 à 1865 - Moderna teoria da evolução
Os naturalistas acreditava que cada espécie havia sido criada separadamente por um ser supremo ou geração espontânea. Pois bem, tudo isso muda em 1859, quando Charles Darwin juntamente com Alfred Russel Wallace publicam o "Origem das Espécies" com toda a sua teoria sustentada por evidências que obteve a bordo do Beagle.

Este trabalho influenciou diversos campos de estudo e juntamente com o trabalho de Gregor Mendel sobre os princípio básicos de herança genética de 1865, formam o que é chamado de a moderna teoria da evolução que engloba o principio básico da Genética populacional: **A variablidade entre indivíduos em uma população de organismos que se reproduzem sexualmente é produzida pela mutação e pela recombinação genética.** 

### 1943 - Primeiro trabalho da área da inteligência artificial
Atualmente, o primeiro trabalho reconhecido como sendo da área da inteligência artificial é de dois pesquisadores. Warren McCulloch e Walter Pitts, que propuseram em 1943 um modelo de neuronio artificiais onde cada neurônio seria identificado como estando "ligado" ou "desligado".

### 1950 - Alan Turing
Já em 1950, Alan Turing publicou seu artigo denominado "Computing Machinery and Intelligence" que basicamente fornece uma visão completa da Inteligência Artificial naquela época. Com ele também tivemos o Teste de Turing.

> "Se um humano não pode reconhecer se as respostas vem de um computador ou de uma máquina, então a máquina pode ser considerada inteligente" - Alan Turing

### 1956 - A inteligência artificial ganha seu nome
Em 1956, John McCarty organizou uma conferência de dois meses no *Darthmouth College* onde o nome "Inteligência Artificial" foi dado pelo próprio John McCarty. Este evento, na época em que aconteceu, não trouxa nada de revolucionário para a área, porém durante os próximos 20 anos depois de seu acontecimento, o campo da Inteligência Artificial foi dominado por estas pessoas que estavam presentes, depois seus estudantes e colegas nas faculdades mais conceituadas.

### 1975 - É criado o primeiro marco dos algoritmo genéticos
Algumas pesquisas já haviam sido feitas na área da genética computacional, porém foi com John Holland que tivemos um marco nesta área, já que em 1975 publicou o livro "Adaptation in Natural and Artificial Systems" que atualmente é considerado como a bíblia de algoritmo genético. Holland introduziu um teorema para predizer a qualidade da próxima geração e com isto explicou porque os algortimos genéticos poderiam performar melhor que por exemplo uma busca aleatória.

De lá para ca, diversos avanços e estudos foram feitos nesta area com sucessos nos mais diversos problemas de otimização e aprendizado de máquina.

-----
## O que é um algoritmo genético?

> São métodos de busca baseados na evolução natural e recombinação genética considerando a teoria da Darwin sobre a sobrevivência dos mais aptos.

Basicamente, os **indivíduos de uma determinada população competem por recursos finitos, parceiros e abrigo**. Os mais aptos a terem estes recursos terão mais possibilidade de se relacionar com um parceiro e consequentemente passarão seus **genes mais "aptos" para próxima geração**, enquanto que os outros, **menos aptos, terão menor probabilidade**. Sendo assim, os genes dos indivíduos mais aptos irão se propagar com maior intensidade na população onde residem produzindo descendentes melhores que seus antecessores, criando uma escala evolutiva de adaptação.

Pensando dessa forma, podemos afirmar que **cada indivíduo é uma possível solução**. Isso tansformado em código se representa em uma **lista de tamanho finito** e trazendo para o campo biológico podemos dizer que a **lista é o cromossomo do indivíduo e os itens que a compõe, seus genes.**

A partir destas listas, é feita uma **pontuação para cada indivíduo,** como se estivessemos avaliando sua aptidão para um determinado ambiente. Sendo o ambiente o resultado que queremos obter, e a avaliação o quão próximo o indivíduo está do resultado esperado.

Com esta pontuação, podemos **combinar os melhores indivíduos** produzindo novas e melhores gerações.

### E quando nós paramos de gerar novas gerações?

O critério de parada ocorre quando a geração seguinte **não apresenta diferenças significativas** com relação à geração anterior. Caso isso ocorra, podemos dizer que o sistema convergeiu para um melhor resultado, ou simplesmente que obtivemos a convergência do sistema.

### Resumindo

Tudo começa com uma **população aleatória** de indivíduos, após isso são **selecionados os mais aptos** e entre eles, ocorre o **cruzamento e a mutação aleatória**, produzindo uma nova população que esperasse que seja melhor que a anterior.

Então temos os seguintes passos:

1. **Criação** de uma população de indivíduos que são representados em uma linha finita e que pode ser binária, ou seja, ser constituida de "0"s e "1"s.
2. **Seleção** alguns indivíduos que são os melhores adaptados para a criação de descendentes melhores que seus antecessores.
3. **Aplicar os Operadores Genéticos**
    - **Cruzamento** que é a combinação de suas informações genéticas a fim de produzir um indivíduo melhor. A probabilidade do cruzamento ocorrer é definido pela *taxa de cruzamento*.
    - **Mutação** que é a alteração das informações genéticas de alguns indivíduos definidos pela *taxa de mutação.*

## Aplicabilidade

## Dias Atuais

----

## Referências

### Algoritmo Genético

http://www.cear.ufpb.br/juan/wp-content/uploads/2016/08/Aula-2c-Exemplo-de-AG.pdf
http://www.computacaointeligente.com.br/algoritmos/o-algoritmo-genetico-ga/
ftp://ftp.dca.fee.unicamp.br/pub/docs/vonzuben/theses/pvargas_mest/arq_11.pdf
http://conteudo.icmc.usp.br/pessoas/andre/research/genetic/
https://www.youtube.com/watch?v=x7oHgs52BAI&t=151s
https://www.researchgate.net/publication/247935438_Conceitos_Basicos_de_Algoritmos_Geneticos_Teoria_e_Pratica
ftp://ftp.dca.fee.unicamp.br/pub/docs/vonzuben/theses/emi_mest/cap3.pdf
https://bcc.ime.usp.br/tccs/2003/anselmo/node12.html
http://edirlei.3dgb.com.br/aulas/ia_2012_1/IA_Aula_04_Algoritmos_Geneticos.pdf
http://www.professor.webizu.org/ga/gaintro.html
http://algoritmogeneticouba.blogspot.com/2012/11/historia-de-los-algoritmos-geneticos.html

### Inteligência Artificial

https://transformacaodigital.com/o-que-e-inteligencia-artificial/
http://blog.timo.com.br/afinal-o-que-e-inteligencia-artificial-teste-de-turing/
https://www.androidpit.com.br/o-que-e-inteligencia-artificial
https://smarttudo.com.br/blogs/news/inteligencia-artificial
https://blogue.rbe.mec.pt/pequena-historia-da-inteligencia-2162713
https://tecnoblog.net/195106/inteligencia-artificial-historia-dilemas/
https://medium.com/@eliezerfb/intelig%C3%AAncia-artificial-499fc2c4aa79
http://www.scielo.br/scielo.php?script=sci_arttext&pid=S0100-19651997000100006