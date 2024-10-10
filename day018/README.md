# Desafio 18

Criação de Servidor TCP com Node.js

## Explicação

### Ferramentas Utilizadas

- `net`: Módulo de rede do Node.js para criar servidores e clientes TCP.

### Funções Principais

- `net.createServer()`: Cria um servidor TCP.
- `server.listen()`: Faz o servidor TCP ouvir em uma porta específica.
- `server.on()`: Define manipuladores de eventos para o servidor TCP.

## Resultado

```js
const net = require('net');

const port = 3000;
const server = net.createServer((socket) => {
  console.log('Cliente conectado');

  socket.on('data', (data) => {
    console.log(`Dados recebidos: ${data}`);
    socket.write(`Você disse: ${data}`);
  });

  socket.on('end', () => {
    console.log('Cliente desconectado');
  });

  socket.on('error', (err) => {
    console.error(`Erro: ${err.message}`);
  });
});

server.listen(port, () => {
  console.log(`Servidor TCP rodando na porta ${port}`);
});
```