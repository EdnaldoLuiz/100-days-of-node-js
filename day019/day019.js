const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

const uploadDir = path.join(__dirname, 'assets');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

app.use(express.json());

app.post('/upload', upload.single('file'), (req, res) => {
  res.send(`Arquivo ${req.file.originalname} enviado com sucesso!`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});