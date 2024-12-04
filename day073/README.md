# Desafio 73

Envio de Notificações por SMS

## Explicação

### Ferramentas Utilizadas

- `twilio`: Biblioteca para envio de SMS no Node.js.
- `dotenv`: Biblioteca para carregar variáveis de ambiente de um arquivo `.env`.

### Funções Principais

- `twilio()`: Cria um cliente Twilio.
- `client.messages.create()`: Envia uma mensagem SMS usando o cliente Twilio.
- `dotenv.config()`: Carrega variáveis de ambiente de um arquivo `.env`.

## Resultado

```js
require('dotenv').config();
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

client.messages.create({
  body: 'Esta é uma mensagem de teste enviada pelo Node.js',
  to: process.env.TO_PHONE_NUMBER,  // Número de telefone do destinatário
  from: process.env.FROM_PHONE_NUMBER // Número de telefone Twilio
})
.then((message) => console.log(message.sid))
.catch((error) => console.log(error));
```