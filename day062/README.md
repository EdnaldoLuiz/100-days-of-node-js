# Desafio 62

Emissores de Eventos no Node.js

## Explicação

### Ferramentas Utilizadas

- `EventEmitter`: Classe para criação e manipulação de eventos no Node.js.

### Funções Principais

- `EventEmitter.on()`: Adiciona um ouvinte para um evento específico.
- `EventEmitter.emit()`: Emite um evento.
- `EventEmitter.on('error')`: Adiciona um ouvinte para eventos de erro.

## Arquivos

### `day062.js`

```js
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
  console.log('Um evento ocorreu!');
});

myEmitter.emit('event');

myEmitter.on('eventWithArgs', (arg1, arg2) => {
  console.log(`Evento com argumentos: ${arg1}, ${arg2}`);
});

myEmitter.emit('eventWithArgs', 'arg1', 'arg2');

myEmitter.on('error', (err) => {
  console.error('Erro capturado:', err);
});

myEmitter.emit('error', new Error('Algo deu errado!'));
```