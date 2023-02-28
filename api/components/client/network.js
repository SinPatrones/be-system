const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

// Routes
router.get('/', list);
router.post('/', save);

function list(req, res) {
  Controller.list()
    .then(list => {
      response.success(req, res, list, 200);
    })
    .catch(err => {
      response.error(req, res, err.message, 500);
    });
}

function save(req, res) {
  Controller.save(req.body)
    .then(user => {
      req.io.emit('client', {user});
      response.success(req, res, user, 201);
    })
    .catch(err => {
      console.log({error: err});
      response.error(req, res, err.message, 500);
    })
}

module.exports = router;
