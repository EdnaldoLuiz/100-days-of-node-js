const express = require('express');
const bodyParser = require('body-parser');
const Account = require('./src/account');
const eventStore = require('./src/eventStore');

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