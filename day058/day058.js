const WebSocket = require('ws');

const port = 3000;
const wss = new WebSocket.Server({ port }, () => {
  console.log(`Servidor WebSocket rodando na porta ${port}`);
});

wss.on('connection', (ws) => {
  ws.send('Conexão estabelecida com WebSocket!');
  ws.on('message', (message) => {
    ws.send(`Eco: ${message}`);
  });
});