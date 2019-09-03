const express = require('express'); //https://www.npmjs.com/package/express
const app = express();
const cors = require('cors'); //https://www.npmjs.com/package/cors
const bodyParser = require('body-parser'); //https://www.npmjs.com/package/body-parser

const pessoa = require('../controllers/pessoaController');
const Pessoa = require('../models/Pessoa');
const db = require('../models/db');
const Op = db.Sequelize.Op; //https://www.npmjs.com/package/sequelize
//https://sequelize.org/master/manual/querying.html#operators


app.use(cors());
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()); // Transforma o corpo da requisição em JSON



// ROTAS REST

// Get de todas as pessoas
app.get('/api/pessoas', pessoa.list);

// Cadastro de uma pessoa
app.post('/api/pessoa', pessoa.create);

// Get de uma pessoa específica pelo ID
app.get('/api/pessoa/:id', pessoa.findById);

// Busca filtrada pelo CPF
app.get('/api/pessoacpf/:cpf', pessoa.findByCpf);

// Delete de uma pessoa pelo id
app.delete('/api/pessoa/:id', pessoa.delete);

//UPDATE DE ROW PELO ID
app.put('/api/pessoaUpdate/:id', pessoa.updateName);


module.exports = app;