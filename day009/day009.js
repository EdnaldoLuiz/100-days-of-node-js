const express = require('express');
const app = express();
const port = 3000;

const routes = {
    home: '/',
    about: '/about',
    contact: '/contact'
}

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Passa o controle para o próximo middleware ou rota
});

// Middleware para adicionar um cabeçalho customizado
app.use((req, res, next) => {
    res.setHeader('X-Custom-Header', 'Middleware Test');
    next();
});

// Rota para a Home Page
app.get(routes.home, (req, res) => {
    res.send('<h1>Home Page</h1>');
});

// Rota para a About Page
app.get(routes.about, (req, res) => {
    res.send('<h1>About Page</h1>');
});

// Rota para a Contact Page
app.get(routes.contact, (req, res) => {
    res.send('<h1>Contact Page</h1>');
});

// Middleware para tratar 404 - Página não encontrada
app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});