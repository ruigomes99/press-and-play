  window.onload = async function() {
  const botaoRegistar= document.getElementById("botaoRegistar");
  const botaoLogin=document.getElementById("botaoLogin");
  const botaoLoginGoogle=document.getElementById("botaoLoginGoogle");

//if(botaoRegistar){
//Registar

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
              /* swal({
                  text: 'A palavras-passe não correspondem!',
                  timer: 3000
              }) */
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
          await fetch(url + '/signup', {
              headers: {'Content-Type' : 'application/x-www-form-urlencoded',
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
    //}
  /*function registar() {
var data={};
data.email=document.getElementById("email").value;
data.primeiro_nome=document.getElementById("Fname").value;
data.ultimo_nome=document.getElementById("Lname").value;
//data.data_nascimento=document.getElementById("dataNascimento").value;
data.password=document.getElementById("password").value;
data.repPassword=document.getElementById("repPassword").value;
fetch('https://localhost:8080/signup', { 
headers: {
'Content-Type': 'application/json',
'Access-Control-Allow-Origin':'*'
},
method: 'POST',
body: JSON.stringify(data) //`Fname=${Fname}&Lname=${Lname}&dataNacimento=${dataNascimento}&email=${email}&password=${password}&repPassword=${repPassword}`
})
.then(function(response) {
if (!response.ok) {
  console.log(response.status); //=> number 100–599
  console.log(response.statusText); //=> String
  console.log(response.headers); //=> Headers
  console.log(response.url); //=> String
  if (response.status === 409) {
      alert("Duplicated Email");
  } else {
      throw Error(response.statusText);
  }
} else {
//document.getElementById("user").reset(); //limpeza dos dados do form
alert("Funciona finalmente");
swal("Registado com sucesso!", "Já fazes podemos começar a utilizar a app", "success") //ALERTAS MAIS BONITOS. É NECESSÁRIO INSTALAR O SWEETALERT COMANDO: npm install sweetalert --save
}
}).then(function (result) {
console.log(result);
}).catch(function (err) {
swal("Ocorreu um erro!", "ERRO!", "warning")
alert(err);
console.error(err);
});
};
} */

if(botaoLogin){
//LOGIN
botaoLogin.addEventListener("click", entrar);

async function entrar(){
  var data={};
  data.email=document.getElementById("email").value;
  data.password=document.getElementById("password").value;
  fetch(url + '/signin', { 
  headers: {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin':'*'
 },
  method: 'POST',
  body: JSON.stringify(data)
})
.then(function(response) {
  console.log(response);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
})
.catch(function(err) {
  swal.showValidationError('Pedido falhado: ' + err);
  alert("Falhado");
})
.then(function(result) {
if (result.value.message.success) {
localStorage.setItem("id_user", result.value.id_user);
swal({ title: "Autenticação feita com sucesso!" });
alert("Sucesso!");
window.location.replace("./../../pagina-inicial.html");
}
else {
swal({ title: `${result.value.userMessage.message.pt}` });
}
});

};
}

//LOGIN COM O GOOGLE. AINDA NAO SEI COMO PEGAR NESTE SINCERAMENTE, MAS ACHO QUE DA ASSIM
if(botaoLoginGoogle){
botaoLoginGoogle.addEventListener("click", entrarGoogle);

function entrarGoogle(){
fetch(url + '/auth/google',{ 
headers: {
'Content-Type': 'application/json' ,
'Access-Control-Allow-Origin':'*'},
method: 'GET',
body: JSON.stringify(data)
})
.then(function(response) {
  console.log(response);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
})
.catch(function(err) {
  swal.showValidationError('Pedido falhado: ' + err);
})
.then(function(result) {
if (result.value.message.success) {
localStorage.setItem("id_user", result.value.id_user);
swal({ title: "Autenticação feita com sucesso!", confirmButtonColor: '#EB586F' });
window.location.replace("./../../pagina-inicial.html");
}
else {
swal({ title: `${result.value.userMessage.message.pt}` });
}
})
};
}




};