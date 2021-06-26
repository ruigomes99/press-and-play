//PT: Importar as coisas necessárias
//ENG: Import the necessary things
const app = require('./server.js');
const router = require('./routes/mainRoutes.js');
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require('cookie-parser');
const expressSanitizer = require('express-sanitizer');
const validator = require('express-validator');
const passport = require("./config/passport");
const db = require("./models");

//PT: Configurar a middleware
//ENG: COnfig the middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(expressSanitizer());
app.use(validator());

//PT: Cria sessões para acompanhar os status de login dos utilizadores
//ENG: Create sessions to follow the status of the user's loggin
app.use(session({
    secret: "pwalpha",
    rolling: true,
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 365 * 24 * 60 * 60 * 1000,
        name: 'session',
        keys: ['123'],
        httpOnly: true
    }
}));
app.use(function (req, res, next) {
    // check if session exists
    if (global.sessData === undefined) {
        global.sessData = req.session;
        global.sessData.ID = req.sessionID;
    }
    else { // yes, cookie was already present
        console.log('session exists', global.sessData.ID);
    }
    next();
});

app.use(passport.initialize());
app.use(passport.session());

//PT: Importar as rotas
//ENG: Import the routes
require("./routes/authRoutes.js")(app);
app.use('/', router);

/*
//Errors => page not found 404
app.use((req, res, next) =>  {
    var err = new Error('Page not found');
    err.status = 404;
    next(err);
})
//Handling errors (send them to the client)
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message);
});
*/

//PT: Sincronizar a base de dados e registrar uma mensagem no console em caso de sucesso ou erro
//ENG: Syncronize the data base and resgister one message in the console in the case of success or error
db.sequelize.sync().then(function () {
    console.log('Nice! Database looks fine')
}).catch(function (err) {
    console.log(err, "Something went wrong with the Database Update!")
});