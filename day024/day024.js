const cron = require('node-cron');

const everyMinute = '* * * * *';
const every10Seconds = '*/10 * * * * *';

cron.schedule(everyMinute, () => {
  console.log('Tarefa executada a cada minuto');
});

cron.schedule(every10Seconds, () => {
  console.log('Tarefa executada a cada 10 segundos');
});

console.log('Tarefas CRON agendadas');