const { startDatabase } = require('./Model/index')
const { startApi } = require('./Controller/Api/index')

async function StartApp() {
    await startDatabase()
    await startApi()
}

StartApp()