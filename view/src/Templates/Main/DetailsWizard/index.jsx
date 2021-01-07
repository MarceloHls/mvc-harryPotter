import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserLocal } from '../../../shared/localStorage'
import { setUsers } from '../../../store/actions/setUsers'
import { setWizardDetails } from '../../../store/actions/setWizards'
import Header from '../Header'

import './styles.css'
let url = 'http://localhost:3045'

async function getDetails(id, wizard, dispatch) {

    let data = await axios.post(`${url}/${id}/details`, { wizard })
    const { wizardDetails } = data.data.data
    dispatch(setWizardDetails(wizardDetails))

}

async function addFavorite(favoriteWizard, user, dispatch) {
    const { id, userName } = user
   
    let data = await axios.put(`${url}/${id}/favorite`, { favoriteWizard })
    
    setUserLocal(id, userName, favoriteWizard, 'yes')
    dispatch(setUsers(id, userName, favoriteWizard, true, true))

}

function DetailsWizard({ wizards, user, dispatch }) {
    const { wizardSelect, wizardDetails } = wizards
    const { logged, id } = user

    if (wizardSelect.length < 1) {
        window.location = '/'
    }

    if (wizardDetails.name == undefined || wizardDetails.name != wizardSelect) {
        if (wizardSelect.length > 2) {
            getDetails(id, wizardSelect, dispatch)
        }
    }

    function renderDetails(user, logged) {
        const teste2 = Object.keys(wizardDetails)
        if (teste2.length > 2 && logged) {
            return (
                <>
                    <div className='details'>
                        <div className="info two">
                            <div ><span>Name</span> :  {wizardDetails.name}</div>
                            <div><span>Actor</span> :  {wizardDetails.actor}</div>
                            <div ><span>Species</span> :  {wizardDetails.species}</div>
                            <div ><span>Gender</span> :  {wizardDetails.gender}</div>
                            <div ><span>House</span> :  {wizardDetails.house}</div>
                            <div ><span>Date Of Birth</span> :  {wizardDetails.dateOfBirth}</div>
                            <div ><span>Eye Colour</span> :  {wizardDetails.eyeColour}</div>
                            <div ><span>Hair Colour</span> :  {wizardDetails.hairColour}</div>
                            <div><span>Patronus</span> :  {wizardDetails.patronus}</div>
                            <div><span>Hogwarts Student</span> :  {wizardDetails.hogwartsStudent ? "True" : "False"}</div>
                            <div><span>Hogwarts Staff</span> :  {wizardDetails.hogwartsStaff ? "True" : "False"}</div>

                            <div><span>Alive</span> :  {wizardDetails.alive ? "True" : "False"}</div>
                            <button
                                onClick={() => addFavorite(wizardSelect, user, dispatch)}>
                                Adcionar favorito
                                </button>
                        </div>
                        <div className="info">
                            <div className='wand' >
                                <span>Wand</span>
                                <div>
                                    <p><span>Wood</span> : {wizardDetails.wand.wood}</p>
                                    <p> <span>Core</span> : {wizardDetails.wand.core}</p>
                                    <p> <span>Length</span> : {wizardDetails.wand.length}</p>
                                </div>
                            </div>

                        </div>
                        <div className="image">
                            <img src={wizardDetails.image} alt="" />
                        </div>
                    </div>



                </>
            )
        } else {
            return (
                <div className='no-login'>
                    <h1>Necssario estar logado</h1>
                    <button onClick={() => window.location = '/signin'}>Logar</button>
                </div>

            )
        }
    }

    return (
        <>
            <Header />
            <div className='wizardDetails'>

                <Link className='link' to={'/'}>Voltar</Link>
                {renderDetails(user, logged)}

            </div>
        </>
    )
}

export default connect(state => ({ wizards: state.wizards, user: state.user }))(DetailsWizard)