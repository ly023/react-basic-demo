/**
 * @description useMemo
 */
import React from 'react'
import {useState, useMemo} from 'react'

function Button({name, children}) {
    function changeName(name) {
        console.log('changeName')
        return name
    }

    // 使用useMemo前，修改content也会调用changeName，影响性能
    // const otherName = changeName(name)

    // 使用useMemo后，修改content不会调用changeName
    const otherName = useMemo(() => changeName(name), [name])

    return (
        <>
            <div>{otherName}</div>
            <div>{children}</div>
        </>
    )
}

function UseMemoComp() {
    const [name, setName] = useState('name')
    const [content, setContent] = useState('content')

    return (
        <>
            <button onClick={() => setName(new Date().getTime())}>set name</button>
            <button onClick={() => setContent(new Date().getTime())}>set content</button>
            <Button name={name}>{content}</Button>
        </>
    )
}

export default UseMemoComp
