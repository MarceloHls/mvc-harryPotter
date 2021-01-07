const initialState = {
    inputSearch: false,
    clearInput: false,
    wordsSearch: [],
    wizardSearch: "",
}

function search(state = initialState, action) {
    switch (action.type) {
        case "SET_SEARCH":
            const { inputSearch, wordsSearch } = action
            return {
                ...state, inputSearch, wordsSearch
            }
        default:
            break;
    }


    return state


}

export default search
