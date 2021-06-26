//PT: Middleware para verificar se o email inserido já existe na base de dados
//ENG: Middleware to check if the inserted email already exists in the data base
const connect = require('../connectMySQL.js');
const jsonMessagesBD = require('../../assets/jsonMessages/bd.js');

module.exports = function (req, res, next) {
    const id_user = req.sanitize('id_user').escape();
    const upd = [ id_user, id_user ];
    const query = connect.con.query('UPDATE utilizador U SET pontos = (SELECT SUM(UI.pontos) FROM utilizador_por_inscricao UI, Atividade A, inscricao I WHERE UI.id_inscricao = I.id_inscricao  AND I.idAtividade = A.idAtividade AND U.id_user = UI.id_user AND U.id_user = ? AND NOW() > A.Data) WHERE U.id_user = ?', upd,
        function (err, rows, fields) {
            console.log(query.sql);
            if (err) {
                console.log(err);
                return res.status(jsonMessagesBD.db.dbError.status).send(jsonMessagesBD.db.dbError);
            } else {
                const secondQuery = connect.con.query('SELECT pontos FROM utilizador WHERE id_user = ?', id_user,
                function (err, rows, fields) {
                    console.log(secondQuery.sql);
                    if (err) {
                        console.log(err);
                        return res.status(jsonMessagesBD.db.dbError.status).send(jsonMessagesBD.db.dbError);
                    }
        
                    if (rows.length == 0) {
                        return res.status(jsonMessagesBD.db.noRecords.status).send(jsonMessagesBD.db.noRecords);
                    } else {
                        let pontos = rows[0].pontos;
                        if (pontos == null) {
                            pontos = 0;
                        }

                        let descontos = 0;
                        for ( let i = 60; pontos >= i; i += 60) {
                            descontos += 1;
                        }
                        const update = [ descontos, pontos, id_user];
                        const thirdQuery = connect.con.query('UPDATE utilizador SET descontos = ?, pontos = ? WHERE id_user = ?', update,
                        function (err, rows, fields) {
                            console.log(thirdQuery.sql);
                            if (err) {
                                console.log(err);
                                return res.status(jsonMessagesBD.db.dbError.status).send(jsonMessagesBD.db.dbError);
                            } else {
                                return next();
                            }
                        });
                    }
                });
            }
        });
};