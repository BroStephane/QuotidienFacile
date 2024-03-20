const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Bonjour Monde!');
});

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
