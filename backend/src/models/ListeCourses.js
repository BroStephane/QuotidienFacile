const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Utilisateur = require('./Utilisateur');

const ListeCourses = sequelize.define('ListeCourses', {
    id_listescourses: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    quantite: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: true,
    },
    date_listescourses_cree: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    date_listescourses_fini: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    id_utilisateurs: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Utilisateur,
            key: 'id_utilisateurs',
        },
    },
}, {
    timestamps: false,
    tableName: 'listescourses',
});

module.exports = ListeCourses;
