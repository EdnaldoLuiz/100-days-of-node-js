# Desafio 82

Clustering para Escalabilidade

## Explicação

### Ferramentas Utilizadas

- `cluster`: Módulo do Node.js para criação de clusters de processos.
- `http`: Módulo do Node.js para criação de servidores HTTP.
- `os`: Módulo do Node.js para obter informações sobre o sistema operacional.

### Funções Principais

- `cluster.isMaster`: Verifica se o processo atual é o master.
- `cluster.fork()`: Cria um novo processo de trabalho.
- `cluster.on('exit')`: Evento disparado quando um processo de trabalho morre.
- `os.cpus()`: Retorna informações sobre os núcleos de CPU do sistema.

## Resultado

```js
const cluster = require('cluster');
const http = require('http');
const os = require('os');

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} finalizado`);
    cluster.fork();
  });
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello, Cluster!\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} iniciado`);
}
```