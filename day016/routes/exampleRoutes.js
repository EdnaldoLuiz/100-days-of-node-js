const express = require('express');
const router = express.Router();

router.get('/error', (req, res) => {
  throw new Error('Erro intencional para teste');
});

router.get('/success', (req, res) => {
  res.send('Rota de sucesso!');
});

module.exports = router;