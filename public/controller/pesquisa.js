window.onload = function () {
    search_fields();
    search_events();
    display_users();
    display_teams();
    
    if(performance.navigation.type == 2){
            location.reload(true);
    }

    function search_fields() {
        async function fetchAsync() {

            const response = await fetch(url + '/play-spaces');
            const search_fields = await response.json();
            console.log(search_fields);
            
            const real_search_fields = document.getElementById("real_search_fields");

            let true_search_fields = "";

/*
            const search_fields = [
                {
                    field_name: "PlaySoccer",
                    locality: "Fafe",
                    stars: 4.5,
                    type: "Relva, indor",
                    img: "img/campos/imagem-campo.jpg",
                    price: 25,
                    extra: {
                        wi_fi: "yes",
                        equipment: "yes",
                        shower: "yes",
                        bar: "no",
                        park: "yes"
                    }
                },
                {
                    field_name: "GreenPlay",
                    locality: "Braga",
                    stars: 3,
                    type: "Relva, outdor",
                    img: "img/campos/imagem-campo2.jpg",
                    price: 20,
                    extra: {
                        wi_fi: "no",
                        equipment: "yes",
                        shower: "yes",
                        bar: "no",
                        park: "no"
                    }
                },
                {
                    field_name: "Marrocos",
                    locality: "Felgueiras",
                    stars: 2.5,
                    type: "Piso, indor",
                    img: "img/campos/imagem-campo6.jpg",
                    price: 15,
                    extra: {
                        wi_fi: "no",
                        equipment: "yes",
                        shower: "yes",
                        bar: "no",
                        park: "yes"
                    }
                },
                {
                    field_name: "Soccer",
                    locality: "Vizela",
                    stars: 1,
                    type: "Terra, outdor",
                    img: "img/campos/imagem-campo5.jpg",
                    price: 12.5,
                    extra: {
                        wi_fi: "no",
                        equipment: "yes",
                        shower: "no",
                        bar: "no",
                        park: "no"
                    }
                }
            ]
*/



            //criação da demonstração de resultados recebidos
            if (search_fields == "") {
                true_search_fields += "<div class='w-100'><div class='text-black-50 text-center'>Não há campos disponiveis</div></div>";
            } else {
                true_search_fields += "<ul class='px-0 w-100 mySlides fade2' style='display: block;margin-bottom: -10px;margin-top: -15px;'>";
                for (const field of search_fields) {

                    true_search_fields += "<li class='myfilter2 text-white col-xl-3 col-md-6 margSearchFields2'>";
                    true_search_fields += "<a id='" + field.idEspaco + "' onClick='GFG_clickSpaces(this.id)' href='campo.html' class='card shadow h-100 py-0'>";
                    true_search_fields += "<div class='card-body2 w-100'>";
                    true_search_fields += "<div class='row no-gutters align-items-center'><div class='col-auto ml-3'>";
                    true_search_fields += "<div><img class='imagem' src='" + field.Avatar_Participantes + "'></div>";
                    true_search_fields += "<div class='myicons inline mt-2' style='margin-left: 20px;'>";

                    if (field.Avaliacao_Participantes > 0 && field.Avaliacao_Participantes <= 0.5) {
                        true_search_fields += "<img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if (field.Avaliacao_Participantes > 0.5 && field.Avaliacao_Participantes <= 1) {
                        true_search_fields += "<img src='img/1star.png' class='stars-16px mx-1'>";
                    }
                    if (field.Avaliacao_Participantes > 1 && field.Avaliacao_Participantes <= 1.5) {
                        true_search_fields += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if (field.Avaliacao_Participantes > 1.5 && field.Avaliacao_Participantes <= 2) {
                        true_search_fields += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                    }
                    if (field.Avaliacao_Participantes > 2 && field.Avaliacao_Participantes <= 2.5) {
                        true_search_fields += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if (field.Avaliacao_Participantes > 2.5 && field.Avaliacao_Participantes <= 3) {
                        true_search_fields += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                    }
                    if (field.Avaliacao_Participantes > 3 && field.Avaliacao_Participantes <= 3.5) {
                        true_search_fields += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if (field.Avaliacao_Participantes > 3.5 && field.Avaliacao_Participantes <= 4) {
                        true_search_fields += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                    }
                    if (field.Avaliacao_Participantes > 4 && field.Avaliacao_Participantes <= 4.5) {
                        true_search_fields += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if (field.Avaliacao_Participantes > 4.5 && field.Avaliacao_Participantes <= 5) {
                        true_search_fields += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                    }

                    true_search_fields += "</div></div><div class='ml-5'><h5 class='text-secondary'>" + field.Nome + "</h5>";
                    true_search_fields += "<ul class='text-primary pl-4 mb-2'>";
                    true_search_fields += "<li>" + field.Localizacao + "</li><li>" + field.Preco + "€" + "</li></ul>";
                    true_search_fields += "<div class='container mt-2 px-0'>";
                   // true_search_fields += "<div class='myicons inline mt-2 text-center'>" + field.Preco + "€";
/*
                    if (field.extra.wi_fi === "yes") {
                        true_search_fields += "<i class='fas fa-wifi ml-3 mx-1'></i>";
                    } else if (field.extra.wi_fi === "no") {
                        true_search_fields += "<i class='fas fa-wifi ml-3 mx-1 text-black-50'></i>";
                    }


                    if (field.extra.equipment === "yes") {
                        true_search_fields += "<i class='fas fa-tshirt mx-1'></i>";
                    } else if (field.extra.equipment === "no") {
                        true_search_fields += "<i class='fas fa-tshirt mx-1 text-black-50'></i>";
                    }


                    if (field.extra.shower === "yes") {
                        true_search_fields += "<i class='fas fa-shower mx-1'></i>";
                    } else if (field.extra.shower === "no") {
                        true_search_fields += "<i class='fas fa-shower mx-1 text-black-50'></i>";
                    }


                    if (field.extra.bar === "yes") {
                        true_search_fields += "<i class='fas fa-cocktail mx-1'></i>";
                    } else if (field.extra.bar === "no") {
                        true_search_fields += "<i class='fas fa-cocktail mx-1 text-black-50'></i>";
                    }


                    if (field.extra.park === "yes") {
                        true_search_fields += "<i class='fas fa-car mx-1'></i>";
                    } else if (field.extra.park === "no") {
                        true_search_fields += "<i class='fas fa-car mx-1 text-black-50'></i>";
                    }
*/

                    true_search_fields += "</div></div></div></div></div></a></li>";

                }
                true_search_fields += "</ul>";
            }

            //envia a para a pagina
            real_search_fields.innerHTML = true_search_fields;


        }
        //chama a função fetchAsync()
        fetchAsync().then(data => console.log("done")).catch(reason => console.log(reason.message));
    }

    //-------------------------------------------------------------------------------------------------------------------------------------

    function search_events() {
        async function fetchAsync() {
            id_inscricao=localStorage.getItem("id_inscricao");
            const response = await fetch(url + '/users/registrations/lists/events');
            const search_events = await response.json();
            console.log(search_events);
            const real_search_events = document.getElementById("real_search_events");
  
            let true_search_events = "";

/*          
            const search_events = [
                {
                    event_name: "Evento XPTO",
                    field_name: "PlaySoccer",
                    locality: "Fafe",
                    stars: 4.5,
                    img: "img/campos/imagem-campo2.jpg",
                    day: "Wed Dec 31 2019 22:02:09 GMT+0000",
                    amount: "6/10",
                    price_p: 2.5,
                },
                {
                    event_name: "Evento Alpha",
                    field_name: "GreenPlay",
                    locality: "Braga",
                    stars: 3.4,
                    img: "img/campos/imagem-campo4.jpg",
                    day: "Wed Dec 31 2019 22:02:09 GMT+0000",
                    amount: "4/10",
                    price_p: 1.5,
                },
                {
                    event_name: "Evento Beta",
                    field_name: "SoccerStar",
                    locality: "Guimarães",
                    stars: 2,
                    img: "img/campos/imagem-campo5.jpg",
                    day: "Wed Dec 31 2019 22:02:09 GMT+0000",
                    amount: "8/10",
                    price_p: 3,
                },
                {
                    event_name: "Evento Zen",
                    field_name: "PlayFun",
                    locality: "Porto",
                    stars: 3.5,
                    img: "img/campos/imagem-campo6.jpg",
                    day: "Wed Dec 31 2019 22:02:09 GMT+0000",
                    amount: "5/10",
                    price_p: 4,
                }
            ]

*/


            //criação da demonstração de resultados recebidos
            if (search_events.status == "404") {
                true_search_events += "<div class='w-100'><div class='text-black-50' style='margin-left: 100px; margin-top: 40px;'>Não há eventos disponiveis</div></div>";
            } else {
                true_search_events += "<ul class='myfilter pt-4' style='padding-left: 0px; width: 400px; display: block;margin-bottom: -10px;'>";
                for (const event of search_events) {

                    true_search_events += "<li class='myfilter margSearchFields text-white col-xl-3 col-md-6'>";
                    true_search_events += "<a id='" + event.id_inscricao + "' onClick='GFG_clickEvents(this.id)' href='entrar-evento.html' class='card shadow h-100 py-0 pl-1'>";
                    true_search_events += "<div class='card-body2 w-100 row'>";
                    true_search_events += "<div class='row no-gutters align-items-center pl-1'><div class='col-auto ml-3'>";
                    true_search_events += "<div><img class='imagem' src='" + event.Avatar_Participantes + "'></div>";
                    true_search_events += "<div class='myicons inline mt-2' style='margin-left: 20px;'>";

                    if (event.stars > 0 && event.stars <= 0.5) {
                        true_search_events += "<img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if (event.stars > 0.5 && event.stars <= 1) {
                        true_search_events += "<img src='img/1star.png' class='stars-16px mx-1'>";
                    }
                    if (event.stars > 1 && event.stars <= 1.5) {
                        true_search_events += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if (event.stars > 1.5 && event.stars <= 2) {
                        true_search_events += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                    }
                    if (event.stars > 2 && event.stars <= 2.5) {
                        true_search_events += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if (event.stars > 2.5 && event.stars <= 3) {
                        true_search_events += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                    }
                    if (event.stars > 3 && event.stars <= 3.5) {
                        true_search_events += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if (event.stars > 3.5 && event.stars <= 4) {
                        true_search_events += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                    }
                    if (event.stars > 4 && event.stars <= 4.5) {
                        true_search_events += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if (event.stars > 4.5 && event.stars <= 5) {
                        true_search_events += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                    }

                    true_search_events += "</div></div><div class='ml-5'><h5 class='text-secondary'>" + event.Localizacao + "</h5>";
                    true_search_events += "<div class='text-primary mt-2'>" + event.Nome + "</div>";
                    true_search_events += "<div class='row pl-1'><div class='col text-center'>";

                    let dayEvent = new Date(event.Data);
                    true_search_events += "<label class='text-xs font-weight-bold text-primary text-uppercase mb-1'>" + dayEvent.getDate() + "-" + (dayEvent.getMonth() + 1) + "-" + dayEvent.getFullYear() + "</label>";
                    true_search_events += "</div><div class='col text-center'>";
                    true_search_events += "<label class='text-xs font-weight-bold text-primary text-uppercase mb-1'>" + ("0" + dayEvent.getHours()).slice(-2) + ":" + ("0" + dayEvent.getMinutes()).slice(-2) + "h</label>";
                    true_search_events += "</div><div class='w-100'></div><div class='col text-center'><i class='fas fa-user text-primary mr-2'></i>";
                    true_search_events += "<label class='text-xs font-weight-bold text-primary text-uppercase mb-1'>" + event.numero_participantes + "/10" + "</label>";
                    true_search_events += "</div><div class='col text-center'>";
                    true_search_events += "<label class='text-xs font-weight-bold text-primary text-uppercase mb-1'>"/* + event.pagamento*/ + "</label>";
                    true_search_events += "</div></div></div></div></div></a></li>";


                }
                true_search_events += "</ul>";
            }

            //envia a para a pagina
            real_search_events.innerHTML = true_search_events;


        }
        //chama a função fetchAsync()
        fetchAsync().then(data => console.log("done")).catch(reason => console.log(reason.message));
    }

    //------------------------------------------------------------------------------------------------------------------

    function display_users() {
        async function fetchAsync() {

            const response = await fetch(url + '/users');
            const users = await response.json();
            console.log(users);
            const show_users = document.getElementById("show_users");

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

            id_logado = localStorage.getItem("id_user");

            //criação da demonstração de resultados recebidos
            if (users == "") {
                see_users += "<div class='w-100'><div class='text-black-50 text-center'>Ainda não tens amigos</div></div>";
            } else {
                see_users += "<ul class='w-100' style='list-style-type: none;'>";
                for (const user of users) {
                    if (user.id_user == id_logado) {
                        console.log("este é o logado");
                    } else {

                        see_users += "<li class='myfilter4 text-white col-xl-3 col-md-6 mb-3 ml-n1'>";
                        see_users += "<a id='" + user.id_user + "' onClick='GFG_clickUsers(this.id)' href='perfil-outra.html'><div class='card shadow'><div class='card-body2'>";
                        see_users += "<div class='row px-1'><div class='col-2 mr-3'>";

                        if (user.img == "") {
                            see_users += "<img class='rounded-circle img-show-profile' src='img/perfil/perfil5.jpg'></div><div class='col-3 pt-2'>";
                        } else {
                            see_users += "<img class='rounded-circle img-show-profile' src='" + user.avatar + "'></div><div class='col-3 pt-2 ml-n2'>";
                        }

                        let trueLevel = parseInt( user.pontos / 60) ;
                        see_users += "<img class='img-level' src='img/nivel.png'><div class='level'>" + trueLevel + "</div></div>";
                        see_users += "<div class='col-auto pt-3 ml-n2'>";
                        see_users += "<h5 class='text-secondary font-weight-bold'>" + user.primeiro_nome + " " + user.ultimo_nome + "</h5>";
                        see_users += "<label class='text-black small'>" + user.email + "</label>";
                        see_users += "</div></div></div></div></a></li>";
                    }
                }
                see_users += "</ul>";
            }

            //envia a para a pagina
            show_users.innerHTML = see_users;


        }
        //chama a função fetchAsync()
        fetchAsync().then(data => console.log("done")).catch(reason => console.log(reason.message));
    }

    //--------------------------------------------------------------------------------------------------------------

    function display_teams() {
        async function fetchAsync() {

            const response = await fetch(url + '/teams');
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
            if (teams == "") {
                see_teams += "<div class='w-100'><div class='text-black-50 text-center'>Ainda não tens nenhuma equipa</div></div>";
            } else {
                see_teams += "<ul class='ml-n1' style='list-style-type: none;'>";
                for (const team of teams) {
                    see_teams += "<li class='myfilter5 text-white col-xl-3 col-md-6 mb-3'>";
                    see_teams += "<a href='Equipa.html' id='" + team.id_equipa + "' onClick='GFG_clickTeams(this.id)' class='card shadow h-100 py-0'><div class='card-body2'>";
                    see_teams += "<div class='row no-gutters align-items-center'><div class='col-auto'>";

                    if (team.img == "") {
                        see_teams += "<div><img class='img-show-team' src='img/equipas/equipa.png'></div></div>";
                    } else {
                        see_teams += "<div><img class='img-show-team' src='" + team.avatar + "'></div></div>";
                    }

                    see_teams += "<div class='col-6 ml-4'><h4 class='text-secondary ml-5'>" + team.nome_equipa + "</h4>";
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





};

function GFG_clickTeams(clicked) {
    //alert(clicked);
    localStorage.setItem("id_equipa", clicked);
}

function GFG_clickUsers(clicked) {
    //alert(clicked); 
    localStorage.setItem("id_perfil", clicked);
}
function GFG_clickSpaces(clicked) {
    //alert(clicked); 
    localStorage.setItem("id_espaço", clicked);
}
function GFG_clickEvents(clicked) {
    //alert(clicked); 
    localStorage.setItem("id_inscricao", clicked);
}