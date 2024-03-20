const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Unite = sequelize.define('Unite', {
    id_unites: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    libelle_unites: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
}, {
    timestamps: false,
    tableName: 'unites',
});

module.exports = Unite;
