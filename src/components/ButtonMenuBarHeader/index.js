import React from "react"

import * as C from './style'
import { TbCrown } from 'react-icons/tb'

export function ButtonMenuBarHeader({ name, theme, toggleTheme, icon }){
    return(
                <C.Button onClick={(e) => theme({name})} btnActive={toggleTheme}>                     
                    {icon ? (<TbCrown/> ) : (null)}{name} 
                </C.Button>
    )
}