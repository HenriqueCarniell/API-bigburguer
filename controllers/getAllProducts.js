const db = require('../database/bd');

exports.getAllProducts = async (req, res) => {
    const sql = "SELECT * FROM Produto";

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: "Erro ao buscar todos os produtos" });
        } else {
            res.json(result.rows);
        }
    });
};