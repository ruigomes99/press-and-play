const connect = require('../config/connectMySQL');
const crypto = require('crypto');
const jsonMessages = require('../assets/jsonMessages/bd.js');
const jsonMessagesUser = require('../assets/jsonMessages/user.js');
const db = require("../models");
const multer = require('multer');
const path = require('path');
const bcrypt = require("bcryptjs");

function read(req, res) {
    const query = connect.con.query('SELECT id_user, email, primeiro_nome, ultimo_nome, data_nascimento, pais, localidade, avatar, pontos, data_conta_criada FROM utilizador order by primeiro_nome, ultimo_nome',
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
    const query = connect.con.query('SELECT id_user, email, primeiro_nome, ultimo_nome, nif, data_nascimento, pais, localidade, avatar, pontos, data_conta_criada FROM utilizador where id_user = ?', id_user,
        function (err, rows, fields) {
            console.log(query.sql);
            if (err) {
                console.log(err);
                res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
            } else {
                if (rows.length == 0) {
                    res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
                } else {
                    const msg = { "user": rows }
                    res.send(msg);
                }
            }
        });
};

function readNifID(req, res) {
    const id_user = req.user.id_user;
    const query = connect.con.query('SELECT nif FROM utilizador where id_user = ?', id_user,
        function (err, rows, fields) {
            console.log(query.sql);
            if (err) {
                console.log(err);
                res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
            } else {
                if (rows.length == 0) {
                    res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
                } else {
                    let nif = rows[0].nif;
                    const mykey = crypto.createDecipher('aes-128-cbc', '123');
                    nif = mykey.update(nif, 'hex', 'utf8')
                    nif += mykey.final('utf8');
                    console.log(nif);
                    const msg = { "nif_decrypted": nif }
                    res.send(msg);
                }
            }
        });
};

function update(req, res) {
    const id_user = req.user.id_user;
    const email = req.sanitize('email').escape().trim();
    const primeiro_nome = req.sanitize('primeiro_nome').escape().trim().replace(/\s/g,'');
    const ultimo_nome = req.sanitize('ultimo_nome').escape().trim().replace(/\s/g,'');
    let nif = req.sanitize('nif').escape().trim();
    const pais = req.sanitize('pais').escape().trim().replace(/\s/g,'');
    const localidade = req.sanitize('localidade').escape().trim().replace(/\s/g,'');

    if (!primeiro_nome.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/) || !ultimo_nome.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/)
    || !localidade.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/) || !pais.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/)) {
        return res.status(jsonMessages.db.dataInvalid.status).send(jsonMessages.db.dataInvalid);
    }

    req.checkBody('email', "Insira um email válido!").isEmail();
    req.checkBody('primeiro_nome', "O primeiro nome tem de conter etre 2 a 20 letras").isLength({ min: 2, max: 20 });
    req.checkBody('ultimo_nome', "O último nome tem de conter entre 2 a 20 letras").isLength({ min: 2, max: 20 });
    req.checkBody('nif', "Insira um nif válido com apenas numeros").isNumeric();
    req.checkBody('nif', "Insira um nif com exatamente 9 dígitos").isLength({ min: 9, max: 9 });

    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    } else {
        if (id_user != "NULL" && typeof (id_user) != 'undefined' && email != "NULL" && typeof (email) != 'undefined' && primeiro_nome != "NULL" && typeof (primeiro_nome) != 'undefined' && ultimo_nome != "NULL" && typeof (ultimo_nome) != 'undefined' && nif != "NULL" && typeof (nif) != 'undefined' && pais != "NULL" && typeof (pais) != 'undefined' && localidade != "NULL" && typeof (localidade) != 'undefined') {
            const mykey = crypto.createCipher('aes-128-cbc', '123');
            nif = mykey.update(nif, 'utf8', 'hex')
            nif += mykey.final('hex');
            const update = [email, primeiro_nome, ultimo_nome, nif, pais, localidade, id_user];
            const query = connect.con.query('UPDATE utilizador SET email = ?, primeiro_nome = ?, ultimo_nome = ?, nif = ?, pais = ?, localidade = ? WHERE id_user = ?', update,
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
};

function updatePassword(req, res) {
    const id_user = req.user.id_user;
    const password = req.user.password;
    const newPassword = req.sanitize('newPassword').escape();
    const insertedPassword = req.sanitize('insertedPassword').escape();

    req.checkBody('newPassword', "A palavra-passe tem de conter no mínimo um número e uma letra!").isAlphanumeric();
    req.checkBody('newPassword', "A palavra-passe tem de conter entre 6 a 24 caracteres!")
        .isLength({ min: 6, max: 24 })
        .matches(/[a-z]/g).withMessage('A palavra-passe tem de conter no mínimo uma letra minúscula!')
        .matches(/[A-Z]/g).withMessage('A palavra-passe tem de conter no mínimo uma letra maiúscula!')
        .matches(/[0-9]/g).withMessage('A palavra-passe tem de conter no mínimo um número!');

    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    } else {
        if (newPassword != "NULL" && typeof (newPassword) != 'undefined' && insertedPassword != "NULL" && typeof (insertedPassword) != 'undefined') {
            if (bcrypt.compareSync(insertedPassword, password)) {
                const newPasswordBcrypt = bcrypt.hashSync(
                    newPassword,
                    bcrypt.genSaltSync(10),
                    null
                );
                const update = [newPasswordBcrypt, id_user];
                const query = connect.con.query('UPDATE utilizador SET password = ? WHERE id_user = ?', update,
                    function (err, rows, fields) {
                        console.log(query.sql);
                        if (!err) {
                            res.status(jsonMessages.db.successUpdate.status).location(rows.updateId).send(jsonMessages.db.successUpdate);
                        } else {
                            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                        }
                    });
            } else {
                res.status(jsonMessagesUser.user.password.status).send(jsonMessagesUser.user.password);
            }

        } else {
            res.status(jsonMessages.db.requiredData.status).send(jsonMessages.db.requiredData);
        }
    }
};

function updateForgottenPassword(req, res) {
    const email = req.sanitize('email').escape();
    const token = req.sanitize('token').escape();
    const newPassword = req.sanitize('newPassword').escape();

    req.checkBody('newPassword', "A palavra-passe tem de conter no mínimo um número e uma letra!").isAlphanumeric();
    req.checkBody('newPassword', "A palavra-passe tem de conter entre 6 a 24 caracteres!")
        .isLength({ min: 6, max: 24 })
        .matches(/[a-z]/g).withMessage('A palavra-passe tem de conter no mínimo uma letra minúscula!')
        .matches(/[A-Z]/g).withMessage('A palavra-passe tem de conter no mínimo uma letra maiúscula!')
        .matches(/[0-9]/g).withMessage('A palavra-passe tem de conter no mínimo um número!');

    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    } else {
        if (newPassword != "NULL" && typeof (newPassword) != 'undefined' && token != "NULL" && typeof (token) != 'undefined' && email != "NULL" && typeof (email) != 'undefined') {
            db.User.findOne({
                where: {
                    email: email,
                    token: token
                }
            }).then(function (dbUser) {
                if (dbUser) {
                    const newPasswordBcrypt = bcrypt.hashSync(
                        newPassword,
                        bcrypt.genSaltSync(10),
                        null
                    );
                    const update = [newPasswordBcrypt, email];
                    const query = connect.con.query('UPDATE utilizador SET password = ? WHERE email = ?', update,
                        function (err, rows, fields) {
                            console.log(query.sql);
                            if (!err) {
                                res.status(jsonMessages.db.successUpdate.status).location(rows.updateId).send(jsonMessages.db.successUpdate);
                            } else {
                                res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                            }
                        });
                } else {
                    res.status(jsonMessagesUser.user.forgottenPasswordInvalidToken.status).send(jsonMessagesUser.user.forgottenPasswordInvalidToken);
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
    const upload = multer({ storage: storage }).single('userAvatar');

    const id_user = req.user.id_user;
    upload(req, res, function (err) {
        if (err) {
            return res.end("Error uploading file." + err);
        } else {
            const path = process.env.BACK_URL + '/assets/images/' + req.file.filename;
            if (path != "NULL" && typeof (path) != 'undefined') {
                const update = [path, id_user];
                const query = connect.con.query('UPDATE utilizador SET avatar = ? WHERE id_user = ?', update,
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
    const id_user = req.user.id_user;
    if (id_user != "NULL" && typeof (id_user) != 'undefined') {
        const query = connect.con.query('DELETE FROM equipa WHERE EXISTS (SELECT id_equipa FROM utilizador_por_equipa WHERE utilizador_por_equipa.id_equipa = equipa.id_equipa AND id_user = ? AND lider = 1)', id_user,
            function (err, rows, fields) {
                console.log(query.sql);
                if (err) {
                    console.log(err);
                    res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                } else {
                    const secondQuery = connect.con.query('DELETE FROM utilizador WHERE id_user = ?', id_user,
                        function (err, rows, field) {
                            console.log(secondQuery.sql);
                            if (err) {
                                console.log(err);
                                res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                            } else {
                                  req.session.destroy(function (err) {
                                      if (err) {
                                          console.log(err);
                                          res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                                      } else {
                                      res.status(jsonMessages.db.successDelete.status).send(jsonMessages.db.successDelete);
                                      }
                                  });
                            }
                        })
                }
            });
    } else {
        res.status(jsonMessages.db.requiredData.status).send(jsonMessages.db.requiredData);
    }
}

function readUserTeam(req, res) {
    const id_user = req.sanitize('id_user').escape();
    const query = connect.con.query('SELECT E.id_equipa, E.nome_equipa, E.classificacao, E.avatar, UE.lider FROM equipa E, utilizador_por_equipa UE WHERE UE.id_user = ? AND E.id_equipa = UE.id_equipa', id_user,
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

function deleteFUserTeam(req, res) {
    const id_user = req.user.id_user;
    const id_equipa = req.sanitize('id_equipa').escape();
    if (id_user != "NULL" && typeof (id_user) != 'undefined' && id_equipa != "NULL" && typeof (id_equipa) != 'undefined') {

        const query = connect.con.query('SELECT * FROM utilizador_por_equipa WHERE id_equipa = ?', id_equipa,
            function (err, rows, fields) {
                console.log(query.sql);
                if (err) {
                    console.log(err);
                    res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                } else {
                    if (rows.length == 1) {
                        const secondQuery = connect.con.query('DELETE FROM equipa WHERE id_equipa = ?', id_equipa,
                            function (err, rows, fields) {
                                console.log(secondQuery.sql);
                                if (!err) {
                                    res.status(jsonMessages.db.successDelete.status).send(jsonMessages.db.successDelete);
                                } else {
                                    res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                                }
                            });
                    } else {
                        const deleteF = [id_user, id_equipa];
                        const thirdQuery = connect.con.query('DELETE FROM utilizador_por_equipa WHERE id_user = ? AND id_equipa = ?', deleteF,
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
    } else {
        res.status(jsonMessages.db.requiredData.status).send(jsonMessages.db.requiredData);
    }
};

function readUserFeedback(req, res) {
    const id_user = req.sanitize('id_user').escape();
    const query = connect.con.query('SELECT * FROM feedback_utilizador where id_user = ?', id_user,
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

function readUserFavorites(req, res) {
    const id_user = req.sanitize('id_user').escape();
    const query = connect.con.query('SELECT E.* FROM espaco_favorito EF, Espaco E WHERE EF.id_user = ? AND EF.idEspaco = E.idEspaco', id_user,
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

function saveUserFavorites(req, res) {
    const id_user = req.user.id_user;
    const id_espaco = req.sanitize('id_espaco').escape();
    if (id_user != "NULL" && typeof (id_user) != 'undefined' && id_espaco != "NULL" && typeof (id_espaco) != 'undefined') {
        const save = [id_user, id_espaco];
        const query = connect.con.query('INSERT INTO espaco_favorito SET id_user = ?, idEspaco = ?', save,
            function (err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    res.status(jsonMessages.db.successInsert.status).location(rows.insertId).send(jsonMessages.db.successInsert);
                } else {
                    res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                }
            });

    } else {
        res.status(jsonMessages.db.requiredData.status).send(jsonMessages.db.requiredData);
    }
}

function deleteFUserFavorites(req, res) {
    const id_user = req.user.id_user;
    const id_espaco = req.sanitize('id_espaco').escape();
    if (id_user != "NULL" && typeof (id_user) != 'undefined' && id_espaco != "NULL" && typeof (id_espaco) != 'undefined') {
        const deleteF = [id_user, id_espaco];
        const query = connect.con.query('DELETE FROM espaco_favorito WHERE id_user = ? && idEspaco = ?', deleteF,
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

function readUserNotifications(req, res) {
    const id_user = req.user.id_user;
    const query = connect.con.query('SELECT * FROM notificacao where id_user = ? ORDER BY data DESC', id_user,
        function (err, rows, fields) {
            console.log(query.sql);
            if (err) {
                console.log(err);
                res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
            } else {
                if (rows.length == 0) {
                    //const msg = { "msg": jsonMessages.db.noRecords, "id_user": id_user }
                    res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
                } else {
                    //res.send(rows);
                    //const msg = { "msg": rows, "id_user": id_user }
                    res.send(rows);
                }
            }
        });
};

/*
function saveUserNotifications(req, res) {
    const id_user = req.sanitize('id_user').escape();
    const descricao = req.sanitize('descricao').escape();
    if (id_user != "NULL" && typeof (id_user) != 'undefined' && descricao != "NULL" && typeof (descricao) != 'undefined') {
        const save = [id_user, descricao];
        const query = connect.con.query('INSERT INTO notificacao SET id_user = ?, descricao = ?', save,
            function (err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    res.status(jsonMessages.db.successInsert.status).location(rows.insertId).send(jsonMessages.db.successInsert);
                } else {
                    res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                }
            });

    } else {
        res.status(jsonMessages.db.requiredData.status).send(jsonMessages.db.requiredData);
    }
};
*/

function deleteFUserNotifications(req, res) {
    const id_notificacao = req.sanitize('id_notificacao').escape();
    const id_user = req.user.id_user;
    if (id_notificacao != "NULL" && typeof (id_notificacao) != 'undefined' && id_user != "NULL" && typeof (id_user) != 'undefined') {
        const deleteF = [id_notificacao, id_user];
        const query = connect.con.query('DELETE FROM notificacao WHERE id_notificacao = ? and id_user = ?', deleteF,
            function (err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    console.log(rows.affectedRows)
                    if (rows.affectedRows == 0) {
                        res.status(jsonMessagesUser.user.notOwnerNotificationInvalidDelete.status).send(jsonMessagesUser.user.notOwnerNotificationInvalidDelete);
                    } else
                        res.status(jsonMessages.db.successDelete.status).send(jsonMessages.db.successDelete);
                } else {
                    res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                }
            });
    } else {
        res.status(jsonMessages.db.requiredData.status).send(jsonMessages.db.requiredData);
    }
};

function deleteFAllUserNotifications(req, res) {
    const id_user = req.user.id_user;
    if (id_user != "NULL" && typeof (id_user) != 'undefined') {
        const query = connect.con.query('DELETE FROM notificacao WHERE id_user = ?', id_user,
            function (err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    console.log(rows.affectedRows)
                    if (rows.affectedRows == 0) {
                        res.status(jsonMessagesUser.user.notOwnerNotificationInvalidDelete.status).send(jsonMessagesUser.user.notOwnerNotificationInvalidDelete);
                    } else
                        res.status(jsonMessages.db.successDelete.status).send(jsonMessages.db.successDelete);
                } else {
                    res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                }
            });
    } else {
        res.status(jsonMessages.db.requiredData.status).send(jsonMessages.db.requiredData);
    }
};

function saveUserReport(req, res) {
    const id_reportado = req.sanitize('id_reportado').escape();
    const descricao = req.sanitize('descricao').escape();
    const id_user_enviou = req.user.id_user;
    const estado_report = 0;
    if (id_reportado != "NULL" && typeof (id_reportado) != 'undefined' && descricao != "NULL" && typeof (descricao) != 'undefined') {
        if (id_reportado == id_user_enviou) {
            return res.status(jsonMessagesUser.user.autoReportError.status).send(jsonMessagesUser.user.autoReportError);
        }
        const read = [id_reportado, id_user_enviou, estado_report];
        const query = connect.con.query('SELECT id_report FROM utilizador_report WHERE id_reportado = ? AND id_user_enviou = ? AND estado_report = ?', read,
            function (err, rows, fields) {
                console.log(query.sql);
                if (err) {
                    console.log(err);
                    res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                } else {
                    if (rows.length == 0) {
                        const save = [id_reportado, descricao, id_user_enviou, estado_report];
                        const secondQuery = connect.con.query('INSERT INTO utilizador_report SET id_reportado = ?, descricao = ?, id_user_enviou = ?, estado_report = ?', save,
                            function (err, rows, fields) {
                                console.log(secondQuery.sql);
                                if (!err) {
                                    res.status(jsonMessages.db.successInsert.status).send(jsonMessages.db.successInsert);
                                } else {
                                    res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                                }
                            });
                    } else {
                        res.status(jsonMessagesUser.user.reportError.status).send(jsonMessagesUser.user.reportError);
                    }
                }
            });
    } else {
        res.status(jsonMessages.db.requiredData.status).send(jsonMessages.db.requiredData);
    }
};

function updateConfirmAccount(req, res) {
    console.log(req.params.token);
    const token = req.sanitize('token').escape();
    console.log(token);
    let frase = token;
    let reg = /\d+/g;
    let resultado = frase.match(reg);
    console.log(resultado);
    let id = parseInt(resultado[0]);
    console.log(id);
    db.User.findOne({
        where: {
            token: token,
            id_user: id
        }
    }).then(function (dbUser) {
        if (dbUser) {
            db.User.update({ confirmar_email: 1 }, { where: { id_user: id, token: token } });
            return res.sendFile(path.join(__dirname + '/../views/html/confirmacaoEmail.html'));
        } else {
            return res.sendFile(path.join(__dirname + '/../views/html/confirmacaoEmailErro.html'));
        }
    });
}

module.exports = {
    updateConfirmAccount: updateConfirmAccount,
    read: read,
    readID: readID,
    readNifID: readNifID,
    update: update,
    updatePassword: updatePassword,
    updateForgottenPassword: updateForgottenPassword,
    updateAvatar: updateAvatar,
    deleteF: deleteF,
    readUserTeam: readUserTeam,
    deleteFUserTeam: deleteFUserTeam,
    readUserFavorites: readUserFavorites,
    saveUserFavorites: saveUserFavorites,
    deleteFUserFavorites: deleteFUserFavorites,

    readUserFeedback: readUserFeedback,
    readUserNotifications: readUserNotifications,
    //saveUserNotifications: saveUserNotifications,
    deleteFUserNotifications: deleteFUserNotifications,
    deleteFAllUserNotifications: deleteFAllUserNotifications,
    saveUserReport: saveUserReport
};