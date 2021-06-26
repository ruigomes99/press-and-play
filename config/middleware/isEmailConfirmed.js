//PT: Middleware para verificar se o email inserido já existe na base de dados
//ENG: Middleware to check if the inserted email already exists in the data base
const connect = require('../connectMySQL.js');
const jsonMessagesBD = require('../../assets/jsonMessages/bd.js');
const jsonMessagesLogin = require('../../assets/jsonMessages/login.js');

module.exports = function (req, res, next) {
    const email = req.sanitize('email').escape();
    const confirmar_email = 0;
    const scan = [ email, confirmar_email];
    const query = connect.con.query('SELECT * FROM utilizador WHERE email = ? and confirmar_email = ?', scan,
        function (err, rows, fields) {
            console.log(query.sql);
            if (err) {
                console.log(err);
                return res.status(jsonMessagesBD.db.dbError.status).send(jsonMessagesBD.db.dbError);
            }

            if (rows.length > 0) {
                //ver esta mensagem
                return res.status(jsonMessagesLogin.user.confirmEmail.status).send(jsonMessagesLogin.user.confirmEmail);
            } else {
                return next();
            }
        });
};