const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Unite = require('./Unite');

const Produit = sequelize.define('Produit', {
    id_produits: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nom_produits: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    id_unites: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Unite,
            key: 'id_unites',
        },
    },
}, {
    timestamps: false,
    tableName: 'produits',
});

module.exports = Produit;
