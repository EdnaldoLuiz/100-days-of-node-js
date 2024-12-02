# Desafio 71

Manipulação de Arquivos CSV

## Explicação

### Ferramentas Utilizadas

- `csv-parser`: Biblioteca para leitura e manipulação de arquivos CSV no Node.js.

### Funções Principais

- `fs.createReadStream()`: Cria um stream de leitura para o arquivo CSV.
- `csv()`: Converte o stream de leitura em objetos JavaScript.

## Resultado

```js
const fs = require('fs');
const csv = require('csv-parser');

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });
```