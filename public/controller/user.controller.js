//quando inicia a página faz
window.onload = function () {
    //chama a função para atualizar os users
   // refreshUsers(); //adicionar função de validação ao formulário
    validator();
    document.getElementById("user").onsubmit = async function (e) {
        //validação do formulário ao submeter
        validator();
    };

    //função de validação
    function validator() {
        let validator = new Validator(document.querySelector('form[name="user"]'), function

            (err, res) {
            //se validador for válido, res=true e executa o saveUsers()

            if (res) {
               // saveUsers();
            }
        }, {//cria novas regras, verificase o valor do campo que valida é igual ao campo pwd

            rules: {
                password: function (value) {
                    return (value === document.getElementById("InputPassword").value);
                }
            },
            messages: {
                en: {
                    password: {
                        incorrect: "Password didn't match"
                    }
                }
            }
        });

    }


    /*window.onload = async function() {
    const botaoLogin=document.getElementById("botaoLogin");
    const botaoLoginGoogle=document.getElementById("botaoLoginGoogle");

botaoLogin.addEventListener("click", entrar);

async function entrar(){
  event.preventDefault();  
  var data={};
  data.email=document.getElementById("InputEmail").value;
  data.password=document.getElementById("InputPassword").value;
  fetch('http://localhost:8080/signin', { 
  headers: {
  'Content-Type': 'application/json'
 },
  mode : 'cors',
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
  //swal.showValidationError('Pedido falhado: ' + err);
  alert(err);
})
.then(async function(result) {
if (result==="/menu") {
//localStorage.setItem("id_user", result.value.id_user);
//swal({ title: "Autenticação feita com sucesso!" });
//+ result.value.message.success);
alert("Autenticação feita com sucesso!");
window.location.replace("./pagina-inicial.html");
}
else {
    alert(result);
//swal({ title: `${result.value.userMessage.message.pt}` });
}
});

};
*/

  /*  function refreshUsers() {
        async function fetchAsync() {
            const renderUsers = document.getElementById("result");
            let txt = "";
            const response = await fetch('http://localhost:8080/users');
            const users = await response.json();
            //criação de uma tabela para demonstração dos resultados recebidos
            txt += "<table class='table' style='padding:10px; width:70%; margin:0% 15% 0% 15%'>";
            txt += "<thead style='background-color:#607d8b; color:white '>";
            txt += "<tr><th>Name</th><th>Email</th><th>Reg. Date</th></tr></thead><tbody>";
            //percorrer a variável users e por cada user cria a linha da tabela com os dados presentes
            for (const user of users) {
                txt += "<tr><td style='text-align:right'>" + user.name + "</td><td>" + user.email + "</td><td>" +

                    user.dateReg + "</td></tr>";
            }
            txt += "</tbody></table>";
            //envia a tabela construida para a view e mostra no object com ID result
            renderUsers.innerHTML = txt;
        }
        //chama a função fetchAsync()
        fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));
    } */
}; 
