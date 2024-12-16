# Desafio 85

Manipulação de Dados com Lodash

## Explicação

Utilizamos a biblioteca Lodash para realizar operações comuns de manipulação de dados, como agrupamento, filtragem e ordenação.

### Ferramentas Utilizadas

- `lodash`: Biblioteca utilitária para manipulação de dados.

### Funções Principais

- `_.groupBy()`: Agrupa elementos de uma coleção por uma chave especificada.
- `_.filter()`: Filtra elementos de uma coleção com base em um predicado.
- `_.sortBy()`: Ordena elementos de uma coleção por uma chave especificada.
- `_.find()`: Encontra o primeiro elemento de uma coleção que satisfaz um predicado.
- `_.map()`: Cria uma nova matriz com os resultados da chamada de uma função para cada elemento da coleção.

## Resultado

```js
const _ = require('lodash');

const data = [
  { id: 1, name: 'Alice', age: 25, city: 'New York' },
  { id: 2, name: 'Bob', age: 30, city: 'San Francisco' },
  { id: 3, name: 'Charlie', age: 35, city: 'New York' },
  { id: 4, name: 'David', age: 30, city: 'San Francisco' },
  { id: 5, name: 'Eve', age: 25, city: 'New York' }
];

const groupedByCity = _.groupBy(data, 'city');
console.log('Agrupado por cidade:', groupedByCity);

const ageAbove30 = _.filter(data, (person) => person.age > 30);
console.log('Idade maior que 30:', ageAbove30);

const sortedByAge = _.sortBy(data, 'age');
console.log('Ordenado por idade:', sortedByAge);

const firstAge30 = _.find(data, { age: 30 });
console.log('Primeiro com idade 30:', firstAge30);

const names = _.map(data, 'name');
console.log('Nomes:', names);
```