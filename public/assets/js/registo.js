window.onload = async function () {
    //if(botaoRegistar){
    //Registar
    const botaoRegistar = document.getElementById("botaoRegistar");
    botaoRegistar.addEventListener("click", registar);

    async function registar() {
        event.preventDefault();
        var data = {};
 
        //data.email=document.getElementById("email").value;
        //data.primeiro_nome=document.getElementById("Fname").value;
        //data.ultimo_nome=document.getElementById("Lname").value;
        //data.data_nascimento=document.getElementById("dataNascimento").value;
        //data.password=document.getElementById("password").value;
        //repPassword=document.getElementById("repPassword").value;


        if (email.value == "" || Fname.value == "" || Lname.value == "" ||
            dataNascimento.value == "" || password.value == "" || repPassword.value == "") {
                Swal.fire(
                    'Preencha todos os campos!',
                    '',
                    'warning'
                  )
        } else {
            if (validacaoEmail(document.getElementById("email"))) {
                if(valida_nome(Fname.value) && valida_nome(Lname.value) ){
                    if (valida()) {
                        Swal.fire(
                            'Palavra-passe não cumpre os requisitos!',
                            '',
                            'warning'
                          )
                    } else {
                        if (password.value !== repPassword.value) {
                            Swal.fire(
                                'Palavras-passe diferentes!',
                                '',
                                'warning'
                              )
                            /* swal({
                                text: 'A palavras-passe não correspondem!',
                                timer: 3000
                            }) */
                        }
                        else {
                            
                            data.email = document.getElementById("email").value;
                            data.primeiro_nome = document.getElementById("Fname").value;
                            data.ultimo_nome = document.getElementById("Lname").value;
                            data.data_nascimento = document.getElementById("dataNascimento").value;
                            data.password = document.getElementById("password").value;
                
                            console.log(JSON.stringify(data))
                            await fetch(url + '/signup', {
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                mode: 'cors',
                                method: 'POST',
                                body: JSON.stringify(data)
                            }).then(function (response) {
                                if (!response.ok) {
                                    throw new Error("ERRO");
                
                                }
                                return response.json();
                            }).then(async function (result) {
                                if (result) {
                                console.log(result);
                                Swal.fire(
                                    'Registado com Sucesso! Foi enviado um email pra confirmar a sua conta!',
                                    '',
                                    'success'
                                  ).then( () => {
                                    window.location.replace("./login.html");     
                                  })
                                    
                                  
                                  var data1={};
                                  data1.email = document.getElementById("email").value;
                                  console.log(data1.email);
                                  await fetch(url + '/site-contacts/confirmation-emails', {
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    mode: 'cors',
                                    method: 'POST',
                                    body: JSON.stringify(data1)
                                }).then(function (response) {
                                    if (!response.ok) {
                                        //alert(response);
                                        throw new Error("ERRO");
                    
                                    }
                                    return response.json();
                                }).then(async function (result) {
                                    console.log(result);
                                    if (result) {
                                  /*      Swal.fire(
                                            'Enviamos-lhe um email para poder confirmar a sua subscrição!',
                                            '',
                                            'info'
                                          )
                                    
                                    console.log(result);
                    
                                    console.log(result);
                                    Swal.fire(
                                        'Enviado email com sucesso!',
                                        '',
                                        'success'
                                      )
    */
    
                                      
                                    }
                                        
    
                                    window.location.reload();
                                }).catch(function (err) {
                                    Swal.fire(
                                        'Erro ao enviar email!',
                                        '',
                                        'error'
                                      )
                                }) 

                                }
                                    

                                window.location.reload();
                            }).catch(function (err) {
                                Swal.fire(
                                    'Esta conta já existe!',
                                    '',
                                    'warning'
                                  )
                            })
                        }
                    }
                }else{
                    Swal.fire(
                        'Primeiro e Último nome apenas podem ter letras!',
                        '',
                        'warning'
                      )
                }


            } else {
                Swal.fire(
                    'Este email não é válido!',
                    '',
                    'warning'
                  )
            }
        }




    };
};


var myInput420 = document.getElementById("password");
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

function valida() {
    if (document.getElementById("password").validity.patternMismatch) {

        return true;
    } else {

        return false;
    }

}

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

function valida_nome(elemento) {
    var filter_nome = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/;
    if (!filter_nome.test(elemento)) {
        return false;
    } else {
        return true;
    }    
}