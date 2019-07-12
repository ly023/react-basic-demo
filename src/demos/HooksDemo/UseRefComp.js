/**
 * @description useRef用法
 */

import React from 'react'
import {useRef} from 'react'

function TextInputWithFocusButton() {
    const inputEl = useRef(null)

    const onButtonClick = () => {
        // current指向已挂载到input元素
        inputEl.current.focus()
    }

    return (
        <>
            <input ref={inputEl} type="text"/>
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    )
}

export default TextInputWithFocusButton
