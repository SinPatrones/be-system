const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

// Routes
router.get('/', list);
router.post('/', save);
router.patch('/', update);
router.delete('/:id', remove);

function list(req, res) {
  Controller.list()
    .then(lista => {
      response.success(req, res, lista, 200);
    })
    .catch(err => {
      response.error(req, res, err.message, 500);
    });
}

function save(req, res) {
  Controller.save(req.body)
    .then(product => {
      req.io.emit('product', {product});
      response.success(req, res, product, 201);
    })
    .catch(err => {
      console.log({error: err});
      response.error(req, res, err.message, 500);
    })
}

function update(req, res) {
  Controller.update(req.body)
    .then(updated => {
      req.io.emit('product', {updated});
      response.success(req, res, updated, 200);
    })
    .catch(err => {
      response.error(req, res, err.message, 500);
    })
}

function remove(req, res) {
  Controller.remove(req.params.id)
    .then(deleted => {
      req.io.emit('product', {deleted});
      response.success(req, res, deleted, 200);
    })
    .catch(err => {
      response.error(req, res, err.message, 500);
    })
}

module.exports = router;
