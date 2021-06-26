/*window.onload = async function() {
validator();
const botaoRegistar= document.getElementById("botaoRegistar");






}

function validator() {
    let validator = new Validator(document.querySelector('form[name="user"]'), function (err, res) {
        if (res) {
            botaoRegistar.addEventListener('submit', async(event) => {
                event.preventDefault();
                
            var email=document.getElementById("email").value
            ,primeiro_nome=document.getElementById("Fname").value
            ,ultimo_nome=document.getElementById("Lname").value
            ,data_nascimento=document.getElementById("dataNascimento").value
            ,password=document.getElementById("password").value
            ,repPassword=document.getElementById("repPassword").value;
            
                if(password.value !== repPassword.value) {
            alert("PASSES DIFERENTES")
                     swal({
                        text: 'A palavras-passe não correspondem!',
                        timer: 3000
                    }) 
                } 
                else{
                let data = {
            email: document.getElementById("email").value,
            primeiro_nome: document.getElementById("Fname").value,
            ultimo_nome: document.getElementById("Lname").value,
            data_nascimento:document.getElementById("dataNascimento").value,
            password: document.getElementById("password").value,
            repPassword: document.getElementById("repPassword").value,
                }
            
                console.log(JSON.stringify(data))
                await fetch('http://localhost:8080/signup', {
                    headers: {'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin':'*'
                  },
                    method : 'POST',
                    mode : 'cors',
                    body : JSON.stringify(data)
                }).then(response => {
                    if (!response.ok) {
                        throw new Error("ERRO");
                    }
                    return response.json();
                }).then(result => {
                    console.log(result);
                    window.location.reload();
                }).catch(error => {
                    alert("ERRO");
                })
              }
            }) 
        }
    });
}*/
window.onload = async function() {
    //if(botaoRegistar){
//Registar
alert("estou aqui");
const botaoRegistar=document.getElementById("botaoRegistar");
botaoRegistar.addEventListener("click", registar);

async function registar(){
    event.preventDefault();
    var data={};
//data.email=document.getElementById("email").value;
//data.primeiro_nome=document.getElementById("Fname").value;
//data.ultimo_nome=document.getElementById("Lname").value;
//data.data_nascimento=document.getElementById("dataNascimento").value;
//data.password=document.getElementById("password").value;
//repPassword=document.getElementById("repPassword").value;
 alert("estou aqui");
    if(password.value !== repPassword.value) {
alert("PASSES DIFERENTES");
        /* swal({
            text: 'A palavras-passe não correspondem!',
            timer: 3000
        }) */
    } 
    else{
data.email=document.getElementById("email").value;
data.primeiro_nome=document.getElementById("Fname").value;
data.ultimo_nome=document.getElementById("Lname").value;
data.data_nascimento=document.getElementById("dataNascimento").value;
data.password=document.getElementById("password").value;
    }

    console.log(JSON.stringify(data))
    await fetch('https://dd10afea8a444651a7975b97cdbc8a11.vfs.cloud9.us-east-2.amazonaws.com/signup', {
        headers: {'Content-Type' : 'application/json'
      },
        mode : 'cors',
        method : 'POST',
        body : JSON.stringify(data)
    }).then(function(response) {
        if (!response.ok) {
            alert(response);
            throw new Error("ERRO");
            
        }
        return response.json();
    }).then(async function(result) {
        alert(result);
        console.log(result);
        window.location.reload();
    }).catch(function(err) {
        alert("ERRO");
    })
  };
};


