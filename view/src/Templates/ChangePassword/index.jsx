import React, { useState } from 'react'

import './styles.css'

import axios from 'axios'
import { Link } from 'react-router-dom'


async function putPassword(userName, password) {
    let url = ' http://localhost:3045'

    let data = await axios.put(`${url}/passwordchange`, { userName, password })

    return data.data
}

const logInitial = { password: "", userName: "", user: "" }

function ChangePassword({ }) {
    const [logs, setLogs] = useState(logInitial)
    const [userName, setUserName] = useState("")
    const [userPassword, setPassword] = useState("")

    async function altered(userName, userPassword) {
        if (userPassword.length < 4 || userPassword.length > 8) {
            setLogs({
                ...logInitial,
                password: "minimo 4 caracteres e no maximo 8 caracteres"
            })
        } else {
            let returnData = await putPassword(userName, userPassword)
            

            if (returnData.menssage == 'Senha alterada com sucesso') {
                alert('Senha alterada com sucesso')
                window.location = '/signin'
            } else {
                setLogs({ ...logInitial, user: returnData })
            }

        }
    }

    return (
        <div className="changePassword">
           
                <div className="inputs">
                    <h1>Alterar senha</h1>
                    <div className='login'>
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
                    <button onClick={() => altered(userName, userPassword)}>Alterar senha</button>

                </div>
            </div>
            <div className="links">
                <Link to={"/main/list"}>
                    Voltar
            </Link>
            </div>


        </div>
    )
}

export default ChangePassword