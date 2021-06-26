//Load environment variables
//Remove from comments if you are running on localhost, then add a ".env" file
/*
const dotenv = require('dotenv');
const result = dotenv.config()
if (result.error) {
    return console.log(result.error);
}
*/

//PT: Configurar o Host e a Port
//ENG: Config the Host and the Port
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 8080;

//PT: Importar o package express
//ENG: Import the express package
const express = require('express');
//PT: Cria uma app express
//ENG: Creates an express app
const app = express();

// cors
/*
const cors = require("cors");
app.use(cors({
  //exposedHeaders: ['Location']
  origin: 'http://127.0.0.1:5500/',
  credentials: true
}));
*/
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Headers", "append,delete,entries,foreach,get,has,keys,set,values,Authorization, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

// creates static routes
const path = require('path');
app.use('/assets', express.static('assets'));
app.use('/views', express.static('views'));
app.use(express.static(path.join(__dirname, "/public"), {
    index: false
}));

//PT: Iniciar o server
//ENG: Start the server
app.listen(port, function (err) {
    if (!err) {
        console.log('Servidor no Host ' + host + ' e PORT ' + port);
    }
    else {
        console.log(err);
    }
})

//PT: Exportar a app
//ENG: Export the app
module.exports = app;
require('./loader.js');