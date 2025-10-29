const sqlite3 = require('sqlite3').verbose();

const DB_SOURCE = './frases_motivacionais.db';

const db = new sqlite3.Database(DB_SOURCE, (err) => {
    if (err) {
        console.error('Erro ao abrir o banco de dados:', err.message);
        throw err;
    } else {
        console.log('Conectado ao banco de dados SQLite.');

        db.run(`CREATE TABLE IF NOT EXISTS frases (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            texto TEXT NOT NULL UNIQUE
        )`, (err) => {
            if (err) {
                console.error('Erro ao criar tabela:', err.message);
            } else {
                console.log('Tabela "frases" pronta. Inserindo dados de exemplo...');
                
                const insert = 'INSERT OR IGNORE INTO frases (texto) VALUES (?)';
                db.run(insert, ["O único lugar onde o sucesso vem antes do trabalho é no dicionário."]);
                db.run(insert, ["Não espere por oportunidades extraordinárias. Agarre ocasiões comuns e as torne grandes."]);
                db.run(insert, ["Comece onde você está. Use o que você tem. Faça o que você pode."]);
                db.run(insert, ["Acredite que você pode, e você está no meio do caminho."]);
            }
        });
    }
});

module.exports = db;