import {useState} from "react";

import * as C from "./style"

import { ButtonMenuBar } from "../ButtonMenuBar";

export default function MenuBarRelatedProducts(){
    const [btnCellPhone, setBtnCellPhone] = useState(false);
    const [btnAccessories, setBtnAccessories] = useState(false);
    const [btnTablets, setBtnTlablets] = useState(false);
    const [btnLaptops, setBtnLaptop] = useState(false);
    const [btnTvs, setBtnTvs] = useState(false);
    const [btnSeeAll, setBtnSeeAll] = useState(false);

    function btnSelected(item){        
        const clicked = item.name
            setBtnCellPhone(false);
            setBtnAccessories(false);
            setBtnTlablets(false);
            setBtnLaptop(false);
            setBtnTvs(false);
            setBtnSeeAll(false);
               
        switch(clicked){
            case 'celular':
                setBtnCellPhone(true);   
                break
            case 'acessórios' :                
            setBtnAccessories(true);
                break
            case 'tablets' :
                setBtnTlablets(true);
                break
            case 'notebooks' :
                setBtnLaptop(true);
                break
            case 'tvs' :
                setBtnTvs(true);
                break
            case 'ver todos' :
                setBtnSeeAll(true);
                break
            default:
            return    
        }        
    } 

    return(
        <C.ButtonsContainer >
            <ButtonMenuBar 
                name="celular"
                theme={btnSelected}
                toggleTheme={btnCellPhone}
            />
            <ButtonMenuBar 
                name="acessórios"
                theme={btnSelected}
                toggleTheme={btnAccessories}
            />
            <ButtonMenuBar 
                name="tablets"
                theme={btnSelected}
                toggleTheme={btnTablets}
            />
            <ButtonMenuBar 
                name="notebooks"
                theme={btnSelected}
                toggleTheme={btnLaptops}
            />
            <ButtonMenuBar 
                name="tvs"
                theme={btnSelected}
                toggleTheme={btnTvs}
            />
            <ButtonMenuBar 
                name="ver todos"
                theme={btnSelected}
                toggleTheme={btnSeeAll}
            />
        </C.ButtonsContainer>
    )
}