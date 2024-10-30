# Desafio 38

Streaming de Arquivos com o Módulo `fs` no Node.js

## Explicação

### Ferramentas Utilizadas

- `http`: Módulo HTTP nativo do Node.js para criar um servidor.
- `fs`: Módulo de sistema de arquivos nativo do Node.js para ler e escrever arquivos.

### Funções Principais

- `fs.createReadStream()`: Cria um stream de leitura para um arquivo.
- `stream.pipe()`: Encaminha os dados do stream de leitura para a resposta HTTP.

## Resultado

```js
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const fiveMegabytes = 1024 * 1024 * 5;

const requestHandler = (req, res) => {
    const filePath = path.join(__dirname, 'assets', 'largefile.txt');

    fs.mkdirSync(path.join(__dirname, 'assets'), { recursive: true });
    fs.writeFileSync(filePath, 'A'.repeat(fiveMegabytes)); 

    fs.stat(filePath, (err, stats) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Arquivo não encontrado');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Erro interno do servidor');
            }
            return;
        }

        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Content-Length': stats.size,
        });

        const readStream = fs.createReadStream(filePath);
        readStream.pipe(res);
    });
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
```
