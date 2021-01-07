
module.exports = { WizardDetails }

function WizardDetails(id = "", wizard = "", dataHP) {
    return new Promise(async (resolve, reject) => {
        if (id === "" || wizard === "") {
            return reject({
                menssage: "Usuario/Bruxo não informado",
                status: 400
            })
        }

        const wizardDetails = await dataHP[wizard]

        return resolve({
            menssage: "Bruxo localizado",
            data: {
                wizardDetails
            },
            status: 201
        })




    })
}