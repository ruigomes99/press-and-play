//PT: Middleware para impedir que as rotas sejam utilizadas se um utilizador não estiver coma sessão iniciada
//ENG: Middleware to prevent routes from being used if a user is not logged in
module.exports = function (req, res, next) {
  //PT: Se o utilizador tiver a sessão iniciada, continua com o pedido para a rota
  //ENG: If the user is logged in, continues with the request for the route
  if (req.user) {
    return next();
  }
  //PT: Se o utilizador não tiver a sessão iniciada, é redirecionado para a tela de login
  //ENG: If the user is not logged in, he is redirected to the login screen
  return res.redirect("/");
};