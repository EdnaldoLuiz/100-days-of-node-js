# Desafio 45

Web Scraping com Cheerio no Node.js

## Explicação

### Ferramentas Utilizadas

- `cheerio`: Biblioteca para manipulação de HTML no Node.js, similar ao jQuery.
- `axios`: Biblioteca para fazer requisições HTTP no Node.js.

### Funções Principais

- `axios.get()`: Faz uma requisição HTTP GET.
- `cheerio.load()`: Carrega o HTML para manipulação.

## Resultado

```js
const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://example.com';

axios.get(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);

        const titles = [];
        $('h1').each((index, element) => {
            titles.push($(element).text());
        });

        console.log('Títulos encontrados:', titles);
    })
    .catch(error => {
        console.error('Erro ao fazer scraping:', error);
    });
```
