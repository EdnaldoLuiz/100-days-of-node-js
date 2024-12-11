const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'assets', 'output.txt');

function writeFileStream() {
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
}

module.exports = writeFileStream;