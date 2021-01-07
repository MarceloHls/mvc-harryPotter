import { combineReducers } from 'redux'

import user from './user'
import navigation from './navigation'
import search from './search'
import wizards from './wizards'

export default combineReducers({
    user,
    navigation,
    search,
    wizards
})