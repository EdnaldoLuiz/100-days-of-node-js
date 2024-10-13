# Desafio 21

Promises no Node.js

## Explicação

### Ferramentas Utilizadas

- `Promise`: Objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.

### Funções Principais

- `new Promise()`: Cria uma nova Promise.
- `promise.then()`: Adiciona manipuladores de sucesso e falha.
- `promise.catch()`: Adiciona um manipulador de falha.

## Resultado

```js
function delay(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      reject(new Error('O tempo deve ser positivo'));
    } else {
      setTimeout(() => {
        resolve(`Resolvido após ${ms} ms`);
      }, ms);
    }
  });
}

// Utilizando a Promise
delay(1000)
  .then((message) => {
    console.log(message);
    return delay(2000);
  })
  .then((message) => {
    console.log(message);
    return delay(3000);
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error('Erro:', error.message);
  });
  ```