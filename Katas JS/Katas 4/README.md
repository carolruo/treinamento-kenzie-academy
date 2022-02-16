# Extra: Katas de JavaScript 4

## Introdução
Um [kata](https://en.wikipedia.org/wiki/Kata_(programming)) é um exercício individual onde você pratica uma habilidade de programação repetidamente. Você usará os katas nesta avaliação para praticar a escrita de funções Javascript que usam loops, condicionais, expressões e arrays.

Você criará uma única página para exibir o resultado de cada uma de suas funções com um cabeçalho identificando cada exercício individual seguido de sua solução. **Todos os resultados dos katas individuais precisam ser exibidos usando document.createElement() e métodos associados**. Depois de adicionar o resultado da sua função à página, cada função deve usar a sentença return para retornar seu resultado.

### Dica!
Ao exibir um array, use JSON.stringify() para 'embelezar' o resultado. Por exemplo, digamos que você usou document.createElement() e o armazenou em uma variável chamada newElement. Para exibir o lotrCitiesArray neste elemento, você pode chamar:

newElement.textContent = JSON.stringify(lotrCitiesArray)

Faça como no Katas 3 e crie uma função chamada showResults que receba o resultado por parâmetro e mostre o valor no seu DOM.

Os katas usarão a seguinte amostra de variáveis, que já estarão disponíveis para você. **A idéia é que você altere essas variáveis durante o desenvolvimento dos Katas, NÃO se preocupe em fazer cópias seguras dos arrays**.

const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";


## Tarefa

1. Kata 1 - Escreva uma função que retorna um array com as cidades em 'gotCitiesCSV'. Lembre-se de também adicionar os resultados à página.
2. Kata 2 - Escreva uma função que retorna um array das palavras na frase contida em 'bestThing'. Lembre-se de também adicionar os resultados à página.
3. Kata 3 - Escreva uma função que retorna uma string separada por ponto-e-vírgulas em vez das vírgulas de 'gotCitiesCSV'. Lembre-se de também adicionar os resultados à página.
4. Kata 4 - Escreva uma função que retorne uma string CSV (separada por vírgulas) de 'lotrCitiesArray'. Lembre-se de também adicionar os resultados à página.
5. Kata 5 - Escreva uma função que retorna um array com as 5 primeiras cidades de 'lotrCitiesArray'. Lembre-se de também adicionar os resultados à página.
6. Kata 6 - Escreva uma função que retorna um array com as 5 últimas cidades de 'lotrCitiesArray'. Lembre-se de também adicionar os resultados à página.
7. Kata 7 - Escreva uma função que retorna um array contendo da 3ª a 5ª cidades de 'lotrCitiesArray'. Lembre-se de também adicionar os resultados à página.
8. Kata 8 - Escreva uma função que use 'splice' para remover 'Rohan' de 'lotrCitiesArray' e retorne o novo 'lotrCitiesArray' modificado. Lembre-se de também adicionar os resultados à página.
9. Kata 9 - Escreva uma função que use 'splice' para remover todas as cidades depois de 'Dead Marshes' de 'lotrCitiesArray' e retorne o novo 'lotrCitiesArray' modificado. Lembre-se de também adicionar os resultados à página.
10. Kata 10 - Escreva uma função que use 'splice' para adicionar 'Rohan' de volta ao 'lotrCitiesArray' logo depois de 'Gondor' e retorne o novo 'lotrCitiesArray' modificado. Lembre-se de também adicionar os resultados à página.
11. Kata 11 - Escreva uma função que use 'splice' para renomear 'Dead Marshes' para 'Deadest Marshes' em 'lotrCitiesArray' e retorne o novo 'lotrCitiesArray' modificado. Lembre-se de também adicionar os resultados à página.
12. Kata 12 - Escreva uma função que usa 'slice' para retornar uma string com os primeiros 14 caracteres de 'bestThing'. Lembre-se de também adicionar os resultados à página.
13. Kata 13 - Escreva uma função que usa 'slice' para retornar uma string com os 12 últimos caracteres de 'bestThing'. Lembre-se de também adicionar os resultados à página.
14. Kata 14 - Escreva uma função que usa 'slice' para retornar uma string com os caracteres entre as posições 23 e 38 de 'bestThing'. Lembre-se de também adicionar os resultados à página.
15. Kata 15 - Escreva uma função que faz exatamente a mesma coisa que a #13 mas use o método 'substring' em vez de 'slice'. Lembre-se de também adicionar os resultados à página.
16. Kata 16 - Escreva uma função que faça exatamente a mesma coisa que o #14 mas use o método 'substring' em vez de 'slice'. Lembre-se de também adicionar os resultados à página.
17. Kata 17 - Escreva uma função que use 'pop' para remover a última cidade de 'lotrCitiesArray e retorne o novo array. Lembre-se de também adicionar os resultados à página.
18. Kata 18 - Escreva uma função que usa 'push' para adicionar de volta, no final do array, a cidade de 'lotrCitiesArray' que foi removida no #17 e retorne o novo array. Lembre-se de também adicionar os resultados à página.
19. Kata 19 - Escreva uma função que usa 'shift' para remover a primeira cidade de 'lotrCitiesArray e retorne o novo array. Lembre-se de também adicionar os resultados à página.
20. Kata 20 - Escreva uma função que use 'unshift' para adicionar de volta, no começo do array, a cidade de 'lotrCitiesArray' que foi removida no #19 e retorne o novo array. Lembre-se de também adicionar os resultados à página.

### Aviso!

1. Cada função deve exibir um resultado em uma página.
2. Cada função deve **retornar** um valor.
3. Cada função deve ter o nome kata1(), kata2() e assim por diante.
4. Seu arquivo deve ter o nome katas4.js

## Bônus

### Importante: Bônus é um elemento extra, ou seja, não é obrigatório e tem um nível de dificuldade mais elevado!

Cada Kata bônus valerá 0.5

1. Kata Bônus 1 - Escreva uma função que transforme a variável 'bestThing' em um array, encontre e retorne o índice da palavra 'only' dentro dela. Lembre-se de também adicionar os resultados à página.
2. Kata Bônus 2 - Escreva uma função que encontre e retorne o índice da última palavra do array 'bestThing'. Lembre-se de também adicionar os resultados à página.
3. Kata Bônus 3 - Escreva uma função que encontre e retorne um array de todas as cidades do array 'gotCitiesCSV' que tiverem vogais duplicadas ('aa', 'ee', etc.). Lembre-se de também adicionar os resultados à página.
4. Kata Bônus 4 - Escreva uma função que encontre e retorne um array com todas as cidades do array 'lotrCitiesArray' que terminem em 'or'. Lembre-se de também adicionar os resultados à página.
5. Kata Bônus 5 - Escreva uma função que encontre e retorne um array com todas as palavras de 'bestThing' que começa com 'b'. Lembre-se de também adicionar os resultados à página.
6. Kata Bônus 6 - Escreva uma função que retorne 'true' ou 'false' se o array 'lotrCitiesArray' incluir 'Mirkwood'. Lembre-se de também adicionar os resultados à página.
7. Kata Bônus 7 - Escreva uma função que retorne 'true' ou 'false' se o array 'lotrCitiesArray' incluir 'Hollywood'. Lembre-se de também adicionar os resultados à página.
8. Kata Bônus 8 - Escreva uma função que retorne o índice da palavra 'Mirkwood' no array 'lotrCitiesArray'. Lembre-se de também adicionar os resultados à página.
9. Kata Bônus 9 - Escreva uma função que encontre e retorne a primeira cidade do array 'lotrCitiesArray' que tiver mais de uma palavra. Lembre-se de também adicionar os resultados à página.
10. Kata Bônus 10 - Escreva uma função que inverta a ordem do array 'lotrCitiesArray' e retorne o novo array. Lembre-se de também adicionar os resultados à página.
11. Kata Bônus 11 - Escreva uma função que ordene o array 'lotrCitiesArray' alfabeticamente e retorne o novo array. Lembre-se de também adicionar os resultados à página.
12. Kata Bônus 12 - Escreva uma função que ordene o array 'lotrCitiesArray' pelo número de caracteres em cada cidade (por exemplo, a cidade mais curta aparece primeiro) e retorne o novo array. Lembre-se de também adicionar os resultados à página.

## Envio
Faça o push do código para o seu repositório GitHub, altere a visibilidade do repositório para internal e implemente-o GitHub pages. No Canvas, por favor, envie sua url do GitHub Pages: (ex:https://nomerandomico.pages.github.io/) e envie o link do seurepositório nos comentários. Atenção, seu repositório deverá ser compartilhado apenas com a organização. (Internal)
