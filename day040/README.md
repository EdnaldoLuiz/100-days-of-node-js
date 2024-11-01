# Desafio 40

Geração de Dados Mockados com `faker`

## Explicação

### Ferramentas Utilizadas

- `faker`: Biblioteca para gerar dados falsos e mockados.

### Funções Principais

- `faker.name.findName()`: Gera um nome falso.
- `faker.internet.email()`: Gera um email falso.
- `faker.address.city()`: Gera uma cidade falsa.

## Resultado

```js
const faker = require('faker');

const generateMockData = (num) => {
  const mockData = [];
  for (let i = 0; i < num; i++) {
    mockData.push({
      id: i + 1,
      name: faker.name.findName(),
      email: faker.internet.email(),
      city: faker.address.city(),
    });
  }
  return mockData;
};

const mockData = generateMockData(10);
console.log(mockData);
```