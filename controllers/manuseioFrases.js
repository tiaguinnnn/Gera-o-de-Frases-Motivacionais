const db = require('../db/database');

exports.getRandomQuote = (res) => {
    const sql = 'SELECT texto FROM frases ORDER BY RANDOM() LIMIT 1';

    db.get(sql, [], (err, row) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao buscar frase: ' + err.message });
        }
        if (!row) {
            return res.status(404).json({ texto: "Nenhuma frase encontrada no banco de dados." });
        }
        
        res.json({ texto: row.texto });
    });
};