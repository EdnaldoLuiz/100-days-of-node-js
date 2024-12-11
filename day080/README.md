# Desafio 80

Streams e Buffer no Node.js

## Explicação

### Ferramentas Utilizadas

- `fs`: Módulo do Node.js para manipulação de arquivos.
- `path`: Módulo do Node.js para manipulação de caminhos de arquivos.

### Funções Principais

- `fs.createReadStream()`: Cria um stream de leitura.
- `fs.createWriteStream()`: Cria um stream de escrita.
- `stream.on('data')`: Evento disparado quando um chunk de dados é recebido.
- `stream.on('end')`: Evento disparado quando a leitura do stream é concluída.
- `stream.on('error')`: Evento disparado quando ocorre um erro no stream.
- `stream.write()`: Escreve dados no stream.
- `stream.end()`: Finaliza o stream de escrita.

## Arquivos

### `day080.js`

```js
const readFileStream = require('./readFileStream');
const writeFileStream = require('./writeFileStream');

writeFileStream();

setTimeout(() => {
  readFileStream();
}, 1000);
```

### `streams/readFileStream.js`

```js
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'assets', 'input.txt');
const readStream = fs.createReadStream(filePath);

readStream.on('data', (chunk) => {
  console.log('Novo chunk recebido:');
  console.log(chunk.toString());
});

readStream.on('end', () => {
  console.log('Leitura do arquivo concluída.');
});

readStream.on('error', (err) => {
  console.error('Erro ao ler o arquivo:', err);
});
```

### `streams/writeFileStream.js`

```js
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'assets', 'output.txt');
const writeStream = fs.createWriteStream(filePath);

const data = 'Este é um exemplo de escrita usando Streams no Node.js.\n';

writeStream.write(data, 'utf8');
writeStream.end();

writeStream.on('finish', () => {
  console.log('Escrita no arquivo concluída.');
});

writeStream.on('error', (err) => {
  console.error('Erro ao escrever no arquivo:', err);
});
```