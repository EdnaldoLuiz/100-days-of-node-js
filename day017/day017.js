const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream');

const assetsDir = path.join(__dirname, 'assets');
const inputFilePath = path.join(assetsDir, 'input.txt');
const outputFilePath = path.join(assetsDir, 'output.txt');

if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir);
}

if (!fs.existsSync(inputFilePath)) {
    fs.writeFileSync(inputFilePath, 'Este é um arquivo de entrada para demonstrar a manipulação de streams no Node.js.');
}

const readStream = fs.createReadStream(inputFilePath, { encoding: 'utf8' });
const writeStream = fs.createWriteStream(outputFilePath);

pipeline(readStream, writeStream, (err) => {
    if (err) {
        console.error('Pipeline falhou.', err);
    }
    console.log('Pipeline concluído com sucesso.');
});