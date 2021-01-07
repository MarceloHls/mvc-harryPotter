async function getUserLocal() {
    let logged = await localStorage.getItem("logged")
    
    if (logged == 'yes') {
       
        let id = localStorage.getItem("id")
        let userName = localStorage.getItem("userName")
        let favoriteWizard = localStorage.getItem("favoriteWizard")
        return { id, userName, favoriteWizard }
    }

    return false

}

function setUserLocal(id, userName, favoriteWizard,logged) {
    localStorage.setItem("logged", logged)
    localStorage.setItem("id", id)
    localStorage.setItem("userName", userName)
    localStorage.setItem("favoriteWizard", favoriteWizard)

}

export { getUserLocal, setUserLocal }