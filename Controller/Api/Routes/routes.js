const { signUp } = require('../methods/SignUp')
const { SignIn } = require('../methods/SignIn')
const { UpdateFavoriteWizard } = require('../methods/UpdateFavoriteWizard')
const { ListWizards } = require('../methods/ListWizards')
const { WizardDetails } = require('../methods/WizardDetails')
const { PasswordChange } = require('../methods/PasswordChange')


async function standardReturn(callback, resp, ...params) {
    callback(...params)
        .then(response => {
            const { menssage, data, status } = response
            resp.send({ menssage, data }, status)
        })
        .catch(response => {
            const { menssage, status } = response
            resp.send(menssage, 200)
        })
}


module.exports = (app, dataHP) => {
    /// rota responsavel pela criação do usuario
    app.post('/signup', (req, resp) => {
        const { userName, password } = req.body
        standardReturn(signUp, resp, userName, password)
    })

    /// rota responsavel pelo login
    app.post('/signin', (req, resp) => {
        const { userName, password } = req.body

        standardReturn(SignIn, resp, userName, password)

    })

    // Rota resposavel por altera senha do usuario

    app.put('/passwordchange', (req, resp) => {
        const { userName, password } = req.body
        standardReturn(PasswordChange, resp, userName, password)

    })

    // rota responsavel por inserir ou alterar favorito
    app.put('/:id/favorite', (req, resp) => {
        const { id } = req.params
        const { favoriteWizard } = req.body
        standardReturn(UpdateFavoriteWizard, resp, id, favoriteWizard, dataHP)
    })

    /// rota responsavel por enviar lista de personagens
    app.get('/wizards', (req, resp) => {
        standardReturn(ListWizards, resp, dataHP)
    })

    // rota responsavel por enviar detalhe de um personagem
    app.post('/:id/details', (req, resp) => {
        const { id } = req.params
        const { wizard } = req.body

        standardReturn(WizardDetails, resp, id, wizard, dataHP)
    })


}


