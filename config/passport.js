//PT: Importar os pacotes de passport que são necessários para o processo de autenticação
//ENG: Import passport packages that are required for the authentication process
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

//PT: Confirmar passport outra vez
//ENG: Confirm passport again
const db = require("../models");

//PT: Dizer ao passport que vamos utilizar a "Local Strategy", ou seja fazer o login com o username/email e password
//ENG: Tell the passport we are going to use a "Local Strategy", wich means loggin with username/email and password
passport.use(new LocalStrategy(
  //PT: O utilizador vai fazer o login usando o email em vez do usename
  //ENG: The user is going to do the loggin using the email instead of the username
  {
    usernameField: "email"
  },
  function (email, password, done) {
    //PT: Quando um utilizador tenta fazer o login este código é executado
    //ENG: When an user tries to do the loggin, this code is executed
    db.User.findOne({
      where: {
        email: email
      }
    }).then(function (dbUser) {
      //PT: Se não houver nenhum utilizador na base de dadsos registado com o email introduzido mostra a mensagem email incorreto
      //ENG: If in the data base doesn't exist any user registered with the inserted email, then it shows the message of incorrect email
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      //PT: Se existir algum utilizador na base de dados com o email introduzido mas se a palavra passe não coincidir este código corre
      //ENG: If already exists an user in the data base with the inserted email but it the password doesn't match, then this code is executed
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      //PT: Se nenhuma das ocorrências acima acontecer devolve o utilizador, ou seja, não executa código
      //ENG: If none of the above occurrences happen, then it returns the user
      //console.log(dbUser.get());
      return done(null, dbUser.get());
    });
  }
));

//PT: Passport que usa a estratégia do google
//ENG: Passport that uses the google's strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLEAUTH_ID,
  clientSecret: process.env.GOOGLEAUTH_SECRET,
  callbackURL: process.env.BACK_URL + '/auth/google/callback'
},
  (token, refreshToken, profile, done) => {
    const id_google = profile.id;
    db.User.findOne({
      where: {
        id_google: id_google
      }
    }).then(function (dbUser) {
      if (dbUser) {
        done(null, dbUser);
      } else {
        done(null, {profile:profile, token:token})
      }
    });
  }));

//PT: Para ajudar a manter o estado de autenticação através dos pedidos html, o sequelize precisa de serializar e deserializar o utilizador
//ENG: To help maintain the authentication status through html requests, the sequelize needs to serialize and de-serialize the user
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

module.exports = passport;