const express = require('express');
const crud = require('../business/controller/crud/crudUsers');

const routes = express.Router();

/**
 * Endpoint de login (JWT)
 * Endpoint de cadastro
 * Endpoint de editar perfil
 */

routes.post('/register', crud.create);
routes.post('/login', crud.read);
routes.put('/update', crud.update);
routes.delete('/delete', crud.delete);

module.exports = routes;