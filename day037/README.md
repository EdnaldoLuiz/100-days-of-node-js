# Desafio 37

Servidor HTTP com Cache Simples e Arquivos Estáticos

## Explicação

### Ferramentas Utilizadas

- `http`: Módulo HTTP nativo do Node.js para criar um servidor.
- `fs`: Módulo de sistema de arquivos nativo do Node.js para ler e escrever arquivos.
- `path`: Módulo de manipulação de caminhos de arquivos nativo do Node.js.

### Funções Principais

- `http.createServer()`: Cria uma instância do servidor HTTP.
- `fs.readFile()`: Lê o conteúdo de um arquivo.
- `path.join()`: Junta segmentos de caminho de arquivos.

## Resultado

```js
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const cache = {};

const getContentType = (extname) => {
  const contentTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
  };
  return contentTypes[extname] || 'text/plain';
};

const sendResponse = (res, statusCode, contentType, content) => {
  res.writeHead(statusCode, { 'Content-Type': contentType });
  res.end(content, 'utf-8');
};

const handleFileRead = (res, filePath, contentType, err, content) => {
  if (err) {
    if (err.code === 'ENOENT') {
      sendResponse(res, 404, 'text/plain', 'Página não encontrada');
    } else {
      sendResponse(res, 500, 'text/plain', 'Erro interno do servidor');
    }
  } else {
    cache[filePath] = content;
    sendResponse(res, 200, contentType, content);
  }
};

const requestHandler = (req, res) => {
  const filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
  const extname = path.extname(filePath);
  const contentType = getContentType(extname);

  if (cache[filePath]) {
    sendResponse(res, 200, contentType, cache[filePath]);
  } else {
    fs.readFile(filePath, (err, content) => handleFileRead(res, filePath, contentType, err, content));
  }
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```
