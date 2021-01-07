async function UpdateFavoriteWizard(database, nameTable, id, wizard) {
  let data = await database.query(`
    update ${nameTable} 
    set favoriteWizard = '${wizard}'
    where id = ${id} 
    returning id,username,favoriteWizard;
  `)
  return data.rows
}

module.exports = { UpdateFavoriteWizard }