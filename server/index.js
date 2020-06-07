const express = require('express');
const bodyParser = require('body-parser');
const connection = require('../db/connection.js');
const controller = require('./controller.js');

const app = express();
const port = 3000;

app.use(express.static('./client/dist'));
app.use(bodyParser.urlencoded({ extended: false })); // May neet get rid of
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

// ROUTERS ---------------------------

app.get('/api/cows', (req, res) => controller.get(req, res));
app.post('/api/cows', (req, res) => controller.post(req, res));

// -----------------------------------

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;