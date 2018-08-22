'use strict'

const app = require('../generico.api/bin/express');
const variables = require('../generico.api/bin/configuration/variables');


app.listen(variables.Api.port,() =>{
    console.info(`Api inicializada com sucesso na porta ${variables.Api.port}`);
});

