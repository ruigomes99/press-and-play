//PT: Middleware para verificar se o email inserido já existe na base de dados
//ENG: Middleware to check if the inserted email already exists in the data base
const connect = require('../connectMySQL.js');
const jsonMessagesBD = require('../../assets/jsonMessages/bd.js');

module.exports = function (req, res, next) {
  const email = req.sanitize('email').escape();
  const query = connect.con.query('SELECT * FROM utilizador WHERE email = ?', email,
    function (err, rows, fields) {
      console.log(query.sql);
      if (err) {
        console.log(err);
        return res.status(jsonMessagesBD.db.dbError.status).send(jsonMessagesBD.db.dbError);
      }

      if (!rows.length) {
        return next()
      } else {
        return res.status(jsonMessagesBD.db.duplicatedEmail.status).send(jsonMessagesBD.db.duplicatedEmail);
      }
    });
};