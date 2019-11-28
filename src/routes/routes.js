const express = require('express');

const users = require('./routesUser');
const pokemon = require('./routesPokemon');

const routes = express.Router();

routes.use('/user', users);
routes.use('/pokemon', pokemon);

module.exports = routes;