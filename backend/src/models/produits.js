module.exports = (sequelize, DataTypes) => {
    const Produit = sequelize.define('Produit', {
        id_produits: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom_produits: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        id_unites: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'produits',
        timestamps: false
    });

    Produit.associate = function (models) {
        Produit.belongsTo(models.Unite, { foreignKey: 'id_unites' });
    };

    return Produit;
};
