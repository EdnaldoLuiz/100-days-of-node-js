# Desafio 32

Enviando Emails com Nodemailer no Node.js

## Explicação

### Ferramentas Utilizadas

- `nodemailer`: Biblioteca para enviar emails no Node.js.

### Funções Principais

- `nodemailer.createTransport()`: Cria um transportador de email.
- `transporter.sendMail()`: Envia um email.

## Arquivos

### `day032.js`

```js
require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true para 465, false para outras portas
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'contatoednaldoluiz@gmail.com',
  subject: 'Teste de envio de email',
  text: 'Este é um email de teste enviado usando Nodemailer!',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Erro ao enviar email:', error);
  }
  console.log('Email enviado:', info.response);
});

console.log('Executando day032.js');
```