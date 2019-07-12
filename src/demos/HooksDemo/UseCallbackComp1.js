/**
 * @description useCallback
 * https://nikgrozev.com/2019/04/07/reacts-usecallback-and-usememo-hooks-by-example/
 */
import React from 'react'
import {useState, useCallback} from 'react'


function UseCallbackComp1() {
    const [c1, setC1] = useState(0)
    const [c2, setC2] = useState(0)


    const increment1 = useCallback(() => setC1(c1 + 1), [c1])
    const increment2 = useCallback(() => setC2(c2 + 1), [c2])

    return (<div>
        <div> Counter 1 is {c1} </div>
        <div> Counter 2 is {c2} </div>
        <br/>
        <div>
            <button onClick={increment1}>Increment Counter 1</button>
            <button onClick={increment2}>Increment Counter 2</button>
        </div>
        <br/>
    </div>)
}

export default UseCallbackComp1
