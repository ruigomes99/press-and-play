module.exports = {
    user: {
        unauthorized: {
            msg: "unauthorized",
            message: {
                eng: "You cannot access to this route",
                pt: "Não tem privilégios para aceder a esta rota"
            },
            status: 401,
            success: false
        },
        unauthorizedOwnerLeaving: {
            msg: "unauthorized",
            message: {
                eng: "You can't leave this team while you're the owner, transfer the leadership to someone else",
                pt: "Não pode sair desta equipa enquanto é o líder, transfira a liderança para outro membro"
            },
            status: 401,
            success: false
        },
        informationError: {
            msg: "Information Error",
            message: {
                eng: "Something went wrong while processing your request",
                pt: "Algo de errado aconteceu enquanto estava a ser processado"
            },
            status: 400,
            success: true
        },
        password: {
            msg: "Invalid",
            message: {
                eng: "Invalid password",
                pt: "A password que inseriu não corresponde à atual!"
            },
            status: 400,
            success: false
        },
        forgottenPasswordInvalidToken: {
            msg: "Invalid",
            message: {
                eng: "Invalid token",
                pt: "O token expirou ou não corresponde ao atual!"
            },
            status: 400,
            success: false
        },
        notOwnerNotificationInvalidDelete: {
            msg: "Invalid",
            message: {
                eng: "Invalid delete",
                pt: "Não é possível eliminar uma notificação de que não é proprietário!"
            },
            status: 400,
            success: false
        },
        reportError: {
            msg: "Invalid",
            message: {
                eng: "Invalid report",
                pt: "O report que enviou ainda não foi processado! Não pode enviar outro enquanto não avaliarmos o antecessor!"
            },
            status: 400,
            success: false
        },
        autoReportError: {
            msg: "Invalid",
            message: {
                eng: "Invalid report",
                pt: "Não podes enviar um report a ti próprio!"
            },
            status: 400,
            success: false
        }
    },
};