// const Pessoa = require('../models/Pessoa');
// const db = require('../models/db');
// const Op = db.Sequelize.Op; //https://www.npmjs.com/package/sequelize
//https://sequelize.org/master/manual/querying.html#operators
const express = require('express'); //https://www.npmjs.com/package/express
const app = express();
const cors = require('cors'); //https://www.npmjs.com/package/cors
const bodyParser = require('body-parser'); //https://www.npmjs.com/package/body-parser

const pessoa = require('../controllers/pessoaController');


app.use(cors());
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()); // Transforma o corpo da requisição em JSON



// ROTAS REST

// Get de todas as pessoas
app.get('/api/pessoas', pessoa.list);

// Cadastro de uma pessoa
app.post('/api/pessoa', pessoa.create);

// Busca pelo Id
app.get('/api/pessoa/:id', pessoa.findById);

// Busca pelo CPF
app.get('/api/pessoacpf/:cpf', pessoa.findByCpf);

// Deletar pessoa
app.delete('/api/pessoa/:id', pessoa.delete);

//Update de pessoa
app.put('/api/pessoaUpdate/:id', pessoa.updateName);


module.exports = app;