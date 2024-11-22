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