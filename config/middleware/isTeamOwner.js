//PT: Middleware para verificar se o email inserido já existe na base de dados
//ENG: Middleware to check if the inserted email already exists in the data base
const connect = require('../connectMySQL.js');
const jsonMessagesBD = require('../../assets/jsonMessages/bd.js');
const jsonMessagesUser = require('../../assets/jsonMessages/user.js');

module.exports = function (req, res, next) {
    const id_user = req.user.id_user;
    const id_equipa = req.sanitize('id_equipa').escape();
    const scan = [id_user, id_equipa];
    const query = connect.con.query('SELECT * FROM utilizador_por_equipa WHERE id_user = ? AND id_equipa = ? AND lider = 1', scan,
        function (err, rows, fields) {
            console.log(query.sql);
            if (err) {
                console.log(err);
                return res.status(jsonMessagesBD.db.dbError.status).send(jsonMessagesBD.db.dbError);
            }

            if (!rows.length) {
                return res.status(jsonMessagesUser.user.unauthorized.status).send(jsonMessagesUser.user.unauthorized);
            } else {
                return next();
            }
        });
};