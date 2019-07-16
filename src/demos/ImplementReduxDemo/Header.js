import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Title from './Title'

class Header extends Component {
    render() {
        return (
            <div>
                <h2>This is header</h2>
                <Title/>
            </div>
        )
    }
}

export default Header
