const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { handleMessage } = require('./controllers/messageController');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('Novo cliente conectado');
  handleMessage(socket);

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

const port = 8000;
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});