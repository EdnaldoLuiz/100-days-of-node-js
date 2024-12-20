# Desafio 89

WebRTC com Node.js

## Explicação

Utilizamos WebRTC para comunicação em tempo real de vídeo e áudio entre dois clientes. O Socket.IO é usado para sinalização entre os clientes.

### Ferramentas Utilizadas

- `express`: Framework web para Node.js.
- `socket.io`: Biblioteca para comunicação em tempo real.
- `webrtc`: API para comunicação em tempo real de vídeo e áudio.

### Funções Principais

- `RTCPeerConnection`: Interface para estabelecer uma conexão WebRTC.
- `getUserMedia()`: Captura mídia do usuário.
- `socket.emit()`: Envia mensagens para o servidor.
- `socket.on()`: Recebe mensagens do servidor.

## Arquivos

### `day089.js`

```js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('Novo cliente conectado');

  socket.on('offer', (offer) => {
    socket.broadcast.emit('offer', offer);
  });

  socket.on('answer', (answer) => {
    socket.broadcast.emit('answer', answer);
  });

  socket.on('candidate', (candidate) => {
    socket.broadcast.emit('candidate', candidate);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
```

### `public/client.js`

```js
const socket = io();

const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');

const peerConnection = new RTCPeerConnection();

peerConnection.onicecandidate = (event) => {
  if (event.candidate) {
    socket.emit('candidate', event.candidate);
  }
};

peerConnection.ontrack = (event) => {
  remoteVideo.srcObject = event.streams[0];
};

navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then((stream) => {
    localVideo.srcObject = stream;
    stream.getTracks().forEach((track) => peerConnection.addTrack(track, stream));
  })
  .catch((error) => {
    console.error('Erro ao acessar mídia:', error);
  });

socket.on('offer', async (offer) => {
  await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
  const answer = await peerConnection.createAnswer();
  await peerConnection.setLocalDescription(answer);
  socket.emit('answer', answer);
});

socket.on('answer', async (answer) => {
  await peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
});

socket.on('candidate', async (candidate) => {
  await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
});

async function createOffer() {
  const offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);
  socket.emit('offer', offer);
}

createOffer();
```