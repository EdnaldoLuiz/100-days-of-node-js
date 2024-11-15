const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
console.log('Doubled:', doubled);

const filtered = numbers.filter(num => num > 2);
console.log('Filtered:', filtered);

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum:', sum);

const found = numbers.find(num => num > 3);
console.log('Found:', found);

const someGreaterThanFour = numbers.some(num => num > 4);
console.log('Some greater than 4:', someGreaterThanFour);

const allLessThanSix = numbers.every(num => num < 6);
console.log('All less than 6:', allLessThanSix);