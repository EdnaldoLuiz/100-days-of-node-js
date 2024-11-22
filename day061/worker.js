const { parentPort } = require('worker_threads');

parentPort.on('message', (message) => {
  console.log(`Mensagem recebida no worker: ${message}`);
  parentPort.postMessage('Trabalho concluído');
});