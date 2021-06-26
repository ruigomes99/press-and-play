const connect = require('../connectMySQL.js');
const jsonMessagesBD = require('../../assets/jsonMessages/bd.js');
const jsonMessagesUser = require('../../assets/jsonMessages/user.js');

module.exports = function (req, res, next) {
    const id_inscricao = req.sanitize('id_inscricao').escape();
    const query = connect.con.query('SELECT * FROM utilizador_por_inscricao WHERE id_inscricao = ?', id_inscricao,
        function (err, rows, fields) {
            console.log(query.sql);
            if (err) {
                console.log(err);
                return res.status(jsonMessagesBD.db.dbError.status).send(jsonMessagesBD.db.dbError);
            }

            if (rows.length >= 10) {
                return res.status(jsonMessagesUser.user.unauthorized.status).send(jsonMessagesUser.user.unauthorized);
            } else {
                return next();
            }
        });
};