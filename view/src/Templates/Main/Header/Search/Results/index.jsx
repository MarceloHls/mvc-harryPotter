import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import './styles.css'

import Link from './Links/index'

function Result({ search, wizards, dispatch }) {
    const { inputSearch, wizardSearch, wordsSearch } = search
    const { listWizards } = wizards


    let limitResults = 5
    let resultsCurrents = 0


    const newList = listWizards.filter(wizard => {
        if (resultsCurrents < limitResults) {
            for (let i = 0; i < wordsSearch.length; i++) {
                let name = wizard.name.toLowerCase()
                let word = wordsSearch[i].toLowerCase()
                if (name.includes(word)) {
                    resultsCurrents++
                    return wizard
                }
            }
        }
    })


    return (
        <div className={`results-seach ${inputSearch ? "" : "closed"} `}>
            {newList.map(wizard => <Link wizard={wizard.name} />)}
        </div>
    )

}

export default connect((state => ({ search: state.search, wizards: state.wizards })))(Result)