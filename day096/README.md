# Desafio 96

Monitoramento de Performance

## Explicação

Utilizamos PM2 para gerenciar processos Node.js e New Relic para monitorar a performance da aplicação.

### Ferramentas Utilizadas

- `pm2`: Gerenciador de processos para Node.js.
- `newrelic`: Ferramenta de monitoramento de performance.

### Configuração do New Relic

1. Crie uma conta no New Relic e obtenha sua chave de licença.
2. Substitua `YOUR_NEW_RELIC_LICENSE_KEY` no arquivo `newrelic.js` pela sua chave de licença.

### Funções Principais

- `pm2 start`: Inicia a aplicação com PM2.
- `newrelic`: Monitora a performance da aplicação.

## Resultado

```js
console.log('Executando day096.js');

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, PM2 e New Relic!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
```js