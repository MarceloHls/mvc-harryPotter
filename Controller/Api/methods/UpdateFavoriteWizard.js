const { dbUpdateFavoriteWizard } = require('../../../Model/index')

module.exports = { UpdateFavoriteWizard }

function UpdateFavoriteWizard(id = "", favoriteWizard = "", dataHP) {
    return new Promise(async (resolve, reject) => {
        let names = Object.keys(dataHP)
        let wizardExists = names.find(element => element == favoriteWizard)

        if (wizardExists === undefined) {
            return reject({
                menssage: "bruxo não encontrado",
                status: 400
            })
        }

        let updateFavoriteWizard = await dbUpdateFavoriteWizard(id, favoriteWizard)
        if (updateFavoriteWizard.length == 0) {
            return reject({
                menssage: "Usuario não encontrado",
                status: 400
            })
        }

        const { username, favoritewizard } = updateFavoriteWizard[0]
        return resolve({
            menssage: "Favorito adicionado com sucesso",
            data: {
                username,
                favoritewizard
            },
            status: 201
        })

    })


}