window.onload = function () {
    display_friends();
    
    if(performance.navigation.type == 2){
            location.reload(true);
    }
    

    function display_friends() {
        async function fetchAsync() {
            id_user=localStorage.getItem("id_user");
            const response = await fetch(url + '/users/' + id_user + '/friends-list');
            const friends = await response.json();
            console.log(friends);
            const show_friends = document.getElementById("show_friends");

            let see_friends = "";

/*
            const friends = [
                {
                    name: "Carlos Pires",
                    email: "azul@hotmail.com",
                    level: 25,
                    img: "img/perfil/perfil2.jpg"
                },
                {
                    name: "Jose Costa",
                    email: "vermelgo@hotmail.com",
                    level: 12,
                    img: "img/perfil/perfil1.png"
                },
                {
                    name: "Rui Teixeira",
                    email: "amarelo@hotmail.com",
                    level: 9,
                    img: "img/perfil/perfil3.png"
                },
                {
                    name: "João Carvalho",
                    email: "preto@hotmail.com",
                    level: 22,
                    img: "img/perfil/perfil4.jpg"
                },
                {
                    name: "Isabel Costa",
                    email: "rosa@hotmail.com",
                    level: 30,
                    img: "img/perfil/perfil.jpeg"
                },
                {
                    name: "António Pinheiro",
                    email: "castanho@hotmail.com",
                    level: 1,
                    img: ""
                }
            ]
*/



            //criação da demonstração de resultados recebidos
            if (friends.status == "404") {
                see_friends +="<div class='w-100'><div class='text-black-50 text-center'>Ainda não tens amigos</div></div>";
            } else {
                see_friends += "<ul class='px-0 w-100' style='list-style-type: none;'>";
                for (const friend of friends) {

                    see_friends += "<li class='myfilter text-white col-xl-3 col-md-6 mb-3'>";
                    see_friends += "<a href='perfil-outra.html' id='"+friend.id_user+"' onClick='GFG_click(this.id)' ><div class='card shadow'><div class='card-body2'>";
                    see_friends += "<div class='row px-1'><div class='col-2 mr-3'>";

                    if(friend.img==""){
                        see_friends += "<img class='rounded-circle img-show-profile' src='img/perfil/perfil5.jpg'></div><div class='col-3 pt-2'>";
                    }else{
                        see_friends += "<img class='rounded-circle img-show-profile' src='"+friend.avatar+"'></div><div class='col-3 pt-2 ml-n2'>";
                    }

                    let trueLevel = parseInt(friend.pontos / 60) ;
                    see_friends += "<img class='img-level' src='img/nivel.png'><div class='level'>"+trueLevel +"</div></div>";
                    see_friends += "<div class='col-auto pt-3 ml-n2'>";
                    see_friends += "<h5 class='text-secondary font-weight-bold'>"+friend.primeiro_nome + " " + friend.ultimo_nome +"</h5>";
                    see_friends += "<label class='text-black small'>"+friend.email+"</label>";
                    see_friends += "</div></div></div></div></a></li>";

                }
                see_friends += "</ul>";
            }

            //envia a para a pagina
            show_friends.innerHTML = see_friends;


        }
        //chama a função fetchAsync()
        fetchAsync().then(data => console.log("done")).catch(reason => console.log(reason.message));
    }


//-------------------------------------------------------------------------------------


const botaoApagarAmigo = document.getElementById("remove_friend");

botaoApagarAmigo.addEventListener("click", apagarAmigo);

async function apagarAmigo() {
  event.preventDefault();
  getIds();
  console.log(ids);
  for (var i = 0 ; i < ids.length; i++) {
    let x=ids[i].substring( 1 , ids[i].length );
    id_amigo=x;
    console.log(id_amigo);
  fetch(url + '/users/friends-list/' + id_amigo, {
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
      if (result.msg == "success") {
        //swal({ title: "Autenticação feita com sucesso!" });
        //+ result.value.message.success);S
        Swal.fire(
            'Apagado com sucesso!',
            '',
            'success'
          ).then( () => {
            window.location.replace("./amigos.html");     
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
};












};




//-----------------------------------------ToCheck------------------------------------------------------

let wasPressed = true;
async function toCheck() {

    id_user=localStorage.getItem("id_user");
            const response = await fetch(url + '/users/' + id_user + '/friends-list');
            const friends = await response.json();
            console.log(friends);
            const show_friends = document.getElementById("show_friends");

            let see_friends = "";



  /*  const friends = [
        {
            name: "Carlos Pires",
            email: "azul@hotmail.com",
            level: 25,
            img: "img/perfil/perfil2.jpg"
        },
        {
            name: "Jose Costa",
            email: "vermelgo@hotmail.com",
            level: 12,
            img: "img/perfil/perfil1.png"
        },
        {
            name: "Rui Teixeira",
            email: "amarelo@hotmail.com",
            level: 9,
            img: "img/perfil/perfil3.png"
        },
        {
            name: "João Carvalho",
            email: "preto@hotmail.com",
            level: 22,
            img: "img/perfil/perfil4.jpg"
        },
        {
            name: "Isabel Costa",
            email: "rosa@hotmail.com",
            level: 30,
            img: "img/perfil/perfil.jpeg"
        },
        {
            name: "António Pinheiro",
            email: "castanho@hotmail.com",
            level: 1,
            img: ""
        }
    ] */

    if (wasPressed === true) {

        //criação da demonstração de resultados recebidos
        if (friends == "404") {
            see_friends += "<div class='w-100'><div class='text-black-50 text-center'>Ainda não tens amigos</div></div>";
        } else {
            see_friends += "<div class='w-100'><div class='text-black-50 text-center'>Selecione o que pretende alterar</div></div>";
            see_friends += "<div id='checkboxes'>";
            see_friends += "<ul id='selecList' class='px-0 w-100' style='list-style-type: none;'>";
            

            let test = 0;
            for (const friend of friends) {

                see_friends += "<li class='myfilter text-white col-xl-3 col-md-6 mb-2'>";

                test += 1;
                see_friends += "<input type='checkbox' name='aGroup' value='" + friend.id_user + "' id='a" + friend.id_user + "'/>";
                see_friends += "<label class='whatever5' for='a" + friend.id_user + "'>";

                see_friends += "<div class='card shadow'><div class='card-body2'>";
                see_friends += "<div class='row px-1'><div class='col-2 mr-3'>";

                if (friend.img == "") {
                    see_friends += "<img class='rounded-circle img-show-profile' src='img/perfil/perfil5.jpg'></div><div class='col-3 pt-2'>";
                } else {
                    see_friends += "<img class='rounded-circle img-show-profile' src='" + friend.avatar + "'></div><div class='col-3 pt-2'>";
                }
                let trueLevel = parseInt(friend.pontos / 60) ;
                see_friends += "<img class='img-level' src='img/nivel.png'><div class='level'>" + trueLevel + "</div></div>";
                see_friends += "<div class='col-auto pt-3 ml-n2'>";
                see_friends += "<h5 class='text-secondary font-weight-bold'>" + friend.primeiro_nome + " " + friend.ultimo_nome + "</h5>";
                see_friends += "<div class='text-black small' style='margin-bottom: 0.5rem;'>" + friend.email + "</div>";
                see_friends += "</div></div></div></div></label></li>";

            }
            see_friends += "</ul></div>";
        }

        //envia a para a pagina
        show_friends.innerHTML = see_friends;

        wasPressed = false;
    } else {

        id_user=localStorage.getItem("id_user");
        const response = await fetch(url + '/users/'+ id_user + '/friends-list');
        const friends = await response.json();
        console.log(friends);
        const show_friends = document.getElementById("show_friends");

        let see_friends = "";
        //criação da demonstração de resultados recebidos
        if (friends == "404") {
            see_friends += "<div class='w-100'><div class='text-black-50 text-center'>Ainda não tens amigos</div></div>";
        } else {
            see_friends += "<ul class='px-0 w-100' style='list-style-type: none;'>";
            for (const friend of friends) {

                see_friends += "<li class='myfilter text-white col-xl-3 col-md-6 mb-3'>";
                see_friends += "<a href='perfil-outra.html' id='"+friend.id_user+"' onClick='GFG_click(this.id)'><div class='card shadow'><div class='card-body2'>";
                see_friends += "<div class='row px-1'><div class='col-2 mr-3 ml-n2'>";

                if (friend.img == "") {
                    see_friends += "<img class='rounded-circle img-show-profile' src='img/perfil/perfil5.jpg'></div><div class='col-3 pt-2'>";
                } else {
                    see_friends += "<img class='rounded-circle img-show-profile' src='" + friend.avatar + "'></div><div class='col-3 pt-2'>";
                }

                let trueLevel = parseInt(friend.pontos / 60) ;
                see_friends += "<img class='img-level' src='img/nivel.png'><div class='level'>" + trueLevel + "</div></div>";
                see_friends += "<div class='col-auto pt-3 ml-n2'>";
                see_friends += "<h5 class='text-secondary font-weight-bold'>" + friend.primeiro_nome + " " + friend.ultimo_nome + "</h5>";
                see_friends += "<label class='text-black small'>" + friend.email + "</label>";
                see_friends += "</div></div></div></div></a></li>";

            }
            see_friends += "</ul>";
        }

        //envia a para a pagina
        show_friends.innerHTML = see_friends;

        wasPressed = true;
    }
};


//-------------------------------getIds---------------------------------------------

let ids = [];
function getIds(){
    
    const selecList = document.getElementById("selecList");
    for(let elem of selecList.children){
        if (elem.firstChild.checked){
            ids.push(elem.firstChild.id);
            
        }
    }
    console.log(ids);
}

//----------------------------------
function GFG_click(clicked) { 
    //alert(clicked); 
    localStorage.setItem("id_perfil", clicked);
}