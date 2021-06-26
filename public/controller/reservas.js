window.onload = function () {
    reservas();

    if(performance.navigation.type == 2){
            location.reload(true);
    }


    function reservas() {
        async function fetchAsync() {
            id_user=localStorage.getItem("id_user");
            const response = await fetch(url + '/users/' + id_user + '/registrations');
            const reservas = await response.json();
            console.log(reservas);
            const real_content = document.getElementById("real_content");

            let true_content = "";

/*
            const reservas = [
                {
                    field: "PlaySoccer",
                    locality: "Fafe",
                    day: "Wed Dec 31 2019 22:02:09 GMT+0000",
                    stars: 4.5,
                    img: "img/campos/imagem-campo.jpg"
                },
                {
                    field: "PlayGreen",
                    locality: "Braga",
                    day: "Wed Jan 01 2019 08:02:09 GMT+0000",
                    stars: 3,
                    img: "img/campos/imagem-campo6.jpg"
                },
                {
                    field: "Marrocos",
                    locality: "Felgueiras",
                    day: "Wed Dec 31 2019 22:02:09 GMT+0000",
                    stars: 2.5,
                    img: "img/campos/imagem-campo2.jpg"
                },
                {
                    field: "Soccer",
                    locality: "Vizela",
                    day: "Wed Dec 31 2019 22:02:09 GMT+0000",
                    stars: 1,
                    img: "img/campos/imagem-campo7.jpg"
                }
            ]
*/


            //criação da demonstração de resultados recebidos
            if (reservas.status == "404") {
                true_content +="<div class='w-100'><div class='text-black-50 text-center'>Não há reservas neste momento</div></div>";
            } else {
                true_content += "<ul class='px-2 w-100'>";
                for (const reserva of reservas) {

                    true_content += "<li class='myfilter text-white col-xl-3 col-md-6 mb-3'>";
                    true_content += "<a id='" + reserva.id_inscricao+ "' onClick='GFG_clickReservas(this.id)' href='alugado.html' class='card shadow h-100 py-0'>";
                    true_content += "<div class='card-body2 w-100'>";
                    true_content += "<div class='row no-gutters align-items-center'><div class='col-auto'>";
                    true_content += "<div><img class='imagem' src='"+reserva.Avatar_Participantes+"'></div>";
                    true_content += "<div class='myicons inline mt-2' style='margin-left: 20px;'>";


                    if(reserva.stars > 0 && reserva.stars <= 0.5){
                        true_content += "<img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if(reserva.stars > 0.5 && reserva.stars <= 1){
                        true_content += "<img src='img/1star.png' class='stars-16px mx-1'>";
                    }
                    if(reserva.stars > 1 && reserva.stars <= 1.5){
                        true_content += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if(reserva.stars > 1.5 && reserva.stars <= 2){
                        true_content += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                    }
                    if(reserva.stars > 2 && reserva.stars <= 2.5){
                        true_content += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if(reserva.stars > 2.5 && reserva.stars <= 3){
                        true_content += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                    }
                    if(reserva.stars > 3 && reserva.stars <= 3.5){
                        true_content += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if(reserva.stars > 3.5 && reserva.stars <= 4){
                        true_content += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                    }
                    if(reserva.stars > 4 && reserva.stars <= 4.5){
                        true_content += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if(reserva.stars > 4.5 && reserva.stars <= 5){
                        true_content += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                    }

                    let dayEvent = new Date(reserva.Data);
                    true_content += "</div></div><div class='col-6 ml-3'><h5 class='text-secondary mr-n4'>" + reserva.Nome + "</h5>";
                    true_content += "<ul class='text-primary pl-4 mb-2'>";
                    true_content += "<li>" + reserva.Localizacao + "</li>";
                    true_content += "<li>"+("0" + dayEvent.getDate()).slice(-2)+"-"+("0" + (dayEvent.getMonth()+1)).slice(-2) +"-"+dayEvent.getFullYear()+"</li>";
                    true_content += "<li>"+ ("0" + dayEvent.getHours()).slice(-2) + ":" + ("0" + dayEvent.getMinutes()).slice(-2) +"h</li>";
                    true_content += "</ul></div></div></div></a></li>";

                }
                true_content += "</ul>";
            }

            //envia a para a pagina
            real_content.innerHTML = true_content;


        }
        //chama a função fetchAsync()
        fetchAsync().then(data => console.log("done")).catch(reason => console.log(reason.message));
    }
};



function GFG_clickReservas(clicked) {
    //alert(clicked); 
   localStorage.setItem("id_inscricao", clicked);
}