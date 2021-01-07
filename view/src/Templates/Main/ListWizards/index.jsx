import React from 'react'
import { connect } from 'react-redux'

import './styles.css'
import Card from './Card/index'
import Header from '../Header'
import { setWizards } from '../../../store/actions/setWizards'
import { setNavigation } from '../../../store/actions/setNavigation'



function ListWizards({ wizards, dispatch }) {
    const { listWizards, wizard } = wizards
    dispatch(setNavigation("Lista dos Bruxos", ""))

    return (

        <div className='list'>
            <Header />
            {listWizards.map(wizard => {
                return (
                    <Card wizard={wizard} />
                )

            })}
        </div>
    )
}

export default connect(state => ({ wizards: state.wizards }))(ListWizards)