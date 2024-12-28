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