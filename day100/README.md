# Desafio 100

Deploy de Aplicação Node.js

## URL

<a href="https://day100-ntk0ni0s5-ednaldoluizs-projects.vercel.app/">Link da Aplicação na Vercel</a>

## Explicação

Utilizamos o Express.js para criar um servidor que serve uma página HTML com CSS. O a hospedagem escolhida foi a Vercel.

### Ferramentas Utilizadas

- `express`: Framework web para Node.js.
- `vercel`: Plataforma de deploy.

### Funções Principais

- `express.static()`: Serve arquivos estáticos.
- `app.get()`: Define uma rota GET.
- `res.sendFile()`: Envia um arquivo como resposta.

## resultado

```js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'public'), {
    setHeaders: (res) => {
        res.removeHeader('Accept-Ranges');
    }
}));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
```
