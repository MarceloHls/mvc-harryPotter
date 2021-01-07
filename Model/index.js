const { Client } = require('pg')

const { CreateTableUsers } = require('./Tables/Users/CreateTable')
const { CreateUser } = require('./Tables/Users/CreateUsuer');
const { UpdateFavoriteWizard } = require('./Tables/Users/UpdateFavoriteWizard');
const { LoginUsers } = require('./Tables/Users/LoginUsers');
const { UpdatePassword } = require('./Tables/Users/UpdatePassword');

let users;
const nameTable = 'Users'

function connectDB() {
    users = new Client({
        host: "localhost",
        database: "users",
        user: "postgres",
        password: "1",
        port: 5432
    })
    users.connect()
}

async function startDatabase() {
    await connectDB()
    await CreateTableUsers(users, nameTable)
}

async function dbCreateUser(userName, password) {
    return await CreateUser(users, nameTable, userName, password)
}
async function dbUpdateFavoriteWizard(id, wizard) {
    return await UpdateFavoriteWizard(users, nameTable, id, wizard)
}
async function dbLoginUsers(userName) {
    return await LoginUsers(users, nameTable, userName)
}
async function dbUpdatePassword(userName, password) {
    return await UpdatePassword(users, nameTable, userName, password)
}


module.exports = { startDatabase, dbCreateUser, dbUpdateFavoriteWizard, dbLoginUsers, dbUpdatePassword }