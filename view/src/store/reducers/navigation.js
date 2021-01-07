const initialState = {
    pageCurrent: "Lista dos Bruxos",
    nextPage: ""

}

function navigation(state = initialState, action) {
    switch (action.type) {
        case "SET_NAVIGATION":
            const { pageCurrent, nextPage } = action
            return { ...state, pageCurrent, nextPage }
      
        default:
            break;
    }
    return state
}

export default navigation