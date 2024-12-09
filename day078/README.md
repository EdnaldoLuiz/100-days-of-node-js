# Desafio 78

Event Sourcing no Node.js

## Explicação

### Ferramentas Utilizadas

- `express`: Framework web para Node.js.
- `body-parser`: Middleware para parsing de requisições JSON.
- `events`: Módulo para criação de emissores de eventos.

### Funções Principais

- `EventEmitter`: Cria um emissor de eventos.
- `eventStore.addEvent()`: Adiciona um evento ao armazenamento de eventos.
- `eventStore.getEvents()`: Retorna todos os eventos armazenados.
- `Account.deposit()`: Adiciona um evento de depósito.
- `Account.withdraw()`: Adiciona um evento de saque.
- `Account.applyEvent()`: Aplica um evento à conta.
- `Account.getBalance()`: Retorna o saldo da conta.

## Arquivos

### `src/eventStore.js`

```js
const EventEmitter = require('events');

class EventStore extends EventEmitter {
  constructor() {
    super();
    this.events = [];
  }

  addEvent(event) {
    this.events.push(event);
    this.emit('event', event);
  }

  getEvents() {
    return this.events;
  }
}

module.exports = new EventStore();
```

### `src/account.js`

```js
const eventStore = require('./eventStore');

class Account {
  constructor(id) {
    this.id = id;
    this.balance = 0;
    eventStore.on('event', (event) => {
      if (event.accountId === this.id) {
        this.applyEvent(event);
      }
    });
  }

  deposit(amount) {
    const event = { type: 'deposit', accountId: this.id, amount };
    eventStore.addEvent(event);
  }

  withdraw(amount) {
    const event = { type: 'withdraw', accountId: this.id, amount };
    eventStore.addEvent(event);
  }

  applyEvent(event) {
    if (event.type === 'deposit') {
      this.balance += event.amount;
    } else if (event.type === 'withdraw') {
      this.balance -= event.amount;
    }
  }

  getBalance() {
    return this.balance;
  }
}

module.exports = Account;
```

### `day078.js`

```js
const express = require('express');
const bodyParser = require('body-parser');
const Account = require('./account');
const eventStore = require('./eventStore');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const accounts = {};

app.post('/conta', (req, res) => {
  const { id } = req.body;
  if (accounts[id]) {
    return res.status(400).json({ message: 'Conta já existe' });
  }
  accounts[id] = new Account(id);
  res.status(201).json({ message: 'Conta criada' });
});

app.post('/conta/:id/deposito', (req, res) => {
  const { id } = req.params;
  const { valor } = req.body;
  if (!accounts[id]) {
    return res.status(404).json({ message: 'Conta não encontrada' });
  }
  accounts[id].deposit(valor);
  res.status(200).json({ message: 'Depósito realizado com sucesso' });
});

app.post('/conta/:id/saque', (req, res) => {
  const { id } = req.params;
  const { valor } = req.body;
  if (!accounts[id]) {
    return res.status(404).json({ message: 'Conta não encontrada' });
  }
  accounts[id].withdraw(valor);
  res.status(200).json({ message: 'Saque realizado com sucesso' });
});

app.get('/conta/:id/saldo', (req, res) => {
  const { id } = req.params;
  if (!accounts[id]) {
    return res.status(404).json({ message: 'Conta não encontrada' });
  }
  const saldo = accounts[id].getBalance();
  res.status(200).json({ saldo });
});

app.get('/eventos', (req, res) => {
  const eventos = eventStore.getEvents();
  res.status(200).json({ eventos });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
```