# Desafio 75

Node.js e gRPC

## Explicação

### Ferramentas Utilizadas

- `@grpc/grpc-js`: Biblioteca gRPC para Node.js.
- `@grpc/proto-loader`: Biblioteca para carregar arquivos proto.

### Funções Principais

- `grpc.loadPackageDefinition()`: Carrega a definição do pacote gRPC a partir de um arquivo proto.
- `server.addService()`: Adiciona um serviço ao servidor gRPC.
- `server.bindAsync()`: Liga o servidor a um endereço e porta.
- `client.Sum()`: Chama o método Sum do serviço gRPC.

## Arquivos

### `day075.js`

```js
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const PROTO_PATH = path.join(__dirname, 'protos', 'calculator.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
const calculatorProto = grpc.loadPackageDefinition(packageDefinition).Calculator;

function sum(call, callback) {
  const result = call.request.a + call.request.b;
  callback(null, { result });
}

const server = new grpc.Server();
server.addService(calculatorProto.service, { Sum: sum });
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
  console.log('Servidor gRPC rodando na porta 50051');
  server.start();
});
```

### `src/client.js`

```js
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const PROTO_PATH = path.join(__dirname, 'protos', 'calculator.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
const calculatorProto = grpc.loadPackageDefinition(packageDefinition).Calculator;

const client = new calculatorProto('localhost:50051', grpc.credentials.createInsecure());

client.Sum({ a: 5, b: 3 }, (error, response) => {
  if (!error) {
    console.log('Resultado da soma:', response.result);
  } else {
    console.error(error);
  }
});
```