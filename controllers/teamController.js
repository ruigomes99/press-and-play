const connect = require('../config/connectMySQL');
const jsonMessages = require('../assets/jsonMessages/bd.js');
const jsonMessagesUser = require('../assets/jsonMessages/user.js');
const multer = require('multer');
const path = require('path');

function read(req, res) {
    const query = connect.con.query('SELECT id_equipa, nome_equipa, avatar, classificacao FROM equipa ORDER BY classificacao DESC',
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
    const id_equipa = req.sanitize('id_equipa').escape();
    const query = connect.con.query('SELECT id_equipa, nome_equipa, avatar, classificacao FROM equipa where id_equipa = ?', id_equipa,
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

// guardar lider da equipa, o utilizador que cria
function save(req, res) {
    const nome_equipa = req.sanitize('nome_equipa').escape();
    const classificacao = 0;
    const avatar = process.env.BACK_URL + '/assets/images/teamLogoDefault.png';
    req.checkBody('nome_equipa', "Insira um nome entre 2 a 20 letras!").isLength({ min: 2, max: 20 });
    
    if (!nome_equipa.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/)) {
        return res.status(jsonMessages.db.dataInvalid.status).send(jsonMessages.db.dataInvalid);
    }

    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    } else {
        if (nome_equipa != "NULL" && typeof (nome_equipa) != 'undefined') {
            const save = [nome_equipa, classificacao, avatar];
            const query = connect.con.query('INSERT INTO equipa SET nome_equipa = ?, classificacao = ?, avatar = ?', save,
                function (err, rows, fields) {
                    console.log(query.sql);
                    if (!err) {
                        const id_user = req.user.id_user;
                        const secondSave = [id_user, nome_equipa, 1];
                        const query = connect.con.query('INSERT INTO utilizador_por_equipa SET id_user = ?, id_equipa = (SELECT id_equipa FROM equipa WHERE nome_equipa = ?), lider = ?', secondSave,
                            function (err, rows, fields) {
                                console.log(query.sql);
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
}

function update(req, res) {
    //let id_team = req.params.id_team;
    const id_equipa = req.sanitize('id_equipa').escape();
    const nome_equipa = req.sanitize('nome_equipa').escape();
    const classificacao = 0;
    req.checkBody('nome_equipa', "Insira um nome válido!").isLength({ min: 2, max: 10 });

    if (!nome_equipa.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/)) {
        return res.status(jsonMessages.db.dataInvalid.status).send(jsonMessages.db.dataInvalid);
    }

    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    } else {
        if (id_equipa != "NULL" && typeof (id_equipa) != 'undefined' && classificacao != "NULL" && typeof (classificacao) != 'undefined' && nome_equipa != "NULL" && typeof (nome_equipa) != 'undefined') {
            const update = [nome_equipa, classificacao, id_equipa];
            const query = connect.con.query('UPDATE equipa SET nome_equipa = ?, classificacao = ? WHERE id_equipa = ?', update,
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
};

function updateAvatar(req, res) {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname + '/../assets/images/'))
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + '.png')
        }
    });
    const upload = multer({ storage: storage }).single('teamAvatar');

    const id_equipa = req.sanitize('id_equipa').escape();
    upload(req, res, function (err) {
        if (err) {
            return res.end("Error uploading file." + err);
        } else {
            //const path = req.file.path;
            const path = process.env.BACK_URL + '/assets/images/' + req.file.filename;
            if (path != "NULL" && typeof (path) != 'undefined') {
                const update = [path, id_equipa];
                const query = connect.con.query('UPDATE equipa SET avatar = ? WHERE id_equipa = ?', update,
                    function (err, rows, fields) {
                        console.log(query.sql);
                        if (!err) {
                            res.status(jsonMessages.db.successUpdate.status).location(rows.updateId).send(jsonMessages.db.successUpdate);
                        } else {
                            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                        }
                    });

            } else {
                res.status(jsonMessages.db.requiredData.status).send(jsonMessages.db.requiredData);
            }
        }
    })
}

function deleteF(req, res) {
    const id_equipa = req.sanitize('id_equipa').escape();
    if (id_equipa != "NULL" && typeof (id_equipa) != 'undefined') {
        const query = connect.con.query('DELETE FROM equipa WHERE id_equipa = ?', id_equipa,
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

function readTeamUser(req, res) {
    const id_equipa = req.sanitize('id_equipa').escape();
    const query = connect.con.query('SELECT U.id_user, U.email, U.primeiro_nome, U.ultimo_nome, U.pontos, U.avatar, UE.lider FROM utilizador U, utilizador_por_equipa UE WHERE U.id_user = UE.id_user AND UE.id_equipa = ?', id_equipa,
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

function saveTeamUser(req, res) {
    const id_user = req.sanitize('id_user').escape();
    const id_equipa = req.sanitize('id_equipa').escape();
    console.log(id_user);
    console.log(id_equipa);
    if (id_user != "NULL" && typeof (id_user) != 'undefined' && id_equipa != "NULL" && typeof (id_equipa) != 'undefined') {
        const save = [id_user, id_equipa];
        // lider(1=é lider / 0= nao é lider)
        const query = connect.con.query('INSERT INTO utilizador_por_equipa SET id_user = ?, id_equipa = ?, lider = 0', save,
            function (err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    //aqui
                    const secondQuery = connect.con.query('SELECT nome_equipa, avatar FROM equipa where id_equipa = ?', id_equipa,
                        function (err, rows, fields) {
                            console.log(secondQuery.sql);
                            if (err) {
                                console.log(err);
                                res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                            } else {
                                if (rows.length == 0) {
                                    res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
                                } else {
                                    const nome_equipa = rows[0].nome_equipa;
                                    const avatar = rows[0].avatar;
                                    const mensagem = 'Foste adicionado à equipa ' + nome_equipa + ' pelo teu amigo ' + req.user.primeiro_nome + ' ' + req.user.ultimo_nome + '!';
                                    const data = new Date();
                                    secondSave = [id_user, mensagem, data, avatar];
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
                    //aqui
                } else {
                    res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                }
            });

    } else {
        res.status(jsonMessages.db.requiredData.status).send(jsonMessages.db.requiredData);
    }
};

function updateTeamUser(req, res) {
    const id_equipa = req.sanitize('id_equipa').escape();
    const id_user = req.sanitize('id_user').escape();

    if (id_equipa != "NULL" && typeof (id_equipa) != 'undefined' && id_user != "NULL" && typeof (id_user) != 'undefined') {
        const update = [id_user, id_equipa];
        const query = connect.con.query('UPDATE utilizador_por_equipa SET lider = 1 WHERE id_user = ? AND id_equipa = ?', update,
            function (err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    const secondUpdate = [req.user.id_user, id_equipa];
                    const secondQuery = connect.con.query('UPDATE utilizador_por_equipa SET lider = 0 WHERE id_user = ? AND id_equipa = ?', secondUpdate,
                        function (err, rows, fields) {
                            console.log(secondQuery.sql);
                            if (!err) {
                                //aqui
                                const thirdQuery = connect.con.query('SELECT nome_equipa, avatar FROM equipa where id_equipa = ?', id_equipa,
                                    function (err, rows, fields) {
                                        console.log(thirdQuery.sql);
                                        if (err) {
                                            console.log(err);
                                            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                                        } else {
                                            if (rows.length == 0) {
                                                res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
                                            } else {
                                                const nome_equipa = rows[0].nome_equipa;
                                                const avatar = rows[0].avatar;
                                                const mensagem = 'Foste promovido a líder da equipa ' + nome_equipa + '!';
                                                const data = new Date();
                                                save = [id_user, mensagem, data, avatar];
                                                const fourthQuery = connect.con.query('INSERT INTO notificacao SET id_user = ?, mensagem = ?, data = ?, avatar = ?', save,
                                                    function (err, rows, fields) {
                                                        console.log(fourthQuery.sql);
                                                        if (!err) {
                                                            res.status(jsonMessages.db.successUpdate.status).location(rows.updateId).send(jsonMessages.db.successUpdate);
                                                        } else {
                                                            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                                                        }
                                                    });
                                            }
                                        }
                                    });
                                //aqui
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

function deleteFTeamUser(req, res) {
    const id_user = req.sanitize('id_user').escape();
    const id_equipa = req.sanitize('id_equipa').escape();
    if (id_user == req.user.id_user) {
        res.status(jsonMessagesUser.user.unauthorized.status).send(jsonMessagesUser.user.unauthorized);
    } else {
        if (id_user != "NULL" && typeof (id_user) != 'undefined') {
            const deleteF = [id_user, id_equipa];
            const query = connect.con.query('DELETE FROM utilizador_por_equipa WHERE id_user = ? AND id_equipa = ?', deleteF,
                function (err, rows, fields) {
                    console.log(query.sql);
                    if (!err) {
                        // aqui
                        const secondQuery = connect.con.query('SELECT nome_equipa, avatar FROM equipa where id_equipa = ?', id_equipa,
                            function (err, rows, fields) {
                                console.log(secondQuery.sql);
                                if (err) {
                                    console.log(err);
                                    res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                                } else {
                                    if (rows.length == 0) {
                                        res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
                                    } else {
                                        const nome_equipa = rows[0].nome_equipa;
                                        const avatar = rows[0].avatar;
                                        const mensagem = 'Foste expulso da equipa ' + nome_equipa + '!';
                                        const data = new Date();
                                        secondSave = [id_user, mensagem, data, avatar];
                                        const thirdQuery = connect.con.query('INSERT INTO notificacao SET id_user = ?, mensagem = ?, data = ?, avatar = ?', secondSave,
                                            function (err, rows, fields) {
                                                console.log(thirdQuery.sql);
                                                if (!err) {
                                                    res.status(jsonMessages.db.successDelete.status).send(jsonMessages.db.successDelete);
                                                } else {
                                                    res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                                                }
                                            });
                                    }
                                }
                            });
                        //aqui
                    } else {
                        res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                    }
                });

        } else {
            res.status(jsonMessages.db.requiredData.status).send(jsonMessages.db.requiredData);
        }
    }
};

module.exports = {
    read: read,
    readID: readID,
    save: save,
    update: update,
    updateAvatar: updateAvatar,
    deleteF: deleteF,
    readTeamUser: readTeamUser,
    saveTeamUser: saveTeamUser,
    updateTeamUser: updateTeamUser,
    deleteFTeamUser: deleteFTeamUser
}