//importando a biblioteca express
const express = require('express');
const routes = require("./routes");

//criando a aplicacao
const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use(routes);
//criando uma rota


//pede pra ouvir a porta 3333
app.listen(3333);