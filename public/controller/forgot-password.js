const botaoRecuperarPass = document.getElementById("recuperarPass");
botaoRecuperarPass.addEventListener("click", recPass);

async function recPass() {
    event.preventDefault();
    var data = {};
    data.email = document.getElementById("exampleInputEmail").value;

        fetch(url + '/site-contacts/forgotten-passwords', {
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
                'Email enviado com sucesso!',
                '',
                'success'
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

  };