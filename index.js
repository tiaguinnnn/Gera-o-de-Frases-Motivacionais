// index.js (APENAS as linhas que mudam ou são importantes)
const express = require('express');
const db = require('./db/database'); 
const fraseRoutes = require('./routes/fraseRoutes'); // <--- AQUI

const app = express();
const port = 3000;

app.use(express.static('public')); 
app.use(express.json());

// --- Rotas da API ---
// Todas as rotas de frase serão prefixadas com '/api/frases'
app.use('/api/frases', fraseRoutes); // <--- AQUI

// ... [O restante do código app.listen continua o mesmo]
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log('Frontend disponível em http://localhost:3000/index.html');
});