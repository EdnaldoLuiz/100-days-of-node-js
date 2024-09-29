const http = require('http');
const port = 8080;

class Router {
    constructor() {
        this.routes = [];
    }

    addRoute(url, method, handler) {
        this.routes.push({ url, method, handler });
    }

    handleRequest(req, res) {
        const route = this.routes.find((route) => route.url === req.url && route.method === req.method);
        if (route) {
            route.handler(req, res);
            return;
        }
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
}

const router = new Router();

router.addRoute('/', 'GET', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Home Page</h1>');
});

router.addRoute('/about', 'GET', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>About Page</h1>');
});

router.addRoute('/contact', 'GET', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Contact Page</h1>');
});

const server = http.createServer((req, res) => {
    router.handleRequest(req, res);
});

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});