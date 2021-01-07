import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import './styles.css'

import Result from './Results'

import { setSearch, SetClearInput } from '../../../../store/actions/setSearch.js'

function Search({ search, dispatch }) {
    const { clearInput } = search


    const [valueInput, setValueIput] = useState("")


    function changeInput(value) {
        setValueIput(value)

        let { inputSearch, wordsSearch } = search

        const words = value.split(" ")
        const empty = value.length

        if (empty > 0) {
            inputSearch = true
            wordsSearch = words
            dispatch(setSearch(inputSearch, wordsSearch))
        } else {
            inputSearch = false
            wordsSearch = []
            dispatch(setSearch(inputSearch, wordsSearch))
        }

    }

    return (
        <div className='search'>
            <div className="input-search"            >
                <input type="text" value={valueInput} placeholder={"Localize um bruxo"}
                    onChange={event => changeInput(event.target.value)}
                    onClick={event => changeInput(event.target.value)} />
            </div>
            <Result />
        </div>
    )
}

export default connect((state => ({ search: state.search })))(Search)