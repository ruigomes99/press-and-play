window.onload = function () {
    favourites_fields();

    if(performance.navigation.type == 2){
            location.reload(true);
    }
    
    function favourites_fields() {
        async function fetchAsync() {
            id_user=localStorage.getItem("id_user");
            const response = await fetch(url + '/users/' + id_user + '/favorites');
            const fav_fields = await response.json();
            console.log(fav_fields);
            const real_fav_fields = document.getElementById("real_fav_fields");

            let true_fav_fields = "";

/*
            const fav_fields = [
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
                    price: 12,
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
            if (fav_fields.status == "404") {
                true_fav_fields += "<div class='w-100'><div class='text-black-50 text-center'>Ainda não tens campos favoritos</div></div>";
            } else {
                true_fav_fields += "<ul class='px-2 w-100'>";
                for (const field of fav_fields) {

                    true_fav_fields += "<li class='myfilter text-white col-xl-3 col-md-6 mb-3'>";
                    true_fav_fields += "<a id='" + field.idEspaco + "' onClick='GFG_click(this.id)' href='campo.html' class='card shadow h-100 py-0'>";
                    true_fav_fields += "<div class='card-body2 w-100'>";
                    true_fav_fields += "<div class='row no-gutters align-items-center'><div class='col-auto'>";
                    true_fav_fields += "<div><img class='imagem' src='" + field.Avatar_Participantes + "'></div>";
                    true_fav_fields += "<div class='myicons inline mt-2' style='margin-left: 20px;'>";

                    if (field.stars > 0 && field.stars <= 0.5) {
                        true_fav_fields += "<img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if (field.stars > 0.5 && field.stars <= 1) {
                        true_fav_fields += "<img src='img/1star.png' class='stars-16px mx-1'>";
                    }
                    if (field.stars > 1 && field.stars <= 1.5) {
                        true_fav_fields += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if (field.stars > 1.5 && field.stars <= 2) {
                        true_fav_fields += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                    }
                    if (field.stars > 2 && field.stars <= 2.5) {
                        true_fav_fields += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if (field.stars > 2.5 && field.stars <= 3) {
                        true_fav_fields += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                    }
                    if (field.stars > 3 && field.stars <= 3.5) {
                        true_fav_fields += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if (field.stars > 3.5 && field.stars <= 4) {
                        true_fav_fields += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                    }
                    if (field.stars > 4 && field.stars <= 4.5) {
                        true_fav_fields += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/0.5star.png' class='stars-16px mx-1'>";
                    }
                    if (field.stars > 4.5 && field.stars <= 5) {
                        true_fav_fields += "<img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'><img src='img/1star.png' class='stars-16px mx-1'>";
                    }

                    true_fav_fields += "</div></div><div class='col-6 ml-3'><h5 class='text-secondary mr-n4'>" + field.Nome + "</h5>";
                    true_fav_fields += "<ul class='text-primary pl-4 mb-2'>";
                    true_fav_fields += "<li>" + field.Localizacao + "</li><li>" + field.Preco + "€"+ "</li></ul>";
                    true_fav_fields += "<div class='container mt-2 px-0'>";
                 //   true_fav_fields += "<div class='myicons inline mt-2 text-center'>" + field.Preco + "€";

                   /* if (field.extra.wi_fi === "yes") {
                        true_fav_fields += "<i class='fas fa-wifi ml-3 mx-1'></i>";
                    } else if (field.extra.wi_fi === "no") {
                        true_fav_fields += "<i class='fas fa-wifi ml-3 mx-1 text-black-50'></i>";
                    }


                    if (field.extra.equipment === "yes") {
                        true_fav_fields += "<i class='fas fa-tshirt mx-1'></i>";
                    } else if (field.extra.equipment === "no") {
                        true_fav_fields += "<i class='fas fa-tshirt mx-1 text-black-50'></i>";
                    }


                    if (field.extra.shower === "yes") {
                        true_fav_fields += "<i class='fas fa-shower mx-1'></i>";
                    } else if (field.extra.shower === "no") {
                        true_fav_fields += "<i class='fas fa-shower mx-1 text-black-50'></i>";
                    }


                    if (field.extra.bar === "yes") {
                        true_fav_fields += "<i class='fas fa-cocktail mx-1'></i>";
                    } else if (field.extra.bar === "no") {
                        true_fav_fields += "<i class='fas fa-cocktail mx-1 text-black-50'></i>";
                    }


                    if (field.extra.park === "yes") {
                        true_fav_fields += "<i class='fas fa-car mx-1'></i>";
                    } else if (field.extra.park === "no") {
                        true_fav_fields += "<i class='fas fa-car mx-1 text-black-50'></i>";
                    }
*/
//PRECISO DE VER COMO FAZER ISTO
                    true_fav_fields += "</div></div></div></div></div></a></li>";

                }
                true_fav_fields += "</ul>";
            }

            //envia a para a pagina
            real_fav_fields.innerHTML = true_fav_fields;


        }
        //chama a função fetchAsync()
        fetchAsync().then(data => console.log("done")).catch(reason => console.log(reason.message));
    }
};

function GFG_click(clicked) {
    //alert(clicked);
    localStorage.setItem("id_espaço", clicked);
}