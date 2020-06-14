require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();

var bodyParser = require('body-parser')
app.use('/static', express.static('src/app/public/'))

var urlencodedParser = bodyParser.urlencoded({ extended: true })

app.use(urlencodedParser)

const routes = require('../app/routes/routes');
routes(app);

module.exports = app;