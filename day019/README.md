# Desafio 19

Upload de Arquivos com Express.js e Multer

## Explicação

### Ferramentas Utilizadas

- `express`: Framework web rápido e minimalista para Node.js.
- `multer`: Middleware para manipulação de multipart/form-data, usado para upload de arquivos.

### Funções Principais

- `express()`: Cria uma aplicação Express.
- `multer()`: Configura o middleware para upload de arquivos.
- `app.post()`: Define uma rota POST para upload de arquivos.
- `app.listen()`: Faz a aplicação Express ouvir em uma porta específica.

## Resultado

```js
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

const uploadDir = path.join(__dirname, 'uploads');
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
```