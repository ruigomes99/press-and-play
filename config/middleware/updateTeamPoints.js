//PT: Middleware para verificar se o email inserido já existe na base de dados
//ENG: Middleware to check if the inserted email already exists in the data base
const connect = require('../connectMySQL.js');
const jsonMessagesBD = require('../../assets/jsonMessages/bd.js');
const jsonMessagesLogin = require('../../assets/jsonMessages/login.js');

module.exports = function (req, res, next) {
    const id_equipa = req.sanitize('id_equipa').escape();
    const update = [ id_equipa, id_equipa ];
    const query = connect.con.query('UPDATE equipa E SET classificacao = (SELECT AVG(U.pontos) FROM utilizador U, utilizador_por_equipa UE WHERE U.id_user = UE.id_user AND UE.id_equipa = E.id_equipa AND E.id_equipa = ?) WHERE E.id_equipa = ?', update,
        function (err, rows, fields) {
            console.log(query.sql);
            if (err) {
                console.log(err);
                return res.status(jsonMessagesBD.db.dbError.status).send(jsonMessagesBD.db.dbError);
            } else {
                return next();
            }
        });
};