import React, {useContext} from 'react'
import {ThemeContext} from './index'

export default () => {

    const context = useContext(ThemeContext)

    return (
        <div>Example 组件：当前 theme 是：{context.theme}</div>
    )
}
