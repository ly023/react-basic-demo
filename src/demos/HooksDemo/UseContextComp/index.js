/**
 * @description useContext用法
 */

import React, {createContext} from 'react'
import Example from './Example'

export const ThemeContext = createContext(null)

export default () => {

    return (
        <ThemeContext.Provider value={{theme: "dark"}}>
            <Example/>
        </ThemeContext.Provider>
    )
}






