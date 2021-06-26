module.exports = {
    user: {
        duplicate: {
            msg: "DuplicateValues",
            message: {
                eng: "Email already registered",
                pt: "O e-mail já se encontra registado!"
            },
            status: 409,
            success: false
        },
        invalid: {
            msg: "Invalid",
            message: {
                eng: "Invalid Login",
                pt: "Os dados que inseriu são inválidos!"
            },
            status: 400,
            success: false
        },/*
        email: {
            msg: "Invalid",
            message: {
                eng: "Invalid email",
                pt: "O email que inseriu não se encontra registado!"
            },
            status: 400,
            success: false
        },
        password: {
            msg: "Invalid",
            message: {
                eng: "Invalid password",
                pt: "A password que inseriu é inválida!"
            },
            status: 400,
            success: false
        },*/
        age: {
            msg: "Invalid",
            message: {
                eng: "Invalid age",
                pt: "Tem de ter mais de 18 anos para se registar na aplicação!"
            },
            status: 400,
            success: false
        },
        signinSuccess: {
            msg: "Success",
            message: {
                eng: "Login with success",
                pt: "Login com sucesso!"
            },
            status: 200,
            success: true
        },
        signupSuccess: {
            msg: "Signup Success",
            message: {
                eng: "Signup with success",
                pt: "Registo efetuado com sucesso!"
            },
            status: 200,
            success: true
        },
        logoutSuccess: {
            msg: "Logout Success",
            message: {
                eng: "Logout with success",
                pt: "Sessão terminada com sucesso!"
            },
            status: 200,
            success: true
        },
        logoutError: {
            msg: "Logout Error",
            message: {
                eng: "You cannot logout. There is no active session",
                pt: "Não pode terminar sessão. Não existe nenhuma sessão ativa!"
            },
            status: 400,
            success: false
        },
        banned: {
            msg: "Invalid",
            message: {
                eng: "Invalid login",
                pt: "Foste banido da nossa aplicação por falta de desportivismo!"
            },
            status: 400,
            success: false
        },
        confirmEmail: {
            msg: "Invalid",
            message: {
                eng: "Invalid login",
                pt: "Verifica o teu email, necessitas de confirmar o teu email!"
            },
            status: 400,
            success: false
        },
        dataInvalid: {
            msg: "dataInvalid",
            message: {
                eng: "Required fields are invalid",
                pt: "Existem campos inválidos! Os nomes só podem conter letras!"
            },
            success: false,
            status: 400,
        },
        checkUserSuccess: {
            msg: "Success",
            message: {
                eng: "Success",
                pt: "Sucesso"
            },
            status: 200,
            success: true
        }/*,
        error: {
            msg: "Error",
            message: {
                eng: "Something went wrong with your signin",
                pt: "Algo de errado aconteceu no processo de login!"
            },
            status: 503,
            success: true
        }*/
    },
};