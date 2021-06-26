window.onload = function () {
    display_teams();

    if(performance.navigation.type == 2){
        location.reload(true);
     }

    const botao = document.getElementsByClassName("card-body2 w-100");
    //console.log(HTMLCollection[0]);
    //const botaoEditar = document.getElementById("edit_teams");
    //botaoEditar.addEventListener("click", display_teams);
    /*  for (var i = 0 ; i < botao.length; i++) {
          //alert("Entrei");
          botao[i].addEventListener("click", function(){
          localStorage.setItem("id_equipa", botao[i].id);
          alert("Com sucesso!");
          break;
          }); 
       }*/

    function display_teams() {
        async function fetchAsync() {
            id_user = localStorage.getItem("id_user");
            const response = await fetch(url + '/users/' + id_user + '/user-teams');
            //const response = await fetch(url + '/teams');
            const teams = await response.json();
            console.log(teams);
            const show_teams = document.getElementById("show_teams");

            let see_teams = "";

            /*
                        const teams = [
                            {
                                name: "PWALPHA",
                                img: "img/equipas/equipa2.jpg"
                            },
                            {
                                name: "Doudos da Cabeça",
                                img: "img/equipas/equipa1.jpg"
                            },
                            {
                                name: "Carecas",
                                img: "img/equipas/equipa3.jpg"
                            },
                            {
                                name: "Nabos",
                                img: "img/equipas/equipa4.jpg"
                            },
                            {
                                name: "Fafenses",
                                img: "img/equipas/equipa5.jpg"
                            },
                            {
                                name: "Goleadores",
                                img: ""
                            }
                        ]
            
            */


            //criação da demonstração de resultados recebidos
            if (teams.status == "404") {
                see_teams += "<div class='w-100'><div class='text-black-50 text-center'>Ainda não tens nenhuma equipa</div></div>";
            } else {
                see_teams += "<ul class='px-2 w-100' id='ListOfTeams' style='list-style-type: none;'>";
                for (const team of teams) {

                    see_teams += "<li class='myfilter text-white col-xl-3 col-md-6 mb-3'>";
                    see_teams += "<a href='Equipa.html' id='" + team.id_equipa + "' onClick='GFG_click(this.id)' class='card shadow h-100 py-0'><div class='card-body2 w-100'>";
                    see_teams += "<div class='row no-gutters align-items-center'><div class='col-auto'>";

                    if (team.img == "") {
                        see_teams += "<div><img class='img-show-team' src='img/equipas/equipa.png'></div></div>";
                    } else {
                        see_teams += "<div><img class='img-show-team' src='" + team.avatar + "'></div></div>";
                    }

                    see_teams += "<div class='col-6 ml-4'><h4 class='text-secondary ml-4'>" + team.nome_equipa + "</h4>";
                    see_teams += "</div></div></div></a></li>";
                }
                see_teams += "</ul>";
            }

            //envia a para a pagina
            show_teams.innerHTML = see_teams;


        }
        //chama a função fetchAsync()
        fetchAsync().then(data => console.log("done")).catch(reason => console.log(reason.message));
    }


    //----------------------------------------------------------------------------------------------
    const botaoCriarEquipa = document.getElementById("botaoEditar");
    botaoCriarEquipa.addEventListener("click", criarEquipa);

    async function criarEquipa() {
        event.preventDefault();
        var data = {};
        data.nome_equipa = document.getElementById("teamname").value;
        data.id_user = localStorage.getItem("id_user");

        

        if(valida_nome(data.nome_equipa)){
            fetch(url + '/teams', {
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
                if (result.msg == "success") {
                    //swal({ title: "Autenticação feita com sucesso!" });
                    //+ result.value.message.success);S
                    Swal.fire(
                        'Equipa criada com sucesso!',
                        '',
                        'success'
                      ).then( () => {
                        window.location.replace("./Equipas.html");
                    })
      
                    
                }
                else {
                    if(result[0].msg == "Insira um nome entre 2 a 20 letras!"){
                        Swal.fire(
                            'Insira um nome entre 2 a 20 letras!',
                            '',
                            'warning'
                          )  
                        document.getElementById("teamname").value="";
                    }
                    else{
                    Swal.fire(
                        'Ocorreu um erro!',
                        '',
                        'error'
                      )
                      document.getElementById("teamname").value="";
                    console.log(result);
                    //swal({ title: `${result.value.userMessage.message.pt}` });
                }
                }
            });
        }else{
            Swal.fire(
                'Nome da equipa apenas pode levar letras!',
                '',
                'warning'
              )
        }

    };

    //--------------------------------------------------------------------------------------------------------------

    const botaoApagarEquipa = document.getElementById("remove_teams");

    botaoApagarEquipa.addEventListener("click", apagarEquipa);

    async function apagarEquipa() {
        event.preventDefault();
        getIds();
        console.log(ids);
        for (var i = 0; i < ids.length; i++) {
            let x = ids[i].substring(1, ids[i].length);
            id_equipa = x;
            console.log(id_equipa);

            id_user = localStorage.getItem("id_user");
            const response = await fetch(url + '/users/' + id_user + '/user-teams');
            //const response = await fetch(url + '/teams');
            const teams = await response.json();
            console.log(teams);

            for (team of teams) {
                if (team.id_equipa == id_equipa) {
                    if (team.lider == 0) {
                        Swal.fire(
                            'Não podes apagar uma equipa da qual não és o lider!',
                            '',
                            'warning'
                          )
                    } else {

                        fetch(url + '/teams/' + id_equipa, {
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
                                        'Apagada com sucesso!',
                                        '',
                                        'success'
                                      ).then( () => {
                                        window.location.replace("./Equipas.html");
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
                }
            }


        }
    };






};







//-------------------------------------------------------------ToCheck--------------------------------------------------------

let wasPressed = true;
async function toCheck() {

    if (wasPressed === true) {

        id_user = localStorage.getItem("id_user");
        const response = await fetch(url + '/users/' + id_user + '/user-teams');
        //const response = await fetch(url + '/teams');
        const teams = await response.json();
        console.log(teams)
        const show_teams = document.getElementById("show_teams");

        let see_teams = "";


        /*
                const teams = [
                    {
                        name: "PWALPHA",
                        img: "img/equipas/equipa2.jpg"
                    },
                    {
                        name: "Doudos da Cabeça",
                        img: "img/equipas/equipa1.jpg"
                    },
                    {
                        name: "Carecas",
                        img: "img/equipas/equipa3.jpg"
                    },
                    {
                        name: "Nabos",
                        img: "img/equipas/equipa4.jpg"
                    },
                    {
                        name: "Fafenses",
                        img: "img/equipas/equipa5.jpg"
                    },
                    {
                        name: "Goleadores",
                        img: ""
                    }
                ]
        */



        //criação da demonstração de resultados recebidos
        if (teams == "404") {
            see_teams += "<div class='w-100'><div class='text-black-50 text-center'>Ainda não tens amigos</div></div>";
        } else {
            see_teams += "<div class='w-100'><div class='text-black-50 text-center'>Selecione o que pretende alterar</div></div>";
            see_teams += "<div id='checkboxes' class='w-100'>";
            see_teams += "<ul id='selecList' class='px-2 w-100' style='list-style-type: none;'>";

            let test = 0;
            for (const team of teams) {

                see_teams += "<li class='myfilter text-white col-xl-3 col-md-6'>";

                test += 1;
                see_teams += "<input type='checkbox' name='sGroup' value='" + team.id_equipa + "' id='s" + team.id_equipa + "'/>"; //Assim o valor é o id_equipa
                see_teams += "<label class='whatever7' for='s" + team.id_equipa + "'>";

                see_teams += "<div class='card shadow h-100 py-0'><div class='card-body2 w-100'>";
                see_teams += "<div class='row no-gutters align-items-center'><div class='col-auto'>";

                if (team.img == "") {
                    see_teams += "<div><img class='img-show-team' src='img/equipas/equipa.png'></div></div>";
                } else {
                    see_teams += "<div><img class='img-show-team' src='" + team.avatar + "'></div></div>";
                }

                see_teams += "<div class='col-6 ml-4'><h4 class='text-secondary ml-4'>" + team.nome_equipa + "</h4>";
                see_teams += "</div></div></div></div></label></li>";
            }
            see_teams += "</ul></div>";
        }

        //envia a para a pagina
        show_teams.innerHTML = see_teams;


        wasPressed = false;
    } else {


        id_user = localStorage.getItem("id_user");
        const response = await fetch(url + '/users/' + id_user + '/user-teams');
        //const response = await fetch(url + '/teams');
        const teams = await response.json();
        console.log(teams)
        const show_teams = document.getElementById("show_teams");

        let see_teams = "";


        /*
                const teams = [
                    {
                        name: "PWALPHA",
                        img: "img/equipas/equipa2.jpg"
                    },
                    {
                        name: "Doudos da Cabeça",
                        img: "img/equipas/equipa1.jpg"
                    },
                    {
                        name: "Carecas",
                        img: "img/equipas/equipa3.jpg"
                    },
                    {
                        name: "Nabos",
                        img: "img/equipas/equipa4.jpg"
                    },
                    {
                        name: "Fafenses",
                        img: "img/equipas/equipa5.jpg"
                    },
                    {
                        name: "Goleadores",
                        img: ""
                    }
                ]
        
        */


        //criação da demonstração de resultados recebidos
        if (teams == "") {
            see_teams += "<div class='w-100'><div class='text-black-50 text-center'>Ainda não tens nenhuma equipa</div></div>";
        } else {
            see_teams += "<ul class='px-2 w-100' style='list-style-type: none;'>";
            for (const team of teams) {

                see_teams += "<li class='myfilter text-white col-xl-3 col-md-6 mb-3'>";
                see_teams += "<a href='Equipa.html' id='" + team.id_equipa + "' onClick='GFG_click(this.id)' class='card shadow h-100 py-0'><div class='card-body2 w-100'>";
                see_teams += "<div class='row no-gutters align-items-center'><div class='col-auto'>";

                if (team.img == "") {
                    see_teams += "<div><img class='img-show-team' src='img/equipas/equipa.png'></div></div>";
                } else {
                    see_teams += "<div><img class='img-show-team' src='" + team.avatar + "'></div></div>";
                }

                see_teams += "<div class='col-6 ml-4'><h4 class='text-secondary ml-4'>" + team.nome_equipa + "</h4>";
                see_teams += "</div></div></div></a></li>";
            }
            see_teams += "</ul>";
        }

        //envia a para a pagina
        show_teams.innerHTML = see_teams;

        wasPressed = true;
    }
};

//-------------------------------getIds---------------------------------------------
let ids = [];
function getIds() {
     ids = [];
    const selecList = document.getElementById("selecList");
    for (let elem of selecList.children) {
        if (elem.firstChild.checked) {
            ids.push(elem.firstChild.id);
            
        }
    }
    console.log(ids);
}

//----------------------------------

function GFG_click(clicked) {
    //alert(clicked); 
    localStorage.setItem("id_equipa", clicked);
}

function valida_nome(elemento) {
    var filter_nome = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/;
    if (!filter_nome.test(elemento)) {
      return false;
    } else {
      return true;
    }
  }