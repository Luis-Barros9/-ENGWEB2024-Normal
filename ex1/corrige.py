# script em python que trandforma contratos2024.csv em contratos2024.json
import csv
import json
import re


# abre o arquivo csv, delimitador ; e  " para ignorar as aspas

#with CRLF encoding = 'utf-8'



#
print("Iniciando a conversão do arquivo csv para json")
with open('contratos2024.csv', 'r', encoding='utf-8') as f:
    print("Arquivo aberto com sucesso")
    reader = csv.DictReader(f, delimiter=';', quotechar='"')
    # cria um dicionario com os dados do csv
    data = {}
    for row in reader:
        if row['idcontrato'] not in data.keys() and len(row['idcontrato']) > 2:
            id = row.pop('idcontrato')
            row['prazoExecucao'] = int(row['prazoExecucao'])
            
            row['precoContratual'] = float( re.sub(",",".",row['precoContratual']))
            # adiciona os dados do contrato ao dicionario   
            if len(row):
                data[id] = row
            # converter precoContratual para double e prazoExecucao para inteiro
        else:
            print("Entrada invalida " + row['idcontrato'])

db = []
for key,value in data.items():
    dict = {}
    dict['_id'] = key
    for k,v in value.items():
        dict[k] = v
    db.append(dict)

# do it but with pretty print
with open('contratos2024Test.json', 'w', encoding='utf-8') as f:
    print("Escrevendo arquivo json")
    json.dump(db, f, indent=4)
    print("Arquivo gerado com sucesso")

# escreve o dicionario em um arquivo json

