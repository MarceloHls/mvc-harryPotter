function setNavigation(pageCurrent, nextPage) {

    return {
        type: "SET_NAVIGATION",
        pageCurrent,
        nextPage
    }
}

export { setNavigation }