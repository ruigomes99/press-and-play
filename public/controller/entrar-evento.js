window.onload = function () {
    show_event_information();
    load_players();

    if(performance.navigation.type == 2){
            location.reload(true);
    }
    
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------


function show_event_information() {
    async function fetchAsync() {

        id_user=localStorage.getItem("id_user");
        id_inscricao=localStorage.getItem("id_inscricao");
        const response = await fetch(url + '/users/' + id_user + '/registrations/' + id_inscricao);
        const event = await response.json();
        console.log(event);
            
        const eventName = document.getElementById("eventName");
        const hour = document.getElementById("hour");
        const eventDay = document.getElementById("eventDay");
        const price = document.getElementById("price");

        const name = document.getElementById("fieldName");
        const pic = document.getElementById("fieldPic");
        const fieldDots = document.getElementById("fieldDots");
        const locality = document.getElementById("locality");
        const stars = document.getElementById("stars");        
        const material = document.getElementById("materialList");
        const infoBalneario = document.getElementById("infoBalneario");
        const infoParque = document.getElementById("infoParque");
        const infoBar = document.getElementById("infoBar");
        const phoneNumber = document.getElementById("phoneNumber");



        let true_eventName = "";       
        let true_hour = "";
        let true_day = "";
        let true_price = "";

        let true_name = "";
        let true_field_pic = "";
        let true_dots = "";
        let true_locality = "";
        let true_stars = "";       
        let true_material_list = "";
        let true_balneario = "";
        let true_parque = "";
        let true_bar = "";
        let true_phone_number = "";

        


/*
        const event =
        {
            name: "P?? em linha",
            day: "Wed Dec 31 2019 22:02:09 GMT+0000",
            price: 2.5,
            field:{
                name: "PlaySoccer",
                img: ["img/campos/imagem-campo4.jpg", "img/campos/imagem-campo5.jpg", "img/campos/imagem-campo1.jpg", "img/campos/imagem-campo7.jpg"],
                locality: "Quinch??es",
                city: "Fafe",
                price: "25",
                stars: "4.5",
                phone: "253 645 987",
                material: ["Coletes", "Bolas", "Luvas"],
                extras:{
                    balneario: "Balne??rios para Homens e Mulheres.",
                    parque: "Parque Privado",
                    bar: "Servi??o de Bar",
                    payment: "PayPal, Multibanco e MBway"
                }
            }
        }
*/







        //cria????o da demonstra????o de resultados recebidos
        put_time(event[0].Data);

   //     true_eventName += "<h2 class='text-primary mt-3 text-weight-bold'>"+event[0].Nome+"</h2>";

        let dayEvent = new Date(event[0].Data);
        true_day +="<label class='font-weight-bold text-primary'>"+dayEvent.getDate()+"-"+(dayEvent.getMonth()+1) +"-"+dayEvent.getFullYear()+"</label>";
        true_hour += "<label class='font-weight-bold text-primary'>"+ ("0" + dayEvent.getHours()).slice(-2) + ":" + ("0" + dayEvent.getMinutes()).slice(-2) +"h</label>";

      //  true_price += "<label class='font-weight-bold text-primary text-lg mr-5 pr-3'> "+event[0].pagamento+"??? </label>";
        

       true_name += "<strong>"+event[0].Nome+"</strong>"

        true_field_pic += "<div class='slideshow-container mt-5'>";
            let test=0
         /*   for(newpic of event.field.img){        
                if(test===0){
                    true_field_pic += "<div class='card bg-transparent button-footer h-100 w-100 mySlides fade2' style='display: block;'>";
                }else{
                    true_field_pic += "<div class='card bg-transparent button-footer h-100 w-100 mySlides fade2' style='display: none;'>";
                }

                true_field_pic += "<div class='text-center'><div class='row no-gutters align-items-center mt-n3 ml-n3 mr-n3'>";
                true_field_pic += "<div><img class='imagem4' src='"+newpic+"'>";
                true_field_pic += "<span class='btn border-secondary btn-icon-split btn-lg mx-auto my-4 fav123456789' onclick='Favoritos()'>";
                true_field_pic += "<i class='far fa-bookmark mt-n5 pt-n5 adicionarFavoritos'></i>";
                true_field_pic += "</span></div></div></div></div>";  
                
                test+=1;
            }
            true_field_pic += "<a class='prev ml-n3' onclick='plusSlides(-1)'>&#10094;</a>";
            true_field_pic += "<a class='next' onclick='plusSlides(1)'>&#10095;</a></div>";

            let abcd = 0
            for(dots of event.field.img){   
                abcd+=1;
                if(abcd===1){
                    true_dots += "<span class='dot active' onclick='currentSlide("+abcd+")'></span>";
                }else{
                    true_dots += "<span class='dot' onclick='currentSlide("+abcd+")'></span>";
                }
            }
 */
        true_locality += "<label class='font-weight-bold text-primary'>"+event[0].Localizacao+"</label>";

        if (event[0].Avaliacao_Participantes > 0 && event[0].Avaliacao_Participantes <= 0.5) {
            true_stars += "<img src='img/0.5star.png' class='stars-18px mx-1'>";
        }
        if (event[0].Avaliacao_Participantes > 0.5 && event[0].Avaliacao_Participantes <= 1) {
            true_stars += "<img src='img/1star.png' class='stars-18px mx-1'>";
        }
        if (event[0].Avaliacao_Participantes > 1 && event[0].Avaliacao_Participantes <= 1.5) {
            true_stars += "<img src='img/1star.png' class='stars-18px mx-1'><img src='img/0.5star.png' class='stars-18px mx-1'>";
        }
        if (event[0].Avaliacao_Participantes > 1.5 && event[0].Avaliacao_Participantes <= 2) {
            true_stars += "<img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'>";
        }
        if (event[0].Avaliacao_Participantes > 2 && event[0].Avaliacao_Participantes <= 2.5) {
            true_stars += "<img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/0.5star.png' class='stars-18px mx-1'>";
        }
        if (event[0].Avaliacao_Participantes > 2.5 && event[0].Avaliacao_Participantes <= 3) {
            true_stars += "<img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'>";
        }
        if (event[0].Avaliacao_Participantes > 3 && event[0].Avaliacao_Participantes <= 3.5) {
            true_stars += "<img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/0.5star.png' class='stars-18px mx-1'>";
        }
        if (event[0].Avaliacao_Participantes > 3.5 && event[0].Avaliacao_Participantes <= 4) {
            true_stars += "<img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'>";
        }
        if (event[0].Avaliacao_Participantes > 4 && event[0].Avaliacao_Participantes <= 4.5) {
            true_stars += "<img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/0.5star.png' class='stars-18px mx-1'>";
        }
        if (event[0].Avaliacao_Participantes > 4.5 && event[0].Avaliacao_Participantes <= 5) {
            true_stars += "<img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'>";
        }
   /*     
        true_material_list += "<label class='font-weight-bold text-primary'>";
        for(material_list of event.field.material){
            true_material_list += material_list+"; ";
        }
*/
      //  true_balneario += "<label class='font-weight-bold text-primary'>"+event.field.extras.balneario+"</label>";
      //  true_parque += "<label class='font-weight-bold text-primary'>"+event.field.extras.parque+"</label>";
       // true_bar += "<label class='font-weight-bold text-primary'>"+event.field.extras.bar+"</label>";
        true_phone_number += "<label class='font-weight-bold text-primary'>"+event[0].Contacto+"</label>";


        //envia a para a pagina
        eventName.innerHTML = true_eventName;        
        eventDay.innerHTML = true_day;
        hour.innerHTML = true_hour;

        name.innerHTML = true_name;
        pic.innerHTML = true_field_pic;
        fieldDots.innerHTML = true_dots;
        locality.innerHTML = true_locality;
        price.innerHTML = true_price;
        stars.innerHTML = true_stars;
        material.innerHTML = true_material_list;
        infoBalneario.innerHTML = true_balneario;
        infoParque.innerHTML = true_parque;
        infoBar.innerHTML = true_bar;
        phoneNumber.innerHTML = true_phone_number;
        
    }
    //chama a fun????o fetchAsync()
    fetchAsync().then(data => console.log("done")).catch(reason => console.log(reason.message));
}


//---------------------------------------------------------------------------------------------------------------------------



function load_players() {
        async function fetchAsync() {
            id_inscricao=localStorage.getItem("id_inscricao");
            const response = await fetch(url + '/users/registrations/'+id_inscricao+'/registrations-users');
            const players = await response.json();
            console.log(players);
            const show_players = document.getElementById("show_players");

            let see_players = "";

/*
            const players = [
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
                    name: "Jo??o Carvalho",
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
                    name: "Ant??nio Pinheiro",
                    email: "castanho@hotmail.com",
                    level: 1,
                    img: ""
                }
            ]
*/



            //cria????o da demonstra????o de resultados recebidos
                see_players += "<ul class='px-0' style='list-style-type: none;'>";
                for (const player of players) {

                    see_players += "<li class='myfilter text-white '>";
                    see_players += "<div class='px-0 py-0'><div class='card'><div class='card-body px-1 pb-0'>";
                    see_players += "<div class='row ml-2'><div class='col-auto'>";

                    if (player.img == "") {
                        see_players += "<img class='rounded-circle img-profile2' src='img/perfil/perfil5.jpg'></div><div class='col-auto pt-2'>";
                    } else {
                        see_players += "<img class='rounded-circle img-profile2' src='" + player.avatar + "'></div><div class='col-auto pt-2'>";
                    }

                    let trueLevel = parseInt(player.pontos / 60) ;
                    see_players += "<img class='img-profile2' src='img/nivel.png'><div class='level-fields'>" + trueLevel + "</div></div>";
                    see_players += "<div class='col-auto pt-2 px-2'><h5 class='text-secondary font-weight-bold'>" + player.primeiro_nome + " " + player.ultimo_nome + "</h5>";
                    see_players += "<label class='text-black mt-1'>" + player.email + "</label>";
                    see_players += "</div></div></div></div></div></li>";

                }
                see_players += "</ul>";

            //envia a para a pagina
            show_players.innerHTML = see_players;


        }
        //chama a fun????o fetchAsync()
        fetchAsync().then(data => console.log("done")).catch(reason => console.log(reason.message));
    }


//------------------------------------------------------------------------------------------------------------------
function put_time(the_date){
        // Set the date we're counting down to        
        //var countDownDate = new Date("Dec 31, 2019 14:00:00").getTime();
 console.log(the_date);


        var countDownDate = new Date(the_date).getTime();

       

        // Update the count down every 1 second
        var x = setInterval(function () {
    
            // Get today's date and time
            var now = new Date().getTime();

    
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
    
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
            // Output the result in an element with id="demo"
            document.getElementById("demo").innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";
    
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);
}

    const botaoEntr = document.getElementById("entraEve");
     botaoEntr.addEventListener("click", entrarEvento);

        function entrarEvento(){
        event.preventDefault();
        id_inscricao=localStorage.getItem("id_inscricao");
            fetch(url + '/users/registrations/events/' + id_inscricao, {
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                method: 'POST',
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
                    console.log(err); // estava alert(err); coloquei console log para n??o estar sempre a aparecer pop-up ao utilizador
                })
                .then(async function (result) {
                    console.log(result);
                    if (result) {
                        //swal({ title: "Autentica????o feita com sucesso!" });
                        //+ result.value.message.success);S
                        Swal.fire(
                            'Adicionado ao evento com sucesso!',
                            '',
                            'success'
                          ).then( () => {
                            window.location.replace("./Reservas.html");
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
