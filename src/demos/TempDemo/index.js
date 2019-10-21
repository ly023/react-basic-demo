import React from 'react'

function decorateArmour(target, key, descriptor) {
    // console.log(target)
    // console.log(key)
    // console.log(descriptor)
    // constructor  init

    const method = descriptor.value;
    let moreDef = 100;
    let ret;
    descriptor.value = (...args) => {
        args[0] += moreDef;
        // ret =

        console.log(descriptor.value, args)

        method.apply(target, args);

        // console.log('==ret==', ret)

        return ret;
    }
    return descriptor;
}

function decorateLight(target, key, descriptor) {
    const method = descriptor.value;
    let moreAtk = 50;
    let ret;
    descriptor.value = (...args) => {
        args[1] += moreAtk;
        ret = method.apply(target, args);
        return ret;
    }
    return descriptor;
}

class Man {
    constructor(def = 2, atk = 3, hp = 3) {
        this.init(def, atk, hp);
    }

    @decorateArmour
    @decorateLight
    init(def, atk, hp) {
        this.def = def; // 防御值
        this.atk = atk;  // 攻击力
        this.hp = hp;  // 血量
    }

    toString() {
        return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`;
    }
}

// let tony = new Man();

// console.log(`当前状态 ===> ${tony}`);


export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0
        }
    }

    componentDidMount() {

    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    add = (e) => {
        console.log(e)

        this.setState((prevState) => {
            return {
                num: prevState.num + 1
            }
        })
    }

    render() {
        const {num} = this.state

        const style = num % 2 ? {color: 'green'} : {color: 'blue'}

        return (
            <div>
                <div style={style}>{num}</div>
                <button onClick={this.add}>加1</button>
                <button>减1</button>
                <button>重置</button>
            </div>
        )
    }
}
