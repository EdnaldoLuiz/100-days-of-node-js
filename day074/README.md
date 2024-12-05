# Desafio 74

Microsserviços com Node.js

## Explicação

### Ferramentas Utilizadas

- `seneca`: Biblioteca para criação de microsserviços no Node.js.

### Funções Principais

- `seneca.add()`: Define um novo serviço.
- `seneca.listen()`: Faz o serviço escutar em uma porta específica.
- `seneca.client()`: Conecta um cliente a um serviço.
- `seneca.act()`: Executa uma ação em um serviço.

## Arquivos

### `serviceA.js`

```js
const seneca = require('seneca')();

seneca.add({ role: 'math', cmd: 'sum' }, (msg, reply) => {
  const sum = msg.left + msg.right;
  reply(null, { answer: sum });
});

seneca.listen({ port: 10101 });
```

### `serviceB.js`

```js
const seneca = require('seneca')();

seneca.client({ port: 10101 });

seneca.act({ role: 'math', cmd: 'sum', left: 1, right: 2 }, (err, result) => {
  if (err) return console.error(err);
  console.log('Resultado da soma:', result.answer);
});
```