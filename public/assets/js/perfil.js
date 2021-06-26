
/*window.onload=async function(){
    const botaoAlterar = document.getElementById("botaoAlterar");
    const botaoApagar=document.getElementById("botaoApagar");
    botaoAlterar.addEventListener("click",alterar);
    botaoApagar.addEventListener("click",apagar);


    async function alterar(){
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
        swal.showValidationError('Pedido falhado: ' + err);
        alert(err);
      })
      .then(async function(result) {
         alert(result);
      if (result==="/menu") {
      //localStorage.setItem("id_user", result.value.id_user);
      //swal({ title: "Autenticação feita com sucesso!" });
      alert("Sucesso!"); //+ result.value.message.success);
      //window.location.replace("./../../pagina-inicial.html");
      }
      else {
          alert(result);
      swal({ title: `${result.value.userMessage.message.pt}` });
      }
      });
}; */

/*async function apagar(){
    event.preventDefault();  
    var data={};
    data.email=document.getElementById("email").value;
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
    swal.showValidationError('Pedido falhado: ' + err);
    alert(err);
  })
  .then(async function(result) {
     alert(result);
  if (result==="/menu") {
  //localStorage.setItem("id_user", result.value.id_user);
  //swal({ title: "Autenticação feita com sucesso!" });
  alert("Sucesso!"); //+ result.value.message.success);
  //window.location.replace("./../../pagina-inicial.html");
  }
  else {
      alert(result);
  swal({ title: `${result.value.userMessage.message.pt}` });
  }
  });

};*/
//}
