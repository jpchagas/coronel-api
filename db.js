
const Sequelize = require('sequelize');
const sequelize = new Sequelize('coroneldb', 'dba', 'J10p02c9315.', {dialect: 'mysql', host: 'localhost'});
 
module.exports = sequelize;