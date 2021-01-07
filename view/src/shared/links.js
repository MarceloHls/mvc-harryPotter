import { setWizards } from '../store/actions/setWizards'
import { setSearch } from '../store/actions/setSearch'
import { setNavigation } from '../store/actions/setNavigation'


function setWizardDetails(dispatch, wizard) {
    dispatch(setWizards(wizard))
    dispatch(setSearch(false, []))
    dispatch(setNavigation(wizard, "main/list"))


}



export { setWizardDetails }