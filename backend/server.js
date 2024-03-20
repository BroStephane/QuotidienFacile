const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const sequelize = require('./config/database');

sequelize.authenticate()
    .then(() => console.log('Connexion à la base de données réussie.'))
    .catch(err => console.error('Impossible de se connecter à la base de données:', err));

app.get('/', (req, res) => {
    res.send('Bonjour Monde!');
});

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
