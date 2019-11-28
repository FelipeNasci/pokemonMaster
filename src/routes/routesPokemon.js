const express = require('express');
const crud = require('../business/controller/crud/crudPokemon');

const routes = express.Router();

routes.post('/create', crud.create);
routes.get('/list', crud.read);
routes.put('/update', crud.update);
routes.post('/delete', crud.delete);

module.exports = routes;