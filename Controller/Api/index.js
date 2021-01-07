const routes = require('./Routes/routes')
const { dataHarryPotter } = require('../Api_Harry-_Potter/index')

async function startApi() {
    const data = await dataHarryPotter()
    const express = require('express')
    const cors = require('cors')
    const bodyParser = require('body-parser')

  
    const app = express()
    const port = 3045
    
    app.use(cors())
    app.use(bodyParser.json());

    routes(app, data)


    app.listen(port, () => { console.log(`Servidor porta ${port}`) })



}
module.exports = { startApi }
