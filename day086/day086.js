const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const pdfPath = path.join(__dirname, 'assets', 'teste.pdf');

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