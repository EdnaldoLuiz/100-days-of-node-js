const buffer = Buffer.alloc(16);
console.log('Buffer inicial:', buffer);

buffer.write('Hello, Node.js!', 0, 'utf-8');
console.log('Buffer após escrita:', buffer);

const slice = buffer.slice(0, 5);
console.log('Slice do buffer:', slice.toString());

const json = buffer.toJSON();
console.log('Buffer em JSON:', json);