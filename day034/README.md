# Desafio 34

Autenticação de Usuário com Passport.js no Express.js

## Explicação

### Ferramentas Utilizadas

- `express`: Framework web rápido e minimalista para Node.js.
- `passport`: Middleware de autenticação para Node.js.
- `passport-local`: Estratégia de autenticação local para Passport.js.

### Funções Principais

- `passport.use()`: Define uma estratégia de autenticação.
- `passport.serializeUser()`: Define como serializar o usuário para a sessão.
- `passport.deserializeUser()`: Define como desserializar o usuário da sessão.
- `passport.authenticate()`: Middleware para autenticar solicitações.

## Arquivos

### `day034.js`

```javascript
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const authRouter = require('./routes/authRoutes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
```

### `routes/authRoutes.js`

```js
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const router = express.Router();

passport.use(new LocalStrategy(
    (username, password, done) => {
        if (username === 'user' && password === 'password') {
            return done(null, { id: 1, username: 'user' });
        } else {
            return done(null, false, { message: 'Credenciais inválidas' });
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    const user = { id: 1, username: 'user' };
    done(null, user);
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/auth/success',
    failureRedirect: '/auth/failure'
}));

router.get('/success', (req, res) => {
    res.send('Login bem-sucedido!');
});

router.get('/failure', (req, res) => {
    res.send('Falha no login.');
});

router.get('/protected', (req, res) => {
    if (req.isAuthenticated()) {
        res.send('Você acessou uma rota protegida!');
    } else {
        res.redirect('/auth/failure');
    }
});

module.exports = router;
```