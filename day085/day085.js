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