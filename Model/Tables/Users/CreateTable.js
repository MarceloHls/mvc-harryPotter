async function CreateTableUsers(database,nameTable){

    let data = await database.query(`
    create table if not exists ${nameTable}(
        id serial not null primary key,
        userName varchar not null,
        password varchar not null,
        favoriteWizard varchar
    )    
`)

return data.rows

 
}

module.exports = {CreateTableUsers}



