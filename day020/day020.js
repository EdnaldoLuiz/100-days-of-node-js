require('dotenv').config();

const port = process.env.PORT || 3000;
const message = process.env.MESSAGE || 'Hello, World!';

console.log(`Servidor rodando na porta ${port}`);
console.log(`Mensagem: ${message}`);