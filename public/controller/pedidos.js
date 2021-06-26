window.onload = function () {
    display_requests();
    display_requests_sent();

    if(performance.navigation.type == 2){
            location.reload(true);
    }



    function display_requests() {
        async function fetchAsync() {
            id_user=localStorage.getItem("id_user");
            const response = await fetch(url + '/users/'+ id_user + '/friends-list/requests');
            const requests = await response.json();
            console.log(requests);
            const show_requests = document.getElementById("show_requests");
        
            let see_requests = "";

/*
            const requests = [
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
            if (requests.status == "404") {
                see_requests += "<div class='w-100'><div class='text-black-50'  style='margin-left: 110px;'>Ainda não tens pedidos</div></div>";
            } else {
                see_requests += "<ul class='px-0 pt-2 w-100 fade2' style='list-style-type: none; margin-left: 16px;margin-bottom: -10px;margin-top: -15px;'>";
 
                let test = 0;
                for (const request of requests) {

                    see_requests += "<li class='myfilter2 text-white col-xl-3 col-md-6 mb-3 ml-n2'>";
                    see_requests += "<a id='" + request.id_user + "' onClick='GFG_clickUsers(this.id)' href='perfil-outra.html'><div class='card shadow'><div class='card-body2'>";
                    see_requests += "<div class='row ml-2'><div class='col-2 mr-3'>";

                    if (request.img == "") {
                        see_requests += "<img class='rounded-circle img-show-profile' src='img/perfil/perfil5.jpg'></div><div class='col-3 pt-2'>";
                    } else {
                        see_requests += "<img class='rounded-circle img-show-profile' src='" + request.avatar + "'></div><div class='col-3 pt-2'>";
                    }

                    test += 1;
                    let trueLevel = parseInt( request.pontos / 60);
                    see_requests += "<img class='img-level' src='img/nivel.png'><div class='level'>" + trueLevel + "</div></div>";
                    see_requests += "<div class='col-auto pt-3 ml-n2'>";
                    see_requests += "<h5 class='text-secondary font-weight-bold'>" + request.primeiro_nome + " " + request.ultimo_nome + "</h5>";
                    see_requests += "<label class='text-black'>" + request.email + "</label></div></div>";
                    see_requests +=  "<button onclick='GFG_clickAceitar(this.id)' class='btn btn-primary mr-3 type='submit' id='"+request.id_user+"'><i class='fa fa-check '></i></button><button onclick='GFG_clickRejeitar(this.id)' class='btn btn-primary mr-3' type='submit' id='"+request.id_user+"'><i class='fa fa-times '></i></button>"
                    see_requests += "</div></div></a></li>";

                }
                see_requests += "</ul>";
            }

            //envia a para a pagina
            show_requests.innerHTML = see_requests;


        }
        //chama a função fetchAsync()
        fetchAsync().then(data => console.log("done")).catch(reason => console.log(reason.message));
    }


//-----------------------------------Request sent------------------------------------------------------

function display_requests_sent() {
    async function fetchAsync() {

            id_user=localStorage.getItem("id_user");
            const response = await fetch(url + '/users/'+ id_user + '/friends-list/pending');
            const requests = await response.json();
            console.log(requests);
        const show_requests_sent = document.getElementById("show_requests_sent");

        let see_users = "";

/*
        const users = [
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
        if (requests.status == "404") {
            see_users += "<div class='w-100'><div class='text-black-50' style='margin-left: 110px; margin-top: 20px;'>Não tens pedidos pendentes</div></div>";
        } else {
            see_users += "<ul class='w-100 pt-2' style='list-style-type: none;'>";
            for (const user of requests) {

                see_users += "<li class='myfilter4 text-white col-xl-3 col-md-6 mb-3 ml-n1'>";
                see_users += "<a id='" + user.id_user + "' onClick='GFG_clickUsers(this.id)' href='perfil-outra.html'><div class='card shadow'><div class='card-body2'>";
                see_users += "<div class='row px-1'><div class='col-2 mr-3'>";

                if (user.img == "") {
                    see_users += "<img class='rounded-circle img-show-profile' src='img/perfil/perfil5.jpg'></div><div class='col-3 pt-2'>";
                } else {
                    see_users += "<img class='rounded-circle img-show-profile' src='" + user.avatar + "'></div><div class='col-3 pt-2'>";
                }

                let trueLevel2 = parseInt( user.pontos / 60) ;
                see_users += "<img class='img-level' src='img/nivel.png'><div class='level'>" + trueLevel2 + "</div></div>";
                see_users += "<div class='col-auto pt-3 ml-n2'>";
                see_users += "<h5 class='text-secondary font-weight-bold'>" + user.primeiro_nome + " " + user.ultimo_nome + "</h5>";
                see_users += "<label class='text-black'>" + user.email + "</label>";
                see_users += "</div></div></div></div></a></li>";

            }
            see_users += "</ul>";
        }

        //envia a para a pagina
        show_requests_sent.innerHTML = see_users;


    }
    //chama a função fetchAsync()
    fetchAsync().then(data => console.log("done")).catch(reason => console.log(reason.message));
}

  /*  
async function aceitarPedido() {
    event.preventDefault();
    //So pra testar! Tenho que descobrir como ir buscar o id
    id_perfil=localStorage.getItem("id_perfil");
    fetch(url + '/users/friends-list/accept-requests/' + id_perfil, {
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      method: 'PUT',
      //body: JSON.stringify(data),
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
          alert("Pedido de amizade aceite!");
          location.reload();
        }
        else {
          alert("Ocorreu um erro!");
          console.log(result);
          //swal({ title: `${result.value.userMessage.message.pt}` });
        }
      });

  };
*/



 
    
/*
    async function apagarPedido() {
        event.preventDefault();
        id_perfil=localStorage.getItem("id_perfil");
       // id_perfil1=id_perfil.substring(2,id_perfil.length);
        //alert(id_perfil1);
            fetch(url + '/users/friends-list/' + id_perfil1, {
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
                        alert("Apagado com sucesso!");
                        window.location.replace("./pedidos.html");
                    }
                    else {
                        alert("Ocorreu um erro!");
                        console.log(result);
                        //swal({ title: `${result.value.userMessage.message.pt}` });
                    }
                });
        
    };*/

};


function GFG_clickUsers(clicked) {
    //alert(clicked); 
    localStorage.setItem("id_perfil", clicked);
}

function GFG_clickAceitar(clicked) { 
    //alert(clicked); 
    localStorage.setItem("id_perfil", clicked);
        event.preventDefault();
        //So pra testar! Tenho que descobrir como ir buscar o id
        id_perfil=localStorage.getItem("id_perfil");
        fetch(url + '/users/friends-list/accept-requests/' + id_perfil, {
          headers: {
            'Content-Type': 'application/json'
          },
          mode: 'cors',
          method: 'PUT',
          //body: JSON.stringify(data),
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
                'Pedido de amizade aceite!',
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

function GFG_clickRejeitar(clicked) { 
    //alert(clicked); 
    localStorage.setItem("id_perfil", clicked);

    //let x=ids[i].substring( 1 , ids[i].length );
        event.preventDefault();
        id_perfil=localStorage.getItem("id_perfil");
       // id_perfil1=id_perfil.substring(2,id_perfil.length);
        //alert(id_perfil1);
            fetch(url + '/users/friends-list/' + id_perfil, {
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
                            window.location.replace("./pedidos.html");
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