import { getUserLocal } from '../../shared/localStorage'

const initialState = {
    logged: false,
    userName: "",
    id: 0,
    favoriteWizard: "",
    verific: false

}

function users(state = initialState, action) {

    switch (action.type) {
        case "SET_USERS":
            const { id, userName, favoriteWizard, logged, verific } = action
            return { ...state, id, userName, favoriteWizard, logged, verific }

        default:
            break;
    }

    return state



}

export default users