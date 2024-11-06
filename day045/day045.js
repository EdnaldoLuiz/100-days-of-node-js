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