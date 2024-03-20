const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Utilisateur = sequelize.define('Utilisateur', {
  id_utilisateurs: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  mail: {
    type: DataTypes.STRING(250),
    allowNull: false,
    unique: true,
  },
  mot_de_passe: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'utilisateurs',
});

module.exports = Utilisateur;
