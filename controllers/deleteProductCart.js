const db = require('../database/bd')

exports.deleteProductCart = (req, res) => {
    const { idproduto, idusuario } = req.params;

    console.log(idproduto, idusuario);

    const sql = "DELETE FROM Carrinho_de_compras WHERE fk_produto = $1 AND fk_cliente = $2;";

    db.query(sql, [idproduto, idusuario], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: "Erro ao deletar produto do carrinho" });
        } else {
            res.send(result);
        }
    });
};