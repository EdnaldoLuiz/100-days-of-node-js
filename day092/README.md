# Desafio 92

Implementação de Política de Retentativa

## Explicação

Utilizamos a biblioteca `retry` para implementar uma política de retentativa em operações que podem falhar.

### Ferramentas Utilizadas

- `retry`: Biblioteca para implementar políticas de retentativa.

### Funções Principais

- `retry.operation()`: Cria uma nova operação com política de retentativa.
- `operation.attempt()`: Tenta executar a operação.
- `operation.retry()`: Verifica se a operação deve ser tentada novamente.

## Resultado

```js
const retry = require('retry');
const sucessChance = 0.7;

function unreliableOperation(callback) {
  const success = Math.random() > sucessChance;
  if (success) {
    callback(null, 'Operação bem-sucedida');
  } else {
    callback(new Error('Operação falhou'));
  }
}

function performOperationWithRetry() {
  const operation = retry.operation({
    retries: 5,
    factor: 2,
    minTimeout: 1000,
    maxTimeout: 4000,
  });

  operation.attempt((currentAttempt) => {
    console.log(`Tentativa ${currentAttempt}`);
    unreliableOperation((err, result) => {
      if (operation.retry(err)) {
        return;
      }

      if (err) {
        console.error('Todas as tentativas falharam:', err.message);
      } else {
        console.log('Resultado:', result);
      }
    });
  });
}

performOperationWithRetry();
```