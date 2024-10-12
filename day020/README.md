# Desafio 20

Variáveis de Ambiente com dotenv

## Explicação

### Ferramentas Utilizadas

- `dotenv`: Biblioteca para carregar variáveis de ambiente de um arquivo `.env` para `process.env`.

### Funções Principais

- `dotenv.config()`: Carrega variáveis de ambiente de um arquivo `.env`.

## Arquivos 

### `.env`

```env
PORT=3000
MESSAGE=Hello from dotenv!
```

### `day020.js`

```js
require('dotenv').config();

const port = process.env.PORT || 3000;
const message = process.env.MESSAGE || 'Hello, World!';

console.log(`Servidor rodando na porta ${port}`);
console.log(`Mensagem: ${message}`);
```