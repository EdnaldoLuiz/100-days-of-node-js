const fs = require('fs');
const csv = require('csv-parser');

if (!fs.existsSync('assets')) {
    fs.mkdirSync('assets', { recursive: true });
}

fs.createReadStream('assets/data.csv')
    .pipe(csv())
    .on('data', (row) => {
        console.log(row);
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });