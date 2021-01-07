function setUsers(id, userName, favoriteWizard,logged,verific) {

    return {
        type: "SET_USERS",
        id,
        userName,
        favoriteWizard,
        logged,
        verific
    }
}

export { setUsers}