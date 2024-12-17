# Desafio 86

Extraindo textos de PDF

## Explicação

Utilizamos a biblioteca `pdf-parse` para extrair texto diretamente de PDFs no Node.js.

### Ferramentas Utilizadas

- `pdf-parse`: Biblioteca para extrair texto de PDFs.

### Funções Principais

- `pdf()`: Extrai texto de um buffer de PDF.

## Resultado

```js
const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const pdfPath = path.join(__dirname, 'assets', 'sample.pdf');

async function extractTextFromPDF(pdfPath) {
  try {
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdf(dataBuffer);
    console.log('Texto extraído do PDF:');
    console.log(data.text);
  } catch (error) {
    console.error('Erro ao extrair texto do PDF:', error);
  }
}

extractTextFromPDF(pdfPath);
```