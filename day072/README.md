# Desafio 72

Criação de PDFs com Node.js

## Explicação

### Ferramentas Utilizadas

- `pdfkit`: Biblioteca para criação de PDFs no Node.js.

### Funções Principais

- `new PDFDocument()`: Cria um novo documento PDF.
- `doc.pipe()`: Define o stream de saída para o PDF.
- `doc.fontSize()`: Define o tamanho da fonte.
- `doc.text()`: Adiciona texto ao PDF.
- `doc.end()`: Finaliza o documento PDF.

## Resultado

```js
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'assets');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir);
}

const pdfPath = path.join(assetsDir, 'output.pdf');

const doc = new PDFDocument();

doc.pipe(fs.createWriteStream(pdfPath));

doc.fontSize(25).text('Este é um exemplo de PDF criado com Node.js!', 100, 100);

doc.end();
```