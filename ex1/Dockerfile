# Use a imagem oficial do MongoDB
FROM mongo

# Copie o arquivo JSON para o contêiner
COPY contratos2024.json /contratos.json

EXPOSE 27017:27017

# Execute o comando mongoimport quando o contêiner iniciar
CMD mongoimport --db contratos --collection contratos --file /contratos.json --jsonArray