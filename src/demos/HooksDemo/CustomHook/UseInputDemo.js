import React from 'react'
import useInput from './useInput'

function Demo() {
    const [value, setValue] = useInput('张三')
    const [selected, setSelected] = useInput(false, 'checked')

    return (
        <div>
            <h4>useInput</h4>
            <input value={value} onChange={setValue}/>
            <input type="checkbox" checked={selected} onChange={setSelected}/>

        </div>
    )
}

export default Demo
