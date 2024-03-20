const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const ListeCourses = require('./ListeCourses');
const Produit = require('./Produit');

const ListeCoursesProduit = sequelize.define('ListeCoursesProduit', {
    id_listescourses: {
        type: DataTypes.INTEGER,
        references: {
            model: ListeCourses,
            key: 'id_listescourses',
        },
        primaryKey: true,
    },
    id_produits: {
        type: DataTypes.INTEGER,
        references: {
            model: Produit,
            key: 'id_produits',
        },
        primaryKey: true,
    },
}, {
    timestamps: false,
    tableName: 'listescourses_produits',
});

module.exports = ListeCoursesProduit;
