const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('Novo cliente conectado');

  socket.on('message', (message) => {
    console.log('Mensagem recebida:', message);
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});