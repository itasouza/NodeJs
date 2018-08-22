const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');

//routers
const categoriaRouter = require('../routes/categoria-router');
const produtoRouter = require('../routes/produto-router');

//criando / Invocando a Api Server web do Express
const app = express();

//configuraão de parse do JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//configurando a conexão com o banco de dados
mongoose.connect(variables.Database.connection,{useNewUrlParser: true});


//Configurando as rotas
app.use('/api/categoria', categoriaRouter);
app.use('/api/produto', produtoRouter);

//Exportando nossa Api
module.exports = app;


