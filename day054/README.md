# Desafio 54

Manipulação de Arrays com Métodos Nativos

## Explicação

### Ferramentas Utilizadas

- Array Methods: Métodos nativos do JavaScript para manipulação de arrays.

### Funções Principais

- `map()`: Cria um novo array com os resultados da chamada de uma função para cada elemento do array.
- `filter()`: Cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
- `reduce()`: Aplica uma função contra um acumulador e cada elemento do array (da esquerda para a direita) para reduzi-lo a um único valor.
- `find()`: Retorna o valor do primeiro elemento do array que satisfizer a função de teste fornecida.
- `some()`: Testa se ao menos um dos elementos no array passa no teste implementado pela função fornecida.
- `every()`: Testa se todos os elementos no array passam no teste implementado pela função fornecida.

## Arquivos

### `day054.js`

```js
const numbers = [1, 2, 3, 4, 5];

// Map: Multiplicar cada número por 2
const doubled = numbers.map(num => num * 2);
console.log('Doubled:', doubled);

// Filter: Filtrar números maiores que 2
const filtered = numbers.filter(num => num > 2);
console.log('Filtered:', filtered);

// Reduce: Somar todos os números
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum:', sum);

// Find: Encontrar o primeiro número maior que 3
const found = numbers.find(num => num > 3);
console.log('Found:', found);

// Some: Verificar se há algum número maior que 4
const someGreaterThanFour = numbers.some(num => num > 4);
console.log('Some greater than 4:', someGreaterThanFour);

// Every: Verificar se todos os números são menores que 6
const allLessThanSix = numbers.every(num => num < 6);
console.log('All less than 6:', allLessThanSix);
```