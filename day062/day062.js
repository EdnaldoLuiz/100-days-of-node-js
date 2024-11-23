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