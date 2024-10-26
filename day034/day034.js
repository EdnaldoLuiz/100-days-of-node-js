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