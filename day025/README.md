# Desafio 25

Testes com Mocha e Chai no Node.js

## Explicação

### Ferramentas Utilizadas

- `mocha`: Framework de testes para Node.js.
- `chai`: Biblioteca de asserções para Node.js.

### Funções Principais

- `describe()`: Define um conjunto de testes.
- `it()`: Define um caso de teste.
- `chai.expect()`: Cria uma asserção.

## Arquivos

### `day025.js`

```js
function add(a, b) {
  return a + b;
}

module.exports = { add };
```

### `test/day025.test.js`

```js
describe('Função add', () => {
  it('deve retornar a soma de dois números', async () => {
    const { expect } = await import('chai');
    const { add } = await import('../day025.js');
    const result = add(2, 3);
    expect(result).to.equal(5);
  });

  it('deve retornar um número negativo se a soma for negativa', async () => {
    const { expect } = await import('chai');
    const { add } = await import('../day025.js');
    const result = add(-2, -3);
    expect(result).to.equal(-5);
  });
});
```