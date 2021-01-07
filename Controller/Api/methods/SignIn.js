const { dbLoginUsers } = require('../../../Model/index')

module.exports = { SignIn }

function SignIn(userName = "", passwordCli = "") {

    return new Promise(async (resolve, reject) => {

        const login = await dbLoginUsers(userName)

        if (login.length <= 0) {
            return reject({
                menssage: "Usuario não encontrado",
                status: 400
            })
        }

        const { id, password, favoritewizard } = login[0]

        if (password === passwordCli) {
            return resolve({
                menssage: "Login efetuado com sucesso",
                data: {
                    userName,
                    id,
                    favoritewizard
                },
                status: 201
            })
        } else {
            return reject({
                menssage: "Senha incorreta",
                status: 400
            })
        }
    })
}