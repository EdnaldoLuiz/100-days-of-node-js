import { createRequire } from 'module';
const require = createRequire(import.meta.url); 
const commonjsModule = require('./modules/commonjsModule.cjs');
import { greet as esGreet, farewell as esFarewell } from './modules/esModule.js';

console.log('Executando day094.js');

console.log(commonjsModule.greet('Alice'));
console.log(commonjsModule.farewell('Alice'));

console.log(esGreet('Bob'));
console.log(esFarewell('Bob'));