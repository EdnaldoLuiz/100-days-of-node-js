const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const upload = multer({ dest: 'uploads/' });
const app = express();
const PORT = 3000;

app.post('/upload', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('Nenhum arquivo enviado');
  }
  const outputFilename = `resized-${Date.now()}.jpg`;
  const outputPath = path.join(__dirname, 'uploads', outputFilename);

  try {
    await sharp(req.file.path)
      .resize(300)
      .jpeg({ quality: 80 })
      .toFile(outputPath);
    fs.unlinkSync(req.file.path);
    res.json({ message: 'Upload e redimensionamento concluídos', file: outputFilename });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao processar a imagem', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});