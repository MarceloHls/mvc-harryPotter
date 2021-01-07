import React from 'react'
import { connect } from 'react-redux'

import './styles.css'

import Users from './Users/index'
import Search from './Search'

function Header({ navigation }) {
    const { pageCurrent } = navigation
    return (
        <header className='header'>
            <Search />
            <h1>{pageCurrent}</h1>
            <Users />
        </header>
    )
}

export default connect(state => ({ navigation: state.navigation }))(Header)