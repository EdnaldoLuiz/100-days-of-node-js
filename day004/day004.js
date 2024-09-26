var http = require('http');
const port = 8080;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Hello World!</h1>');
  res.write('<p>Metodo HTTP: ' + req.method + '</p>');
  res.write('<p>URL: ' + req.url + '</p>');
  res.end();
}).listen(port, () => {
  console.log('Servidor rodando em http://localhost:8080');
});