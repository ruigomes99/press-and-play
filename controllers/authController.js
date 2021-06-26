const db = require("../models");
const crypto = require('crypto');
const jsonMessages = require("../assets/jsonMessages/login.js")

function signinFailure(req, res) {
  res.status(jsonMessages.user.invalid.status).send(jsonMessages.user.invalid);
};

function signinSuccess(req, res) {
  const id_user = { "msg": jsonMessages.user.signinSuccess, "id_user": req.user.id_user }
  res.status(jsonMessages.user.signinSuccess.status).send(id_user);
};

function signup(req, res, next) {
  const email = req.sanitize('email').escape();
  const password = req.sanitize('password').escape();
  const primeiro_nome = req.sanitize('primeiro_nome').escape().trim().replace(/\s/g,'');
  const ultimo_nome = req.sanitize('ultimo_nome').escape().trim().replace(/\s/g,'');
  const data_nascimento = req.sanitize('data_nascimento').escape();

  let avatar;
  let id_google;
  let confirmar_email;
  if (req.user){
    id_google = req.user.profile.id;
    avatar = req.user.profile._json.picture;
    confirmar_email = 1;
  } else {
    avatar = process.env.BACK_URL + '/assets/images/logoDefault.png';
    confirmar_email = 0;
  }

  if (data_nascimento != "NULL" && typeof (data_nascimento) != 'undefined' && email != "NULL" && typeof (email) != 'undefined' && password != "NULL" && typeof (password) != 'undefined' && primeiro_nome != "NULL" && typeof (primeiro_nome) != 'undefined' && ultimo_nome != "NULL" && typeof (ultimo_nome) != 'undefined'){

  } else {
    console.log('aqui?')
    res.status(jsonMessages.user.invalid.status).send(jsonMessages.user.invalid);
    return;
  }

  // AAAA - MM - DD
  const data_inserida = new Date(data_nascimento);
  let data_modelo = new Date();
  data_modelo.setFullYear(data_modelo.getFullYear() - 18);
  if (data_inserida > data_modelo) {
    res.status(jsonMessages.user.age.status).send(jsonMessages.user.age);
    return;
  };
  
  if (!primeiro_nome.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/) || !ultimo_nome.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/)) {
      return res.status(jsonMessages.user.dataInvalid.status).send(jsonMessages.user.dataInvalid);
  }

  let nif = '999999999';
  const mykey = crypto.createCipher('aes-128-cbc', '123');
  nif = mykey.update(nif, 'utf8', 'hex')
  nif += mykey.final('hex');

  req.checkBody('email', "Insira um email válido!").isEmail();
  req.checkBody('password', "A palavra-passe tem de conter no mínimo um número e uma letra!").isAlphanumeric();
  req.checkBody('password', "A palavra-passe tem de conter entre 6 a 24 caracteres!")
    .isLength({ min: 6, max: 24 })
    .matches(/[a-z]/g).withMessage('A palavra-passe tem de conter no mínimo uma letra minúscula!')
    .matches(/[A-Z]/g).withMessage('A palavra-passe tem de conter no mínimo uma letra maiúscula!')
    .matches(/[0-9]/g).withMessage('A palavra-passe tem de conter no mínimo um número!');
  req.checkBody('primeiro_nome', "O primeiro nome tem de conter no mínimo 2 letras!").isLength({ min: 2 });

  const errors = req.validationErrors();
  if (errors) {
    res.send(errors);
    return;
  }

  db.User.create({
    email: email,
    password: password,
    primeiro_nome: primeiro_nome,
    ultimo_nome: ultimo_nome,
    nif: nif,
    data_nascimento: data_nascimento,
    pais: 'Não definido',
    localidade: 'Não definido',
    avatar: avatar,
    pontos: 0,
    confirmar_email: confirmar_email,
    banido: 0,
    id_google: id_google,
    descontos: 0,
    descontos_usados: 0
  }).then(function () {
    res.status(jsonMessages.user.signupSuccess.status).send(jsonMessages.user.signupSuccess);
  }).catch(function (err) {
    console.log(err);
    res.json(err);
  });
};

function logout(req, res, next) {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
      res.status(jsonMessages.user.logoutError.status).send(jsonMessages.user.logoutError);
    }
    res.status(jsonMessages.user.logoutSuccess.status).send(jsonMessages.user.logoutSuccess);
  });
};

function googleCallback(req, res, next) {
  req.session.token = req.user.token;
  console.log(req.user);
  console.log('--------------------')
  console.log(req.session);
  if (req.user.id_google) {
    res.redirect(process.env.BACK_URL + '/pagina-inicial.html');
  } else {
    res.redirect(process.env.BACK_URL + '/register.html');
  }
};

module.exports = {
  signinFailure: signinFailure,
  signup: signup,
  logout: logout,
  googleCallback: googleCallback,
  signinSuccess: signinSuccess
};