'use strict'

const compression = require('compression');
const express = require('express');

const path = require('path');
const expressLayouts = require('express-ejs-layouts');

//const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();

app.use(compression());

const router = express.Router();
app.use(cookieParser());

//Db
/* mongoose.connect(config.connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true
}); */

//const Machine = require('./models/machine'); 
//const Loader = require('./models/loader');

//Rotas
const pagesRouter = require('./routes/pages-router');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.use(bodyParser.urlencoded());

console.log(__dirname);

app.use(express.static(path.join(__dirname, 'webroots')));

app.use(express.static('./src/webroots/', {
maxage: '2h'
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : false    
}));

app.use('/', pagesRouter);
module.exports = app;