# Desafio 53

Dockerizando Aplicações Node.js

## Explicação

### Ferramentas Utilizadas

- node: Plataforma de execução de JavaScript no lado do servidor.
- docker: Plataforma para desenvolver, enviar e executar aplicações em contêineres.

### Funções Principais

- Dockerfile: Define como a imagem Docker será construída.
- .dockerignore: Define arquivos e diretórios que devem ser ignorados pelo Docker.
- docker build: Constrói a imagem Docker.
- docker run: Executa o contêiner Docker.

## Arquivos


### `day053.js`

```js
const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Docker!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

### `Dockerfile`

```dockerfile
FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
```