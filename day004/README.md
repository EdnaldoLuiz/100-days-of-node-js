# Desafio 4

Servidor HTTP Simples

## Explicação

### Ferramentas Utilizadas

- `http`: Biblioteca padrão do Node.js para criar servidores HTTP.

### Funções Principais

- `http.createServer()`: Cria um novo servidor HTTP.
- `req.method`: Obtém o método HTTP da solicitação.
- `req.url`: Obtém a URL da solicitação.
- `res.writeHead()`: Envia um cabeçalho de resposta ao solicitante.
- `res.write()`: Escreve uma resposta ao solicitante.
- `res.end()`: Envia o corpo da resposta e sinaliza que todas as respostas do servidor foram enviadas.

## Resultado

```js
var http = require('http');
const port = 8080;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Hello World!</h1>');
  res.write('<p>Método HTTP: ' + req.method + '</p>');
  res.write('<p>URL: ' + req.url + '</p>');
  res.end();
}).listen(port, () => {
  console.log('Servidor rodando em http://localhost:8080');
});
```