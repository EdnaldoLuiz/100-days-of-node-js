# Desafio 1

Hello World com NodeJS no Navegador

## Explicação

### Ferramentas Utilizadas

- `http`: Biblioteca padrão do Node.js para criar servidores HTTP.

### Funções Principais

- `http.createServer()`: Cria um novo servidor HTTP.
- `res.writeHead()`: Envia um cabeçalho de resposta ao solicitante.
- `res.end()`: Envia o corpo da resposta e sinaliza que todas as respostas do servidor foram enviadas.

## Resultado

```js
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);
```