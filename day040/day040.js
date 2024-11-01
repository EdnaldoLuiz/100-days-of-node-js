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