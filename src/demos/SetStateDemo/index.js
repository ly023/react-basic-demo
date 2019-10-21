/**
 * setState demo
 */
import React from 'react'

class setStateDemo extends React.Component {
    state = {
        index: 0,
    }

    // componentDidMount() {
    //     this.setState( {
    //         index: this.state.index + 1
    //     })
    //     console.log(this.state.index)
    // }

    componentDidMount() {
        //  原生事件、异步任务，不会进行批量更新，最终结果：2
        // setTimeout(() => {
        //     this.setState({
        //         index: this.state.index + 1,
        //     })
        //     console.log(this.state.index)
        //     this.setState({
        //         index: this.state.index + 1
        //     })
        //     console.log(this.state.index)
        // })
        document.getElementById('set-state-test').addEventListener('click', () => {
            this.setState({index: this.state.index + 1})
            this.setState({index: this.state.index + 1})
        })
    }

    render() {
        return (
            <div>
                {this.state.index}
                <button id="set-state-test">原生事件批量更新测试</button>
            </div>
        )
    }
}

export default setStateDemo
