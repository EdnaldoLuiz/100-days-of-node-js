const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'assets', 'input.txt');

function readFileStream() {
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
}

module.exports = readFileStream;