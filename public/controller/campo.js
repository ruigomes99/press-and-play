window.onload = function () {
    show_field_information();
    load_friends();
    isFavorito()

    if(performance.navigation.type == 2){
            location.reload(true);
    }

    const botaoFav = document.getElementById("favBut");
    // const botaoRemFav = document.getElementsByClassName("far fa-bookmark mt-n5 pt-n5 adicionarFavoritos")
  
        botaoFav.addEventListener("click", favorito);
        array = new Array ("00:00:00", "01:00:00", "02:00:00", "03:00:00", "04:00:00", "05:00:00", "06:00:00", "07:00:00", "08:00:00", "09:00:00", "10:00:00", "11:00:00", "12:00:00", "13:00:00", "14:00:00", "15:00:00", "16:00:00", "17:00:00", "18:00:00", "19:00:00", "20:00:00", "21:00:00", "22:00:00", "23:00:00");

    

    function show_field_information() {
        async function fetchAsync() {

            let dataDisponivel="";
            let horas=document.getElementById("horas");
            datas=document.getElementById("calendario");
            datas.addEventListener("change", verDia);

            async function verDia(){
                document.getElementById("horas").value="";
                dataDisponivel=datas.value;
                console.log(dataDisponivel);
                const response4 = await fetch(url + '/play-spaces/' + idEspaco + '/available-hours/' + dataDisponivel);
                const ahours = await response4.json();
                console.log(ahours);
                let horaAbertura=ahours[0].abertura;
                let horaEncerramento=ahours[0].encerramento;
                console.log(horaAbertura);
                console.log(horaEncerramento);
                console.log(array.indexOf(horaAbertura));
                console.log(array.indexOf(horaEncerramento));

                let subArray=array.slice(array.indexOf(horaAbertura),array.indexOf(horaEncerramento));
                for(hora of subArray){
                    horas.innerHTML += "<option value='"+hora+"'>"+hora.substring(0, 5)+"</option>";
                }
                
            } 


            


            idEspaco = localStorage.getItem("id_espaço");
            const response = await fetch(url + '/play-spaces/' + idEspaco);
            const field = await response.json();
            console.log(field);
   
            const response1 = await fetch(url + '/play-spaces/' + idEspaco + '/materials');
            const materials = await response1.json();
            console.log(materials);

            const response2 = await fetch(url + '/play-spaces/' + idEspaco + '/perks');
            const perks = await response2.json();
            console.log(perks);

            const response3 = await fetch(url + '/play-spaces/' + idEspaco + '/opening-hours');
            const hours = await response3.json();
            console.log(hours);

            const response5 = await fetch(url + '/play-spaces/' + idEspaco + '/images');
            const photo = await response5.json();
            console.log(photo);


            const name = document.getElementById("fieldName");
            const pic = document.getElementById("fieldPic");
            const fieldDots = document.getElementById("fieldDots");
            const locality = document.getElementById("locality");
            const price = document.getElementById("price");
            const phoneNumber = document.getElementById("phoneNumber");
            const stars = document.getElementById("stars");
            const material = document.getElementById("materialList");
            const infoBalneario = document.getElementById("infoBalneario");
            const infoParque = document.getElementById("infoParque");
            const infoBar = document.getElementById("infoBar");
            const infoPayment = document.getElementById("infoPayment");
            const fieldTimes = document.getElementById("fieldTimes");


            let true_name = "";
            let true_field_pic = "";
            let true_dots = "";
            let true_locality = "";
            let true_price = "";
            let true_stars = "";
            let true_phone_number = "";
            let true_material_list = "";
            let true_balneario = "";
            let true_parque = "";
            let true_bar = "";
            let true_payment = "";
            let true_times = "";


            /*
                        const field =
                        {
                            name: "PlaySoccer",
                            img: ["img/campos/imagem-campo4.jpg", "img/campos/imagem-campo5.jpg", "img/campos/imagem-campo1.jpg", "img/campos/imagem-campo7.jpg"],
                            locality: "Quinchães",
                            city: "Fafe",
                            price: "25",
                            stars: "4.5",
                            phone: "253 645 987",
                            material: ["Coletes", "Bolas", "Luvas"],
                            extras:{
                                balneario: "Balneários para Homens e Mulheres.",
                                parque: "Parque Privado",
                                bar: "Serviço de Bar",
                                payment: "PayPal, Multibanco e MBway"
                            }
                        }
            */


            //criação da demonstração de resultados recebidos
            true_name += "<strong>" + field[0].Nome + "</strong>";

            true_field_pic += "<div class='slideshow-container'>";
            let test=0
           if(photo.length>0){
            for(newpic of photo){        
                if(test===0){
                    true_field_pic += "<div class='card bg-transparent button-footer h-100 w-100 mySlides fade2' style='display: block;'>";
                }else{
                    true_field_pic += "<div class='card bg-transparent button-footer h-100 w-100 mySlides fade2' style='display: none;'>";
                }

                true_field_pic += "<div class='text-center'><div class='row no-gutters align-items-center mt-n3 ml-n3 mr-n3'>";
                true_field_pic += "<div><img class='imagem3' src='"+newpic.URL+"'>";
                true_field_pic += "</div></div></div></div>";  
                
                test+=1;
            }
        
            true_field_pic += "<a class='prev ml-n3' onclick='plusSlides(-1)'>&#10094;</a>";
            true_field_pic += "<a class='next' onclick='plusSlides(1)'>&#10095;</a></div>";
            
            
           let abcd = 0
            for(dots of photo){   
                abcd+=1;
                if(abcd===1){
                    true_dots += "<span class='dot active' onclick='currentSlide("+abcd+")'></span>";
                }else{
                    true_dots += "<span class='dot' onclick='currentSlide("+abcd+")'></span>";
                }
            } 
        } 



            if (field.stars > 0 && field.stars <= 0.5) {
                true_stars += "<img src='img/0.5star.png' class='stars-18px mx-1'>";
            }
            if (field.stars > 0.5 && field.stars <= 1) {
                true_stars += "<img src='img/1star.png' class='stars-18px mx-1'>";
            }
            if (field.stars > 1 && field.stars <= 1.5) {
                true_stars += "<img src='img/1star.png' class='stars-18px mx-1'><img src='img/0.5star.png' class='stars-18px mx-1'>";
            }
            if (field.stars > 1.5 && field.stars <= 2) {
                true_stars += "<img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'>";
            }
            if (field.stars > 2 && field.stars <= 2.5) {
                true_stars += "<img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/0.5star.png' class='stars-18px mx-1'>";
            }
            if (field.stars > 2.5 && field.stars <= 3) {
                true_stars += "<img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'>";
            }
            if (field.stars > 3 && field.stars <= 3.5) {
                true_stars += "<img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/0.5star.png' class='stars-18px mx-1'>";
            }
            if (field.stars > 3.5 && field.stars <= 4) {
                true_stars += "<img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'>";
            }
            if (field.stars > 4 && field.stars <= 4.5) {
                true_stars += "<img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/0.5star.png' class='stars-18px mx-1'>";
            }
            if (field.stars > 4.5 && field.stars <= 5) {
                true_stars += "<img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'><img src='img/1star.png' class='stars-18px mx-1'>";
            }

            true_locality += "<label class='font-weight-bold text-primary'>" + field[0].Localizacao/*+", "+field[0].city*/ + "</label>";
            true_price += "<label class='font-weight-bold text-primary text-lg mr-5 pr-3'> " + field[0].Preco + "€ </label>";
            true_phone_number += "<label class='font-weight-bold text-primary'>" +field[0].Contacto+ "</label>";
            true_material_list += "<label class='font-weight-bold text-primary'> ";

            if(materials.status =="404"){
                true_material_list += "Não tem material incluido!";
            }else{
              for (material_list of materials) {
                  true_material_list += material_list.Material + "; ";
              }

            true_material_list += "<small><strong><em><br> Incluido no valor do aluguer</em></strong></small></label>";
            }
            if(perks.status==404){
                true_balneario +="<label class='font-weight-bold text-primary'>" + "Não tem comodidades incluidas!"+"</label>"
            }else{

                for (perk of perks) {
            true_balneario += "<label class='font-weight-bold text-primary'>" + perk.Comodidade + "<small><strong><em><br> Incluido no valor do aluguer</em></strong></small></label>";
                }
            // true_parque += "<label class='font-weight-bold text-primary'>" + field.extras.parque + "<small><strong><em><br> Incluido no valor do aluguer</em></strong></small></label>";
            //true_bar += "<label class='font-weight-bold text-primary'>"+perks[1].Comodidade + "<small><strong><em><br> Incluido no valor do aluguer</em></strong></small></label>";
            true_payment += "<label class='font-weight-bold text-primary'>"/*+field.extras.payment*/+ "PayPal, Multibanco e MBWay." + "<small><strong><em><br> Incluido no valor do aluguer</em></strong></small></label>";
            } 

            let dayWeek=0;
            if(hours.status==404){
                true_times += "<label class='font-weight-bold text-primary ml-n3'> Não tem disponibilidade!</label>";
            }else{
            for (day of hours) {
                true_times += "<div class='col-auto'>";
                if(dayWeek == 0){
                    true_times += "<label class='font-weight-bold text-primary ml-n3'>Domingo:</label>";
                }else{
                    if(dayWeek == 1){
                        true_times += "<label class='font-weight-bold text-primary ml-n3'>Segunda-feira:</label>";
                    }else{
                        if(dayWeek ==2){
                            true_times += "<label class='font-weight-bold text-primary ml-n3'>Terça-feira:</label>";
                        }else{
                            if(dayWeek ==3){
                                true_times += "<label class='font-weight-bold text-primary ml-n3'>Quarta-feira:</label>";
                            }else{
                                if(dayWeek ==4){
                                    true_times += "<label class='font-weight-bold text-primary ml-n3'>Quinta-feira:</label>";
                                }else{
                                    if(dayWeek ==5){
                                        true_times += "<label class='font-weight-bold text-primary ml-n3'>Sexta-feira:</label>";
                                    }else{
                                        true_times += "<label class='font-weight-bold text-primary ml-n3'>Sábado:</label>";
                                    }
                                }
                            }
                        }
                    }
                }
                
                
                true_times += "<label class='font-weight-bold text-primary float-right mr-5'>";
                true_times += "" + day.abertura + "h às " + day.encerramento + "h";
                true_times += "</label></div>";
                dayWeek +=1;
            } 
        }



            //envia a para a pagina
            name.innerHTML = true_name;
            pic.innerHTML = true_field_pic;
            fieldDots.innerHTML = true_dots;
            stars.innerHTML = true_stars;
            locality.innerHTML = true_locality;
            price.innerHTML = true_price;
            phoneNumber.innerHTML = true_phone_number;
            material.innerHTML = true_material_list;
            infoBalneario.innerHTML = true_balneario;
            infoParque.innerHTML = true_parque;
            infoBar.innerHTML = true_bar;
            infoPayment.innerHTML = true_payment;
            fieldTimes.innerHTML = true_times;

        }
        //chama a função fetchAsync()
        fetchAsync().then(data => console.log("done")).catch(reason => console.log(reason.message));
    }



    //-------------------------------------------------------------------------------------------------------------------------------------


    function load_friends() {
        async function fetchAsync() {

            //const response = await fetch(url + '/users');
            //const friends = await response.json();

            const show_friends = document.getElementById("show_friends");

            let see_friends = "";


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




            //criação da demonstração de resultados recebidos
            if (friends == "") {
                see_friends += "<div class='w-100'><div class='text-black-50 text-center'>Ainda não tens amigos</div></div>";
            } else {
                see_friends += "<ul class='px-0 w-100' style='list-style-type: none;'>";
                for (const friend of friends) {

                    see_friends += "<li class='myfilter text-white '>";
                    see_friends += "<a class='px-0 py-0'><div class='card shadow'><div class='card-body px-1 pb-0'>";
                    see_friends += "<div class='row ml-5'><div class='col-2'>";

                    if (friend.img == "") {
                        see_friends += "<img class='rounded-circle img-profile2' src='img/perfil/perfil5.jpg'></div><div class='col-2 pt-2'>";
                    } else {
                        see_friends += "<img class='rounded-circle img-profile2' src='" + friend.img + "'></div><div class='col-2 pt-2'>";
                    }

                    let trueLevel = parseInt(friend.pontos / 60);
                    see_friends += "<img class='img-profile2' src='img/nivel.png'><div class='level-fields'>" + trueLevel + "</div></div>";
                    see_friends += "<h5 class='text-secondary font-weight-bold col-8 pt-3 text-left'>" + friend.name + "</h5></div>";
                    see_friends += "<label class='text-black mt-1'>" + friend.email + "</label>";
                    see_friends += "</div></div></a></li>";

                }
                see_friends += "</ul>";
            }

            //envia a para a pagina
            show_friends.innerHTML = see_friends;


        }
        //chama a função fetchAsync()
        fetchAsync().then(data => console.log("done")).catch(reason => console.log(reason.message));
    }



    
    async function favorito() {
        event.preventDefault();
        id_espaco = localStorage.getItem("id_espaço");
        fetch(url + '/users/favorites/' + id_espaco, {
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
                console.log(err); // estava alert(err); coloquei console log para não estar sempre a aparecer pop-up ao utilizador
            })
            .then(async function (result) {
                if (result) {
                    //swal({ title: "Autenticação feita com sucesso!" });
                    //+ result.value.message.success);
                    console.log(result);
                    console.log("adicionado com sucesso!");
                   /* Swal.fire(
                        'Adicionado com sucesso!',
                        '',
                        'success'
                      )*/
                    botaoFav.innerHTML = "<i class='parateste fas fa-bookmark fa-lg pt-3 adicionarFavoritos text-primary'></i>";
                }
                else {

                    id_espaco = localStorage.getItem("id_espaço");
                    fetch(url + '/users/favorites/' + id_espaco, {
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
                            if (result) {
                                //swal({ title: "Autenticação feita com sucesso!" });
                                //+ result.value.message.success);
                                console.log(result);
                                console.log("Removido com sucesso!");
                                /*Swal.fire(
                                    'Removido com sucesso!',
                                    '',
                                    'success'
                                  )*/
                                botaoFav.innerHTML = "<i class='parateste far fa-bookmark fa-lg pt-3 adicionarFavoritos'></i>";
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

    };

    async function isFavorito(){
        id_user=localStorage.getItem("id_user");
        id_EspaçoAtual=localStorage.getItem("id_espaço");
        
        const response = await fetch(url + '/users/' + id_user + '/favorites');
            const fav_fields = await response.json();
            console.log(fav_fields);
            console.log(id_EspaçoAtual);

            for (fav of fav_fields){
                if(fav.idEspaco == id_EspaçoAtual){
                    botaoFav.innerHTML = "<i class='parateste fas fa-bookmark fa-lg pt-3 adicionarFavoritos text-primary'></i>";
                }
            }
    }
/*
function myFunction20() {
 if(document.getElementById("horas").value == "") {
        document.getElementById("clicado").style.display="none";
        console.log("clicado");
    } else {
        document.getElementById("clicado").style.display="block";
        console.log("adeus");
    }
}
 let horas=document.getElementById("horas");
 horas.addEventListener("change", myFunction20);
*/





const botaoInscrever1 = document.getElementById("multi");
const botaoInscrever2 = document.getElementById("payP");
const botaoInscrever3 = document.getElementById("MBW");
botaoInscrever1.addEventListener("click", inscrever);
botaoInscrever2.addEventListener("click", inscrever);
botaoInscrever3.addEventListener("click", inscrever);


  //  const botaoInscrever = document.getElementById("clicado");
    //botaoInscrever.addEventListener("click", inscrever);

    async function inscrever() {
        event.preventDefault();
        var data = {};
        let dia=document.getElementById("calendario").value;

        horas=document.getElementById("horas").value;
        if(horas==""){
            Swal.fire(
                                        'Preencha todos os campos!',
                                        '',
                                        'warning'
                                      )
        }else{
       //     horas.addEventListener("change", verHoras);

          //  async function verHoras(){
          //      console.log(horas.value);
         //   } 
         const response = await fetch(url + '/play-spaces/' + idEspaco);
         const field = await response.json();
         console.log(field);
        let Datax=dia + " " + horas;
        preco=field[0].Preco;

        let hora="";
        let x="";
        radios=document.getElementsByName("type");
        for (var i = 0; i < radios.length; i++) {
          if (radios[i].checked) {
              console.log("Escolheu: " + radios[i].value);
              x=radios[i].value;
          }
        }
        if(x=="Reserve"){
            x="0";
        }
        else{
            x="1";
        }
                            data.idEspaco = localStorage.getItem("id_espaço");
                            data.Data = Datax;
                            data.tipo = x;
                            data.pagamento = preco.toString();
                            console.log(data.idEspaco = localStorage.getItem("id_espaço"));
                            console.log(Datax);
                            console.log(x);
                            console.log(preco.toString());
                            await fetch(url + '/users/registrations', {
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                mode: 'cors',
                                method: 'POST',
                                body: JSON.stringify(data),
                                credentials: 'include'
                            }).then(function (response) {
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
                                        'Registado com sucesso!',
                                        '',
                                        'success'
                                      ).then( () => {
                                        window.location.replace("./Reservas.html");
                                    })
                      
                                    
                                }
                                else {
                                    Swal.fire(
                                        'Já existe uma atividade a essa hora!',
                                        '',
                                        'warning'
                                      )
                                    console.log(result);
                                    //swal({ title: `${result.value.userMessage.message.pt}` });
                                }
                            });
        }
    };
















};
