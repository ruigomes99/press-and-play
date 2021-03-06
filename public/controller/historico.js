window.onload = function () {
    reservas();

    if(performance.navigation.type == 2){
            location.reload(true);
    }
    
    function reservas() {
        async function fetchAsync() {
            id_user=localStorage.getItem("id_user");
            const response = await fetch(url + '/users/'+ id_user +'/registrations-history');
            const reservas = await response.json();
            console.log(reservas);
            const real_content = document.getElementById("real_content");

            let true_content = "";

/*
            const reservas = [
                {
                    field: "BeFun",
                    locality: "Lisboa",
                    day: "Wed Dec 31 2019 22:02:09 GMT+0000",
                    stars: 2,
                    img: "img/campos/imagem-campo5.jpg"
                },
                {
                    field: "CrazySoccer",
                    locality: "Coimbra",
                    day: "Wed Dec 31 2019 22:02:09 GMT+0000",
                    stars: 1.5,
                    img: "img/campos/imagem-campo3.jpg"
                },
                {
                    field: "HappyHour",
                    locality: "Porto",
                    day: "Wed Dec 31 2019 22:02:09 GMT+0000",
                    stars: 3.5,
                    img: "img/campos/imagem-campo6.jpg"
                },
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
                    day: "Wed Dec 31 2019 22:02:09 GMT+0000",
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
                    stars: 4,
                    img: "img/campos/imagem-campo7.jpg"
                }              
            ]
*/



            //cria????o da demonstra????o de resultados recebidos
            if (reservas.status == "404") {
                true_content +="<div class='w-100'><div class='text-black-50 text-center'>N??o h?? reservas neste momento</div></div>";
            } else {
                true_content += "<ul class='px-2 w-100'>";
                for (const reserva of reservas) {

                    true_content += "<li class='myfilter text-white col-xl-3 col-md-6 mb-3'>";
                    true_content += "<a id='" + reserva.id_inscricao + "' onClick='GFG_clickReserva(this.id)' href='alugado.html' class='card shadow h-100 py-0'>";
                    true_content += "<div class='card-body2 w-100'>";
                    true_content += "<div class='row no-gutters align-items-center'><div class='col-auto'>";
                    true_content += "<div><img class='imagem' src='"+reserva.Avatar_Participantes+"'></div>";
                    true_content += "<div class='myicons inline mt-2' style='margin-left: 20px;'>";


                    if(reserva.Avaliacao_Participantes > 0 && reserva.Avaliacao_Participantes <= 0.5){
                        true_content += "<img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if(reserva.Avaliacao_Participantes > 0.5 && reserva.Avaliacao_Participantes <= 1){
                        true_content += "<img src='img/1star.png' class='stars-16px mx-1'>";
                    }
                    if(reserva.Avaliacao_Participantes > 1 && reserva.Avaliacao_Participantes <= 1.5){
                        true_content += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if(reserva.Avaliacao_Participantes > 1.5 && reserva.Avaliacao_Participantes <= 2){
                        true_content += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                    }
                    if(reserva.Avaliacao_Participantes > 2 && reserva.Avaliacao_Participantes <= 2.5){
                        true_content += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if(reserva.Avaliacao_Participantes > 2.5 && reserva.Avaliacao_Participantes <= 3){
                        true_content += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                    }
                    if(reserva.Avaliacao_Participantes > 3 && reserva.Avaliacao_Participantes <= 3.5){
                        true_content += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if(reserva.Avaliacao_Participantes > 3.5 && reserva.Avaliacao_Participantes <= 4){
                        true_content += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                    }
                    if(reserva.Avaliacao_Participantes > 4 && reserva.Avaliacao_Participantes <= 4.5){
                        true_content += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if(reserva.Avaliacao_Participantes > 4.5 && reserva.Avaliacao_Participantes <= 5){
                        true_content += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                    }

                    true_content += "</div></div><div class='col-6 ml-3'><h5 class='text-secondary mr-n4'>" + reserva.Nome + "</h5>";
                    true_content += "<ul class='text-primary pl-4 mb-2'>";

                    let dayEvent = new Date(reserva.Data);
                    true_content += "<li>" + reserva.Localizacao + "</li><li>" +dayEvent.getDate()+"-"+(dayEvent.getMonth()+1) +"-"+dayEvent.getFullYear()+ "</li>";
                    true_content += "<li>" + ("0" + dayEvent.getHours()).slice(-2) + ":" + ("0" + dayEvent.getMinutes()).slice(-2) +"h</li></ul></div></div></div></a></li>";

                }
                true_content += "</ul>";
            }

            //envia a para a pagina
            real_content.innerHTML = true_content;


        }
        //chama a fun????o fetchAsync()
        fetchAsync().then(data => console.log("done")).catch(reason => console.log(reason.message));
    }
};


function GFG_clickReserva(clicked) {
    //alert(clicked); 
    localStorage.setItem("id_inscricao", clicked);
}