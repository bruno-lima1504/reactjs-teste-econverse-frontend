import React from "react"

import * as C from './style'

export function ButtonMenuBar({ name, theme, toggleTheme }){
    return(
                <C.Button onClick={(e) => theme({name})} btnActive={toggleTheme}>                     
                    {name}
                </C.Button>
    )
}