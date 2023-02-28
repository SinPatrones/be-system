const express = require('express');
const { Server } = require("socket.io");
const http = require('http');

const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('../config');
const user = require('./components/user/network');
const auth = require('./components/auth/network');
const client = require('./components/client/network');
const product = require('./components/product/network');

const errors = require('../network/errors');

const app = express();
const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173'
  }
});


io.on('connection', (socket) => {
  const {channel} = socket.handshake.headers;
  socket.join(channel);
});

io.on('disconnect', socket => {
  console.log('socket desconectado');
});

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use(bodyParser.json());
app.use(cors());

// Routers
app.use('/api/user', user);
app.use('/api/auth', auth);
app.use('/api/client', client);
app.use('/api/product', product);

app.use(errors);

httpServer.listen(config.api.port, () => {
  console.log('Api escuchando en el puerto ', config.api.port);
});
