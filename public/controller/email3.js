
var myInput420 = document.getElementById("newPassword");
var letter420 = document.getElementById("letter420");
var capital420 = document.getElementById("capital420");
var number420 = document.getElementById("number420");
var length420 = document.getElementById("length420");
var lengt420 = document.getElementById("lengt420");


myInput420.onfocus = function () {
    document.getElementById("message").style.display = "block";
}


myInput420.onblur = function () {
    document.getElementById("message").style.display = "none";
}

myInput420.onkeyup = function () {

    var lowerCaseLetters = /[a-z]/g;
    if (myInput420.value.match(lowerCaseLetters)) {
        letter420.classList.remove("invalid420");
        letter420.classList.add("valid420");
    } else {
        letter420.classList.remove("valid420");
        letter420.classList.add("invalid420");
    }

    var upperCaseLetters = /[A-Z]/g;
    if (myInput420.value.match(upperCaseLetters)) {
        capital420.classList.remove("invalid420");
        capital420.classList.add("valid420");
    } else {
        capital420.classList.remove("valid420");
        capital420.classList.add("invalid420");
    }

    var numbers = /[0-9]/g;
    if (myInput420.value.match(numbers)) {
        number420.classList.remove("invalid420");
        number420.classList.add("valid420");
    } else {
        number420.classList.remove("valid420");
        number420.classList.add("invalid420");
    }

    if (myInput420.value.length >= 6) {
        length420.classList.remove("invalid420");
        length420.classList.add("valid420");
        lengt420.classList.remove("invalid420");
        lengt420.classList.add("valid420");
    } else {
        length420.classList.remove("valid420");
        length420.classList.add("invalid420");
        lengt420.classList.remove("valid420");
        lengt420.classList.add("invalid420");
    }

    if (myInput420.value.length <= 24 && myInput420.value.length >= 6) {
        lengt420.classList.remove("invalid420");
        lengt420.classList.add("valid420");
    } else {
        lengt420.classList.remove("valid420");
        lengt420.classList.add("invalid420");
    }
}


//----------------------------------------------------------------------------------------
function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {

        return true;
    }
    else {

        return false;
    }
}

const botaoMudarPass = document.getElementById("botaoMudarPassword");
botaoMudarPass.addEventListener("click", mudarPass);

async function mudarPass() {
    event.preventDefault();
    var data = {};
    data.email = document.getElementById("myEmail").value;
    if(document.getElementById("newPassword").value === document.getElementById("repPassword").value){
        data.newPassword = document.getElementById("newPassword").value;
    }
    data.token = document.getElementById("token").value;

        fetch(url + '/users/update-forgotten-passwords', {
          headers: {
            'Content-Type': 'application/json'
          },
          mode: 'cors',
          method: 'PUT',
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
              alert("Alterada com sucesso!");
             // dados_perfil();
             // location.reload();
            }
            else {
              alert("Ocorreu um erro!");
              console.log(result);
              //swal({ title: `${result.value.userMessage.message.pt}` });
            }
          });

  };