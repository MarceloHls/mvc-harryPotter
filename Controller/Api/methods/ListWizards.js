
module.exports = { ListWizards }

function ListWizards(dataHP) {
    return new Promise(async (resolve, reject) => {
        let keys = await Object.keys(dataHP).map(wizard => {
            const {name,image} = dataHP[wizard]
            return {name,image}
        })
        
        resolve({
            menssage: "Lista enviada",
            data: keys,
            status: 200
        })
    })
}