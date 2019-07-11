import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Main from './Main'

export default class extends Component {
    static childContextTypes = {
        themeColor: PropTypes.string
    }

    constructor(props) {
        super(props)
        this.state = {themeColor: 'red'}
    }

    componentDidMount () {
        this.setState({ themeColor: 'green' })
    }

    // 一个组件可以通过getChildContext返回一个对象，
    // 这个对象就是子树的 context，
    // 提供 context 的组件必须提供 childContextTypes 作为 context 的声明和验证

    // 任意深度的子组件都可以通过 contextTypes 来声明想要的 context 里面的哪些状态，
    // 然后可以通过 this.context 访问到那些状态
    getChildContext() {
        return {themeColor: this.state.themeColor}
    }

    render() {
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        )
    }
}
