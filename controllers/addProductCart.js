const db = require('../database/bd')

exports.addProductCart = (req, res) => {
    const { idproduto, idusuario } = req.params;

    console.log(idproduto, idusuario);

    const sql = "INSERT INTO Carrinho_de_compras(fk_produto, fk_cliente) VALUES ($1, $2)";

    db.query(sql, [idproduto, idusuario], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: "Erro ao adicionar produto ao carrinho" });
        } else {
            res.json(result);
        }
    });
};