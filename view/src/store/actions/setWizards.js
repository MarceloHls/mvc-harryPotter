function setWizards(wizard) {

    return {
        type: "SET_WIZARD",
        wizard
    }
}
function setWizardDetails(details) {

    return {
        type: "SET_WIZARD_DETAILS",
        details
    }
}

export { setWizards,setWizardDetails }