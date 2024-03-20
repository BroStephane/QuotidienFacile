module.exports = (sequelize, DataTypes) => {
  const Utilisateur = sequelize.define('Utilisateur', {
    id_utilisateurs: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    mail: {
      type: DataTypes.STRING(250),
      allowNull: false,
      unique: true
    },
    mot_de_passe: {
      type: DataTypes.STRING(250),
      allowNull: false
    }
  }, {
    tableName: 'utilisateurs',
    timestamps: false
  });

  return Utilisateur;
};
