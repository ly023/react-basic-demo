import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Content from './Content'

class Main extends Component {
    render () {
        return (
            <div>
                <h2>This is main</h2>
                <Content />
            </div>
        )
    }
}

export default Main
