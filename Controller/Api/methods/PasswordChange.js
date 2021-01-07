const { dbUpdatePassword,dbLoginUsers } = require('../../../Model/index')

module.exports = { PasswordChange }

function PasswordChange(userName = "", password = "") {
    return new Promise(async (resolve, reject) => {
        let alreadyRegistered = await dbLoginUsers(userName)

        if (alreadyRegistered.length == 0) {
            return reject({
                menssage: "Usuario não  cadastrado",
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
        /// Altera a senha

        let updatePassword = await dbUpdatePassword(userName, password)
        const {id,username} = updatePassword[0]
        return resolve({
            menssage: "Senha alterada com sucesso",
            status: 201,
            data: { id, username }
        })
    })
}