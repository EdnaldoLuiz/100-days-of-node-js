const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/client.html');
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