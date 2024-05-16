# Exercício 1

Após analizar a base de dados, apercebi-me de algumas falhas no dataset forneceido. Primeiramente foi necessário passar os preços para valores numéricos cujo mongoDB conseguia ler, ou seja passar o separador das casas decimais para '.' invés de ','.
Por outro lado, foi necessário ter em atenção às citações, uma vez que algumas não terminavam, causando assim erros na sua interpretação. Para isto, passei os dados para um json com auxilia de um script em python, e dai inseri os mesmos no mongo

docker run -d -p 27017:27017 --name contratos mongo

docker exec -it contratos sh -c 'mongoimport --db contratos --collection contratos --file /seuArquivo.json --jsonArray' 

docker cp contratos2024.json contratos:/seuArquivo.json 

