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