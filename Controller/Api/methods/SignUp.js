
const { dbCreateUser, dbLoginUsers } = require('../../../Model/index')

function signUp(userName = "", password = "") {
    return new Promise(async (resolve, reject) => {
        /// Verificar se já existe o usuario
        let alreadyRegistered = await dbLoginUsers(userName)
        if (alreadyRegistered.length > 0) {
            return reject({
                menssage: "usuario já cadastrado",
                status: 400
            })
        }
        /// Verifica se userName esta dentro dos paramentos

        let verifiqueEspaco = userName.split(' ')


        if (verifiqueEspaco.length > 1) {
            return reject({
                menssage: "O nome do usuario não deve haver espaços",
                status: 400
            })
        }

        if (userName.length < 6 || userName.length > 12) {
            return reject({
                menssage: "O nome do usuario deve ter no minimo 6 caracteres e no maximo 12 caracteres",
                status: 400
            })
        }
        /// Verifica se password esta dentro dos paramentos

        if (password.length < 4 || password.length > 8) {
            return reject({
                menssage: "O senha do usuario deve ter no minimo 4 caracteres e no maximo 8 caracteres",
                status: 400
            })
        }
        /// Cria usuario

        let createUser = await dbCreateUser(userName, password)
        const { id, username } = createUser[0]
        return resolve({
            menssage: "Usuario cadastrado com sucesso",
            status: 201,
            data: { id, username }
        })

    })
}

module.exports = { signUp }
