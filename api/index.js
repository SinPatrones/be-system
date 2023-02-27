const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('../config');
const user = require('./components/user/network');
const auth = require('./components/auth/network');
const client = require('./components/client/network');

const errors = require('../network/errors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Routers
app.use('/api/user', user);
app.use('/api/auth', auth);
app.use('/api/client', client);

app.use(errors);

app.listen(config.api.port, () => {
  console.log('Api escuchando en el puerto ', config.api.port);
});
