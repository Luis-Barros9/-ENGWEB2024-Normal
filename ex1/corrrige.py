import csv
import sys
## script em python que lẽ o dataset e remove todas as entradas sem id


def remove_invalid_entries(file):
    data = None
    with open(file, 'r') as f:
        reader = csv.reader(f, delimiter=';')
        

        data = list(reader)



    with open(file, 'w+') as f:
        writer = csv.writer(f)

        writer.writerow(data[0])

        for row in data[1:]:
            if len(row) > 1 and (row[0] != '') and (row[0] != '"'):
                writer.writerow(row)

if __name__ == '__main__':
    file = "contratos2024.csv"
    if len (sys.argv) == 2:
        file = sys.argv[1]
    remove_invalid_entries(file)