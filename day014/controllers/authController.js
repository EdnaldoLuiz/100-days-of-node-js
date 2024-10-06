const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY || 'segredo';

exports.login = (req, res) => {
  const { username, password } = req.body;

  if (username === 'user' && password === 'password') {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Credenciais inválidas');
  }
};

exports.protected = (req, res) => {
  res.send('Você acessou uma rota protegida!');
};