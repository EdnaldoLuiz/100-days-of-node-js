const sum = require('../day087');

test('soma 1 + 2 para igualar 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('soma 5 + 5 para igualar 10', () => {
  expect(sum(5, 5)).toBe(10);
});