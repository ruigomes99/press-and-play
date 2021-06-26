window.onload = function () {
    
    
    if(performance.navigation.type == 2){
        location.reload(true);
     }
    
    display_team_members();
    display_addfriends();
    display_addnewLider();

    function display_team_members() {
        async function fetchAsync() {
            id_equipa = localStorage.getItem("id_equipa");
            id_user = localStorage.getItem("id_user");
            const response = await fetch(url + '/teams/' + id_equipa + '/team-users');
            const members = await response.json();
            console.log(members);


            const response1 = await fetch(url + '/teams/' + id_equipa);
            const team = await response1.json();
            console.log(team);


            const team_name = document.getElementById("team_name");
            const show_members = document.getElementById("show_members");
            const forOwner = document.getElementById("forOwner");
            const team_img = document.getElementById("teamImg");
            const team_points = document.getElementById("teamPoints");
            const showAddImg = document.getElementById("showAddImg");


            let see_name = "";
            let see_members = "";
            let true_owner = "";
            let true_img = "";
            let true_points = "";
            let show_addImg = "";
            let Im_lider = "";
/*
            const idUser = 20;
            const teste = [
                {
                    id: 20,
                    name: "Carlos Pires",
                    email: "azul@hotmail.com",
                    level: 25,
                    img: "img/perfil/perfil2.jpg",
                    lider: 1
                },
                {
                    id: 1,
                    name: "Jose Costa",
                    email: "vermelgo@hotmail.com",
                    level: 12,
                    img: "",
                    lider: 0
                },
                {
                    id: 2,
                    name: "Rui Teixeira",
                    email: "amarelo@hotmail.com",
                    level: 9,
                    img: "img/perfil/perfil3.png",
                    lider: 0
                },
                {
                    id: 3,
                    name: "João Carvalho",
                    email: "preto@hotmail.com",
                    level: 22,
                    img: "img/perfil/perfil4.jpg",
                    lider: 0
                },
                {
                    id: 4,
                    name: "Isabel Costa",
                    email: "rosa@hotmail.com",
                    level: 30,
                    img: "img/perfil/perfil.jpeg",
                    lider: 0
                }
            ]

            const team = {
                name: "PWALPHA",
                img: "img/equipas/equipa1.jpg",
                poinsts: 1234434,
                members: teste
            }

*/             console.log(team[0].nome_equipa);

            //criação da demonstração de resultados recebidos
            for (var i = 0; i < members.length; i++) {
                if (members[i].id_user == id_user) {
                    if (members[i].lider === 1) {
                        true_owner += "<button class='fixed-bottom5 btn bg-primary border-secondary btn-icon-split btn-lg mr-4 mb-2 mt-3' id='edit_teams' onclick='display()' >";
                        true_owner += "<span class='icon text-white bg-primary menu-icon' onclick='toCheck()'>";
                        true_owner += "<i class='fas fa-pen px-1'></i></span></button>";
                        showAddImg.style.display="block";
                        
                        //show_addImg += "<label for='file-upload' class='custom-file-upload'><i class='fa fa-plus'></i>";
                        //show_addImg += "</label><input id='file-upload' type='file' accept='image/*'/>";

                    } else {
                        true_owner += "<button class='fixed-bottom5 btn bg-red border-secondary btn-icon-split btn-lg mr-4 mb-2 mt-3' onClick='GFG_click2(this.id)' id='exit_team'>";
                        true_owner += "<span class='icon text-white bg-red menu-icon'>";
                        true_owner += "<i class='fas fa-sign-out-alt px-1 pt-2'></i></span></button>";

                        //show_addImg += "<label hidden for='file-upload' class='custom-file-upload'><i class='fa fa-plus'></i>";
                        //show_addImg += "</label><input id='file-upload' type='file' accept='image/*'/>";

                        // showAddImg.style.display="none";

                    }
                } else {
                    true_owner += "";
                    //show_addImg += "";

                   // showAddImg.style.display = "none";
                }
            }


            see_name += "<input id='thisName' type='search' class='font-weight-bold text-secondary my-4 text-center'";
            see_name += "style='font-size: 1.5rem; background-color: transparent; border: none; width: 180px;'";
            see_name += "value='" + team[0].nome_equipa + "' readonly>";



            true_img += "<img class='img-show-inTeam' id='Pic' src='" + team[0].avatar + "'>";
            true_points += "<span class='text-black'>" + team[0].classificacao + "</span>" + " pontos";

            see_members += "<ul class='px-2 w-100 pb-5' id='ListOfMembers' style='list-style-type: none;'>";
            for (var i = 0; i < members.length; i++) {

                see_members += "<li class='myfilter text-white col-xl-3 col-md-6'>";
                see_members += "<a href='perfil-outra.html' id='" + members[i].id_user + "' onClick='GFG_click(this.id)'><div class='border-bottom-secondary bor-back'>";
                see_members += "<div class='card-body2'><div class='row'><div class='col-2 mr-3'>";

                if (members.img == "") {
                    see_members += "<img class='rounded-circle img-show-profile' src='img/perfil/perfil5.jpg'></div>";
                } else {
                    see_members += "<img class='rounded-circle img-show-profile' src='" + members[i].avatar + "'></div>";
                }


                see_members += "<div class='col-3 pt-2 ml-n2'>";
                let trueLevel = parseInt(members[i].pontos / 60);
                see_members += "<img class='icon-header' src='img/nivel.png'><div class='level-member-team'>" + trueLevel + "</div></div>";
                see_members += "<div class='col-auto pt-3 ml-n2'>";
                see_members += "<h5 class='text-secondary font-weight-bold'>" + members[i].primeiro_nome + " " + members[i].ultimo_nome + " ";

                if (members[i].lider === 1) {
                    see_members += "<div style='margin: 0px;' class='d-inline' id='ImLider'></div>";
                    Im_lider += "<span class='text-red' style='font-size: 0.8rem;'>lider</span>";
                }

                see_members += "</h5><div class='text-black small'>" + members[i].email + "</div>";
                see_members += "</div></div></div></div></a></li>";
            }
            see_members += "</ul>";

            //envia a para a pagina
            team_name.innerHTML = see_name;
            team_img.innerHTML = true_img;
            team_points.innerHTML = true_points;
            show_members.innerHTML = see_members;
            forOwner.innerHTML = true_owner;
            //showAddImg.innerHTML = show_addImg;
            document.getElementById("ImLider").innerHTML = Im_lider;


        }
        //chama a função fetchAsync()
        fetchAsync().then(data => console.log("done")).catch(reason => console.log(reason.message));
    }



    function display_addfriends() {
        async function fetchAsync() {
            id_user = localStorage.getItem("id_user");
            const response = await fetch(url + '/users/' + id_user + '/friends-list');
            const friends = await response.json();
            console.log(friends);
            const show_people = document.getElementById("show_people");

            id_equipa = localStorage.getItem("id_equipa");
            const response1 = await fetch(url + '/teams/' + id_equipa + '/team-users');
            const members = await response1.json();
            console.log(members);

            let see_people = "";

            /*
                        const people = [
                            {
                                id: 1,
                                name: "Carlos Pires",
                                email: "azul@hotmail.com",
                                level: 25,
                                img: "img/perfil/perfil2.jpg"
                            },
                            {
                                id: 2,
                                name: "Jose Costa",
                                email: "vermelgo@hotmail.com",
                                level: 12,
                                img: "img/perfil/perfil1.png"
                            },
                            {
                                id: 3,
                                name: "Rui Teixeira",
                                email: "amarelo@hotmail.com",
                                level: 9,
                                img: "img/perfil/perfil3.png"
                            },
                            {
                                id: 4,
                                name: "João Carvalho",
                                email: "preto@hotmail.com",
                                level: 22,
                                img: "img/perfil/perfil4.jpg"
                            },
                            {
                                id: 5,
                                name: "Isabel Costa",
                                email: "rosa@hotmail.com",
                                level: 30,
                                img: "img/perfil/perfil.jpeg"
                            },
                            {
                                id: 6,
                                name: "Luis Carvalho",
                                email: "castanho@hotmail.com",
                                level: 1,
                                img: ""
                            },
                            {
                                id: 7,
                                name: "Ze Costa",
                                email: "castanho@hotmail.com",
                                level: 1,
                                img: ""
                            },
                            {
                                id: 8,
                                name: "Pedro Pinheiro",
                                email: "castanho@hotmail.com",
                                level: 1,
                                img: ""
                            },
                            {
                                id: 9,
                                name: "Andre Gomes",
                                email: "castanho@hotmail.com",
                                level: 1,
                                img: ""
                            }
                        ]
            */



            //criação da demonstração de resultados recebidos 
            see_people += "<div id='checkboxes'>";
            see_people += "<ul id='selecListToAdd' class='container6' style='list-style-type: none;'>";
            let test = 0;



            for (var i = 0; i < friends.length; i++) {
                let esta = 0;
                for (member of members) {

                    if (member.id_user == friends[i].id_user) {
                        esta += 1;
                    }

                }
                if (esta == 0) {
                    see_people += "<li class='myfilter3 text-white col-xl-3 col-md-6'>";

                    test += 1;
                    see_people += "<input type='checkbox' name='rGroup' value='1" + friends[i].id_user + "' id='r1" + friends[i].id_user + "'/>";
                    see_people += "<label class='whatever' for='r1" + friends[i].id_user + "'>";

                    see_people += "<div class='border-bottom-secondary bor-back'><div class='card-body4'>";
                    see_people += "<div class='row ml-2'><div class='col-2 mr-3'>";

                    if (friends[i].avatar == "") {
                        see_people += "<img class='rounded-circle img-show-profile' src='img/perfil/perfil5.jpg'></div><div class='col-3 pt-2'>";
                    } else {
                        see_people += "<img class='rounded-circle img-show-profile' src='" + friends[i].avatar + "'></div><div class='col-3 pt-2'>";
                    }

                    let trueLevel2 = parseInt(friends[i].pontos / 60);
                    see_people += "<img class='img-level' src='img/nivel.png'><div class='level-add'>" + trueLevel2 + "</div></div>";
                    see_people += "<div class='col-auto pt-3 ml-n2'>";
                    see_people += "<h5 class='text-secondary font-weight-bold'>" + friends[i].primeiro_nome + " " + friends[i].ultimo_nome + "</h5>";
                    see_people += "<div class='text-black'>" + friends[i].email + "</div>";
                    see_people += "</div></div></div></div></label></li>";
                }

            }
            see_people += "</ul></div>";


            //envia a para a pagina
            show_people.innerHTML = see_people;


        }
        //chama a função fetchAsync()
        fetchAsync().then(data => console.log("done")).catch(reason => console.log(reason.message));
    }



    //------------------------------------------display para transferir-------------------------------------------------

    function display_addnewLider() {
        async function fetchAsync() {
            id_user = localStorage.getItem("id_user");

            const show_toTransfer = document.getElementById("show_toTransfer");

            id_equipa = localStorage.getItem("id_equipa");
            const response = await fetch(url + '/teams/' + id_equipa + '/team-users');
            const members = await response.json();
            console.log(members);

            let see_fnewlider = "";



            //criação da demonstração de resultados recebidos 
            see_fnewlider += "<div id='radios'>";
            see_fnewlider += "<ul id='selecListToLider' class='container6' style='list-style-type: none;'>";
            let test = 0;





            for (member of members) {
                if (member.id_user == id_user) {
                    console.log("tu nao apareces");
                } else {
                    if (members.status == "404") {
                        console.log("esta equipa nao tem elementos")
                    } else {
                        see_fnewlider += "<li class='myfilter5 text-white col-xl-3 col-md-6'>";

                        test += 1;
                        see_fnewlider += "<input type='radio' name='rGroup' value='2" + member.id_user + "' id='r2" + member.id_user + "'/>";
                        see_fnewlider += "<label class='whatever' for='r2" + member.id_user + "'>";

                        see_fnewlider += "<div class='border-bottom-secondary bor-back'><div class='card-body4'>";
                        see_fnewlider += "<div class='row ml-2'><div class='col-2 mr-3'>";

                        if (member.avatar == "") {
                            see_fnewlider += "<img class='rounded-circle img-show-profile' src='img/perfil/perfil5.jpg'></div><div class='col-3 pt-2'>";
                        } else {
                            see_fnewlider += "<img class='rounded-circle img-show-profile' src='" + member.avatar + "'></div><div class='col-3 pt-2'>";
                        }

                        let trueLevel2 = parseInt(member.pontos / 60);
                        see_fnewlider += "<img class='img-level' src='img/nivel.png'><div class='level-add'>" + trueLevel2 + "</div></div>";
                        see_fnewlider += "<div class='col-auto pt-3 ml-n2'>";
                        see_fnewlider += "<h5 class='text-secondary font-weight-bold'>" + member.primeiro_nome + " " + member.ultimo_nome + "</h5>";
                        see_fnewlider += "<div class='text-black'>" + member.email + "</div>";
                        see_fnewlider += "</div></div></div></div></label></li>";
                    }
                }






            }
            see_fnewlider += "</ul></div>";


            //envia a para a pagina
            show_toTransfer.innerHTML = see_fnewlider;


        }
        //chama a função fetchAsync()
        fetchAsync().then(data => console.log("done")).catch(reason => console.log(reason.message));
    }

    //-------------------------------------------------------------------------------------------------------------


    const botaoApagarEquipa = document.getElementById("remove_player");

    botaoApagarEquipa.addEventListener("click", apagarElemento);

    async function apagarElemento() {
        event.preventDefault();
        getIds();
        id_equipa = localStorage.getItem("id_equipa");
        console.log(id_equipa);
        console.log(ids);
        for (var i = 0; i < ids.length; i++) {
            let x = ids[i].substring(1, ids[i].length);
            id_user = x;
            console.log(id_user);
            fetch(url + '/teams/' + id_equipa + '/team-users/' + id_user, {
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
                            'Apagado com sucesso!',
                            '',
                            'success'
                          ).then( () => {
                            window.location.replace("./Equipas.html");
                        })
          
                    }
                    else {
                        Swal.fire(
                            'Nunca se pode apagar o lider. Transfere a liderança primeiro!',
                            '',
                            'warning'
                          )
                        console.log(result);
                        //swal({ title: `${result.value.userMessage.message.pt}` });
                    }
                });
        }
    };

    //----------------------------------------------------------------------------

    const botaoTransferir = document.getElementById("botaoTransferir");

    botaoTransferir.addEventListener("click", transferirLiderença);

    async function transferirLiderença() {
        event.preventDefault();
        getIdsToLider();
        id_equipa = localStorage.getItem("id_equipa");
        console.log(id_equipa);
        console.log(idsToLider);
        
        let x = idsToLider.substring(2, idsToLider.length);
        id_user = x;
        console.log(id_user);
            fetch(url + '/teams/' + id_equipa+ '/team-users/' + id_user, {
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                method: 'PUT',
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
                            'Transferida com sucesso!',
                            '',
                            'success'
                          ).then( () => {
                            window.location.replace("./Equipas.html");
                        })
          
                        
                    }
                    else {
                        Swal.fire(
                            'Tens de selecionar um marmelo!',
                            '',
                            'warning'
                          )
                        console.log(result);
                        //swal({ title: `${result.value.userMessage.message.pt}` });
                    }
                });
        
    };

    //----------------------------------------------------------------------------

    const botaoAdicionarMarmelo = document.getElementById("botaoEditar");

    botaoAdicionarMarmelo.addEventListener("click", adicionaMarmelo);

    async function adicionaMarmelo() {
        event.preventDefault();
        getIdsToAdd();
        id_equipa = localStorage.getItem("id_equipa");
        console.log(idsToAdd);
        for (var i = 0; i < idsToAdd.length; i++) {
            let x = idsToAdd[i].substring(2, idsToAdd[i].length);
            id_user = x;
            console.log(id_user);
            fetch(url + '/teams/' + id_equipa + '/team-users/' + id_user, {
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
                    console.log(result);
                    if (result.msg == "success") {
                        //swal({ title: "Autenticação feita com sucesso!" });
                        //+ result.value.message.success);S
                        Swal.fire(
                            'Adicionado com sucesso!',
                            '',
                            'success'
                          ).then( () => {
                            window.location.replace("./Equipa.html");
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




    const editEquipa = document.getElementById("confChanges");

    editEquipa.addEventListener("click", editarEquipa);

    async function editarEquipa() {
        event.preventDefault();
        id_equipa = localStorage.getItem("id_equipa");
        data = {};
        data.nome_equipa = document.getElementById("thisName").value;
        fetch(url + '/teams/' + id_equipa, {
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
                if (result.success) {
                    //swal({ title: "Autenticação feita com sucesso!" });
                    //+ result.value.message.success);S
                    Swal.fire(
                        'Alterado com sucesso!',
                        '',
                        'success'
                      ).then( () => {
                        window.location.replace("./Equipa.html");
                    })
                }
                else {
                     Swal.fire(
                            'Insira um nome válido! Não pode conter espaços e apenas aceita letras!',
                            '',
                            'warning'
                          )
                    console.log(result);
                    //swal({ title: `${result.value.userMessage.message.pt}` });
                }
            });

    };





    const botaoSairOwner = document.getElementById("exit_team");

    botaoSairOwner.addEventListener("click", sairElementoOwner);

    async function sairElementoOwner() {
        event.preventDefault();
        id_equipa = localStorage.getItem("id_equipa");
        fetch(url + '/users/user-teams/' + id_equipa, {
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
                        'Saiu e apagou com sucesso!',
                        '',
                        'success'
                      ).then( () => {
                        window.location.replace("./Equipas.html");
                    })
      
                    
                }
                else {
                    Swal.fire(
                        'És lider! Tens que transferir a liderança!',
                        '',
                        'warning'
                      )
                    console.log(result);
                    //swal({ title: `${result.value.userMessage.message.pt}` });
                }
            });

    };








    /* async function sairElementoOwner() {
         event.preventDefault();
         id_equipa = localStorage.getItem("id_equipa");
 
         const response = await fetch(url + '/teams/' + id_equipa + '/team-users');
             const members = await response.json();
             console.log(members);
         if(members.length>1){
         id_user = members[1].id_user;
         //console.log(id_user);
           //  delete('/users/user-teams/:id_equipa')
             fetch(url + '/teams/' + id_equipa + '/team-users/' + id_user, {
                 headers: {
                     'Content-Type': 'application/json'
                 },
                 mode: 'cors',
                 method: 'PUT',
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
                         fetch(url + '/users/user-teams/' + id_equipa, {
                      headers: {
                              'Content-Type': 'application/json'
                          },
                         mode: 'cors',
                         method: 'DELETE',
                         credentials: 'include'
             }).then(function (response) {
                 //console.log(response.headers.get('Set-Cookie'));
                 console.log(response);
                 if (!response.ok) {
                     throw new Error(response.statusText);
                 }
                 return response.json();
             }).catch(function (err) {
                 //swal.showValidationError('Pedido falhado: ' + err);
                 console.log(err); // estava alert(err); coloquei console log para não estar sempre a aparecer pop-up ao utilizador
             })
             if (result) {
                         alert("Já não faz parte desta equipa!");
                         window.location.replace("./perfil.html");
             }
             else{
                 alert("Ocorreu um erro!");
                         console.log(result);
             }
             
                     }
                     
                     else {
                         alert("Ocorreu um erro!");
                         console.log(result);
                         //swal({ title: `${result.value.userMessage.message.pt}` });
                     }
                 });
             }
             else{
                 fetch(url + '/users/user-teams/' + id_equipa, {
                     headers: {
                             'Content-Type': 'application/json'
                         },
                        mode: 'cors',
                        method: 'DELETE',
                        credentials: 'include'
            }).then(function (response) {
                //console.log(response.headers.get('Set-Cookie'));
                console.log(response);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            }).catch(function (err) {
                //swal.showValidationError('Pedido falhado: ' + err);
                console.log(err); // estava alert(err); coloquei console log para não estar sempre a aparecer pop-up ao utilizador
            })//esta a dar erro, mas esta a apagar. Ver o que se passa!
            if (result) {
                        alert("Já não faz parte desta equipa!");
                        window.location.replace("./perfil.html");
            }
            else{
                alert("Ocorreu um erro!");
                        console.log(result);
            }
            
 
             }
         
     };*/




    //-----------------------------------------------------------------------------


};











//----------------------------------------------toCheck-------------------------------------------------------

let wasPressed = true;
async function toCheck() {

    if (wasPressed === true) {
        id_equipa = localStorage.getItem("id_equipa");
        id_user = localStorage.getItem("id_user");
        const response = await fetch(url + '/teams/' + id_equipa + '/team-users');
        const members = await response.json();
        console.log(members);

        const response1 = await fetch(url + '/teams/' + id_equipa);
        const team = await response1.json();
        console.log(team);

        const team_name = document.getElementById("team_name");
        const show_members = document.getElementById("show_members");
        const team_img = document.getElementById("teamImg");
        const team_points = document.getElementById("teamPoints");
        const confChanges = document.getElementById("confChanges");

        let see_name = "";
        let see_members = "";
        let true_img = "";
        let true_points = "";
        let conf_changes = "";
        let Im_lider = "";
        /*
                const idUser = 20;
                    const teste = [
                        {
                            id: 20,
                            name: "Carlos Pires",
                            email: "azul@hotmail.com",
                            level: 25,
                            img: "img/perfil/perfil2.jpg",
                            lider: 1
                        },
                        {
                            id: 1,
                            name: "Jose Costa",
                            email: "vermelgo@hotmail.com",
                            level: 12,
                            img: "",
                            lider: 0
                        },
                        {
                            id: 2,
                            name: "Rui Teixeira",
                            email: "amarelo@hotmail.com",
                            level: 9,
                            img: "img/perfil/perfil3.png",
                            lider: 0
                        },
                        {
                            id: 3,
                            name: "João Carvalho",
                            email: "preto@hotmail.com",
                            level: 22,
                            img: "img/perfil/perfil4.jpg",
                            lider: 0
                        },
                        {
                            id: 4,
                            name: "Isabel Costa",
                            email: "rosa@hotmail.com",
                            level: 30,
                            img: "img/perfil/perfil.jpeg",
                            lider: 0
                        }
                    ]
        
                    const team = {
                        name: "PWALPHA",
                        img: "img/equipas/equipa1.jpg",
                        poinsts: 1234434,
                        members: teste
                    }
        */

        //criação da demonstração de resultados recebidos


        conf_changes += "<label class='custom-file-upload'><i class='fa fa-check'></i>";
        conf_changes += "<input id='confirmChang' type='submit' style='display: none;'/></label>";


        see_name += "<input id='thisName' type='search' class='font-weight-bold text-black-50 my-4 text-center'";
        see_name += "style='font-size: 1.5rem; background-color: transparent; border: none; width: 180px;'";
        see_name += "value='" + team[0].nome_equipa + "'>";


        true_img += "<img class='img-show-inTeam' id='Pic' src='" + team[0].avatar + "'>";
        true_points += "<span class='text-black'>" + team[0].classificacao + "</span>" + " pontos";

        see_members += "<div class='w-100'><div class='text-black-50 text-center'>Selecione o que pretende alterar</div></div>";
        see_members += "<div id='checkboxes'>";
        see_members += "<ul id='selecList' class='px-2 w-100 pb-5' style='list-style-type: none;'>";

        //let test = 0;
        for (var i = 0; i < members.length; i++) {

            see_members += "<li class='myfilter text-white col-xl-3 col-md-6'>";

            //test += 1;
            see_members += "<input type='checkbox' name='rGroup' value='" + members[i].id_user + "' id='r" + members[i].id_user + "' />";
            see_members += "<label class='whatever' for='r" + members[i].id_user + "'>";

            see_members += "<div class='border-bottom-secondary bor-back'>";
            see_members += "<div class='card-body2'><div class='row'><div class='col-2 mr-3'>";

            if (members[i].img == "") {
                see_members += "<img class='rounded-circle img-show-profile' src='img/perfil/perfil5.jpg'></div>";
            } else {
                see_members += "<img class='rounded-circle img-show-profile' src='" + members[i].avatar + "'></div>";
            }

            see_members += "<div class='col-3 pt-2 ml-n2'>";
            let trueLevel = parseInt(members[i].pontos / 60);
            see_members += "<img class='icon-header' src='img/nivel.png'><div class='level-member-team'>" + trueLevel + "</div></div>";
            see_members += "<div class='col-auto pt-3 ml-n2'>";
            see_members += "<h5 class='text-secondary font-weight-bold'>" + members[i].primeiro_nome + " " + members[i].ultimo_nome + " ";

            if (members[i].lider === 1) {
                see_members += "<div style='margin: 0px;' class='d-inline' id='ImLider'></div>";
                Im_lider += "<span class='text-red' style='font-size: 0.8rem;'>lider</span>";
            }

            see_members += "</h5><div class='text-black small'>" + members[i].email + "</div>";
            see_members += "</div></div></div></div></label></li>";
        }
        see_members += "</ul></div>";

        //envia a para a pagina
        team_name.innerHTML = see_name;
        team_img.innerHTML = true_img;
        team_points.innerHTML = true_points;
        show_members.innerHTML = see_members;
        confChanges.innerHTML = conf_changes;
        document.getElementById("ImLider").innerHTML = Im_lider;

        wasPressed = false;
    } else {
        id_equipa = localStorage.getItem("id_equipa");
        id_user = localStorage.getItem("id_user");
        const response = await fetch(url + '/teams/' + id_equipa + '/team-users');
        const members = await response.json();
        console.log(members);

        const response1 = await fetch(url + '/teams/' + id_equipa);
        const team = await response1.json();
        console.log(team);
        const team_name = document.getElementById("team_name");
        const show_members = document.getElementById("show_members");
        const team_img = document.getElementById("teamImg");
        const team_points = document.getElementById("teamPoints");
        const confChanges = document.getElementById("confChanges");

        let see_name = "";
        let see_members = "";
        let true_img = "";
        let true_points = "";
        let conf_changes = "";
        let Im_lider = "";
        /*
                const idUser = 20;
                    const teste = [
                        {
                            id: 20,
                            name: "Carlos Pires",
                            email: "azul@hotmail.com",
                            level: 25,
                            img: "img/perfil/perfil2.jpg",
                            lider: 1
                        },
                        {
                            id: 1,
                            name: "Jose Costa",
                            email: "vermelgo@hotmail.com",
                            level: 12,
                            img: "",
                            lider: 0
                        },
                        {
                            id: 2,
                            name: "Rui Teixeira",
                            email: "amarelo@hotmail.com",
                            level: 9,
                            img: "img/perfil/perfil3.png",
                            lider: 0
                        },
                        {
                            id: 3,
                            name: "João Carvalho",
                            email: "preto@hotmail.com",
                            level: 22,
                            img: "img/perfil/perfil4.jpg",
                            lider: 0
                        },
                        {
                            id: 4,
                            name: "Isabel Costa",
                            email: "rosa@hotmail.com",
                            level: 30,
                            img: "img/perfil/perfil.jpeg",
                            lider: 0
                        }
                    ]
        
                    const team = {
                        name: "PWALPHA",
                        img: "img/equipas/equipa1.jpg",
                        poinsts: 1234434,
                        members: teste
                    }
        
        */
        //criação da demonstração de resultados recebidos

        conf_changes += "<label hidden class='custom-file-upload'><i class='fa fa-check'></i>";
        conf_changes += "<input id='confirmChang' type='submit' style='display: none;'/></label>";

        see_name += "<input id='thisName' type='search' class='font-weight-bold text-secondary my-4 text-center'";
        see_name += "style='font-size: 1.5rem; background-color: transparent; border: none; width: 180px;'";
        see_name += "value='" + team[0].nome_equipa + "' readonly>";


        true_img = "<img class='img-show-inTeam' id='Pic' src='" + team[0].avatar + "'>";
        true_points = "<span class='text-black'>" + team[0].classificacao + "</span>" + " pontos";

        see_members += "<ul class='px-2 w-100 pb-5' style='list-style-type: none;'>";
        for (var i = 0; i < members.length; i++) {

            see_members += "<li class='myfilter text-white col-xl-3 col-md-6'>";
            see_members += "<a href='perfil-outra.html' id='" + members[i].id_user + "' onClick='GFG_click(this.id)' ><div class='border-bottom-secondary bor-back'>";
            see_members += "<div class='card-body2'><div class='row'><div class='col-2 mr-3'>";

            if (members[i].img == "") {
                see_members += "<img class='rounded-circle img-show-profile' src='img/perfil/perfil5.jpg'></div>";
            } else {
                see_members += "<img class='rounded-circle img-show-profile' src='" + members[i].avatar + "'></div>";
            }

            see_members += "<div class='col-3 pt-2 ml-n2'>";
            let trueLevel = parseInt(members[i].pontos / 60);
            see_members += "<img class='icon-header' src='img/nivel.png'><div class='level-member-team'>" + trueLevel + "</div></div>";
            see_members += "<div class='col-auto pt-3 ml-n2'>";
            see_members += "<h5 class='text-secondary font-weight-bold'>" + members[i].primeiro_nome + " " + members[i].ultimo_nome + " ";

            if (members[i].lider === 1) {
                see_members += "<div style='margin: 0px;' class='d-inline' id='ImLider'></div>";
                Im_lider += "<span class='text-red' style='font-size: 0.8rem;'>lider</span>";
            }

            see_members += "</h5><div class='text-black small'>" + members[i].email + "</div>";
            see_members += "</div></div></div></div></a></li>";
        }
        see_members += "</ul>";

        //envia a para a pagina
        team_name.innerHTML = see_name;
        team_img.innerHTML = true_img;
        team_points.innerHTML = true_points;
        show_members.innerHTML = see_members;
        confChanges.innerHTML = conf_changes;
        document.getElementById("ImLider").innerHTML = Im_lider;

        wasPressed = true;
    }
};

//----------------------------------getIds---------------------------------------------
let ids = [];
function getIds() {

    const selecList = document.getElementById("selecList");
    for (let elem of selecList.children) {
        if (elem.firstChild.checked) {
            ids.push(elem.firstChild.id);

        }
    }
    console.log(ids);
};

let idsToAdd = [];
function getIdsToAdd() {

    const selecListToAdd = document.getElementById("selecListToAdd");
    for (let elem of selecListToAdd.children) {
        if (elem.firstChild.checked) {
            idsToAdd.push(elem.firstChild.id);

        }
    }
    console.log(idsToAdd);
};

let idsToLider = "";
function getIdsToLider() {
    idsToLider = "";
    const selecListToLider = document.getElementById("selecListToLider");
    for (let elem of selecListToLider.children) {
        if (elem.firstChild.checked) {
            idsToLider=elem.firstChild.id;

        }
    }
    console.log(idsToLider);
};


//--------------------------------------Acept image---------------------------------------------------
window.addEventListener('load', function () {
    document.querySelector('input[type="file"]').addEventListener('change', function () {
        if (this.files && this.files[0]) {
            var img = document.getElementById("Pic");
            img.src = URL.createObjectURL(this.files[0]); // ja mete na pagina
            
            //mete aqui o que for necessario para mandar para a base de dados

            id_equipa = localStorage.getItem("id_equipa");

            console.log(id_equipa);
            const formData = new FormData();

            formData.append("teamAvatar", this.files[0]);

            console.log(img.src);
            fetch(url + '/teams/upload-avatars/' + id_equipa, {
                mode: 'cors',
                method: 'PUT',
                body: formData,
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
                    if (result.success) {
                        //swal({ title: "Autenticação feita com sucesso!" });
                        //+ result.value.message.success);S
                        /*Swal.fire(
                            'Alterada com sucesso!',
                            '',
                            'success'
                          ).then( () => {*/

                            console.log("Alterada com sucesso!");
                            //display_team_members();
                        //})
          
                        
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
});

//----------------------------------
function GFG_click(clicked) {
    //alert(clicked);
    localStorage.setItem("id_perfil", clicked);
}

async function GFG_click2(clicked) {
    //alert(clicked);
    //localStorage.setItem("id_perfil", clicked);
    event.preventDefault();
    id_equipa = localStorage.getItem("id_equipa");
    //  delete('/users/user-teams/:id_equipa')
    fetch(url + '/users/user-teams/' + id_equipa, {
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
                    'Já não faz parte desta equipa!',
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