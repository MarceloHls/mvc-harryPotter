import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



import { setWizardDetails } from '../../../../../../shared/links'

import './styles.css'



function Result(propos) {
    const { wizard, dispatch } = propos
    return (
        <Link className='link' to="/main/details"
            onClick={() => { setWizardDetails(dispatch,wizard) }} >
            {wizard}
        </Link>
    )

}

export default connect((state => ({})))(Result)