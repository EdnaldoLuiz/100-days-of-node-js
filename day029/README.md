# Desafio 29

Documentação de API REST com Swagger no Express.js

## Explicação

### Ferramentas Utilizadas

- `express`: Framework web rápido e minimalista para Node.js.
- `swagger-jsdoc`: Biblioteca para gerar documentação Swagger a partir de comentários JSDoc.
- `swagger-ui-express`: Biblioteca para servir a interface Swagger UI no Express.js.

### Funções Principais

- `swaggerJSDoc()`: Gera a documentação Swagger a partir de comentários JSDoc.
- `swaggerUi.setup()`: Configura a interface Swagger UI.

## Arquivos

### `day029.js`

```js
const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();
const port = 3000;

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Exemplo',
      version: '1.0.0',
      description: 'Documentação da API de Exemplo usando Swagger',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const exampleRouter = require('./routes/exampleRoutes');
app.use('/api', exampleRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  console.log(`Documentação disponível em http://localhost:${port}/api-docs`);
});
```