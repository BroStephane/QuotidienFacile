module.exports = (sequelize, DataTypes) => {
    const ListeCoursesProduits = sequelize.define('ListeCoursesProduits', {
        id_listescourses: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        id_produits: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        }
    }, {
        tableName: 'listescourses_produits',
        timestamps: false
    });

    ListeCoursesProduits.associate = function (models) {
        // Define associations here
        // For example, belongsTo relations for 'id_listescourses' and 'id_produits'
    };

    return ListeCoursesProduits;
};
