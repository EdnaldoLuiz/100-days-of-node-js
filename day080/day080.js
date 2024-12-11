const readFileStream = require('./streams/readFileStream');
const writeFileStream = require('./streams/writeFileStream');

writeFileStream();

setTimeout(() => {
  readFileStream();
}, 1000);