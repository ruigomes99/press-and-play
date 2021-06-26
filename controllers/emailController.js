const jsonMessages = require("../assets/jsonMessages/mail.js")

const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const db = require("../models");
const randomstring = require('randomstring');

function sendConfirmationEmail(req, res) {
  const email = req.sanitize('email').escape();
  req.checkBody("email", "Insira um email válido.").isEmail();

  const errors = req.validationErrors();
  if (errors) {
    res.send(errors);
    return;
  }
  else {
    if (typeof (email) != "undefined") {
      db.User.findOne({
        where: {
          email: email
        }
      }).then(function (dbUser) {
        if (dbUser) {
          const token = dbUser.id_user + '$' + randomstring.generate({
            length: 25,
            charset: 'alphanumeric'
          });
          db.User.update({ token: token }, { where: { email: email } });

          const transporter = nodemailer.createTransport(smtpTransport({
            service: 'Gmail',
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS
            }
          }));
          transporter.verify(function (error, success) {
            if (error) {
              console.log(error);
              res.status(jsonMessages.mail.serverError.status).send(jsonMessages.mail.serverError);
            }
            else {
              console.log('Server is ready to take our messages');
            }
          });
          const mailOptions = {
            from: email,
            to: 'pressplay1920@gmail.com',
            cc: email,
            subject: 'Press&Play: Por favor confirme a sua conta',
            html: `
            <!DOCTYPE html>
            <html lang="pt">
            
            <head>
             
              <meta charset="utf-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
              <meta name="description" content="">
              <meta name="author" content="">
              <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
            
              <title>Press&Play - Confirmação de email</title>
            
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
            
            </head>
            
            <body id="page-top">
                <!-- Begin Page Content -->
              <div>
            
                <!-- Content Row -->
                <div>
                  <img style="height: 80px;width: 150px;margin-top: 15px;margin-left: 15px;" src="https://i.imgur.com/a8NPOr0.png">
                    <div style="max-height: 220px;height: 220px;width: 330px;overflow-x: hidden;margin-top: 3vh;background-color: lightgray;margin-left: 14px;border-radius: 0.2rem;"> 
                      <h4 style="color:black;margin-top: 30px;margin-left: 15px;font-weight: 700;"> Por favor confime a subscrição </h4>
                      <div style="height: 50px;margin-top: 30px;">
                        <a  href="` + process.env.BACK_URL + `/users/confirm-accounts/` + token + `">
                        <button style="width: 274px;height: 50px;color: white;font-weight: 500;margin-left: 26px;border-radius: 0.5rem;background-color: #1a9b52;font-size: unset;border-color: #1a9b52; font-size: 11px; margin-top:-5px;"> Clique aqui para confirmar a sua conta! </button></a>
                      </div>
                      <h6 style="color:black;font-weight: 600;margin-left: inherit;font-size: smaller;margin-top: 10px;font-style: italic;margin-left: 15px;"> Se recebeu este email por engano, apague-o. <br> Só confirmará a sua conta se clicar no botão de <br> confirmação acima.
                    </div>
              </div>
            
            </body>
            
            
            </html>`
          };
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
              res.status(jsonMessages.mail.mailError.status).send(jsonMessages.mail.mailError);
            }
            else {
              console.log('Email sent: ' + info.response);
              res.status(jsonMessages.mail.mailSent.status).send(jsonMessages.mail.mailSent);
            }
          });

          //findOne else
          return;
        } else {
          return res.status(jsonMessages.mail.emailNotFound.status).send(jsonMessages.mail.emailNotFound);
        }
      });
    }
    else
      res.status(jsonMessages.mail.requiredData.status).send(jsonMessages.mail.requiredData);
  }

}

function sendForgottenPasswordEmail(req, res) {
  const email = req.sanitize('email').escape();
  req.checkBody("email", "Insira um email válido.").isEmail();

  const errors = req.validationErrors();
  if (errors) {
    res.send(errors);
    return;
  }
  else {
    if (typeof (email) != "undefined") {
      db.User.findOne({
        where: {
          email: email
        }
      }).then(function (dbUser) {
        if (dbUser) {
          const token = dbUser.id_user + '$' + randomstring.generate({
            length: 25,
            charset: 'alphanumeric'
          });
          db.User.update({ token: token }, { where: { email: email } });

          const transporter = nodemailer.createTransport(smtpTransport({
            service: 'Gmail',
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS
            }
          }));
          transporter.verify(function (error, success) {
            if (error) {
              console.log(error);
              res.status(jsonMessages.mail.serverError.status).send(jsonMessages.mail.serverError);
            }
            else {
              console.log('Server is ready to take our messages');
            }
          });
          const mailOptions = {
            from: email,
            to: 'pressplay1920@gmail.com',
            cc: email,
            subject: 'Press&Play: Alterar palavra-passe esquecida',
            html: `
            <!DOCTYPE html>
            <html lang="pt">
            
            <head>
             
              <meta charset="utf-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
              <meta name="description" content="">
              <meta name="author" content="">
              <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
            
              <title>Press&Play - Nova Password Token</title>
            
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
            
            </head>
            
            <body id="page-top">
                <!-- Begin Page Content -->
              <div>
            
                <!-- Content Row -->
                <div>
                  <img style="height: 80px;width: 150px;margin-top: 15px;margin-left: 15px;" src="https://i.imgur.com/a8NPOr0.png">
                    <div style="max-height: 260px;height: 260px;width: 360px;overflow-x: hidden;margin-top: 3vh;background-color: lightgray;margin-left: 14px;border-radius: 0.2rem;"> 
                      <h4 style="color:black;margin-top: 30px;margin-left: 15px;font-weight: 700;"> Esta é a sua token: <br>` + token + `</h4>
                      <div style="height: 50px;margin-top: 30px;">
                        <a  href="` + process.env.BACK_URL + `/Email3.html">
                        <button style="width: 274px;height: 50px;color: white;font-weight: 500;margin-left: 36px;border-radius: 0.5rem;background-color: #1a9b52;font-size: unset;border-color: #1a9b52; font-size: 11px; margin-top:-5px;"> Clique aqui para alterar a password! </button></a>
                      </div>
                      <h6 style="color:black;font-weight: 600;margin-left: inherit;font-size: smaller;margin-top: 10px;font-style: italic;margin-left: 15px;"> Se recebeu este email por engano, apague-o. <br> Só poderá alterar a sua password se clicar no botão de <br> confirmação acima.
                    </div>
              </div>
            
            </body>
            
            
            </html>`
          };
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
              res.status(jsonMessages.mail.mailError.status).send(jsonMessages.mail.mailError);
            }
            else {
              console.log('Email sent: ' + info.response);
              res.status(jsonMessages.mail.mailSent.status).send(jsonMessages.mail.mailSent);
            }
          });

          //findOne else
          return;
        } else {
          return res.status(jsonMessages.mail.emailNotFound.status).send(jsonMessages.mail.emailNotFound);
        }
      });
    }
    else
      res.status(jsonMessages.mail.requiredData.status).send(jsonMessages.mail.requiredData);
  }

}


//exportar as funções
module.exports = {
  sendConfirmationEmail: sendConfirmationEmail,
  sendForgottenPasswordEmail: sendForgottenPasswordEmail
};