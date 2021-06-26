window.onload = function () {
    display_sponsor();
    display_reserves();
   // display_recomended();
    close_to_you();
    recently_visited();
  //  by_friends();
    display_notification();
    
    if(performance.navigation.type == 2){
            location.reload(true);
    }

    function display_sponsor() {
        async function fetchAsync() {

            //const response = await fetch('http://localhost:8080/users');
            //const sponsor = await response.json();
            let sponsers = ['img/sponsors/dafiti.jpg', 'img/sponsors/img.png', 'img/sponsors/olamundo.jpeg', 'img/sponsors/ola1.jpeg', 'img/sponsors/image1.png', 'img/sponsors/image2.png', 'img/sponsors/image3.png',  'img/sponsors/image3.png',  'img/sponsors/image4.png', 'img/sponsors/image5.png', 'img/sponsors/image6.png']; 
            const showSponsor = document.getElementById("showSponsor");

            let see_sponsor = "";


            //const sponsor = "img/sponsors/image1.png";
            var sponsor = sponsers[Math.floor(Math.random() * sponsers.length)];
            //console.log(sponsor);
            //console.log("ola");

            //criação da demonstração de resultados recebidos
            see_sponsor += "<img class='img1' src='"+sponsor+"'>";


            //envia a para a pagina
            showSponsor.innerHTML = see_sponsor;


        }
        //chama a função fetchAsync()
        fetchAsync().then(data => console.log("done")).catch(reason => console.log(reason.message));
    }





//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//Display reserves

    function display_reserves() {
        async function fetchAsync() {
            id_user=localStorage.getItem("id_user");
            const response = await fetch(url + '/users/' + id_user + '/registrations');
            const reserves = await response.json();
            console.log(reserves);
            
            const showReserves = document.getElementById("showReserves");

            let see_reservers = "";
/*
            const reserves = [
               {
                    img: "img/campos/imagem-campo.jpg",
                    field: "Playsoccer",
                    day: "Wed Dec 31 2019 22:02:09 GMT+0000",
                    locality: "Fafe",
                    stars: 4.5,
                    extras: {
                        wi_fi: "yes",
                        equipment: "yes",
                        shower: "yes",
                        bar: "yes",
                        park: "yes"
                    }
                },
                {
                    img: "img/campos/imagem-campo3.jpg",
                    field: "GreenPlay",
                    day: "Wed Dec 31 2019 22:02:09 GMT+0000",
                    locality: "Braga",
                    stars: 3,
                    extras: {
                        wi_fi: "yes",
                        equipment: "yes",
                        shower: "yes",
                        bar: "no",
                        park: "yes"
                    }
                },
                {
                    img: "img/campos/imagem-campo4.jpg",
                    field: "Soccer",
                    day: "Wed Dec 31 2019 22:02:09 GMT+0000",
                    locality: "Lisboa",
                    stars: 3.5,
                    extras: {
                        wi_fi: "no",
                        equipment: "yes",
                        shower: "yes",
                        bar: "no",
                        park: "yes"
                    }
                },
                {
                    img: "img/campos/imagem-campo5.jpg",
                    field: "FunnyTime",
                    day: "Wed Dec 31 2019 22:02:09 GMT+0000",
                    locality: "Porto",
                    stars: 2.5,
                    extras: {
                        wi_fi: "no",
                        equipment: "yes",
                        shower: "yes",
                        bar: "no",
                        park: "yes"
                    }
                },
                {
                    img: "img/campos/imagem-campo7.jpg",
                    field: "SoccerStar",
                    day: "Wed Dec 31 2019 22:02:09 GMT+0000",
                    locality: "Leiria",
                    stars: 4,
                    extras: {
                        wi_fi: "yes",
                        equipment: "yes",
                        shower: "yes",
                        bar: "yes",
                        park: "yes"
                    }
                }
            ]
*/

            //criação da demonstração de resultados recebidos
            if (reserves == "") {
                see_reservers += "<header>Próximas reservas:</header>";
                see_reservers += "<div class='w-100'><div class='text-black-50 text-center'>Ainda não efetuaste nenhuma reserva</div></div>";
            } else {
                see_reservers += "<header>Próximas reservas:</header>";
                see_reservers += "<div class='box'>";
                for (const reserve of reserves) {
                    see_reservers += "<a href='alugado.html' class='card-1' id='"+reserve.id_inscricao+"' onclick='GFG_inscricao(this.id)'><div>";
                    see_reservers += "<img class='img2' src='"+reserve.Avatar_Participantes+"'></div>";
                    see_reservers += "<div class='row'><div class='col-13'>";
                    see_reservers += "<div class='small-line'>"+reserve.Localizacao+"</div>";
                    see_reservers += "<div class='medium-line'>"+reserve.Nome+"</div><div class='myicons2 inline text-left'>";

/*
                    if (reserve.extras.wi_fi === "yes") {
                        see_reservers += "<i class='fas fa-wifi mx-1'></i>";
                    } else if (reserve.extras.wi_fi === "no") {
                        see_reservers += "<i class='fas fa-wifi mx-1 text-black-50'></i>";
                    }


                    if (reserve.extras.equipment === "yes") {
                        see_reservers += "<i class='fas fa-tshirt mx-1'></i>";
                    } else if (reserve.extras.equipment === "no") {
                        see_reservers += "<i class='fas fa-tshirt mx-1 text-black-50'></i>";
                    }


                    if (reserve.extras.shower === "yes") {
                        see_reservers += "<i class='fas fa-shower mx-1'></i>";
                    } else if (reserve.extras.shower === "no") {
                        see_reservers += "<i class='fas fa-shower mx-1 text-black-50'></i>";
                    }


                    if (reserve.extras.bar === "yes") {
                        see_reservers += "<i class='fas fa-cocktail mx-1'></i>";
                    } else if (reserve.extras.bar === "no") {
                        see_reservers += "<i class='fas fa-cocktail mx-1 text-black-50'></i>";
                    }


                    if (reserve.extras.park === "yes") {
                        see_reservers += "<i class='fas fa-car mx-1'></i>";
                    } else if (reserve.extrass.park === "no") {
                        see_reservers += "<i class='fas fa-car mx-1 text-black-50'></i>";
                    }
*/
                    let dayEvent = new Date(reserve.Data);
                    see_reservers += "</div></div><div class='col-14'>";
                    see_reservers += "<div class='small-line'>"+dayEvent.getDate()+"-"+(dayEvent.getMonth()+1) +"-"+dayEvent.getFullYear()+"</div>";
                    see_reservers += "<div class='medium-line'>"+ ("0" + dayEvent.getHours()).slice(-2) + ":" + ("0" + dayEvent.getMinutes()).slice(-2) +"</div><div class='myicons2 inline'>";

                    if (reserve.Avaliacao_Participantes > 0 && reserve.Avaliacao_Participantes <= 0.5) {
                        see_reservers += "<img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if (reserve.Avaliacao_Participantes > 0.5 && reserve.Avaliacao_Participantes <= 1) {
                        see_reservers += "<img src='img/1star.png' class='stars-16px mx-1'>";
                    }
                    if (reserve.Avaliacao_Participantes > 1 && reserve.Avaliacao_Participantes <= 1.5) {
                        see_reservers += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if (reserve.Avaliacao_Participantes > 1.5 && reserve.Avaliacao_Participantes <= 2) {
                        see_reservers += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                    }
                    if (reserve.Avaliacao_Participantes > 2 && reserve.Avaliacao_Participantes <= 2.5) {
                        see_reservers += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if (reserve.Avaliacao_Participantes > 2.5 && reserve.Avaliacao_Participantes <= 3) {
                        see_reservers += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                    }
                    if (reserve.Avaliacao_Participantes > 3 && reserve.Avaliacao_Participantes <= 3.5) {
                        see_reservers += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if (reserve.Avaliacao_Participantes > 3.5 && reserve.Avaliacao_Participantes <= 4) {
                        see_reservers += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                    }
                    if (reserve.Avaliacao_Participantes > 4 && reserve.Avaliacao_Participantes <= 4.5) {
                        see_reservers += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if (reserve.Avaliacao_Participantes > 4.5 && reserve.Avaliacao_Participantes <= 5) {
                        see_reservers += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                    }

                    see_reservers += "</div></div></div></a>";                   
                }
                see_reservers += "</div>";
            }

            //envia a para a pagina
            showReserves.innerHTML = see_reservers;

        }
        //chama a função fetchAsync()
        fetchAsync().then(data => console.log("done")).catch(reason => console.log(reason.message));
    }



//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Display recomended

function display_recomended() {
    async function fetchAsync() {

        id_user=localStorage.getItem("id_user");
        const response = await fetch(url + '/users/' + id_user + '/registrations');
        const recomended = await response.json();
        console.log(recomended);
        const showRecomended = document.getElementById("showRecomended");

        let see_recomended = "";
/*
        const recomended = [
           {
                img: "img/campos/imagem-campo7.jpg",
                field: "Marrocos",
                city: "Peninsula",
                price: 10,
                locality: "Marrocos",
                stars: 1.5,
                extras: {
                    wi_fi: "no",
                    equipment: "no",
                    shower: "yes",
                    bar: "no",
                    park: "yes"
                }
            },
            {
                img: "img/campos/imagem-campo2.jpg",
                field: "PlayandPlay",
                city: "Beirão",
                price: 15,
                locality: "Lisboa",
                stars: 3,
                extras: {
                    wi_fi: "yes",
                    equipment: "yes",
                    shower: "yes",
                    bar: "no",
                    park: "yes"
                }
            },
            {
                img: "img/campos/imagem-campo.jpg",
                field: "PlaySoccer",
                city: "Quinchães",
                price: 25,
                locality: "Fafe",
                stars: 4.5,
                extras: {
                    wi_fi: "yes",
                    equipment: "yes",
                    shower: "yes",
                    bar: "yes",
                    park: "yes"
                }
            },
            {
                img: "img/campos/imagem-campo3.jpg",
                field: "BeFun",
                city: "No Sitio",
                price: 20,
                locality: "Porto",
                stars: 3,
                extras: {
                    wi_fi: "no",
                    equipment: "yes",
                    shower: "yes",
                    bar: "no",
                    park: "yes"
                }
            },
            {
                img: "img/campos/imagem-campo6.jpg",
                field: "StarSoccer",
                city: "Ribeira",
                price: 27.5,
                locality: "Coimbra",
                stars: 4,
                extras: {
                    wi_fi: "yes",
                    equipment: "yes",
                    shower: "yes",
                    bar: "yes",
                    park: "yes"
                }
            }
        ]
*/

        //criação da demonstração de resultados recebidos
        if (recomended == "") {
            see_recomended += "<header>Recomendados:</header>";
            see_recomended += "<div class='w-100'><div class='text-black-50 text-center'>Ainda não efetuaste nenhuma reserva</div></div>";
        } else {
            see_recomended += "<header>Recomendados:</header>";
            see_recomended += "<div class='box'>";
            for (const field of recomended) {
                see_recomended += "<a href='campo.html' class='card-1'><div>";
                see_recomended += "<img class='img2' src='"+field.Avatar_Participantes+"'></div>";
                see_recomended += "<div class='row'><div class='col-13'>";
                see_recomended += "<div class='small-line'>"+field.Localizacao+"</div>";
                see_recomended += "<div class='medium-line'>"/*+field.city*/+"</div><div class='myicons2 inline text-left'>";
/*
                if (field.extras.wi_fi === "yes") {
                    see_recomended += "<i class='fas fa-wifi mx-1'></i>";
                } else if (field.extras.wi_fi === "no") {
                    see_recomended += "<i class='fas fa-wifi mx-1 text-black-50'></i>";
                }


                if (field.extras.equipment === "yes") {
                    see_recomended += "<i class='fas fa-tshirt mx-1'></i>";
                } else if (field.extras.equipment === "no") {
                    see_recomended += "<i class='fas fa-tshirt mx-1 text-black-50'></i>";
                }


                if (field.extras.shower === "yes") {
                    see_recomended += "<i class='fas fa-shower mx-1'></i>";
                } else if (field.extras.shower === "no") {
                    see_recomended += "<i class='fas fa-shower mx-1 text-black-50'></i>";
                }


                if (field.extras.bar === "yes") {
                    see_recomended += "<i class='fas fa-cocktail mx-1'></i>";
                } else if (field.extras.bar === "no") {
                    see_recomended += "<i class='fas fa-cocktail mx-1 text-black-50'></i>";
                }


                if (field.extras.park === "yes") {
                    see_recomended += "<i class='fas fa-car mx-1'></i>";
                } else if (field.extrass.park === "no") {
                    see_recomended += "<i class='fas fa-car mx-1 text-black-50'></i>";
                }
*/
                see_recomended += "</div></div><div class='col-14'>";
                see_recomended += "<div class='small-line'>"+field.Nome+"</div>";
                see_recomended += "<div class='medium-line'>"+field.Preco+"€</div><div class='myicons2 inline'>";

                if (field.Avaliacao_Participantes > 0 && field.Avaliacao_Participantes <= 0.5) {
                    see_recomended += "<img src='img/0.5star.png' class='stars-16px mx-1'>";
                }
                if (field.Avaliacao_Participantes > 0.5 && field.Avaliacao_Participantes <= 1) {
                    see_recomended += "<img src='img/1star.png' class='stars-16px mx-1'>";
                }
                if (field.Avaliacao_Participantes > 1 && field.Avaliacao_Participantes <= 1.5) {
                    see_recomended += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                }
                if (field.Avaliacao_Participantes > 1.5 && field.Avaliacao_Participantes <= 2) {
                    see_recomended += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                }
                if (field.Avaliacao_Participantes > 2 && field.Avaliacao_Participantes <= 2.5) {
                    see_recomended += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                }
                if (field.Avaliacao_Participantes > 2.5 && field.Avaliacao_Participantes <= 3) {
                    see_recomended += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                }
                if (field.Avaliacao_Participantes > 3 && field.Avaliacao_Participantes <= 3.5) {
                    see_recomended += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                }
                if (field.Avaliacao_Participantes > 3.5 && field.Avaliacao_Participantes <= 4) {
                    see_recomended += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                }
                if (field.Avaliacao_Participantes > 4 && field.Avaliacao_Participantes <= 4.5) {
                    see_recomended += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                }
                if (field.Avaliacao_Participantes > 4.5 && field.Avaliacao_Participantes <= 5) {
                    see_recomended += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                }

                see_recomended += "</div></div></div></a>";                   
            }
            see_recomended += "</div>";
        }

        //envia a para a pagina
        showRecomended.innerHTML = see_recomended;

    }
    //chama a função fetchAsync()
    fetchAsync().then(data => console.log("done")).catch(reason => console.log(reason.message));
}



//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Display close to you

function close_to_you() {
    async function fetchAsync() {

        id_user=localStorage.getItem("id_user");
        const response = await fetch(url + '/play-spaces');
        const fields = await response.json();
        console.log(fields);
        const showNear = document.getElementById("showNear");

        const response1 = await fetch(url + '/users/' +id_user);
        const user1 = await response1.json();
        console.log(user1);
        console.log(user1.user[0].localidade);



        let see_near = "";
/*
        const fields = [
            {
                img: "img/campos/imagem-campo2.jpg",
                field: "PlayandPlay",
                city: "Beirão",
                price: 15,
                locality: "Lisboa",
                stars: 3,
                extras: {
                    wi_fi: "yes",
                    equipment: "yes",
                    shower: "yes",
                    bar: "no",
                    park: "yes"
                }
            },
           {
                img: "img/campos/imagem-campo7.jpg",
                field: "Marrocos",
                city: "Peninsula",
                price: 10,
                locality: "Marrocos",
                stars: 1.5,
                extras: {
                    wi_fi: "no",
                    equipment: "no",
                    shower: "yes",
                    bar: "no",
                    park: "yes"
                }
            },
            {
                img: "img/campos/imagem-campo.jpg",
                field: "PlaySoccer",
                city: "Quinchães",
                price: 25,
                locality: "Fafe",
                stars: 4.5,
                extras: {
                    wi_fi: "yes",
                    equipment: "yes",
                    shower: "yes",
                    bar: "yes",
                    park: "yes"
                }
            },
            {
                img: "img/campos/imagem-campo6.jpg",
                field: "StarSoccer",
                city: "Ribeira",
                price: 27.5,
                locality: "Coimbra",
                stars: 4,
                extras: {
                    wi_fi: "yes",
                    equipment: "yes",
                    shower: "yes",
                    bar: "yes",
                    park: "yes"
                }
            },
            {
                img: "img/campos/imagem-campo3.jpg",
                field: "BeFun",
                city: "No Sitio",
                price: 20,
                locality: "Porto",
                stars: 3,
                extras: {
                    wi_fi: "no",
                    equipment: "yes",
                    shower: "yes",
                    bar: "no",
                    park: "yes"
                }
            },
            
        ]
*/

        //criação da demonstração de resultados recebidos
        if (fields == "") {
            see_near += "<header>Perto de ti:</header>";
            see_near += "<div class='w-100'><div class='text-black-50 text-center'>Ainda não efetuaste nenhuma reserva</div></div>";
        } else {
            see_near += "<header>Perto de ti:</header>";
            see_near += "<div class='box'>";
            let test = 0;
            for (const field of fields) {
                 
                console.log(field.Localizacao);
                if(field.Localizacao == user1.user[0].localidade){
                test++;
                see_near += "<a href='campo.html' class='card-1' id='"+field.idEspaco+"' onclick='GFG_espaco(this.id)'><div>";
                see_near += "<img class='img2' src='"+field.Avatar_Participantes+"'></div>";
                see_near += "<div class='row'><div class='col-13'>";
                see_near += "<div class='small-line'>"+field.Localizacao+"</div>";
                see_near += "<div class='medium-line'>"+field.Nome+"</div><div class='myicons2 inline text-left'>";
/*
                if (field.extras.wi_fi === "yes") {
                    see_near += "<i class='fas fa-wifi mx-1'></i>";
                } else if (field.extras.wi_fi === "no") {
                    see_near += "<i class='fas fa-wifi mx-1 text-black-50'></i>";
                }


                if (field.extras.equipment === "yes") {
                    see_near += "<i class='fas fa-tshirt mx-1'></i>";
                } else if (field.extras.equipment === "no") {
                    see_near += "<i class='fas fa-tshirt mx-1 text-black-50'></i>";
                }


                if (field.extras.shower === "yes") {
                    see_near += "<i class='fas fa-shower mx-1'></i>";
                } else if (field.extras.shower === "no") {
                    see_near += "<i class='fas fa-shower mx-1 text-black-50'></i>";
                }


                if (field.extras.bar === "yes") {
                    see_near += "<i class='fas fa-cocktail mx-1'></i>";
                } else if (field.extras.bar === "no") {
                    see_near += "<i class='fas fa-cocktail mx-1 text-black-50'></i>";
                }


                if (field.extras.park === "yes") {
                    see_near += "<i class='fas fa-car mx-1'></i>";
                } else if (field.extrass.park === "no") {
                    see_near += "<i class='fas fa-car mx-1 text-black-50'></i>";
                }
*/
                see_near += "</div></div><div class='col-14'>";
                see_near += "<div class='small-line'>"+"</div>";
                see_near += "<div class='medium-line'>"+field.Preco+"€</div><div class='myicons2 inline'>";

                if (field.Avaliacao_Participantes > 0 && field.Avaliacao_Participantes <= 0.5) {
                    see_near += "<img src='img/0.5star.png' class='stars-16px mx-1'>";
                }
                if (field.Avaliacao_Participantes > 0.5 && field.Avaliacao_Participantes <= 1) {
                    see_near += "<img src='img/1star.png' class='stars-16px mx-1'>";
                }
                if (field.Avaliacao_Participantes > 1 && field.Avaliacao_Participantes <= 1.5) {
                    see_near += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                }
                if (field.Avaliacao_Participantes > 1.5 && field.Avaliacao_Participantes <= 2) {
                    see_near += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                }
                if (field.Avaliacao_Participantes > 2 && field.Avaliacao_Participantes <= 2.5) {
                    see_near += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                }
                if (field.Avaliacao_Participantes > 2.5 && field.Avaliacao_Participantes <= 3) {
                    see_near += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                }
                if (field.Avaliacao_Participantes > 3 && field.Avaliacao_Participantes <= 3.5) {
                    see_near += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                }
                if (field.Avaliacao_Participantes > 3.5 && field.Avaliacao_Participantes <= 4) {
                    see_near += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                }
                if (field.Avaliacao_Participantes > 4 && field.Avaliacao_Participantes <= 4.5) {
                    see_near += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                }
                if (field.Avaliacao_Participantes > 4.5 && field.Avaliacao_Participantes <= 5) {
                    see_near += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                }


                see_near += "</div></div></div></a>";                   
            
            }
            }
            if(test==0){
                see_near += "<div class='w-100'><div class='text-black-50 text-center'>Não há campos na tua localização</div></div>";
            }
            
            see_near += "</div>";
            
        }

        //envia a para a pagina
        showNear.innerHTML = see_near;

    }
    //chama a função fetchAsync()
    fetchAsync().then(data => console.log("done")).catch(reason => console.log(reason.message));
}



//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Display recently visited

function recently_visited() {
    async function fetchAsync() {
        id_user=localStorage.getItem("id_user");
        const response = await fetch(url + '/users/' + id_user + '/favorites');
        const recently = await response.json();
        console.log(recently);
        const showRecently = document.getElementById("showRecently");

        let see_recently = "";
/*
        const recently = [
           {
                img: "img/campos/imagem-campo7.jpg",
                field: "Marrocos",
                city: "Peninsula",
                price: 10,
                locality: "Marrocos",
                stars: 1.5,
                extras: {
                    wi_fi: "no",
                    equipment: "no",
                    shower: "yes",
                    bar: "no",
                    park: "yes"
                }
            },
            {
                img: "img/campos/imagem-campo2.jpg",
                field: "PlayandPlay",
                city: "Beirão",
                price: 15,
                locality: "Lisboa",
                stars: 3,
                extras: {
                    wi_fi: "yes",
                    equipment: "yes",
                    shower: "yes",
                    bar: "no",
                    park: "yes"
                }
            },
            {
                img: "img/campos/imagem-campo.jpg",
                field: "PlaySoccer",
                city: "Quinchães",
                price: 25,
                locality: "Fafe",
                stars: 4.5,
                extras: {
                    wi_fi: "yes",
                    equipment: "yes",
                    shower: "yes",
                    bar: "yes",
                    park: "yes"
                }
            },
            {
                img: "img/campos/imagem-campo3.jpg",
                field: "BeFun",
                city: "No Sitio",
                price: 20,
                locality: "Porto",
                stars: 3,
                extras: {
                    wi_fi: "no",
                    equipment: "yes",
                    shower: "yes",
                    bar: "no",
                    park: "yes"
                }
            },
            {
                img: "img/campos/imagem-campo6.jpg",
                field: "StarSoccer",
                city: "Ribeira",
                price: 27.5,
                locality: "Coimbra",
                stars: 4,
                extras: {
                    wi_fi: "yes",
                    equipment: "yes",
                    shower: "yes",
                    bar: "yes",
                    park: "yes"
                }
            }
        ]
*/

        //criação da demonstração de resultados recebidos
        if (recently.status == "404") {
            see_recently += "<header>Campos Favoritos:</header>";
            see_recently += "<div class='w-100'><div class='text-black-50 text-center'>Não tem campos favoritos</div></div>";
        } else {
            see_recently += "<header>Campos Favoritos:</header>";
            see_recently += "<div class='box'>";
            for (const field of recently) {
                see_recently += "<a href='campo.html' class='card-1' id='"+field.idEspaco+"' onclick='GFG_espaco(this.id)'><div>";
                see_recently += "<img class='img2' src='"+field.Avatar_Participantes+"'></div>";
                see_recently += "<div class='row'><div class='col-13'>";
                see_recently += "<div class='small-line'>"+field.Localizacao+"</div>";
                see_recently += "<div class='medium-line'>"+field.Nome+"</div><div class='myicons2 inline text-left'>";



/*
                if (field.extras.wi_fi === "yes") {
                    see_recently += "<i class='fas fa-wifi mx-1'></i>";
                } else if (field.extras.wi_fi === "no") {
                    see_recently += "<i class='fas fa-wifi mx-1 text-black-50'></i>";
                }


                if (field.extras.equipment === "yes") {
                    see_recently += "<i class='fas fa-tshirt mx-1'></i>";
                } else if (field.extras.equipment === "no") {
                    see_recently += "<i class='fas fa-tshirt mx-1 text-black-50'></i>";
                }


                if (field.extras.shower === "yes") {
                    see_recently += "<i class='fas fa-shower mx-1'></i>";
                } else if (field.extras.shower === "no") {
                    see_recently += "<i class='fas fa-shower mx-1 text-black-50'></i>";
                }


                if (field.extras.bar === "yes") {
                    see_recently += "<i class='fas fa-cocktail mx-1'></i>";
                } else if (field.extras.bar === "no") {
                    see_recently += "<i class='fas fa-cocktail mx-1 text-black-50'></i>";
                }


                if (field.extras.park === "yes") {
                    see_recently += "<i class='fas fa-car mx-1'></i>";
                } else if (field.extrass.park === "no") {
                    see_recently += "<i class='fas fa-car mx-1 text-black-50'></i>";
                }
*/
                see_recently += "</div></div><div class='col-14'>";
                see_recently += "<div class='small-line'>"+""+"</div>";
                see_recently += "<div class='medium-line'>"+field.Preco+"€</div><div class='myicons2 inline'>";

                if (field.Avaliacao_Participantes > 0 && field.Avaliacao_Participantes <= 0.5) {
                    see_recently += "<img src='img/0.5star.png' class='stars-16px mx-1'>";
                }
                if (field.Avaliacao_Participantes > 0.5 && field.Avaliacao_Participantes <= 1) {
                    see_recently += "<img src='img/1star.png' class='stars-16px mx-1'>";
                }
                if (field.Avaliacao_Participantes > 1 && field.Avaliacao_Participantes <= 1.5) {
                    see_recently += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                }
                if (field.Avaliacao_Participantes > 1.5 && field.Avaliacao_Participantes <= 2) {
                    see_recently += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                }
                if (field.Avaliacao_Participantes > 2 && field.Avaliacao_Participantes <= 2.5) {
                    see_recently += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                }
                if (field.Avaliacao_Participantes > 2.5 && field.Avaliacao_Participantes <= 3) {
                    see_recently += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                }
                if (field.Avaliacao_Participantes > 3 && field.Avaliacao_Participantes <= 3.5) {
                    see_recently += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                }
                if (field.Avaliacao_Participantes > 3.5 && field.Avaliacao_Participantes <= 4) {
                    see_recently += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                }
                if (field.Avaliacao_Participantes > 4 && field.Avaliacao_Participantes <= 4.5) {
                    see_recently += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                }
                if (field.Avaliacao_Participantes > 4.5 && field.Avaliacao_Participantes <= 5) {
                    see_recently += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                }

                see_recently += "</div></div></div></a>";                   
            }
            see_recently += "</div>";
        }

        //envia a para a pagina
        showRecently.innerHTML = see_recently;

    }
    //chama a função fetchAsync()
    fetchAsync().then(data => console.log("done")).catch(reason => console.log(reason.message));
}



//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Display visited by friends

function by_friends() {
    async function fetchAsync() {

        //const response = await fetch('http://localhost:8080/users');
        //const visited = await response.json();

        const showByFriends = document.getElementById("showByFriends");

        let see_visited = "";

        const visited = [
           {
                img: "img/campos/imagem-campo7.jpg",
                field: "Marrocos",
                city: "Peninsula",
                price: 10,
                locality: "Marrocos",
                stars: 1.5,
                extras: {
                    wi_fi: "no",
                    equipment: "no",
                    shower: "yes",
                    bar: "no",
                    park: "yes"
                }
            },
            {
                img: "img/campos/imagem-campo2.jpg",
                field: "PlayandPlay",
                city: "Beirão",
                price: 15,
                locality: "Lisboa",
                stars: 3,
                extras: {
                    wi_fi: "yes",
                    equipment: "yes",
                    shower: "yes",
                    bar: "no",
                    park: "yes"
                }
            },
            {
                img: "img/campos/imagem-campo.jpg",
                field: "PlaySoccer",
                city: "Quinchães",
                price: 25,
                locality: "Fafe",
                stars: 4.5,
                extras: {
                    wi_fi: "yes",
                    equipment: "yes",
                    shower: "yes",
                    bar: "yes",
                    park: "yes"
                }
            },
            {
                img: "img/campos/imagem-campo3.jpg",
                field: "BeFun",
                city: "No Sitio",
                price: 20,
                locality: "Porto",
                stars: 3,
                extras: {
                    wi_fi: "no",
                    equipment: "yes",
                    shower: "yes",
                    bar: "no",
                    park: "yes"
                }
            },
            {
                img: "img/campos/imagem-campo6.jpg",
                field: "StarSoccer",
                city: "Ribeira",
                price: 27.5,
                locality: "Coimbra",
                stars: 4,
                extras: {
                    wi_fi: "yes",
                    equipment: "yes",
                    shower: "yes",
                    bar: "yes",
                    park: "yes"
                }
            }
        ]


        //criação da demonstração de resultados recebidos
        if (visited == "") {
            see_visited += "<header>Visitados por amigos:</header>";
            see_visited += "<div class='w-100'><div class='text-black-50 text-center'>Ainda não efetuaste nenhuma reserva</div></div>";
        } else {
            see_visited += "<header>Visitados por amigos:</header>";
            see_visited += "<div class='box'>";
            for (const field of visited) {
                see_visited += "<a href='campo.html' class='card-1'><div>";
                see_visited += "<img class='img2' src='"+field.img+"'></div>";
                see_visited += "<div class='row'><div class='col-13'>";
                see_visited += "<div class='small-line'>"+field.locality+"</div>";
                see_visited += "<div class='medium-line'>"+field.city+"</div><div class='myicons2 inline text-left'>";

                if (field.extras.wi_fi === "yes") {
                    see_visited += "<i class='fas fa-wifi mx-1'></i>";
                } else if (field.extras.wi_fi === "no") {
                    see_visited += "<i class='fas fa-wifi mx-1 text-black-50'></i>";
                }


                if (field.extras.equipment === "yes") {
                    see_visited += "<i class='fas fa-tshirt mx-1'></i>";
                } else if (field.extras.equipment === "no") {
                    see_visited += "<i class='fas fa-tshirt mx-1 text-black-50'></i>";
                }


                if (field.extras.shower === "yes") {
                    see_visited += "<i class='fas fa-shower mx-1'></i>";
                } else if (field.extras.shower === "no") {
                    see_visited += "<i class='fas fa-shower mx-1 text-black-50'></i>";
                }


                if (field.extras.bar === "yes") {
                    see_visited += "<i class='fas fa-cocktail mx-1'></i>";
                } else if (field.extras.bar === "no") {
                    see_visited += "<i class='fas fa-cocktail mx-1 text-black-50'></i>";
                }


                if (field.extras.park === "yes") {
                    see_visited += "<i class='fas fa-car mx-1'></i>";
                } else if (field.extrass.park === "no") {
                    see_visited += "<i class='fas fa-car mx-1 text-black-50'></i>";
                }

                see_visited += "</div></div><div class='col-14'>";
                see_visited += "<div class='small-line'>"+field.field+"</div>";
                see_visited += "<div class='medium-line'>"+field.price+"€</div><div class='myicons2 inline'>";

                if (field.stars > 0 && field.stars <= 0.5) {
                    see_visited += "<img src='img/0.5star.png' class='stars-16px mx-1'>";
                }
                if (field.stars > 0.5 && field.stars <= 1) {
                    see_visited += "<img src='img/1star.png' class='stars-16px mx-1'>";
                }
                if (field.stars > 1 && field.stars <= 1.5) {
                    see_visited += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                }
                if (field.stars > 1.5 && field.stars <= 2) {
                    see_visited += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                }
                if (field.stars > 2 && field.stars <= 2.5) {
                    see_visited += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                }
                if (field.stars > 2.5 && field.stars <= 3) {
                    see_visited += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                }
                if (field.stars > 3 && field.stars <= 3.5) {
                    see_visited += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                }
                if (field.stars > 3.5 && field.stars <= 4) {
                    see_visited += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                }
                if (field.stars > 4 && field.stars <= 4.5) {
                    see_visited += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                }
                if (field.stars > 4.5 && field.stars <= 5) {
                    see_visited += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                }

                see_visited += "</div></div></div></a>";                   
            }
            see_visited += "</div>";
        }

        //envia a para a pagina
        showByFriends.innerHTML = see_visited;

    }
    //chama a função fetchAsync()
    fetchAsync().then(data => console.log("done")).catch(reason => console.log(reason.message));
}


//-----------------------------------------------------------------------------------------------------------
function display_notification() {async function fetchAsync() {
        //------------------------    
         event.preventDefault();
        fetch(url + '/index-users', {
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
                console.log(err); // estava alert(err); coloquei console log para não estar sempre a aparecer pop-up ao utilizador
            })
            .then(async function (result) {
                if (result) {
                    //swal({ title: "Autenticação feita com sucesso!" });
                    //+ result.value.message.success);
                    console.log(result.id_user);

                    localStorage.setItem("id_user", result.id_user);
                   /* Swal.fire(
                        'Adicionado com sucesso!',
                        '',
                        'success'
                      )*/
 
                }
                else {
                console.log("Esta no else");
                }
            });
           //------------------------------------------- 
            
            
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
                console.log(err);
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



};

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

function GFG_espaco(clicked) {
    //alert(clicked);
    localStorage.setItem("id_espaço", clicked);
}

function GFG_inscricao(clicked) {
    //alert(clicked);
    localStorage.setItem("id_inscricao", clicked);
}
