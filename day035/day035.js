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