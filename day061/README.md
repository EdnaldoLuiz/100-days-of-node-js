# Desafio 61

Implementação de Worker Threads

## Explicação

### Ferramentas Utilizadas

- `worker_threads`: Módulo para criação de threads de trabalho no Node.js.

### Funções Principais

- `new Worker()`: Cria um novo worker thread.
- `worker.on('message')`: Lida com mensagens do worker.
- `worker.postMessage()`: Envia uma mensagem para o worker.

## Arquivos

### `day061.js`

```js
const { Worker } = require('worker_threads');

const worker = new Worker('./worker.js');

worker.on('message', (message) => {
  console.log(`Mensagem do worker: ${message}`);
});

worker.on('error', (error) => {
  console.error(`Erro no worker: ${error}`);
});

worker.on('exit', (code) => {
  console.log(`Worker finalizado com código: ${code}`);
});

worker.postMessage('Iniciar trabalho');
```

### `worker.js`

```js
const { parentPort } = require('worker_threads');

parentPort.on('message', (message) => {
  console.log(`Mensagem recebida no worker: ${message}`);
  parentPort.postMessage('Trabalho concluído');
});
```