const connect = require('../config/connectMySQL');
const jsonMessages = require('../assets/jsonMessages/bd.js');

function read(req, res) {
    const query = connect.con.query('SELECT E.idEspaco, E.Localizacao, E.Preco, E.Avatar_Participantes, E.Estado, E.Avaliacao_Participantes, E.Nome, GA.Contacto FROM Espaco E, Gestor_Admin GA WHERE GA.idGestor_Admin = E.idGestor_Admin_FK9 AND E.ativo = 1 ORDER BY E.Avaliacao_Participantes DESC',
        function (err, rows, fields) {
            console.log(query.sql);
            if (err) {
                console.log(err);
                res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
            } else {
                if (rows.length == 0) {
                    res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
                } else {
                    res.send(rows);
                }
            }
        });
};

function readID(req, res) {
    const idEspaco = req.sanitize('idEspaco').escape();
    const query = connect.con.query('SELECT E.idEspaco, E.Localizacao, E.Preco, E.Estado, E.Avaliacao_Participantes, E.Nome, GA.Contacto FROM Espaco E, Gestor_Admin GA WHERE GA.idGestor_Admin = E.idGestor_Admin_FK9 AND E.idEspaco = ? AND E.ativo = 1', idEspaco,
        function (err, rows, fields) {
            console.log(query.sql);
            if (err) {
                console.log(err);
                res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
            } else {
                if (rows.length == 0) {
                    res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
                } else {
                    res.send(rows);
                }
            }
        });
};

function readImages(req, res) {
    const idEspaco = req.sanitize('idEspaco').escape();
    const query = connect.con.query('SELECT idImagem, URL FROM Imagem WHERE idEspaco = ?', idEspaco,
        function (err, rows, fields) {
            console.log(query.sql);
            if (err) {
                console.log(err);
                res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
            } else {
                if (rows.length == 0) {
                    res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
                } else {
                    res.send(rows);
                }
            }
        });
};

function readPlaySpaceMaterials(req, res) {
    const idEspaco = req.sanitize('idEspaco').escape();
    const query = connect.con.query('SELECT M.Material FROM Espaco E, Espaco_material EM, Material M WHERE EM.idMaterial_FK2= M.idMaterial AND EM.idEspaco_FK1 = E.idEspaco AND E.idEspaco = ? AND E.ativo = 1', idEspaco,
        function (err, rows, fields) {
            console.log(query.sql);
            if (err) {
                console.log(err);
                res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
            } else {
                if (rows.length == 0) {
                    res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
                } else {
                    res.send(rows);
                }
            }
        });
};

function readPlaySpacePerks(req, res) {
    const idEspaco = req.sanitize('idEspaco').escape();
    const query = connect.con.query('SELECT C.Comodidade FROM Espaco E, Comodidade_espaco CE, Comodidade C WHERE C.idComodidade = CE.idComodidade_FK3 AND CE.idEspaco_FK4 = E.idEspaco AND CE.Possui = 1 AND E.idEspaco = ? AND E.ativo = 1', idEspaco,
        function (err, rows, fields) {
            console.log(query.sql);
            if (err) {
                console.log(err);
                res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
            } else {
                if (rows.length == 0) {
                    res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
                } else {
                    res.send(rows);
                }
            }
        });
};


function readOpeningHours(req, res) {
    const idEspaco = req.sanitize('idEspaco').escape();
    const query = connect.con.query('SELECT abertura, encerramento FROM Horario WHERE idEspaco = ?', idEspaco,
        function (err, rows, fields) {
            console.log(query.sql);
            if (err) {
                console.log(err);
                res.status(jsonMessages.db.dbError.status).send(jsonMessage.db.dbError);
            } else {
                if (rows.length == 0) {
                    res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
                } else {
                    res.send(rows);
                }
            }
        });
};

function readAvailableHours(req, res) {
    const idEspaco = req.sanitize('idEspaco').escape();
    const data = req.sanitize('data').escape();
    const dataInserida = new Date(data);
    const dia = dataInserida.getDay();
    console.log(dia);
    const scan = [idEspaco, dataInserida]
    const query = connect.con.query('SELECT PF.dataInicio, PF.dataFim FROM PeriodoFecho PF, Espaco E WHERE E.idEspaco = PF.idEspaco AND E.idEspaco = ? AND ? BETWEEN PF.dataInicio AND PF.dataFIM', scan,
        function (err, rows, fields) {
            console.log(query.sql);
            if (err) {
                console.log(err);
                res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
            } else {
                if (rows.length == 0) {
                    secondScan = [idEspaco, dia]
                    const secondQuery = connect.con.query('SELECT abertura, encerramento FROM Horario WHERE idEspaco = ? AND diaSemana = ?', secondScan,
                        function (err, rows, fields) {
                            console.log(secondQuery.sql);
                            if (err) {
                                console.log(err);
                                res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                            } else {
                                if (rows.length == 0) {
                                    res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
                                } else {
                                    res.send(rows);
                                }
                            }
                        })
                } else {
                    res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
                }
            }
        });
};

module.exports = {
    read: read,
    readID: readID,
    readImages: readImages,
    readPlaySpaceMaterials: readPlaySpaceMaterials,
    readPlaySpacePerks: readPlaySpacePerks,
    readOpeningHours: readOpeningHours,
    readAvailableHours: readAvailableHours
};