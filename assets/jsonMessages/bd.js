module.exports = {
    db: {
        noRecords: {
            msg: "No records found",
            message: {
                eng: "No records found",
                pt: "Não foram encontrados dados"
            },
            status: 404,
            success: false
        },
        dbError: {
            msg: "Error",
            message: {
                eng: "Invalid data",
                pt: "Os dados que inseriu são inválidos"
            },
            success: "false",
            status: 400,
        },
        successUpdate: {
            msg: "success",
            message: {
                eng: "Records updated with success",
                pt: "Dados alterados com sucesso"
            },
            success: true,
            status: 200,
        },
        successInsert: {
            msg: "success",
            message: {
                eng: "Record inserted with success",
                pt: "Dados inseridos com sucesso"
            },
            success: true,
            status: 201,
        },
        successDelete: {
            msg: "success",
            message: {
                eng: "Records deleted with success",
                pt: "Dados apagados com sucesso"
            },
            success: true,
            status: 200,
        },
        duplicatedEmail: {
            msg: "emailDuplicated",
            message: {
                eng: "Email already registered",
                pt: "O seu e-mail já se encontra registado"
            },
            success: false,
            err_code: 1,
            err_message: "email já existente",
            status: 409,
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
        dataInvalid: {
            msg: "dataInvalid",
            message: {
                eng: "Required fields are invalid",
                pt: "Existem campos inválidos! Os nomes só podem conter letras!"
            },
            success: false,
            status: 400,
        }
    },
};