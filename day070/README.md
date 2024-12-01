# Desafio 70

Renderização no Lado do Servidor (SSR) com Express

## Explicação

### Ferramentas Utilizadas

- `express`: Framework web rápido e minimalista para Node.js.
- `ejs`: Mecanismo de templates para renderização de páginas HTML.

### Funções Principais

- `app.set('view engine', 'ejs')`: Configura o EJS como mecanismo de templates.
- `app.set('views', path.join(__dirname, 'views'))`: Define o diretório de views.
- `res.render('index', { name: 'Mundo' })`: Renderiza a view `index` com dados.

## Resultado

```js
const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.get('/', (req, res) => {
  res.render('index', { name: 'Mundo' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```