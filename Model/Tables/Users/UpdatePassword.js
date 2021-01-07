async function UpdatePassword(database, nameTable, username, password) {
  let data = await database.query(`
    update ${nameTable} 
    set password = '${password}'
    where username = '${username}' 
    returning id,username;
  `)
  return data.rows
}

module.exports = { UpdatePassword }