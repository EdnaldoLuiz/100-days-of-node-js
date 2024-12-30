# Desafio 99

Gerenciamento de Configurações

## Explicação

### Ferramentas Utilizadas

- `config`: Biblioteca para gerenciamento de configurações.
- `dotenv`: Biblioteca para carregar variáveis de ambiente.

### Funções Principais

- `config.get()`: Obtém uma configuração do arquivo de configuração.
- `dotenv.config()`: Carrega variáveis de ambiente do arquivo `.env`.

## Arquivos

### day099.js

```js
const config = require('config');
require('dotenv').config();

const appConfig = {
  port: config.get('App.port'),
  env: process.env.NODE_ENV || 'development',
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
};

console.log('Configurações da aplicação:', appConfig);
```