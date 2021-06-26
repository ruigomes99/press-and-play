window.onload = async function() {
    const botaoLogout=document.getElementById("botaoLogout");

botaoLogout.addEventListener("click", sair);

async function sair(){
  event.preventDefault();  
  var data={};
  data.email=document.getElementById("email").value;
  fetch(url + '/logout', { 
  headers: {
  'Content-Type': 'application/json'
 },
  mode : 'cors',
  method: 'GET',
  credentials: 'include'
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
if (result.sucess) {
//localStorage.setItem("id_user", result.value.id_user);
//swal({ title: "Autenticação feita com sucesso!" });
//+ result.value.message.success);
alert("Logout executado com sucesso!");
window.location.replace("./login.html");
}
else {
    alert(result);
//swal({ title: `${result.value.userMessage.message.pt}` });
}
});

};
};