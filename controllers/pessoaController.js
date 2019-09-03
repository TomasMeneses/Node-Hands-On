const Pessoa = require('../models/Pessoa');
const db = require('../models/db');
const Op = db.Sequelize.Op;

exports.list = (req, res) => {
    Pessoa.findAll({}).then((dados) => {
        res.send(dados);
    });
};

exports.create = (req, res) => {
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
    });
};

exports.findById = (req, res) => {

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
    });
}

exports.findByCpf = (req, res) => {


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
    });
};

exports.delete = (req, res) => {

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
    });
};

exports.updateName = (req, res) => {

    const { id } = req.params;
    const { nome } = req.body;
    Pessoa.update(

        { nome: nome },
        { where: { id: id } }

    ).then((dados) => {
        if (!dados) {
            return res.send('Nada foi encontrado');
        } else {
            return res.send('Update realizado');
        }
    });
}