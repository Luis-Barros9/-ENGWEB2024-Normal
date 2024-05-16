# Exercício 1

Após analizar a base de dados, apercebi-me de algumas falhas no dataset forneceido. Primeiramente foi necessário passar os preços para valores numéricos cujo mongoDB conseguia ler, ou seja passar o separador das casas decimais para '.' invés de ','.
Por outro lado, foi necessário ter em atenção às citações, uma vez que algumas não terminavam, causando assim erros na sua interpretação.