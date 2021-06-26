const connect = require('../connectMySQL.js');
const jsonMessagesBD = require('../../assets/jsonMessages/bd.js');

module.exports = function (req, res, next) {
    const idEspaco = req.sanitize('idEspaco').escape();
    const query = connect.con.query('UPDATE Espaco E SET E.Avaliacao_Participantes = (SELECT AVG(UI.avaliacao_espaco) FROM utilizador_por_inscricao UI, inscricao I, Atividade A WHERE UI.id_inscricao = I.id_inscricao AND I.idAtividade = A.idAtividade AND A.idEspaco = E.idEspaco) WHERE E.idEspaco = ?', idEspaco,
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