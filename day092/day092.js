const retry = require('retry');

const sucessChance = 0.7;

function unreliableOperation(callback) {
  const success = Math.random() > sucessChance; // 30% de chance de sucesso
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