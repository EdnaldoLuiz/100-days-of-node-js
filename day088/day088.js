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
