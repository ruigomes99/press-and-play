const router = require('express').Router();
const path = require('path');
const isAuthenticated = require("../config/middleware/isAuthenticated.js");
const isTeamOwner = require("../config/middleware/isTeamOwner.js");
const isRegistrationOwner = require("../config/middleware/isRegistrationOwner.js");
const isFriend = require("../config/middleware/isFriend.js");
const isEvent = require("../config/middleware/isEvent.js");
const isEmailConfirmed = require("../config/middleware/isEmailConfirmed.js");
const isBanned = require("../config/middleware/isBanned.js");
const isOwnerLeaving = require("../config/middleware/isOwnerLeaving.js");
const isAvailable = require("../config/middleware/isAvailable.js");
const maxParticipants = require("../config/middleware/maxParticipants.js");
const updateTeamPoints = require("../config/middleware/updateTeamPoints.js");
const updateUserPoints = require("../config/middleware/updateUserPoints.js");
const updateSpacePoints = require("../config/middleware/updateSpacePoints.js");
const userController = require('../controllers/userController.js');
const friendsListController = require('../controllers/friendsListController.js');
const teamController = require('../controllers/teamController.js');
const playSpacesController = require('../controllers/playSpacesController.js')
const registrationController = require('../controllers/registrationController.js');
const emailController = require('../controllers/emailController.js');
const jsonMessages = require('../assets/jsonMessages/login.js')

// Renderizar o frontend
router.get("/", function (req, res) {
    if (req.user) {
        return res.sendFile(path.join(__dirname, "/../public/", "pagina-inicial.html"));
    } else {
        return res.sendFile(path.join(__dirname, "/../public/", "login.html"));
    };
});

// Check utilizadores
router.post("/check-users", isEmailConfirmed, isBanned, function (req, res) {
    res.status(jsonMessages.user.checkUserSuccess.status).send(jsonMessages.user.checkUserSuccess);
});
router.get("/index-users", isAuthenticated, function (req, res) {
    res.send({ id_user: req.user.id_user });
});

// Emails
router.post('/site-contacts/confirmation-emails', emailController.sendConfirmationEmail);
router.post('/site-contacts/forgotten-passwords', emailController.sendForgottenPasswordEmail);
router.get('/users/confirm-accounts/:token', userController.updateConfirmAccount);

// Rotas utilizadores
//
// Lista todos os utilizadores
router.get('/users', userController.read);
// Lista um utilizador especifico
router.get('/users/:id_user', updateUserPoints, userController.readID);
// Lista o nif desencriptado do utilizador com sess??o iniciada
router.get('/users/secrets/nifs', isAuthenticated, userController.readNifID);
// Atuliza o utilizador com sess??o iniciada
router.put('/users', isAuthenticated, userController.update);
// Atualiza a password do utilizador com sess??o iniciada, depois de executada a rota o Front-end reencaminha o utilizador para a rota logout de modo a dar reset ?? cookie
router.put('/users/update-passwords', isAuthenticated, userController.updatePassword);
// Atualiza a password do utilizador esqueceu
router.put('/users/update-forgotten-passwords', userController.updateForgottenPassword);
// Upload e atualiza????o da imagem de perfil do utilizador com sess??o iniciada
router.put('/users/upload-avatars', isAuthenticated, userController.updateAvatar);
// Elimina o utilizador com sess??o iniciada da app, depois de executada a rota o Front-end reencaminha o utilizador para a rota logout de modo a dar reset ?? cookie
//router.delete('/users', isAuthenticated, userController.deleteF);

// O utilizador com sess??o iniciada report um outro utilizador
router.post('/users/report-users/:id_reportado', isAuthenticated, userController.saveUserReport)

// Rotas lista de amigos dos utilizadores
//
// Lista a lista de amigos de um utilizador especifico
router.get('/users/:id_user/friends-list', friendsListController.read);
// Lista os pedidos de amizade de um utilizador especifico
router.get('/users/:id_user/friends-list/requests', friendsListController.readRecievedRequests);
// Lista os pedidos de amizade pendentes que um utilizador especifico enviou
router.get('/users/:id_user/friends-list/pending', friendsListController.readPendingRequests);
// O utilizador com sess??o iniciada envia um pedido de amizade a um outro utilizador
router.post('/users/friends-list/:id_amigo', isAuthenticated, friendsListController.save);
// Caso o utilizador com sess??o iniciada tenha recebido um pedido de amizade, ao executar esta rota ?? aceite esse mesmo pedido
// Esta rota ?? autom??tica e s?? atualiza um atributo: s?? queremos atualizar um atributo e queremos ser n??s (backend) a manipul?? lo
router.put('/users/friends-list/accept-requests/:id_amigo', isAuthenticated, friendsListController.updateRequest);
// O utilizador com sess??o iniciado elimina um amigo ou um pedido de amizade pendente
router.delete('/users/friends-list/:id_amigo', isAuthenticated, friendsListController.deleteF);

// Rotas equipas do utilizador
//
// Lista as equipas de um utilizador especifico
router.get('/users/:id_user/user-teams', userController.readUserTeam);
// O utilizador com sess??o iniciada sai da equipa, caso seja o lider da equipa ?? pedido para transferir a lideran??a para outro membro, caso seja o ??nico membro elimina a equipa
router.delete('/users/user-teams/:id_equipa', isAuthenticated, isOwnerLeaving, userController.deleteFUserTeam);

// Rotas favoritos do utilizador
//
// Lista os favoritos de um utilizador especifico
router.get('/users/:id_user/favorites', userController.readUserFavorites);
// Guarda um espa??o como favorito do utilizador com sess??o iniciada
router.post('/users/favorites/:id_espaco', userController.saveUserFavorites);
// Apagar um espaco favorito do utilizador com sess??o iniciada
router.delete('/users/favorites/:id_espaco', userController.deleteFUserFavorites);



// Lista as notifica????es de um utilizador especifico
router.get('/users/secrets/notifications', isAuthenticated, userController.readUserNotifications);
//Criar uma notifica????o para o user_id
//router.post('/users/:id_user/notifications', userController.saveUserNotifications);
//Apagar uma notifica????o do USER LOGADO
router.delete('/users/secrets/notifications/:id_notificacao', isAuthenticated, userController.deleteFUserNotifications);
//Apagar uma notifica????o do USER LOGADO
router.delete('/users/secrets/all-notifications', isAuthenticated, userController.deleteFAllUserNotifications);


// Rotas equipas
// Lista todas as equipas
router.get('/teams', teamController.read);
// Lista um equipa especifica
router.get('/teams/:id_equipa', updateTeamPoints, teamController.readID);
// Cria uma equipa, o user logado ?? adicionado como l??der da mesma
router.post('/teams', isAuthenticated, teamController.save);
// Alterar os dados de uma equipa, apenas o owner da equipa os pode alterar
router.put('/teams/:id_equipa', isAuthenticated, isTeamOwner, teamController.update);
// Alterar a imagem de perfil da equipa, apenas o owner da equipa a pode alterar
router.put('/teams/upload-avatars/:id_equipa', isAuthenticated, isTeamOwner, teamController.updateAvatar);
// Eliminar uma equipa, apenas o owner o pode fazer
router.delete('/teams/:id_equipa', isAuthenticated, isTeamOwner, teamController.deleteF);
// Lista os membros da equipa e as suas posi????es ( 1 - lider / 0 - n??o lider )
router.get('/teams/:id_equipa/team-users', teamController.readTeamUser);
// Adicinar apenas amigos ?? equipa, apenas o owner da equipa o pode fazer
router.post('/teams/:id_equipa/team-users/:id_user', isAuthenticated, isTeamOwner, isFriend, teamController.saveTeamUser);
// Transferir a lideran??a do utilizador com sess??o iniciada para um membro da equipa especifico
// Esta rota ?? autom??tica e s?? atualiza um atributo: s?? queremos atualizar um atributo e queremos ser n??s (backend) a manipul?? lo
router.put('/teams/:id_equipa/team-users/:id_user', isAuthenticated, isTeamOwner, teamController.updateTeamUser);
// Eliminar um membro especifico da equipa, apenas o owner o pode fazer e este n??o se pode eliminar a si pr??prio
router.delete('/teams/:id_equipa/team-users/:id_user', isAuthenticated, isTeamOwner, teamController.deleteFTeamUser);



// Rotas inscri????es
// 
// Lista todas as inscri????es (reservas e eventos) de um utilizador em especifico
router.get('/users/:id_user/registrations', registrationController.read); //feito
// Lista o host??rico de todas as inscri????es (reservas e eventos) de um utilizador em especifico
router.get('/users/:id_user/registrations-history', registrationController.readHistory); //feito
// Lista uma inscri????o (reserva ou evento) em especifico de um utilizador em especifico
router.get('/users/:id_user/registrations/:id_inscricao', registrationController.readID);  //feito
// O utilizador com sess??o iniciada faz uma inscri????o
router.post('/users/registrations', isAuthenticated, isAvailable, registrationController.save); //feito
// Lista todos os participantes de uma reserva ou evento
router.get('/users/registrations/:id_inscricao/registrations-users', registrationController.readRegistrationUser) //feito
// O lider da reserva ou evento em especifico pode adicionar um amigo ao mesmo
router.post('/users/registrarions/:id_inscricao/registrations-users/:id_user', isAuthenticated, isRegistrationOwner, isFriend, registrationController.saveRegistrationsUser);
// O lider da reserva ou evento em especifico pode eliminar um participante do mesmo
router.delete('/users/registrarions/:id_inscricao/registrarions-users/:id_participante', isAuthenticated, isRegistrationOwner, registrationController.deleteFRegistrarionsUser);
// Lista todos os eventos disponiveis para registo
router.get('/users/registrations/lists/events', registrationController.readEvent); //feito
// O utilizador com sess??o iniciada entra num evento
router.post('/users/registrations/events/:id_inscricao', isAuthenticated, isEvent, maxParticipants, registrationController.saveEventUser); //feito

// Feedback Spaces
router.put('/users/registrarions/:id_inscricao/feedback-spaces', isAuthenticated, registrationController.updateRegistrationsUser);

// Rotas espa??os
//
// Lista todos os espa??os
router.get('/play-spaces', playSpacesController.read);
// Lista um espa??o especifico
router.get('/play-spaces/:idEspaco', updateSpacePoints, playSpacesController.readID);
// Lista as imagens que um espa??o especifico
router.get('/play-spaces/:idEspaco/images', playSpacesController.readImages);
// Lista todos os materiais que um espa??o especifico possui
router.get('/play-spaces/:idEspaco/materials', playSpacesController.readPlaySpaceMaterials);
// Lista todas as comodidades que um espa??o especifico possui
router.get('/play-spaces/:idEspaco/perks', playSpacesController.readPlaySpacePerks);
// Lista a data, hora de abertura e hora de encerramento de um espa??o duran uma semana normal
router.get('/play-spaces/:idEspaco/opening-hours', playSpacesController.readOpeningHours);
// Lista as horas de disponibilidade de um espa??o entre o seu tempo de abertura/encerramento segundo uma determinada data
router.get('/play-spaces/:idEspaco/available-hours/:data', playSpacesController.readAvailableHours);

module.exports = router;