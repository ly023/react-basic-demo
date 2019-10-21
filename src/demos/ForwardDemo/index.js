/**
 * Forwarding Refs
 */

import React from 'react'
import FancyButton from './FancyButton'

export default class ForwardDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.ref = React.createRef()
    }

    componentDidMount() {
        if(this.ref && this.ref.current) {

        }
    }




    render() {


        return (
            <div>
                <FancyButton ref={this.ref}>Click me!</FancyButton>
            </div>
        )
    }
}
