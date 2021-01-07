import React, { useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'


import './styles.css'

import { Link } from 'react-router-dom'

import { setUserLocal } from '../../shared/localStorage'
import { setUsers } from '../../store/actions/setUsers'

async function signin(userName, password) {
    let url = ' http://localhost:3045'

    let verific = await axios.post(`${url}/signin`, { userName, password })
        .then(data => data.data)
    return verific
}

function Signin({ user, dispatch }) {

    const [logs, setLogs] = useState({ user: "" })
    const [userName, setUserName] = useState("")
    const [userPassword, setPassword] = useState("")


    async function loginUsers(userName, userPassword) {
        let data = await signin(userName, userPassword)
        if (data.menssage == "Login efetuado com sucesso") {
            const { id, favoritewizard, userName } = data.data

            setUserLocal(id, userName, favoritewizard, "yes")
            dispatch(setUsers(id, userName, favoritewizard, true))
            window.document.location = '/main/list'

        } else {
            setLogs({ user: data })
        }
    }

    return (
        <div className="signin">
            <h1>Logar</h1>
            <div className='login'>
                <div className=" inputs">
                    <div className="userName">
                        <span> Nome de usuario </span>
                        <input type="text"
                            onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className="password">
                        <div>
                            <span> Senha </span>
                            <Link to='/changepassword'>Esqueceu a senha</Link>
                        </div>
                        <input className="password" type="password"
                            onChange={(e) => setPassword(e.target.value)} />
                        <p>{logs.user}</p>
                        <button onClick={() => loginUsers(userName, userPassword)}>Logar</button>
                    </div>
                </div>
            </div>

            <div className='links'>
                <Link to='/signup'>Criar conta</Link>
                <Link to='/main'>Voltar</Link>
            </div>



        </div>
    )
}

export default connect(state => ({ user: state.user }))(Signin)