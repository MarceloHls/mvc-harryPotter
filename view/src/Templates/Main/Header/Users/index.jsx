import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { setUserLocal } from '../../../../shared/localStorage'
import { setUsers } from '../../../../store/actions/setUsers'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios'

import './styles.css'

function login(logged, dispatch) {
    if (logged) {
        setUserLocal(0, "", "", "no")
        dispatch(setUsers(0, "", "", false, true))
    } else {
        window.location = '/signin'
    }
}
async function getDetails(id, wizard) {
    let url = 'http://localhost:3045'
    let data = await axios.post(`${url}/${id}/details`, { wizard })
    let image = ""

    try {
        image = data.data.data.wizardDetails.image

    } catch (err) {
        console.log(err)
    }


    return image
}

async function getPicture(id, wizard, setPicture) {
    let url = await getDetails(id, wizard)
    setPicture(url)
}

function Users({ user, dispatch }) {
    const { id, userName, favoriteWizard, logged } = user
    const [picture, setPicture] = useState("")
    const [showMore, setShowMore] = useState({
        open: false,
        simbol: faArrowDown,
        Class: ""
    })


    if (favoriteWizard != null) {
        getPicture(id, favoriteWizard, setPicture)

    }

    function alteredShow() {
        let { simbol, open, Class } = showMore
        open = !open
        simbol = open ? faArrowUp : faArrowDown
        Class = open ? "open" : ""

        setShowMore({ open, simbol, Class })
    }

    return (
        <div className={`users ${showMore.Class}`}>

            <div className='closed '>
                <div className='picture'>
                    <img  style={favoriteWizard!= 'null'?{display:'block'}:{display:"none"}} src={picture} alt={favoriteWizard} />
                </div>
                <button onClick={() => alteredShow()}>
                    <FontAwesomeIcon className='icon' icon={showMore.simbol} />
                </button>
            </div>

            <div className='open '>
                <p>Id :{id} </p>
                <p>Usuario :{userName} </p>
                <p>Bruxo favorito :<span>{favoriteWizard}</span> </p>
                <button onClick={() => login(logged, dispatch)}>{logged ? " Sair " : "Logar"}</button>
            </div>

        </div>
    )
}

export default connect((state => ({ user: state.user })))(Users)