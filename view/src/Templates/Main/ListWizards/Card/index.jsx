import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './styles.css'

import { setWizardDetails } from '../../../../shared/links'

function Card(props) {
    const { wizard, user, dispatch } = props

    return (
        <div className='card'>
            <div className="image">
                <img src={wizard.image} alt="" />
            </div>
            <div className="data">
                <p>
                    {wizard.name}
                </p>
                <Link className='link' to="/main/details"
                    onClick={() => { setWizardDetails(dispatch, wizard.name) }} >
                    Detalhes
                </Link>
            </div>

        </div>
    )
}

export default connect(state => ({ user: state.user }))(Card)