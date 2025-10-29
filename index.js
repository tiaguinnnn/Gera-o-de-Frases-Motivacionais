const express = require('express');
const db = require('./db/database'); 
const fraseRoutes = require('./routes/fraseRoutes');

const app = express();
const port = 3000;

app.use(express.static('public')); 
app.use(express.json());

app.use('/api/frases', fraseRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log('Frontend disponível em http://localhost:3000/index.html');
});