const db = require('./db');

const Pessoa = db.sequelize.define('pessoas', {
    nome: {
        type: db.Sequelize.STRING, allowNull: false
    },
    cpf: {
        type: db.Sequelize.STRING, unique: 'compositeIndex', allowNull: false
    },
    idade: {
        type: db.Sequelize.INTEGER, allowNull: false
    },
    peso: {
        type: db.Sequelize.DOUBLE, allowNull: false
    },
    altura: {
        type: db.Sequelize.DOUBLE, allowNull: false
    }
});

//Pessoa.sync({ force: true });

module.exports = Pessoa;