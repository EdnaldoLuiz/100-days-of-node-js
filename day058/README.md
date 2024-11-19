# Desafio 58

Teste de Carga de WebSocket com Artillery

## Explicação

### Ferramentas Utilizadas

- `ws`: Biblioteca para WebSockets no Node.js.
- `artillery`: Ferramenta de teste de carga para APIs e WebSockets.

### Funções Principais

- `new WebSocket.Server(...)`: Cria um servidor WebSocket.
- `ws.on('connection')`: Lida com novas conexões WebSocket.
- `artillery run`: Executa o teste de carga definido no YAML.

## Resultado

```js
const WebSocket = require('ws');

const port = 3000;
const wss = new WebSocket.Server({ port }, () => {
  console.log(`Servidor WebSocket rodando na porta ${port}`);
});

wss.on('connection', (ws) => {
  ws.send('Conexão estabelecida com WebSocket!');
  ws.on('message', (message) => {
    ws.send(\`Eco: \${message}\`);
  });
});
```