/**
 * @description useCallback
 */
import React from 'react'
import {useState, useCallback} from 'react'

function useInputValue(initialValue) {
    let [value, setValue] = useState(initialValue)
    let onChange = useCallback(function (event) {
        setValue(event.currentTarget.value)
    }, [])

    return {
        value,
        onChange
    }
}

function UseCallbackComp() {
    const name = useInputValue('init name')
    return <>
        <input {...name}/>
        {name.value}
    </>
}

export default UseCallbackComp
