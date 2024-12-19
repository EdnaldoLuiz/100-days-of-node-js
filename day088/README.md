# Desafio 88

Lendo textos de Imagens

## Explicação

Utilizamos a biblioteca Tesseract.js para realizar OCR (Optical Character Recognition) em imagens e extrair texto.

### Ferramentas Utilizadas

- `tesseract.js`: Biblioteca para OCR.

### Funções Principais

- `createWorker()`: Cria um worker do Tesseract.js para realizar OCR.
- `worker.recognize()`: Realiza OCR em uma imagem.
- `worker.terminate()`: Termina o worker do Tesseract.js.

## Resultado

```js
const Tesseract = require('tesseract.js');
const path = require('path');

const imagePath = path.join(__dirname, 'assets', 'image.png');

async function readTextFromImage(imagePath) {
  try {
    const { data: { text } } = await Tesseract.recognize(imagePath, 'eng', {
      logger: (info) => console.log(info), 
    });
    console.log('Texto extraído da imagem:');
    console.log(text);
  } catch (error) {
    console.error('Erro ao extrair texto da imagem:', error);
  }
}

readTextFromImage(imagePath);
```