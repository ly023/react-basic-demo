/**
 * @description useCallback
 * 使用场景：子组件接收一个函数作为props，通常而言，如果父组件更新了，子组件也会执行更新。
 * 但是在大多数场景下，更新是没有必要的，可以借助useCallback来返回函数，传递给子组件，
 * 这样，子组件就能避免不必要的更新
 */
import React, {useState, useEffect, useCallback} from 'react'

function Child({callback}) {
    const [count, setCount] = useState(() => callback())

    useEffect(() => {
        setCount(callback())
    }, [callback])
    return <div>
        子：{count}
    </div>
}

function UseCallbackComp() {
    const [count, setCount] = useState(1)
    const [val, setVal] = useState('')

    // const callback = () => {
    //     console.log('每次都更新 callback')
    //     return count
    // }
    const callback = useCallback(() => {
        console.log('相关才更新 callback')
        return count
    }, [count])

    return <div>
        <div>父：{count}</div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <input value={val} onChange={event => setVal(event.target.value)}/>
        <Child callback={callback}/>
    </div>
}

export default UseCallbackComp
