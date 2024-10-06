const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY || 'segredo';

exports.authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).send('Token inválido');
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).send('Token não fornecido');
  }
};