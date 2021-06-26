const connect = require('../config/connectMySQL');
const jsonMessages = require('../assets/jsonMessages/bd.js');

function read(req, res) {
    const id_user = req.sanitize('id_user').escape();
    const query = connect.con.query('SELECT I.id_inscricao, I.numero_participantes, E.idEspaco, E.Nome, E.Localizacao, E.Estado, E.Avatar_Participantes, E.Avaliacao_Participantes, GA.Contacto, A.Data, I.pagamento, I.tipo FROM inscricao I, Atividade A, utilizador_por_inscricao UI, Espaco E, Gestor_Admin GA WHERE GA.idGestor_Admin = E.idGestor_Admin_FK9 AND E.idEspaco = A.idEspaco AND A.idAtividade = I.idAtividade AND I.id_inscricao = UI.id_inscricao AND UI.id_user = ? AND A.Data >= NOW() ORDER BY A.Data', id_user,
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

function readHistory(req, res) {
    const id_user = req.sanitize('id_user').escape();
    const query = connect.con.query('SELECT I.id_inscricao, I.numero_participantes, E.idEspaco, E.Nome, E.Localizacao, E.Estado, E.Avatar_Participantes, E.Avaliacao_Participantes, GA.Contacto, A.Data, I.pagamento, I.tipo FROM inscricao I, Atividade A, utilizador_por_inscricao UI, Espaco E, Gestor_Admin GA WHERE GA.idGestor_Admin = E.idGestor_Admin_FK9 AND E.idEspaco = A.idEspaco AND A.idAtividade = I.idAtividade AND I.id_inscricao = UI.id_inscricao AND UI.id_user = ? AND A.Data < NOW() ORDER BY A.Data', id_user,
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
    const id_user = req.sanitize('id_user').escape();
    const id_inscricao = req.sanitize('id_inscricao').escape();
    const read = [id_user, id_inscricao];
    const query = connect.con.query('SELECT I.id_inscricao, I.numero_participantes, E.idEspaco, E.Nome, E.Localizacao, E.Estado, E.Avatar_Participantes, E.Avaliacao_Participantes, GA.Contacto, A.Data, I.pagamento, I.tipo FROM inscricao I, Atividade A, utilizador_por_inscricao UI, Espaco E, Gestor_Admin GA WHERE GA.idGestor_Admin = E.idGestor_Admin_FK9 AND E.idEspaco = A.idEspaco AND A.idAtividade = I.idAtividade AND I.id_inscricao = UI.id_inscricao AND UI.id_user = ? AND I.id_inscricao = ?', read,
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

function save(req, res) {

    const id_user = req.user.id_user;
    const idEspaco = req.sanitize('idEspaco').escape();
    const tipo = req.sanitize('tipo').escape();
    const Data = new Date(req.sanitize('Data').escape());
    const Duracao = '01:00';
    const Anulada = 0;
    let Nome;
    let pagamento = req.sanitize('pagamento').escape();
    let descontos = req.user.descontos;
    let descontos_usados = req.user.descontos_usados;

    // 0 para reserva
    // 1 para evento

    req.checkBody('pagamento', "Pagamento é apenas com números!").isNumeric();
    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    } else {
        if (pagamento != "NULL" && typeof (pagamento) != 'undefined' && idEspaco != "NULL" && typeof (idEspaco) != 'undefined' && typeof (Data) != 'undefined' && typeof (Data) != 'undefined' && typeof (tipo) != 'undefined' && typeof (tipo) != 'undefined') {
            if (tipo == 1) {
                Nome = 'Evento';
            } else {
                Nome = 'Reserva';
            }

            let status = false;
            if (descontos > descontos_usados) {
                if (pagamento >= 5) {
                    descontos_usados += 1;
                    pagamento -= 5;
                    status = true
                }
            }

            const save = [Nome, Data, Duracao, idEspaco, Anulada];
            const query = connect.con.query('INSERT INTO Atividade SET Nome = ?, Data = ?, Duracao = ?, idEspaco = ?, Anulada = ?', save,
                function (err, rows, fields) {
                    console.log(query.sql);
                    if (!err) {
                        const idAtividade = rows.insertId;
                        const numero_participantes = 1;
                        const secondSave = [idAtividade, pagamento, tipo, numero_participantes];
                        const secondQuery = connect.con.query('INSERT INTO inscricao SET idAtividade = ?, pagamento = ?, tipo = ?, numero_participantes = ?', secondSave,
                            function (err, rows, fields) {
                                console.log(secondQuery.sql);
                                if (!err) {
                                    const id_incricao = rows.insertId;
                                    const pagou = 1;
                                    const pontos = 10;
                                    const thirdSave = [id_user, id_incricao, pagou, pontos];
                                    const thirdQuery = connect.con.query('INSERT INTO utilizador_por_inscricao SET id_user = ?, id_inscricao = ?, pagou = ?, pontos = ?', thirdSave,
                                        function (err, rows, fields) {
                                            console.log(thirdQuery.sql);
                                            if (!err) {
                                                if (status) {
                                                    const update = [descontos, id_user];
                                                    console.log(update);
                                                    const fourthQuery = connect.con.query('UPDATE utilizador SET descontos_usados = ? WHERE id_user = ?', update,
                                                        function (err, rows, fields) {
                                                            console.log(fourthQuery.sql);
                                                            if (!err) {
                                                                const mensagem = 'Foi descontado 5€ no teu último pagamento!'
                                                                const data = new Date();
                                                                const avatar = process.env.BACK_URL + '/assets/images/notifDiscount.png';
                                                                const fourthSave = [id_user, mensagem, data, avatar];
                                                                const fifthQuery = connect.con.query('INSERT INTO notificacao SET id_user = ?, mensagem = ?, data =?, avatar =? ', fourthSave,
                                                                    function (err, rows, fields) {
                                                                        console.log(fifthQuery.sql)
                                                                        if (!err) {
                                                                            res.status(jsonMessages.db.successInsert.status).location(rows.insertId).send(jsonMessages.db.successInsert);
                                                                        } else {
                                                                            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                                                                        }
                                                                    })
                                                            } else {
                                                                res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                                                            }
                                                        })
                                                } else {
                                                    res.status(jsonMessages.db.successInsert.status).location(rows.insertId).send(jsonMessages.db.successInsert);
                                                }
                                            } else {
                                                res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                                            }
                                        });
                                } else {
                                    res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                                }
                            });
                    } else {
                        res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                    }
                });

        } else {
            res.status(jsonMessages.db.requiredData.status).send(jsonMessages.db.requiredData);
        }
    }
};

function readRegistrationUser(req, res) {
    const id_inscricao = req.sanitize('id_inscricao').escape();
    const query = connect.con.query('SELECT U.primeiro_nome, U.ultimo_nome, U.email, U.pontos, U.avatar, UI.pagou FROM utilizador U, utilizador_por_inscricao UI WHERE U.id_user = UI.id_user AND UI.id_inscricao = ?', id_inscricao,
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
}

function saveRegistrationsUser(req, res) {
    const id_inscricao = req.sanitize('id_inscricao').escape();
    const id_participante = req.sanitize('id_user').escape();
    const pagou = 0;
    const pontos = 3;
    if (id_inscricao != "NULL" && typeof (id_inscricao) != 'undefined' && id_participante != "NULL" && typeof (id_participante) != 'undefined') {
        const save = [id_inscricao, id_participante, pagou, pontos];
        const query = connect.con.query('INSERT INTO utilizador_por_inscricao SET id_inscricao = ?, id_user = ?, pagou = ?, pontos =?', save,
            function (err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    const updateQuery = connect.con.query('UPDATE inscricao SET numero_participantes = numero_participantes + 1 WHERE id_inscricao = ?', id_inscricao,
                        function (err, rows, fields) {
                            console.log(updateQuery.sql);
                            if (!err) {
                                const secondQuery = connect.con.query('SELECT E.Nome FROM Espaco E, Atividade A, inscricao I where A.idAtividade = I.idAtividade AND A.idEspaco = E.idEspaco AND I.id_inscricao = ?', id_inscricao,
                                    function (err, rows, fields) {
                                        console.log(secondQuery.sql);
                                        if (err) {
                                            console.log(err);
                                            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                                        } else {
                                            if (rows.length == 0) {
                                                res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
                                            } else {
                                                const nome_espaco = rows[0].Nome;
                                                const avatar = process.env.BACK_URL + '/assets/images/invitationNotif.png';
                                                const mensagem = 'Foste adicionado a uma reserva no campo ' + nome_espaco + ' pelo teu amigo ' + req.user.primeiro_nome + ' ' + req.user.ultimo_nome + '!';
                                                const data = new Date();
                                                const secondSave = [id_participante, mensagem, data, avatar];
                                                const thirdQuery = connect.con.query('INSERT INTO notificacao SET id_user = ?, mensagem = ?, data = ?, avatar = ?', secondSave,
                                                    function (err, rows, fields) {
                                                        console.log(thirdQuery.sql);
                                                        if (!err) {
                                                            res.status(jsonMessages.db.successInsert.status).location(rows.insertId).send(jsonMessages.db.successInsert);
                                                        } else {
                                                            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                                                        }
                                                    });
                                            }
                                        }
                                    });
                            } else {
                                res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                            }
                        });
                    res.status(jsonMessages.db.successInsert.status).location(rows.insertId).send(jsonMessages.db.successInsert);
                } else {
                    res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                }
            });
    } else {
        res.status(jsonMessages.db.requiredData.status).send(jsonMessages.db.requiredData);
    }
};

function deleteFRegistrarionsUser(req, res) {
    const id_inscricao = req.sanitize('id_inscricao').escape();
    const id_participante = req.sanitize('id_participante').escape();
    if (id_inscricao != "NULL" && typeof (id_inscricao) != 'undefined' && id_participante != "NULL" && typeof (id_participante) != 'undefined') {
        const deleteF = [id_inscricao, id_participante];
        const query = connect.con.query('DELETE FROM utilizador_por_inscricao WHERE id_inscricao = ? AND id_user = ?', deleteF,
            function (err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    res.status(jsonMessages.db.successDelete.status).send(jsonMessages.db.successDelete);
                } else {
                    res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                }
            });

    } else {
        res.status(jsonMessages.db.requiredData.status).send(jsonMessages.db.requiredData);
    }
};

function readEvent(req, res) {
    const query = connect.con.query('SELECT I.id_inscricao, I.numero_participantes, E.idEspaco, E.Nome, E.Localizacao, E.Estado, E.Avatar_Participantes, E.Avaliacao_Participantes, GA.Contacto, A.Data, I.pagamento, I.tipo FROM inscricao I, Atividade A, Espaco E, Gestor_Admin GA WHERE GA.idGestor_Admin = E.idGestor_Admin_FK9 AND E.idEspaco = A.idEspaco AND A.idAtividade = I.idAtividade AND I.tipo = 1 AND A.Data >= NOW() ORDER BY A.Data',
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

function saveEventUser(req, res) {
    const id_inscricao = req.sanitize('id_inscricao').escape();
    const id_user = req.user.id_user
    const pagou = 0;
    const pontos = 3;
    if (id_inscricao != "NULL" && typeof (id_inscricao) != 'undefined') {
        const update = [id_inscricao, id_user, pagou, pontos];
        const query = connect.con.query('INSERT INTO utilizador_por_inscricao SET id_inscricao = ?, id_user = ?, pagou = ?, pontos =?', update,
            function (err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    const updateQuery = connect.con.query('UPDATE inscricao SET numero_participantes = numero_participantes + 1 WHERE id_inscricao = ?', id_inscricao,
                        function (err, rows, fields) {
                            console.log(updateQuery.sql);
                            if (!err) {
                                res.status(jsonMessages.db.successInsert.status).location(rows.insertId).send(jsonMessages.db.successInsert);
                            } else {
                                res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                            }
                        });
                } else {
                    res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                }
            });

    } else {
        res.status(jsonMessages.db.requiredData.status).send(jsonMessages.db.requiredData);
    }
}

function updateRegistrationsUser(req, res) {
    const id_user = req.user.id_user;
    const id_inscricao = req.sanitize('id_inscricao').escape();
    const avaliacao_espaco = req.sanitize('avaliacao_espaco').escape();
    if (id_inscricao != "NULL" && typeof (id_inscricao) && avaliacao_espaco != "NULL" && typeof (avaliacao_espaco)) {
        const update = [avaliacao_espaco, id_inscricao, id_user];
        const query = connect.con.query('UPDATE utilizador_por_inscricao SET avaliacao_espaco = ? WHERE id_inscricao = ? AND id_user = ?', update,
            function (err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    res.status(jsonMessages.db.successUpdate.status).send(jsonMessages.db.successUpdate);
                } else {
                    res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                }
            });
    } else {
        res.status(jsonMessages.db.requiredData.status).send(jsonMessages.db.requiredData);
    }
}

module.exports = {
    read: read,
    readHistory: readHistory,
    readID: readID,
    save: save,
    readRegistrationUser: readRegistrationUser,
    saveRegistrationsUser: saveRegistrationsUser,
    deleteFRegistrarionsUser: deleteFRegistrarionsUser,
    readEvent: readEvent,
    saveEventUser: saveEventUser,
    updateRegistrationsUser: updateRegistrationsUser
}