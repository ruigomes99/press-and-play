window.onload = function () {
    show_chosen_field();
    load_players();

    if(performance.navigation.type == 2){
            location.reload(true);
    }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    function show_chosen_field() {
        async function fetchAsync() {
            id_user=localStorage.getItem("id_user");
            id_inscricao=localStorage.getItem("id_inscricao");
            const response = await fetch(url + '/users/' + id_user + '/registrations/' + id_inscricao);
            const dados = await response.json();
            console.log(dados);
            const name = document.getElementById("fieldName");
            const pic = document.getElementById("fieldPic"); 
            const fieldDots = document.getElementById("fieldDots"); 
            const stars = document.getElementById("stars");
            const locality = document.getElementById("locality");
            const hour = document.getElementById("hour");
            const eventDay = document.getElementById("eventDay");          
            const material = document.getElementById("materialList");
            const infoBalneario = document.getElementById("infoBalneario");
            const infoParque = document.getElementById("infoParque");
            const infoBar = document.getElementById("infoBar");           
            const phoneNumber = document.getElementById("phoneNumber");

            const Name2 = document.getElementById("Name2");
            const Pic1 = document.getElementById("Pic1");
            

            let true_name = "";
            let true_field_pic = "";
            let true_dots = "";
            let true_stars = "";
            let true_locality = "";
            let true_hour = "";
            let true_day = "";           
            let true_material_list = "";
            let true_balneario = "";
            let true_parque = "";
            let true_bar = "";
            let true_phone_number = "";
            


/*
            const field =
            {
                name: "PlaySoccer",
                img: ["img/campos/imagem-campo4.jpg", "img/campos/imagem-campo5.jpg", "img/campos/imagem-campo1.jpg", "img/campos/imagem-campo7.jpg"],
                stars: 4.5,
                locality: "Quinchães",
                city: "Fafe",     
                day: "Wed Dec 31 2019 22:02:09 GMT+0000",           
                material: ["Coletes", "Bolas", "Luvas"],
                extras: {
                    balneario: "Balneários para Homens e Mulheres.",
                    parque: "Parque Privado",
                    bar: "Serviço de Bar",
                    phone: "253 645 999",
                }               
            }

*/

            //criação da demonstração de resultados recebidos
            let abc = dados[0].Data;
            var theDate = new Date(abc);
            put_time(theDate);

let data_inserida = new Date(abc);
    let data_hoje = new Date();
    console.log("beu");
    if (data_inserida < data_hoje) {
        document.getElementById("darEstrelas").style.display = "block";
    }else{
        document.getElementById("darEstrelas").style.display = "none";
    };
    
    
            
            true_name += "<h2 class='mt-4 text-secondary ml-5 pl-3'><strong>"+dados[0].Nome+"</strong></h2>";
            

            true_field_pic += "<div class='slideshow-container'>";
            let test=0
       /*     for(newpic of dados.img){        
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
            for(dots of dados.img){   
                abcd+=1;
                if(abcd===1){
                    true_dots += "<span class='dot active' onclick='currentSlide("+abcd+")'></span>";
                }else{
                    true_dots += "<span class='dot' onclick='currentSlide("+abcd+")'></span>";
                }
            }
    */


            if (dados[0].Avaliacao_Participantes > 0 && dados[0].Avaliacao_Participantes <= 0.5) {
                true_stars += "<img src='img/0.5star.png' class='stars-18px mx-1'>";
            }
            if (dados[0].Avaliacao_Participantes > 0.5 && dados[0].Avaliacao_Participantes <= 1) {
                true_stars += "<img src='img/1star.png' class='stars-18px mx-1'>";
            }
            if (dados[0].Avaliacao_Participantes > 1 && dados[0].Avaliacao_Participantes <= 1.5) {
                true_stars += "<img src='img/1star.png' class='stars-18px mx-1'><img src='img/0.5star.png' class='stars-18px mx-1'>";
            }
            if (dados[0].Avaliacao_Participantes > 1.5 && dados[0].Avaliacao_Participantes <= 2) {
                true_stars += "<img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'>";
            }
            if (dados[0].Avaliacao_Participantes > 2 && dados[0].Avaliacao_Participantes <= 2.5) {
                true_stars += "<img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/0.5star.png' class='stars-18px mx-1'>";
            }
            if (dados[0].Avaliacao_Participantes > 2.5 && dados[0].Avaliacao_Participantes <= 3) {
                true_stars += "<img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'>";
            }
            if (dados[0].Avaliacao_Participantes > 3 && dados[0].Avaliacao_Participantes <= 3.5) {
                true_stars += "<img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/0.5star.png' class='stars-18px mx-1'>";
            }
            if (dados[0].Avaliacao_Participantes > 3.5 && dados[0].Avaliacao_Participantes <= 4) {
                true_stars += "<img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'>";
            }
            if (dados[0].Avaliacao_Participantes > 4 && dados[0].Avaliacao_Participantes <= 4.5) {
                true_stars += "<img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/0.5star.png' class='stars-18px mx-1'>";
            }
            if (dados[0].Avaliacao_Participantes > 4.5 && dados[0].Avaliacao_Participantes <= 5) {
                true_stars += "<img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'>";
            }

            true_locality += "<label class='font-weight-bold text-primary'>"+dados[0].Localizacao+"</label>";
            let dayEvent = new Date(dados[0].Data);
            console.log(dayEvent);
            true_day += "<label class='font-weight-bold text-primary'>"+dayEvent.getDate()+"-"+(dayEvent.getMonth()+1) +"-"+dayEvent.getFullYear()+"</label>";
            true_hour += "<label class='font-weight-bold text-primary'>"+ ("0" + dayEvent.getHours()).slice(-2) + ":" + ("0" + dayEvent.getMinutes()).slice(-2) +"h</label>";
            
            true_material_list += "<label class='font-weight-bold text-primary'>";
        /*    for(material_list of dados.material){
                true_material_list += material_list+"; ";
            } 

            true_balneario = "<label class='font-weight-bold text-primary'>"+dados.extras.balneario+"</label>";
            true_parque = "<label class='font-weight-bold text-primary'>"+dados.extras.parque+"</label>";
            true_bar += "<label class='font-weight-bold text-primary'>"+dados.extras.bar+"</label>"; */
            true_phone_number = "<label class='font-weight-bold text-primary'>"+dados[0].Contacto+"</label>";


            //envia a para a pagina
            name.innerHTML = true_name;
            pic.innerHTML = true_field_pic;
            fieldDots.innerHTML = true_dots;
            stars.innerHTML = true_stars;
            locality.innerHTML = true_locality;
            eventDay.innerHTML = true_day;
            hour.innerHTML = true_hour;
            material.innerHTML = true_material_list;
            infoBalneario.innerHTML = true_balneario;
            infoParque.innerHTML = true_parque;
            infoBar.innerHTML = true_bar;
            phoneNumber.innerHTML = true_phone_number;
            
            Name2.innerHTML = dados[0].Nome;
            // Pic1.innerHTML = ;

            

        }
        //chama a função fetchAsync()
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
        //chama a função fetchAsync()
        fetchAsync().then(data => console.log("done")).catch(reason => console.log(reason.message));
    }


//------------------------------------------------------------------------------------------------------------------
function put_time(the_date){
        // Set the date we're counting down to        
        //var countDownDate = new Date("Dec 31, 2019 14:00:00").getTime();
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


let estrelas = "";
document.getElementById("rate1").addEventListener("click", function(){estrelas = "1"});
document.getElementById("rate2").addEventListener("click", function(){estrelas = "2"});
document.getElementById("rate3").addEventListener("click", function(){estrelas = "3"});
document.getElementById("rate4").addEventListener("click", function(){estrelas = "4"});
document.getElementById("rate5").addEventListener("click", function(){estrelas = "5"});








  const botaoAvaliarCampo = document.getElementById("botaoEnviar");
  botaoAvaliarCampo.addEventListener("click", avaliacaoCampo);


 async function avaliacaoCampo() {
    event.preventDefault();
    var data = {};
    console.log(estrelas);
    id_inscricao=localStorage.getItem("id_inscricao");
    if(estrelas==""){
        estrelas="0";
    }


    data.avaliacao_espaco = estrelas;
        console.log(data);

        fetch(url + '/users/registrarions/' + id_inscricao + '/feedback-spaces', {
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
                'Classificou este campo com sucesso!',
                '',
                'success'
              ).then( () => {
              window.location.replace("./pagina-inicial.html");
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





};
