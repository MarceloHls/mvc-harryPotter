import React from 'react'


import './App.css'

import { connect, Provider } from 'react-redux'


import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom'

import Signup from './Signup'
import ChangePassword from './ChangePassword'
import Signin from './Signin'
import Main from './Main/index'
import Footer from './Footer/index'

import { getUserLocal } from '../shared/localStorage'
import { setUsers, setVerific } from '../store/actions/setUsers'

async function updateUser(user,dispatch) {
    let data = await getUserLocal()
      if (data) {
      
        const { favoriteWizard, id, userName } = data
        dispatch(setUsers(id, userName, favoriteWizard, true,true))
    }else{
        const { favoriteWizard, id, userName } = user
        dispatch(setUsers(id, userName, favoriteWizard, false,true))
    }
}

function App({ user, dispatch }) {
    const { verific } = user

    if (!verific) {
        updateUser(user,dispatch)
    }



    return (
        <div className='app'>

            <BrowserRouter>
                <Switch>
                    <Route path={'/main'} component={Main} />
                    <Route path={'/signup'} component={Signup} />
                    <Route path={'/signin'} component={Signin} />
                    <Route path={'/changepassword'} component={ChangePassword} />
                    <Redirect to={'/main'} />
                </Switch>
            </BrowserRouter>

            <Footer />

        </div>
    )
}

export default connect(state => ({ user: state.user }))(App)