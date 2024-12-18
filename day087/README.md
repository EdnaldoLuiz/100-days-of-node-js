# Desafio 87

Testes com Jest no Node.js

## Explicação

Utilizamos a biblioteca Jest para escrever e executar testes unitários no Node.js.

### Ferramentas Utilizadas

- `jest`: Biblioteca de testes para JavaScript.

### Funções Principais

- `test()`: Define um caso de teste.
- `expect()`: Cria uma expectativa para um valor.
- `toBe()`: Verifica se o valor é igual ao esperado.

## Arquivos

### `day087.js`

```js
function sum(a, b) {
  return a + b;
}

module.exports = sum;
```

### `test/day087.test.js`

```js
const sum = require('./day087');

test('soma 1 + 2 para igualar 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('soma 5 + 5 para igualar 10', () => {
  expect(sum(5, 5)).toBe(10);
});
```