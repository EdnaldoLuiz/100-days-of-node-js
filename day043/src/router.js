const url = require('url');
const querystring = require('querystring');

class Router {
  constructor() {
    this.routes = {};
  }

  register(path, handler) {
    this.routes[path] = handler;
  }

  handle(req, res) {
    const parsedUrl = url.parse(req.url);
    const pathname = parsedUrl.pathname;
    const query = querystring.parse(parsedUrl.query);

    if (this.routes[pathname]) {
      this.routes[pathname](req, res, query);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Rota não encontrada');
    }
  }
}

module.exports = Router;