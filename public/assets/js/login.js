window.onload = async function () {
  const botaoLogin = document.getElementById("botaoLogin");


  botaoLogin.addEventListener("click", entrar);
  





  async function entrar() {
    event.preventDefault();
    var data = {};
    data.email = document.getElementById("InputEmail").value;
    fetch(url + '/check-users', {
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'include'
    })
      .then(function (response) {
        //console.log(response.headers.get('Set-Cookie'));
        console.log(response);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (err) {
        console.log(err); 
      })
      .then(async function (result) {
        if (result) {
    var data1 = {};
    data1.email = document.getElementById("InputEmail").value;
    data1.password = document.getElementById("InputPassword").value;
    fetch(url + '/signin', {
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(data1),
      credentials: 'include'
    })
      .then(function (response) {
        //console.log(response.headers.get('Set-Cookie'));
        console.log(response);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (err) {
        //swal.showValidationError('Pedido falhado: ' + err);
        console.log(err); // estava alert(err); coloquei console log para não estar sempre a aparecer pop-up ao utilizador
      })
      .then(async function (result) {
        if (result) {
          localStorage.setItem("id_user", result.id_user);
          //swal({ title: "Autenticação feita com sucesso!" });
          //+ result.value.message.success);S
          Swal.fire(
            'Autentificação feita com sucesso!',
            '',
            'success'
          ).then( () => {
            window.location.replace("./pagina-inicial.html");     
          })

        }
        //else {
       /*   if(result.confirmEmail.message.pt == "Verifica o teu email, necessitas de confirmar o teu email!"){

            event.preventDefault();
            var data = {};
            data.email = document.getElementById("InputEmail").value;
        
                fetch(url + '/site-contacts/confirmation-emails', {
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  mode: 'cors',
                  method: 'POST',
                  body: JSON.stringify(data)
                })
                  .then(function (response) {
                    //console.log(response.headers.get('Set-Cookie'));
                    console.log(response);
                    if (!response.ok) {
                      throw new Error(response.statusText);
                    }
                    return response.json();
                  })
                  .catch(function (err) {
                    //swal.showValidationError('Pedido falhado: ' + err);
                    console.log(err); // estava alert(err); coloquei console log para não estar sempre a aparecer pop-up ao utilizador
                  })
                  .then(async function (result) {
                    console.log(result);
                    if (result) {
                      //swal({ title: "Autenticação feita com sucesso!" });
                      //+ result.value.message.success);S
                      Swal.fire(
                        'Verifica o teu email, necessitas de confirmar o teu email!!',
                        '',
                        'warning'
                      ).then( () => {
                        window.location.replace("./login.html");
                    })
                     // dados_perfil();
                     // location.reload();
                    }
                    else {
                        Swal.fire(
                            'Ocorreu um erro!',
                            '',
                            'error'
                          )
                      console.log(result);
                      //swal({ title: `${result.value.userMessage.message.pt}` });
                    }
                  });
        

          }*/
        //  else{
         /*   if(result.banned.message.pt == "Foste banido da nossa aplicação por falta de desportivismo!"){

              Swal.fire(
                'Foste banido da nossa aplicação por falta de desportivismo!',
                '',
                'warning'
              )
            }*/
            else{
          Swal.fire(
            'Os dados que inseriu não estão corretos!',
            '',
            'warning'
          )
          console.log(result);
          //swal({ title: `${result.value.userMessage.message.pt}` });
          }
       // }
        //}
      });


        }
            else{
          Swal.fire(
            'Confirme a conta ou verifique se foi banido!',
            '',
            'warning'
          )
          console.log(result);
          }
      });

  };



/*
  async function entrar() {
    event.preventDefault();
    var data = {};
    data.email = document.getElementById("InputEmail").value;
    data.password = document.getElementById("InputPassword").value;
    fetch(url + '/signin', {
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'include'
    })
      .then(function (response) {
        //console.log(response.headers.get('Set-Cookie'));
        console.log(response);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (err) {
        //swal.showValidationError('Pedido falhado: ' + err);
        console.log(err); // estava alert(err); coloquei console log para não estar sempre a aparecer pop-up ao utilizador
      })
      .then(async function (result) {
        if (result) {
          localStorage.setItem("id_user", result.id_user);
          //swal({ title: "Autenticação feita com sucesso!" });
          //+ result.value.message.success);S
          Swal.fire(
            'Autentificação feita com sucesso!',
            '',
            'success'
          ).then( () => {
            window.location.replace("./pagina-inicial.html");     
          })

        }
        //else {
       /*   if(result.confirmEmail.message.pt == "Verifica o teu email, necessitas de confirmar o teu email!"){

            event.preventDefault();
            var data = {};
            data.email = document.getElementById("InputEmail").value;
        
                fetch(url + '/site-contacts/confirmation-emails', {
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  mode: 'cors',
                  method: 'POST',
                  body: JSON.stringify(data)
                })
                  .then(function (response) {
                    //console.log(response.headers.get('Set-Cookie'));
                    console.log(response);
                    if (!response.ok) {
                      throw new Error(response.statusText);
                    }
                    return response.json();
                  })
                  .catch(function (err) {
                    //swal.showValidationError('Pedido falhado: ' + err);
                    console.log(err); // estava alert(err); coloquei console log para não estar sempre a aparecer pop-up ao utilizador
                  })
                  .then(async function (result) {
                    console.log(result);
                    if (result) {
                      //swal({ title: "Autenticação feita com sucesso!" });
                      //+ result.value.message.success);S
                      Swal.fire(
                        'Verifica o teu email, necessitas de confirmar o teu email!!',
                        '',
                        'warning'
                      ).then( () => {
                        window.location.replace("./login.html");
                    })
                     // dados_perfil();
                     // location.reload();
                    }
                    else {
                        Swal.fire(
                            'Ocorreu um erro!',
                            '',
                            'error'
                          )
                      console.log(result);
                      //swal({ title: `${result.value.userMessage.message.pt}` });
                    }
                  });
        

          }*/
        //  else{
         /*   if(result.banned.message.pt == "Foste banido da nossa aplicação por falta de desportivismo!"){

              Swal.fire(
                'Foste banido da nossa aplicação por falta de desportivismo!',
                '',
                'warning'
              )
            }*/ /*
            else{
          Swal.fire(
            'Os dados que inseriu não estão corretos! Tenha a certeza que tem o seu email confirmado! Verifique que não foi banido!',
            '',
            'warning'
          )
          console.log(result);
          //swal({ title: `${result.value.userMessage.message.pt}` });
          }
       // }
        //}
      });

  }; */


  //LOGIN COM O GOOGLE. AINDA NAO SEI COMO PEGAR NESTE SINCERAMENTE, MAS ACHO QUE DA ASSIM

 /* botaoLoginGoogle.addEventListener("click", entrarGoogle);

  async function entrarGoogle() {
    fetch(url + '/auth/google', {
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      method: 'GET'
    })
      .then(function (response) {
        console.log(response);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (err) {
        swal.showValidationError('Pedido falhado: ' + err);
      })
      .then(async function (result) {
        if (result) {
          localStorage.setItem("id_user", result.value.id_user);
          Swal.fire(
            'Autentificação feita com sucesso!',
            '',
            'success'
          )
          //swal({ title: "Autenticação feita com sucesso!"});
          window.location.replace("./../../pagina-inicial.html");
        }
        else {
          alert(result);
          //swal({ title: `${result.value.userMessage.message.pt}` });
        }
      })
  };
*/

};
