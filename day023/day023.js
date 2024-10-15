const WebSocket = require('ws');

const port = 3000;
const server = new WebSocket.Server({ port });

server.on('connection', (ws) => {
  console.log('Cliente conectado');

  ws.on('message', (message) => {
    console.log(`Mensagem recebida: ${message}`);
    ws.send(`Você disse: ${message}`);
  });

  ws.on('close', () => {
    console.log('Cliente desconectado');
  });

  ws.on('error', (error) => {
    console.error(`Erro: ${error.message}`);
  });
});

console.log(`Servidor WebSocket rodando na porta ${port}`);