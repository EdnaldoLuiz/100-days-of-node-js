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