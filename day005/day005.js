console.log('Início do script');

// setTimeout: Executa uma função após 2 segundos
const timeoutId = setTimeout(() => {
  console.log('Executando setTimeout após 2 segundos');
}, 2000);

// setInterval: Executa uma função a cada 1 segundo
const intervalId = setInterval(() => {
  console.log('Executando setInterval a cada 1 segundo');
}, 1000);

// setImmediate: Executa uma função imediatamente após a fase de eventos atual
setImmediate(() => {
  console.log('Executando setImmediate');
});

// clearTimeout: Cancela o setTimeout após 1 segundo
setTimeout(() => {
  clearTimeout(timeoutId);
  console.log('setTimeout cancelado');
}, 1000);

// clearInterval: Cancela o setInterval após 5 segundos
setTimeout(() => {
  clearInterval(intervalId);
  console.log('setInterval cancelado');
}, 5000);

console.log('Fim do script');