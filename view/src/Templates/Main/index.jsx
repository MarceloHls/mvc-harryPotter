import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import './styles.css'

import DetailsWizard from './DetailsWizard'
import ListWizards from './ListWizards'
import Header from './Header/index'

function Main() {
    return (
        <main className="main">
            <BrowserRouter>
                <Switch>
                    <Route path={'/main/list'} component={ListWizards} />
                    <Route path={'/main/details'} component={DetailsWizard} />
                    <Redirect to={'/main/list'} />
                </Switch>
            </BrowserRouter>

        </main>
    )
}

export default Main