window.onload = async function() {
    //if(botaoEditar){
//Editar
const botaoEditar=document.getElementById("botaoEditar");
botaoEditar.addEventListener("click", editar);

async function editar(){
    event.preventDefault();
    var data={};
//data.email=document.getElementById("email").value;
//data.primeiro_nome=document.getElementById("Fname").value;
//data.ultimo_nome=document.getElementById("Lname").value;
//data.data_nascimento=document.getElementById("dataNascimento").value;
//data.password=document.getElementById("password").value;
//repPassword=document.getElementById("repPassword").value;   
data.primeiro_nome=document.getElementById("newfirstname").value;
data.ultimo_nome=document.getElementById("newlastname").value;
data.localidade=document.getElementById("newLocal").value;
data.pais=document.getElementById("newPais").value;

    console.log(JSON.stringify(data))
    await fetch(url + '/users/:id_user' + data.email + data.password + data.nif, {
        headers: {'Content-Type' : 'application/json'
      },
        method : 'PUT',
        body : JSON.stringify(data)
    }).then(function(response) {
        if (!response.ok) {
            //console.log("11")
            let response2 = response.json();
            alert(response2);
            throw new Error("ERRO");
        }
        return response.json();
    }).then(async function(result) {
        let r = result.json();
        alert(result);
        console.log(result);
        window.location.reload();
    }).catch(function(err) {
        alert("ERRO");
    })
};
};