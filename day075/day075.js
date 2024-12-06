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