const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

// Routes
router.post('/login', function (req, res) {
  const {email, password} = req.body;
  Controller.login(email, password)
    .then(token => {
      response.success(req, res, token, 200);
    })
    .catch(e => {
      response.error(req, res, 'Información invalida', 400);
    });
});

router.post('/signup', async function (req, res) {
  try {
    const newUser = await Controller.signup(req.body);
    response.success(req, res, newUser, 201);
  } catch (e) {
    response.error(req, res, 'Error al registrar', 500);
  }
});

module.exports = router;
