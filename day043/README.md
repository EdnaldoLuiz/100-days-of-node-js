# Desafio 43

Sistema de Gerenciamento de Tarefas com OO

## Explicação

### Ferramentas Utilizadas

- `http`: Módulo HTTP nativo do Node.js para criar um servidor.
- `url`: Módulo URL nativo do Node.js para analisar e manipular URLs.
- `querystring`: Módulo Query String nativo do Node.js para analisar e manipular strings de consulta.

### Funções Principais

- `http.createServer()`: Cria uma instância do servidor HTTP.
- `url.parse()`: Analisa uma URL e retorna um objeto URL.
- `querystring.parse()`: Analisa uma string de consulta e retorna um objeto.

## Arquivos

### `day043.js`

```js
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
```

### `src/router.js`

```js
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
```

### `src/task.js`

```js
class Task {
    constructor(id, description) {
        this.id = id;
        this.description = description;
    }
}

module.exports = Task;
```

### `src/taskManager.js`

```js
const Task = require('./task');

class TaskManager {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }

    addTask(description) {
        const task = new Task(this.nextId++, description);
        this.tasks.push(task);
        return task;
    }

    listTasks() {
        return this.tasks;
    }

    removeTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            return this.tasks.splice(index, 1)[0];
        }
        return null;
    }
}

module.exports = TaskManager;
```