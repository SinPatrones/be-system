// TIENE LAS RUTAS DEL SERVICIO PARA USUARIOS
const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

// Routes
router.get('/', list);
router.get('/:id', get);
router.post('/', save);
//router.put('/', secure('update'), upsert);

function list(req, res) {
  Controller.list()
    .then(list => {
      response.success(req, res, list, 200);
    })
    .catch(err => {
      response.error(req, res, err.message, 500);
    });
}

function get(req, res) {
  Controller.get(req.params.id)
    .then(user => {
      response.success(req, res, user, 200);
    })
    .catch(err => {
      response.error(req, res, err.message, 500);
    });
}

function save(req, res) {
  Controller.save(req.body)
    .then(user => {
      response.success(req, res, user, 201);
    })
    .catch(err => {
      response.error(req, res, err.message, 500);
    })
}

module.exports = router;