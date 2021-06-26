module.exports = {
    mail: {
        mailError: {
            msg: "Error",
            message: {
                eng: "Email not sent",
                pt: "Não foi possível enviar o email"
            },
            status: 400,
            success: false
        },
        mailSent: {
            msg: "Success",
            message: {
                eng: "Email sent",
                pt: "Email enviado"
            },
            success: true,
            status: 200,
        },
        serverError: {
            msg: "Server Error",
            message: {
                eng: "Unexpected error",
                pt: "Erro inesperado"
            },
            success: true,
            status: 503,
        },
        requiredData: {
            msg: "dataMissing",
            message: {
                eng: "Required fields are missing",
                pt: "Falta preencher dados obrigatórios"
            },
            success: false,
            status: 400,
        },
        emailNotFound: {
            msg: "emailNotFound",
            message: {
                eng: "Email not found in DataBase",
                pt: "O email não está registado na nossa Base de Dados"
            },
            success: false,
            status: 400,
        },
    },
};