const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const mongodb = require('./infra/ConnectionMongoDB')

const routes = require('./routes/routes')

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

app.listen(port, () => {
    console.log('Servidor de Pé');
});