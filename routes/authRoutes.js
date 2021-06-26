const passport = require("../config/passport");
const emailExists = require("../config/middleware/emailExists.js");
const isBanned = require("../config/middleware/isBanned.js");
const isEmailConfirmed = require("../config/middleware/isEmailConfirmed.js");
const authController = require('../controllers/authController.js');

module.exports = function (app) {
  //PT: Usa a middleware passport.authenticate com o "Local Strategy"
  //ENG: Uses the middleware passport.authenticate from "Local Strategy"
  app.post("/signin", isEmailConfirmed, isBanned, passport.authenticate("local", {
    successRedirect: '/signinSuccess',
    failureRedirect: '/signinFailure'
}));

app.get('/signinSuccess', authController.signinSuccess);
app.get('/signinFailure', authController.signinFailure);
  //PT: Cria um utilizador sem iniciar a sessão
  //ENG: Creates an user without doing loggin
  app.post("/signup", emailExists, authController.signup);
  //PT: Rota para o logout
  //ENG: Route for the logout
  app.get("/logout", authController.logout);

  //PT: autenticação pelo google
  //ENG: google's authentication
  app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.profile'] }));
  app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/index-google' }), authController.googleCallback);

};