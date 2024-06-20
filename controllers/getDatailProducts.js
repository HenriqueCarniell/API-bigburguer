const db = require('../database/bd')

exports.getDetailProduct = (req, res) => {
    const id = req.params.idproduto;

    const sql = "SELECT * FROM Produto WHERE idproduto = $1";

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: "Erro ao buscar detalhes do produto" });
        } else {
            res.json(result.rows);
        }
    });
};