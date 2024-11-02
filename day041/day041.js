const { VM } = require('vm2');

const code = `
function add(a, b) {
  return a + b;
}
add(2, 3);
`;

const vm = new VM();
const result = vm.run(code);

console.log('Resultado da execução do código:', result);