module.exports = (sequelize, DataTypes) => {
    const ListeCourses = sequelize.define('ListeCourses', {
        id_listescourses: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        quantite: {
            type: DataTypes.DECIMAL(15, 2),
            allowNull: false
        },
        date_listescourses_cree: {
            type: DataTypes.DATE,
            allowNull: false
        },
        date_listescourses_fini: {
            type: DataTypes.DATE
        },
        id_utilisateurs: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'listescourses',
        timestamps: false
    });

    ListeCourses.associate = function (models) {
        ListeCourses.belongsTo(models.Utilisateur, { foreignKey: 'id_utilisateurs' });
    };

    return ListeCourses;
};
