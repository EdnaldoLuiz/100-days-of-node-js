# Desafio 65

Mocking de Respostas de API com nock

## Explicação

### Ferramentas Utilizadas

- `axios`: Biblioteca para fazer requisições HTTP.
- `nock`: Biblioteca para fazer mocking de requisições HTTP.

### Funções Principais

- `axios.get()`: Faz uma requisição HTTP GET.
- `nock()`: Intercepta requisições HTTP e fornece respostas mockadas.

## Arquivos

### `src/api.js`

const axios = require('axios');

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar dados');
  }
};

module.exports = fetchData;

### `src/mock.js`

const nock = require('nock');

const mockAPI = () => {
  nock('https://api.example.com')
    .get('/data')
    .reply(200, {
      success: true,
      data: { id: 1, name: 'Mocked Data' }
    });
};

module.exports = mockAPI;

### `src/test.js`

```js
const fetchData = require('./../day065');
const mockAPI = require('./mock');

const runTest = async () => {
  mockAPI();

  const url = 'https://api.example.com/data';
  try {
    const data = await fetchData(url);
    console.log('Dados recebidos:', data);
  } catch (error) {
    console.error(error.message);
  }
};

runTest();
```