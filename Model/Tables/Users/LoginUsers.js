async function LoginUsers(database,nameTable,userName){

    let data = await database.query(`
        select * from ${nameTable}
        where userName = '${userName}'
    `)

   
    return data.rows
}

module.exports = {LoginUsers}