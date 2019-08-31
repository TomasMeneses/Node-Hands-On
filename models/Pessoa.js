const db = require('./db');

const Pessoa = db.sequelize.define('pessoas', {
    nome: {
        type: db.Sequelize.STRING, allowNull: false, notEmpty: {
            msg: 'Este campo nao pode ser vazio'
        }
    },
    cpf: {
        type: db.Sequelize.STRING, unique: 'compositeIndex', allowNull: false, notEmpty: {
            msg: 'Este campo nao pode ser vazio'
        }
    },
    idade: {
        type: db.Sequelize.INTEGER, allowNull: false, notEmpty: {
            msg: 'Este campo nao pode ser vazio'
        }
    },
    peso: {
        type: db.Sequelize.DOUBLE, allowNull: false, notEmpty: {
            msg: 'Este campo nao pode ser vazio'
        }
    },
    altura: {
        type: db.Sequelize.DOUBLE, allowNull: false, notEmpty: {
            msg: 'Este campo nao pode ser vazio'
        }
    }
});

//Pessoa.sync({ force: true });

module.exports = Pessoa;