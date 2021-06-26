const connect = require('../config/connectMySQL');
const jsonMessages = require('../assets/jsonMessages/bd.js');
const jsonMessagesUser = require('../assets/jsonMessages/user.js');

function read(req, res) {
    const id_user = req.sanitize('id_user').escape();
    // 1 = accpeted requests
    const estado_pedido = 1;
    const read = [id_user, estado_pedido]
    const query = connect.con.query('SELECT U.id_user, U.email, U.primeiro_nome, U.ultimo_nome, U.pontos, U.avatar FROM utilizador U, lista_amigos LA WHERE LA.id_user = ? AND LA.estado_pedido = ? AND U.id_user=LA.id_amigo', read,
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

function readRecievedRequests(req, res) {
    const id_user = req.sanitize('id_user').escape();
    // 0 not accepted
    const estado_pedido = 0;
    // 0 requests that the logged user didn't send, or all of the requests he recieved
    const enviou = 0;
    const read = [id_user, estado_pedido, enviou];
    const query = connect.con.query('SELECT U.id_user, U.email, U.primeiro_nome, U.ultimo_nome, U.pontos, U.avatar FROM utilizador U, lista_amigos LA WHERE LA.id_user = ? AND LA.estado_pedido = ? AND U.id_user=LA.id_amigo AND LA.enviou = ?', read,
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

function readPendingRequests(req, res) {
    const id_user = req.sanitize('id_user').escape();
    // 0 not accepted
    const estado_pedido = 0;
    // 0 requests that the logged user sent
    const enviou = 1;
    const read = [id_user, estado_pedido, enviou];
    const query = connect.con.query('SELECT U.id_user, U.email, U.primeiro_nome, U.ultimo_nome, U.pontos, U.avatar FROM utilizador U, lista_amigos LA WHERE LA.id_user = ? AND LA.estado_pedido = ? AND U.id_user=LA.id_amigo AND LA.enviou = ?', read,
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

function save(req, res) {
    const id_user = req.user.id_user;
    const id_amigo = req.sanitize('id_amigo').escape();
    const estado_pedido = 0;
    const enviou = 1;
    if (id_user == id_amigo) {
        res.status(jsonMessagesUser.user.informationError.status).send(jsonMessagesUser.user.informationError);
    } else {
        if (id_user != "NULL" && typeof (id_user) != 'undefined' && id_amigo != "NULL" && typeof (id_amigo) != 'undefined') {
            const save = [id_user, id_amigo, estado_pedido, enviou];
            const query = connect.con.query('INSERT INTO lista_amigos SET id_user = ?, id_amigo = ?, estado_pedido = ?, enviou = ?', save,
                function (err, rows, fields) {
                    console.log(query.sql);
                    if (!err) {
                        const enviou = 0;
                        const secondSave = [id_amigo, id_user, estado_pedido, enviou];
                        const secondQuery = connect.con.query('INSERT INTO lista_amigos SET id_user = ?, id_amigo = ?, estado_pedido = ?, enviou = ?', secondSave,
                            function (err, rows, fields) {
                                console.log(secondQuery.sql)
                                if (!err) {
                                    // aqui
                                    const mensagem = 'Recebeste um novo pedido de amizade de ' + req.user.primeiro_nome + ' ' + req.user.ultimo_nome + '!';
                                    const data = new Date();
                                    const avatar = req.user.avatar;
                                    thirdSave = [id_amigo, mensagem, data, avatar];
                                    const thirdQuery = connect.con.query('INSERT INTO notificacao SET id_user = ?, mensagem = ?, data = ?, avatar = ?', thirdSave,
                                        function (err, rows, fields) {
                                            console.log(thirdQuery.sql);
                                            if (!err) {
                                                res.status(jsonMessages.db.successInsert.status).send(jsonMessages.db.successInsert);
                                            } else {
                                                res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                                            }
                                        });
                                    // ali
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

function updateRequest(req, res) {
    const id_user = req.user.id_user;
    const id_amigo = req.sanitize('id_amigo').escape();
    const estado_pedido = 1;
    const enviou = 0;
    if (id_user != "NULL" && typeof (id_user) != 'undefined' && id_amigo != "NULL" && typeof (id_amigo) != 'undefined') {
        const update = [estado_pedido, id_user, id_amigo, enviou];
        const query = connect.con.query('UPDATE lista_amigos SET estado_pedido = ? where id_user = ? && id_amigo = ? && enviou = ?', update,
            function (err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    const enviou = 1;
                    const secondUpdate = [estado_pedido, id_amigo, id_user, enviou];
                    const secondQuery = connect.con.query('UPDATE lista_amigos SET estado_pedido = ? where id_user = ? && id_amigo = ? && enviou = ?', secondUpdate,
                        function (err, rows, fields) {
                            console.log(secondQuery.sql)
                            if (!err) {
                                const mensagem = 'Tu e ' + req.user.primeiro_nome + ' ' + req.user.ultimo_nome + ' são agora amigos!';
                                const data = new Date();
                                const avatar = req.user.avatar;
                                thirdSave = [id_amigo, mensagem, data, avatar];
                                const thirdQuery = connect.con.query('INSERT INTO notificacao SET id_user = ?, mensagem = ?, data = ?, avatar = ?', thirdSave,
                                    function (err, rows, fields) {
                                        console.log(thirdQuery.sql);
                                        if (!err) {
                                            res.status(jsonMessages.db.successUpdate.status).send(jsonMessages.db.successUpdate);
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
};


function deleteF(req, res) {
    const id_user = req.user.id_user;
    const id_amigo = req.sanitize('id_amigo').escape();
    if (id_user != "NULL" && typeof (id_user) != 'undefined' && id_amigo != "NULL" && typeof (id_amigo) != 'undefined') {
        const deleteF = [id_user, id_amigo];
        const query = connect.con.query('DELETE FROM lista_amigos WHERE id_user = ? && id_amigo = ?', deleteF,
            function (err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    const secondDeleteF = [id_amigo, id_user];
                    const secondQuery = connect.con.query('DELETE FROM lista_amigos WHERE id_user = ? && id_amigo = ?', secondDeleteF,
                        function (err, rows, fields) {
                            console.log(secondQuery.sql)
                            if (!err) {
                                res.status(jsonMessages.db.successDelete.status).send(jsonMessages.db.successDelete);
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
};

module.exports = {
    read: read,
    readRecievedRequests: readRecievedRequests,
    readPendingRequests: readPendingRequests,
    save: save,
    updateRequest: updateRequest,
    deleteF: deleteF
};