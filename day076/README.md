# Desafio 76

Análise em Tempo Real

## Explicação

### Ferramentas Utilizadas

- `express`: Framework web para Node.js.
- `socket.io`: Biblioteca para comunicação em tempo real.

### Funções Principais

- `express()`: Cria uma aplicação Express.
- `http.createServer()`: Cria um servidor HTTP.
- `socketIo()`: Inicializa o Socket.IO.
- `io.on('connection')`: Escuta novas conexões de clientes.
- `socket.emit()`: Emite eventos para o cliente.
- `socket.on('disconnect')`: Escuta a desconexão de clientes.

## Resultado

```js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client.html');
});

io.on('connection', (socket) => {
  console.log('Novo cliente conectado');
  
  setInterval(() => {
    const data = { timestamp: new Date(), value: Math.random() * 100 };
    socket.emit('real-time-data', data);
  }, 1);

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
```