// src/models/unites.js
module.exports = (sequelize, DataTypes) => {
    const Unite = sequelize.define('Unite', {
        id_unites: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        libelle_unites: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }, {
        tableName: 'unites',
        timestamps: false
    });

    return Unite;
};
