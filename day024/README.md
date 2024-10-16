# Desafio 24

Tarefas CRON no Node.js com `node-cron`

## Explicação

### Ferramentas Utilizadas

- `node-cron`: Biblioteca para agendamento de tarefas CRON no Node.js.

### Funções Principais

- `cron.schedule()`: Agenda uma tarefa CRON.

## Resultado

```js
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
```