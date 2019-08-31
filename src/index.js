const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const Pessoa = require('../models/Pessoa');
const db = require('../models/db');
const Op = db.Sequelize.Op; // Operador do Sequelize



app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());



// ROTAS REST

// Get de todas as pessoas
app.get('/api/pessoas', (req, res, next) => {
  Pessoa.findAll({}).then((dados) => {
    res.send(dados);
  }, next);
});

// Cadastro de uma pessoa
app.post('/api/pessoa', (req, res, next) => {
  Pessoa.create({
    nome: req.body.nome,
    cpf: req.body.cpf,
    idade: req.body.idade,
    altura: req.body.altura,
    peso: req.body.peso,

  }).then(() => {
    res.send('Pessoa Criada');
  }).catch((erro) => {
    res.send('Erro no cadastro');
  }, next);
});

// Get de uma pessoa específica pelo ID
app.get('/api/pessoa/:id', (req, res, next) => {

  const { id } = req.params;
  Pessoa.findAll({
    where: {
      id: id
    }
  }).then((dados) => {
    if (!dados) {
      return res.send('Nada foi encontrado');
    } else {
      res.send(dados);
    }
  }, next);
});

// Busca filtrada pelo CPF
app.get('/api/pessoacpf/:cpf', (req, res, next) => {


  const { cpf } = req.params;
  Pessoa.findAll({
    where: {
      cpf: {
        [Op.like]: `%${cpf}%`
      }
    }
  }).then((dados) => {
    if (!dados) {
      return res.send('Nada foi encontrado');
    } else {
      res.send(dados);
    }
  }, next);
});

// Delete de uma pessoa pelo id
app.delete('/api/pessoa/:id', (req, res, next) => {

  const { id } = req.params;
  Pessoa.destroy({
    where: {
      id: id
    }
  }).then((dados) => {
    if (!dados) {
      return res.send('Nada foi encontrado');
    } else {
      res.send('Dados Deletados');
    }
  }, next);
});

//UPDATE DE ROW PELO ID
app.put('/api/pessoaUpdate/:id', (req, res, next) => {

  const { id } = req.params;
  const { nome } = req.body;
  Pessoa.update(

    { nome: nome },
    { where: { id: id } }

  ).then((dados) => {
    console.log(dados)
    if (!dados) {
      return res.send('Nada foi encontrado');
    } else {
      return res.send('Update realizado');
    }
  }, next);
});


module.exports = app;