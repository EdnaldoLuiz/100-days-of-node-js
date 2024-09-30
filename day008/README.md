# Desafio 8

Conceitos Básicos do Express.js

## Explicação

### Ferramentas Utilizadas

- `express`: Framework web rápido e minimalista para Node.js.

### Funções Principais

- `express()`: Cria uma aplicação Express.
- `app.get()`: Define uma rota GET.
- `app.listen()`: Faz a aplicação Express ouvir em uma porta específica.

## Resultado

```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact Page</h1>');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```