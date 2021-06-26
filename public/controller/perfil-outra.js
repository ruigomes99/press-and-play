window.onload = function () {
  person_info();

  if(performance.navigation.type == 2){
            location.reload(true);
    }

  const botaoPA = document.getElementById("adicionar_amigo");
  botaoPA.addEventListener("click", pedidoAmizade);



  function person_info() {
    async function fetchAsync() {
      id_user = localStorage.getItem("id_perfil");
      const response = await fetch(url + '/users/' + id_user);
      const person = await response.json();
      console.log(person);

      const name = document.getElementById("name");
      const progress = document.getElementById("progress");
      const level = document.getElementById("level");
      const locality = document.getElementById("locality");
      const country = document.getElementById("country");
      const age = document.getElementById("age");
      const profile_img = document.getElementById("profile_pic");
      const games_played = document.getElementById("games_played");
      const fav_field = document.getElementById("fav_field");

      const isFriend = document.getElementById("adicionar_amigo");

      let true_name = "";
      let true_progress = "";
      let true_level = "";
      let true_locality = "";
      let true_country = "";
      let true_age = "";
      let true_pic = "";
      let true_games = "";
      let true_fav = "";


      /*
                  const person =
                  {
                      first_name: "Alexandre",
                      last_name: "Costa",
                      age: 23,
                      locality: "Penha",
                      city: "Guimarães",
                      country: "Portugal",
                      progress: 50,
                      level: 15,
                      img: "img/perfil/perfil3.png",
                      games_played: 69,
                      fav_field: {
                          name: "PlaySoccer",
                          locality: "Quinchães",
                          city: "Fafe"
                      }
                  }
      
      */

      // -------------------------------------- A partir daqui-----------------------------------------------
      id_logado = localStorage.getItem("id_user");

      const response1 = await fetch(url + '/users/' + id_logado + '/friends-list');
      const friends = await response1.json();
      console.log(friends);

      const response2 = await fetch(url + '/users/' + id_logado + '/friends-list/pending');
      const pendentes = await response2.json();
      console.log(pendentes);

      const response3 = await fetch(url + '/users/'+ id_logado + '/friends-list/requests');
      const pedidos = await response3.json();
      console.log(pedidos);

      id_amigo = localStorage.getItem("id_perfil");
      if (friends.status == "404") {
        console.log("Ainda não tem amigos!");
      } else {
        for (friend of friends /*lista de amigos da pessoa logada*/) {

          if (friend.id_user == id_amigo /*id da pessoa em questao*/) {
            //se for amigo faz isto
            let isFriend = document.getElementById("adicionar_amigo");
            isFriend.style.display = "none";
          }
        }       
      }
      if (pendentes.status == "404"){
        console.log("Não tens pendentes");
      }else{
        for (pendente of pendentes) {
          if (pendente.id_user == id_amigo) {
            console.log(pendente.id_user);
            console.log(id_logado);
            let isFriend = document.getElementById("adicionar_amigo");
            isFriend.style.display = "none";
          }
        }
      }
      if (pedidos.status == "404"){
        console.log("Não tens pedidos");
      }else{
        for (pedido of pedidos) {
          if (pedido.id_user == id_amigo) {
            console.log(pedido.id_user);
            console.log(id_logado);
            let isFriend = document.getElementById("adicionar_amigo");
            isFriend.style.display = "none";
          }
        }
      }

//--------------------------------------daqui----------------------------------
      let trueLevel = parseInt(person.user[0].pontos / 60);
      let TrueProgress = (person.user[0].pontos % 60) * 100 / 60;
      console.log(trueLevel);
      console.log(TrueProgress);
//-------------------------------------ate aqui--------------------------------



      //criação da demonstração de resultados recebidos
      true_name += "<h5 class='font-weight-bold text-center text-primary border-bottom-secondary mt-4 ml-3'>" + person.user[0].primeiro_nome + " " + person.user[0].ultimo_nome + "</h5>";
      true_progress += "<div class='progress-bar' role='progressbar' style='width:" + TrueProgress + "%' aria-valuenow='75' aria-valuemin='0' aria-valuemax='100'></div>";
      true_level += "<div class='tb-edit text-primary pl-2 pr-3'>" + trueLevel + "</div>";
      true_locality += "<div class='text-black'>" + person.user[0].localidade /* + ", " + person.city + */ + "</div>";
      true_country += "<div class='text-black'>" + person.user[0].pais + "</div>";
      let ageNumber = getAge(person.user[0].data_nascimento);
      true_age += "<div class='text-black'>" + ageNumber + "</div>";

      if (person.img == "") {
        true_pic += "<img class='img-profile-bg rounded-circle' src='img/perfil/perfil5.jpg'>";
      } else {
        true_pic += "<img class='img-profile-bg rounded-circle' src='" + person.user[0].avatar + "'>";
      }

      //true_games += "<div class='text-black'>" + person.games_played + "</div>";
      //true_fav += "<div class='text-black'>" + person.fav_field.name + " - " + person.fav_field.locality + ", " + person.fav_field.city + "</div>";


      //envia a para a pagina
      name.innerHTML = true_name;
      progress.innerHTML = true_progress;
      level.innerHTML = true_level;
      locality.innerHTML = true_locality;
      country.innerHTML = true_country;
      age.innerHTML = true_age;
      profile_img.innerHTML = true_pic;
      games_played.innerHTML = true_games;
      fav_field.innerHTML = true_fav;



    }
    //chama a função fetchAsync()
    fetchAsync().then(data => console.log("done")).catch(reason => console.log(reason.message));
  }


  //------------------------------------------------------------------------



  async function pedidoAmizade() {
    event.preventDefault();
    id_amigo = localStorage.getItem("id_perfil");
    console.log(id_amigo);
    fetch(url + '/users/friends-list/' + id_amigo, {
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      method: 'POST',
      //body: JSON.stringify(id_amigo),
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

        if (result) {
          //swal({ title: "Autenticação feita com sucesso!" });
          //+ result.value.message.success);S
          Swal.fire(
            'Pedido enviado com sucesso!',
            '',
            'success'
          ).then( () => {
            window.location.replace("./perfil-outra.html");  
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

  //ver o que preciso de mandar aqui!!!
  const botaoReportarMarmelo = document.getElementById("botaoEditar");

  botaoReportarMarmelo.addEventListener("click", reportaMarmelo);

  async function reportaMarmelo() {
    event.preventDefault();
    let x="";
    radios=document.getElementsByName("reason");
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
          console.log("Escolheu: " + radios[i].value);
          x=radios[i].value;
      }
    }
    data={};
    console.log(x);
    data.descricao=x; //Aqui tenho que ir buscar o valor do radiobutton
    id_reportado = localStorage.getItem("id_perfil");
        fetch(url + '/users/report-users/' + id_reportado, {
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            method: 'POST',
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
                      'O seu feedback foi enviado aos administradores com sucesso!',
                      '',
                      'success'
                    ).then( () => {
                      window.location.replace("./perfil-outra.html");
                    })
      
                    
                }
                else {
                  Swal.fire(
                    'Só pode reportar um jogador uma vez!',
                    '',
                    'warning'
                  )  
                    console.log(result);
                    //swal({ title: `${result.value.userMessage.message.pt}` });
                }
            });
    
};




};


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