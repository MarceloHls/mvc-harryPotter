import React, { useState } from 'react'

import './styles.css'

import axios from 'axios'
import { Link } from 'react-router-dom'

async function signup(userName, password) {
    let url = ' http://localhost:3045'

    let verific = await axios.post(`${url}/signin`, { userName, password })
        .then(data => data.data)

    if (verific == 'Usuario não encontrado') {
        verific = await axios.post(`${url}/signup`, { userName, password })
            .then(data => data.data)
    } else {
        verific = 'Usuario já cadastrado'
    }
    return verific


}

const logInitial = { password: "", userName: "", user: "" }

function Login({ }) {

    const [logs, setLogs] = useState(logInitial)
    const [userName, setUserName] = useState("")
    const [userPassword, setPassword] = useState("")


    async function createdUsers(userName, userPassword) {
        if (userName.length < 6 || userName.length > 12) {
            setLogs({
                ...logInitial,
                userName: "minimo 6 e no maximo 12 caracteres"
            })
        } else if (userPassword.length < 4 || userPassword.length > 8) {
            setLogs({
                ...logInitial,
                password: "minimo 4 e no maximo 8 caracteres"
            })
        } else {
            let returnData = await signup(userName, userPassword)

            if (returnData == "Senha incorreta" || returnData == 'Usuario já cadastrado') {
                setLogs({
                    ...logInitial,
                    user: "Usuario já cadastrado"
                })
            } else {
                alert("Usuario cadastrado com sucesso")
                window.location = '/signin'
            }
        }

    }

    return (
        <div className="signup">
            <h1>Criar conta</h1>
            <div className='login'>
                <div className="inputs">
                    <div className="userName">
                        <span> Nome do usuario </span>
                        <input type="text"
                            onChange={(e) => setUserName(e.target.value)} />
                        <p>{logs.userName}</p>
                    </div>
                    <div className="password">
                        <span> Senha </span>
                        <input className="password" type="password"
                            onChange={(e) => setPassword(e.target.value)} />
                        <p>{logs.password}</p>
                    </div>
                    <p>{logs.user}</p>
                    <button onClick={() => createdUsers(userName, userPassword)}>Registrar</button>
                </div>
            </div>
            <div className="links">
                <Link to={"/main/list"}>
                    Voltar
            </Link>
                <Link to={"/signin"}>
                    Já tenho conta
            </Link>
            </div>

        </div>
    )
}

export default Login