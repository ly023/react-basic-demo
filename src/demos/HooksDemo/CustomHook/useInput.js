/**
 * @description 自定义Hook
 */

import {useState} from 'react'


// initialValue defaults to '', valueKey defaults to 'value'
function useInput(initialValue = '', valueKey = 'value') {
    let [value, setValue] = useState(initialValue)

    let setValueFromEvent = function(event) {
        setValue(event.target[valueKey])
    }

    return [
       value,
       setValueFromEvent,
       setValue
   ]
}

export default useInput




