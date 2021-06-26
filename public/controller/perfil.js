window.onload = function () {
  
  if(performance.navigation.type == 2){
        location.reload(true);
     }
  
  //const urlBase = "http://localhost:8080"
  const botaoEdit = document.getElementById("info_change");
  botaoEdit.addEventListener("click", editar);
  display_notification();

  const name = document.getElementById("name");
  const progress = document.getElementById("progress");
  const level = document.getElementById("level");
  const locality = document.getElementById("locality");
  const country = document.getElementById("country");
  const age = document.getElementById("age");
  const email = document.getElementById("email");
  const nif = document.getElementById("nif");
  const profile_img = document.getElementById("profilePic");
  let nif1 = "";
  dados_perfil();

  function dados_perfil() {
    async function fetchAsync() {
      event.preventDefault();
      //var data = {};
      //data.id_user=localStorage.getItem("id_user");
      id_user = localStorage.getItem("id_user");
      //console.log(data); //debugging para ver os dados que foram enviados
      const response = await fetch(url + '/users/' + id_user);
      const user = await response.json();
      console.log(user); //Da undefined
      // console.log("new"+users);
      fetch(url + '/users/secrets/nifs', {
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        method: 'GET',
        credentials: 'include'
      })
        .then(function (response) {
          console.log(response);
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();

        })
        .catch(function (err) {
          //swal.showValidationError('Pedido falhado: ' + err);
          alert(err);
        })
        .then(async function (result) {
          if (result) {
            //localStorage.setItem("id_user", result.value.id_user);
            //swal({ title: "Autenticação feita com sucesso!" });
            //+ result.value.message.success);
            //console.log(result);
            nif1 = result.nif_decrypted;
            console.log(nif1);
            let true_name = "";
            let true_progress = "";
            let true_level = "";
            let true_locality = "";
            let true_country = "";
            let true_age = "";
            let true_email = "";
            let true_nif = "";
            let true_pic = "";


            /*  const pessoa =
              {
                  first_name: "João",
                  last_name: "Teixeira",
                  age: 19,
                  locality: "Quinchães",
                  city: "Fafe",
                  country: "Portugal",
                  email: "joaomanuel.desporto@hotmail.com",
                  nif: 999999999,
                  progress: 90,
                  level: 29,
                  img: "img/perfil/perfil2.jpg"
              }
      */

            //------------------daqui--------------------------------
            let trueLevel = parseInt(user.user[0].pontos / 60);
            let TrueProgress = (user.user[0].pontos % 60) * 100 / 60;
            console.log(trueLevel);
            console.log(TrueProgress);
            //--------------------ate aqui----------------------------

            //criação da demonstração de resultados recebidos
            true_name += "<h5 class='font-weight-bold text-center text-primary border-bottom-secondary mt-4 ml-3'>" + user.user[0].primeiro_nome + " " + user.user[0].ultimo_nome + "</h5>";
            true_progress += "<div class='progress-bar' role='progressbar' style='width:" + TrueProgress + "%' aria-valuenow='75' aria-valuemin='0' aria-valuemax='100'></div>";
            true_level += "<div class='tb-edit text-primary pl-2 pr-3'>" + trueLevel + "</div>";
            true_locality += "<div class='text-black'>" + user.user[0].localidade /*+ ", " + user.user[0].cidade */ + "</div>";
            true_country += "<div class='text-black'>" + user.user[0].pais + "</div>";

            let ageNumber = getAge(user.user[0].data_nascimento);
            true_age += "<div class='text-black'>" + ageNumber + "</div>";
            true_email += "<div class='text-black'>" + user.user[0].email + "</div>";

            if (nif1 == "999999999") {
              true_nif += "<div class='text-black'> Não definido </div>";
            } else {
              true_nif += "<div class='text-black'>" + nif1 + "</div>";
              console.log(nif1);
            }
            if (user.img == "") {
              true_pic += "<img class='img-profile-bg rounded-circle' id='Pic' src='img/perfil/perfil5.jpg'>";
            } else {
              true_pic += "<img class='img-profile-bg rounded-circle' id='Pic' src='" + user.user[0].avatar + "'>";
            }


            //envia a para a pagina
            name.innerHTML = true_name;
            progress.innerHTML = true_progress;
            level.innerHTML = true_level;
            locality.innerHTML = true_locality;
            country.innerHTML = true_country;
            age.innerHTML = true_age;
            email.innerHTML = true_email;
            nif.innerHTML = true_nif;
            profile_img.innerHTML = true_pic;


            const willEdit = document.getElementById("willEdit");
            willEdit.addEventListener("click", function () {
              const showInformation = document.getElementById("show_information");

              let show_information = "";

              show_information += "<label>Primeiro nome</label>";
              show_information += "<input type='search' id='newfirstname' class='form-control' value='" + user.user[0].primeiro_nome + "'><br>";
              show_information += "<label>Último nome</label>";
              show_information += "<input type='search' id='newlastname' class='form-control' value='" + user.user[0].ultimo_nome + "'><br>";
              show_information += "<label>Localidade</label>";
              show_information += "<input type='search' id='newLocal' class='form-control' value='" + user.user[0].localidade + "'><br>";
              show_information += "<label>País</label>";
              show_information += "<input type='search' id='newPais' class='form-control' value='" + user.user[0].pais + "'><br>";
              show_information += "<label>NIF</label>";

              if (nif1 == "999999999") {
                show_information += "<input type='search' class='form-control' id='newNif' data-rule='required|minlength-9' maxlength='9'";
                show_information += "value='Não Definido!' onkeypress='return event.charCode >= 48 && event.charCode <= 57'>";
              } else {
                show_information += "<input type='search' class='form-control' id='newNif' data-rule='required|minlength-9' maxlength='9'";
                show_information += "value='" + nif1 + "' onkeypress='return event.charCode >= 48 && event.charCode <= 57'>";
              }

              showInformation.innerHTML = show_information;
            });

            //window.location.replace("./login.html");
          }
          else {
            alert(result);
            //swal({ title: `${result.value.userMessage.message.pt}` });
          }
        });



    }
    //chama a função fetchAsync()
    fetchAsync().then(data => console.log("done")).catch(reason => console.log(reason.message));
  }
  //----------------------------------------------------------------------------------------------
  async function editar() {
    event.preventDefault();
    var data = {};
    const response = await fetch(url + '/users/' + id_user);
    const user = await response.json();

    data.email = user.user[0].email;
    //data.nif = nif1;

    if (document.getElementById("newNif").value == "Não Definido!") {
      data.nif = nif1;
    } else {
      if (checkInp()) {
        function getlength(number) {
          return number.toString().length;
        }
        if (getlength(document.getElementById("newNif").value) == 9) {
          data.nif = document.getElementById("newNif").value;
        } else {
          Swal.fire(
            'O NIF precisa de 9 algarismos!',
            '',
            'warning'
          )
          return;
        }

      } else {
        Swal.fire(
          'O NIF só aceita números!',
          '',
          'warning'
        )
        return;
      }
    }


    data.primeiro_nome = document.getElementById("newfirstname").value;
    data.ultimo_nome = document.getElementById("newlastname").value;
    data.localidade = document.getElementById("newLocal").value;
    data.pais = document.getElementById("newPais").value;



    if (data.primeiro_nome == "" || data.ultimo_nome == "" || data.localidade == "" ||
      data.pais == "") {
        Swal.fire(
          'Preencha os espaços em branco!',
          '',
          'warning'
        )
    } else {
      if (valida_nome(data.primeiro_nome) && valida_nome(data.ultimo_nome) &&
        valida_nome(data.localidade) && valida_nome(data.pais)) {

        console.log(data);

        fetch(url + '/users', {
          headers: {
            'Content-Type': 'application/json'
          },
          mode: 'cors',
          method: 'PUT',
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
            console.log(result);
            if (result) {
              //swal({ title: "Autenticação feita com sucesso!" });
              //+ result.value.message.success);S
              Swal.fire(
                'Alterada com sucesso!',
                '',
                'success'
              ).then( () => {
                dados_perfil();
              location.reload();
            })
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

      } else {
        Swal.fire(
          'Primeiro e último nome, localidade e país apenas podem ser letras!',
          '',
          'warning'
        ) 
      }


    }




  };
  //_---------------------------------------------------


  const botaoApagar = document.getElementById("apagarContinha");
  botaoApagar.addEventListener("click", apagarConta);

  async function apagarConta() {
      event.preventDefault();

      fetch(url + '/users', {
          headers: {
              'Content-Type': 'application/json'
          },
          mode: 'cors',
          method: 'DELETE',
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
              console.log(result);
              if (result) {
                  //swal({ title: "Autenticação feita com sucesso!" });
                  //+ result.value.message.success);S
                  Swal.fire(
                    'Apagada com sucesso!',
                    '',
                    'success'
                  ).then( () => {
                    window.location.replace("./login.html");
                    
                    
                    
                    
                    
                    
                    
                  })
    
                  
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
  if (result.success) {
  //localStorage.setItem("id_user", result.value.id_user);
  //swal({ title: "Autenticação feita com sucesso!" });
  //+ result.value.message.success);
  Swal.fire(
    'Sessão terminada com sucesso!',
    '',
    'success'
  ).then( () => {
    localStorage.clear();
    window.location.replace("./login.html");
})
  }
  else {
      alert(result);
  //swal({ title: `${result.value.userMessage.message.pt}` });
  }
  });
  
  };



//-----------------------------------------------------------------------------------------------------------
 function display_notification() {
        async function fetchAsync() {
            event.preventDefault();
            fetch(url + '/users/secrets/notifications', {
              headers: {
                'Content-Type': 'application/json'
              },
              mode: 'cors',
              method: 'GET',
              credentials: 'include'
            })
              .then(function (response) {
                console.log(response);
                if (!response.ok) {
                  throw new Error(response.statusText);
                }
                return response.json();
      
              })
              .catch(function (err) {
                //swal.showValidationError('Pedido falhado: ' + err);
                if(err=="Error"){
                        let see_notification = "<br><div class='w-100'><div class='text-black-50 text-center'>Não tens notificações</div></div><br>";

                        //let time = new Date(notificacao.data);
                       // see_notification += "<a class='dropdown-item d-flex align-items-center'>";
                       // see_notification += "<div class='mr-3'><div class='icon-circle bg-primary'>";
                       // see_notification += "<img class='icon-circle' src='" + notificacao.avatar + "'></i></div></div>";
                       // see_notification += "<div class='w-100'><div class='small text-gray-500'>" + monName[time.getMonth()] +" "+("0" + time.getDate()).slice(-2)+", "+time.getFullYear()+"</div>";
                       // see_notification += "<span class='font-weight-bold'>" + "Não tem notificações" + "</span>";
                      //  see_notification += "</div><div class='icon-circle bg-transparent' id='"+notificacao.id_notificacao+"' onclick='GFG_apagarNotification(this.id)'>";
                        //see_notification += "<i class='fas fa-trash text-danger'></i></div></a>";
                    
                    
                    
            
            
                    //envia a para a pagina
                    notification.innerHTML = see_notification;
            
                    const not = document.getElementById("alertsDropdown");
                    const mostra = document.getElementById("mostra");
                    let new_not = "";
            
                    mostra.style.display = "none";
                        new_not += "<i class='fas fa-bell fa-lg'></i>";
                        new_not += "<span class='badge badge-danger badge-counter' style='display: none;'>3+</span>";
                    
            
                    not.innerHTML = new_not;
            
                }
                else{
                console.log(err);
                }
              })
              .then(async function (result) {
                if (result) {
                    console.log(result);
                    const notificationElement = document.getElementById("notification");
                    monName = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
                    let see_notification = "";
            /*
                    const person =
                    {
                        first_name: "João",
                        last_name: "Teixeira",
                        age: "",
                        locality: "",
                        city: "",
                        country: "Portugal",
                        email: "joaomanuel.desporto@hotmail.com",
                        nif: 999999999,
                        progress: 90,
                        level: 29,
                        img: "img/perfil2.jpg"
                    }       
            
                    const notif = [
                        {
                            id: 1,
                            img: "img/perfil/perfil.jpeg",
                            date: "Wed Dec 31 2019 22:02:09 GMT+0000",
                            mensagem: "Recebeste um novo pedido de amizade de João Teixeira"
                        },
                        {
                            id: 2,
                            img: "img/perfil/perfil1.png",
                            date: "Wed Dec 31 2019 22:02:09 GMT+0000",
                            mensagem: "Foste adicionado à equipa Arroz pelo teu amigo Rui Gomes"
                        },
                        {
                            id: 3,
                            img: "img/perfil/perfil2.jpg",
                            date: "Wed Dec 31 2019 22:02:09 GMT+0000",
                            mensagem: "Tu e Rui são agora amigos"
                        },
                        {
                            id: 4,
                            img: "img/perfil/perfil3.png",
                            date: "Wed Dec 31 2019 22:02:09 GMT+0000",
                            mensagem: "Foste promovido a líder da equipa PWALPHA"
                        },
                        {
                            id: 5,
                            img: "img/perfil/perfil4.jpg",
                            date: "Wed Dec 31 2019 22:02:09 GMT+0000",
                            mensagem: "Foste convidado para uma partida"
                        }
                     ]
            */
            
            
                    //criação da demonstração de resultados recebidos
                    
                    for (notificacao of result){
                        let time = new Date(notificacao.data);
                        see_notification += "<a class='dropdown-item d-flex align-items-center'>";
                        see_notification += "<div class='mr-3'><div class='icon-circle bg-primary'>";
                        see_notification += "<img class='icon-circle' src='" + notificacao.avatar + "'></i></div></div>";
                        see_notification += "<div class='w-100'><div class='small text-gray-500'>" + monName[time.getMonth()] +" "+("0" + time.getDate()).slice(-2)+", "+time.getFullYear()+"</div>";
                        see_notification += "<span class='font-weight-bold'>" + notificacao.mensagem + "</span>";
                        see_notification += "</div><div class='icon-circle bg-transparent' id='"+notificacao.id_notificacao+"' onclick='GFG_apagarNotification(this.id)'>";
                        see_notification += "<i class='fas fa-trash text-danger'></i></div></a>";
                    }
                    
                    
            
            
                    //envia a para a pagina
                    notification.innerHTML = see_notification;
            
                    const not = document.getElementById("alertsDropdown");
                    let new_not = "";
            
                    if (notification.childNodes.length == 0) {
                        new_not += "<i class='fas fa-bell fa-lg'></i>";
                        new_not += "<span class='badge badge-danger badge-counter' style='display: none;'>3+</span>";
                    } else if (notification.childNodes.length != 0) {
                        new_not += "<i class='fas fa-bell fa-lg'></i>";
                        new_not += "<span class='badge badge-danger badge-counter'>" + notification.childNodes.length + "</span>";
                    }
            
                    not.innerHTML = new_not;
            
                }
                else {
                  console.log(result);
                  //swal({ title: `${result.value.userMessage.message.pt}` });
                }
              });
      
      
      
          }
          //chama a função fetchAsync()
    fetchAsync().then(data => console.log("done")).catch(reason => console.log(reason.message));
}
//-----------------------------------------------------------------------------------------------------------







};


//-------------------------------------Age function------------------------------------

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};


//--------------------------------------Acept image---------------------------------------------------
window.addEventListener('load', function () {
  document.querySelector('input[type="file"]').addEventListener('change', function () {
    if (this.files && this.files[0]) {
      var img = document.getElementById("Pic");
      img.src = URL.createObjectURL(this.files[0]);
       // ja mete na pagina
      //mete aqui o que for necessario para mandar para a base de dados

      const formData = new FormData();

      formData.append("userAvatar", this.files[0]);

      //console.log(img.src);
      fetch(url + '/users/upload-avatars', {
        mode: 'cors',
        method: 'PUT',
        body: formData,
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
          console.log(result);
          if (result) {
            //swal({ title: "Autenticação feita com sucesso!" });
            //+ result.value.message.success);S
            /*Swal.fire(
              'Alterada com sucesso!',
              '',
              'success'
            ).then( () => {*/
              console.log("Alterada com sucesso!");
            //})

            
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


    }
  });
  
  

  //--------------------------------------Change Password---------------------------------------------------
  const botaoEditPass = document.getElementById("pass_change");
  botaoEditPass.addEventListener("click", editarPass);

  async function editarPass() {
    event.preventDefault();
    var data = {};

    data.insertedPassword = document.getElementById("oldPass").value;
    data.newPassword = document.getElementById("newPass").value;
    repetirPass=document.getElementById("newPass2").value;
    if(document.getElementById("newPass").value == repetirPass){
    fetch(url + '/users/update-passwords', {
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      method: 'PUT',
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
        console.log(result);
        if (result) {
          //swal({ title: "Autenticação feita com sucesso!" });
          //+ result.value.message.success);S
          Swal.fire(
            'Alterada com sucesso!',
            '',
            'success'
          )
          data.email = document.getElementById("email").value;
          fetch(url + '/logout', {
            headers: {
              'Content-Type': 'application/json'
            },
            mode: 'cors',
            method: 'GET',
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
              alert(err);
            })
            .then(async function (result) {
              console.log(result);
              if (result.success) {
                //localStorage.setItem("id_user", result.value.id_user);
                //swal({ title: "Autenticação feita com sucesso!" });
                //+ result.value.message.success);
                console.log(result);
                Swal.fire(
                  'Sessão encerrada com sucesso!',
                  '',
                  'success'
                ).then( () => {
                  window.location.replace("./login.html");
              })
              }
              else {
                alert(result);
                //swal({ title: `${result.value.userMessage.message.pt}` });
              }
            });
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
    }else{
      Swal.fire(
        'As palavras passes não correspondem!',
        '',
        'warning'
      )
    }
  };
  //-----------------------------------------------------------------------------------------
});



function checkInp() {
  var x = document.getElementById("newNif").value;
  if ((x % 1) != 0) {
    //alert("So aceita numeros");
    return false;
  } else {
    return true;
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


 //-----------------------------------------------------------------------------------------
const botaoDeleteAll = document.getElementById("deleteAll");
botaoDeleteAll.addEventListener("click", apagaTodasNotificacoes);


async function apagaTodasNotificacoes() {
    var array1=new Array();
    event.preventDefault();
            fetch(url + '/users/secrets/notifications', {
              headers: {
                'Content-Type': 'application/json'
              },
              mode: 'cors',
              method: 'GET',
              credentials: 'include'
            })
              .then(function (response) {
                console.log(response);
                if (!response.ok) {
                  throw new Error(response.statusText);
                }
                return response.json();
      
              })
              .catch(function (err) {
                //swal.showValidationError('Pedido falhado: ' + err);
                alert(err);
              })
              .then(async function (result) {
                  console.log(result);
                if (result) {
                    for(var i = 0; i < result.length; i++){
                    array1.push(result[i].id_notificacao);  
                    } 
                    //alert(array1.length);  
                    console.log(array1);   
                   for(var i = 0; i < array1.length; i++){
                    fetch(url + '/users/secrets/notifications/' + array1[i], {
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        mode: 'cors',
                        method: 'DELETE',
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
                            console.log(result);
                            if (result) {
                                //swal({ title: "Autenticação feita com sucesso!" });
                                //+ result.value.message.success);S
                               // alert("Já não faz parte da nossa familia!");
                               // window.location.replace("./login.html");
                               location.reload();
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
                    }
                    Swal.fire(
                        'Apagadas com sucesso!',
                        '',
                        'success'
                      )
                    
                }
                else {
                  alert(result);
                  //swal({ title: `${result.value.userMessage.message.pt}` });
                }
              });
  
};



function GFG_apagarNotification(clicked) {
    //alert(clicked);
        event.preventDefault();
        id_notificacao=clicked;
        console.log(id_notificacao);
        fetch(url + '/users/secrets/notifications/' + id_notificacao, {
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            method: 'DELETE',
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
                console.log(result);
                if (result) {
                    //swal({ title: "Autenticação feita com sucesso!" });
                    //+ result.value.message.success);S
                    Swal.fire(
                        'Notificação apagada com sucesso!',
                        '',
                        'success'
                      ).then( () => {
                        location.reload();
                    })
      
                    
                    
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
  
    

}

 //-----------------------------------------------------------------------------------------