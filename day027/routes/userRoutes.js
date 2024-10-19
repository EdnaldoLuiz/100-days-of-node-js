const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Obter todos os usuários');
});

router.post('/', (req, res) => {
  res.send('Criar um novo usuário');
});

router.put('/:id', (req, res) => {
  res.send(`Atualizar o usuário com ID ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  res.send(`Deletar o usuário com ID ${req.params.id}`);
});

module.exports = router;