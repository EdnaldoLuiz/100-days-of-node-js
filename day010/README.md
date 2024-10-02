# Desafio 10

Manipulação de Requisições POST com Express.js e body-parser

## Explicação

### Ferramentas Utilizadas

- `express`: Framework web rápido e minimalista para Node.js.
- `body-parser`: Middleware para analisar corpos de requisição.

### Funções Principais

- `express()`: Cria uma aplicação Express.
- `app.use()`: Adiciona middleware à aplicação.
- `app.post()`: Define uma rota POST.
- `app.listen()`: Faz a aplicação Express ouvir em uma porta específica.

## Arquivos`

### `day010.js`

```js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const { router, route } = require('./routes');
const bodyParserMiddleware = require('./middlewares/bodyParserMiddleware');

app.use(bodyParserMiddleware.jsonParser);
app.use(bodyParserMiddleware.urlencodedParser);

app.use(route.home, router);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);

  const data = {
    name: 'Luiz',
    email: 'luiz@gmail.com'
  };

  axios.post('http://localhost:3000/submit', data)
    .then((res) => {
      console.log(`Status: ${res.status}`);
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
});
```

### `controllers/homeController.js`

```js
exports.homePage = (req, res) => {
    res.send('<h1>Home Page</h1>');
};
```

### `controllers/submitController.js`

```js
exports.submitData = (req, res) => {
    const { name, email } = req.body;
    res.send(`<h1>Dados Recebidos</h1><p>Nome: ${name}</p><p>Email: ${email}</p>`);
};
```

### `middlewares/bodyParserMiddleware.js`

```js
const bodyParser = require('body-parser');

exports.jsonParser = bodyParser.json();
exports.urlencodedParser = bodyParser.urlencoded({ extended: true });
```

### routes/index.js

```js
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const submitController = require('../controllers/submitController');

const route = {
    home: '/',
    submit: '/submit'
}

router.get(route.home, homeController.homePage);
router.post(route.submit, submitController.submitData);

module.exports = { router, route };
```
