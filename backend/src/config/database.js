const { Sequelize } = require('sequelize');

// Utilisation des variables d'environnement
const sequelize = new Sequelize(
    process.env.DB_DATABASE, // Nom de la base de données
    process.env.DB_USER,     // Utilisateur
    process.env.DB_PASSWORD, // Mot de passe
    {
        host: process.env.DB_HOST, // Hôte
        port: process.env.DB_PORT, // Port
        dialect: 'mysql',         // Dialecte pour MySQL
    }
);

module.exports = sequelize;
