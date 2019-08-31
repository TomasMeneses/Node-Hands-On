//ORM SEQUELIZE
const Sequelize = require('sequelize');

//DB CONNECTION
const sequelize = new Sequelize('handson', 'root', '', { // Substitua root pelo seu usuário no mysql e 
    host: 'localhost',                                   //no espaço vazio coloque sua senha do mysql
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}