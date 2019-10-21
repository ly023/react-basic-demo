/**
 * 合成事件demo
 */
import React from 'react'
import ReactDOM from 'react-dom'

class SyntheticEventDemo extends React.PureComponent {
    componentDidMount() {
        const $parent = ReactDOM.findDOMNode(this)
        const $child = $parent.querySelector('.child')

        $parent.addEventListener('click', this.onParentDOMClick, true)
        $child.addEventListener('click', this.onChildDOMClick, false)
    }

    onParentDOMClick = (e) => {
        console.log('captrue: parent dom event')
    }

    onChildDOMClick = (e) => {
        console.log('bubble: child dom event')
    }

    onParentClick = (e) => {
        console.log('capture: parent react event')
    }

    onChildClick = (e) => {
        console.log('bubble: child react event')
    }

    render() {
        return (
            <div onClickCapture={this.onParentClick}>
                <div className="child" onClick={this.onChildClick}>
                   合成事件点击
                </div>
            </div>
        )
    }
}

export default SyntheticEventDemo
