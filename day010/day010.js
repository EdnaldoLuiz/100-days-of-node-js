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