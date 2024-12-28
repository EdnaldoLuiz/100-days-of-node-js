# Desafio 97

Automação com Puppeteer

## Explicação

Utilizamos a biblioteca Puppeteer para automatizar o navegador Chrome/Chromium e realizar tarefas como navegação, captura de tela e extração de informações.

### Ferramentas Utilizadas

- `puppeteer`: Biblioteca para automação de navegador.

### Funções Principais

- `puppeteer.launch()`: Inicia uma instância do navegador.
- `page.goto()`: Navega para a URL especificada.
- `page.screenshot()`: Tira um screenshot da página.
- `page.title()`: Obtém o título da página.
- `browser.close()`: Fecha o navegador.

## Resultado

```js
const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://example.com');

  await page.screenshot({ path: 'example.png' });

  const title = await page.title();
  console.log(`Título da página: ${title}`);

  await browser.close();
}

run();
```