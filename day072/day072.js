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