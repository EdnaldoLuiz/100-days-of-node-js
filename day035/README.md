# Desafio 35

Comunicação em Tempo Real com Socket.IO

## Explicação

### Ferramentas Utilizadas

- `express`: Framework web rápido e minimalista para Node.js.
- `http`: Módulo HTTP nativo do Node.js para criar um servidor.
- `socket.io`: Biblioteca para comunicação em tempo real.

### Funções Principais

- `socket.io()`: Cria uma instância do servidor Socket.IO.
- `io.on()`: Define manipuladores de eventos para o servidor Socket.IO.
- `socket.emit()`: Envia eventos para o cliente.

## Arquivos

### `day035.js`

```javascript
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
  console.log('Um usuário se conectou');

  socket.on('disconnect', () => {
    console.log('Um usuário se desconectou');
  });

  socket.on('chat message', (msg) => {
    console.log('Mensagem: ' + msg);
    io.emit('chat message', msg);
  });
});

server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```