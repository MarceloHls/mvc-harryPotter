async function CreateUser(database,nameTable, userName, password) {
    let data = await database.query(`
    insert into ${nameTable}(userName,password)
    values('${userName}','${password}')
    returning id,username;
    `)

    return data.rows
}

module.exports = { CreateUser }

