const http = require('http');
const TaskManager = require('./src/taskManager');
const Router = require('./src/router');

const taskManager = new TaskManager();
const router = new Router();

router.register('/add', (req, res, query) => {
  const description = query.description;
  if (description) {
    const task = taskManager.addTask(description);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(task));
  } else {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Descrição da tarefa é obrigatória');
  }
});

router.register('/list', (req, res) => {
  const tasks = taskManager.listTasks();
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(tasks));
});

router.register('/remove', (req, res, query) => {
  const id = parseInt(query.id, 10);
  if (!isNaN(id)) {
    const task = taskManager.removeTask(id);
    if (task) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(task));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Tarefa não encontrada');
    }
  } else {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('ID da tarefa é obrigatório e deve ser um número');
  }
});

const server = http.createServer((req, res) => router.handle(req, res));

const port = 8000;
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});