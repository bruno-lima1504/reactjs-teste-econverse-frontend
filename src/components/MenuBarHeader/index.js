import React,{useState} from "react";

import * as C from './style'

import { ButtonMenuBarHeader } from "../ButtonMenuBarHeader";

export default function MenuBarHeader({showMenu}){
    const [btnAllCategaries, setBtnAllCategaries] = useState(false);
    const [btnsupermarkt, setBtnSupermarket] = useState(false);
    const [btnBooks, setBtnBooks] = useState(false);
    const [btnFashion, setBtnFashion] = useState(false);
    const [btnReleases, setBtnRealeases] = useState(false);
    const [btnOffers, setBtnOffers] = useState(false);
    const [btnSignature, setBtnSignature] = useState(false);    

    function btnSelected(item){
            const clicked = item.name
            setBtnAllCategaries(false);
            setBtnSupermarket(false);
            setBtnBooks(false);
            setBtnFashion(false);
            setBtnRealeases(false);
            setBtnOffers(false);
            setBtnSignature(false);
               
        switch(clicked){
            case 'todas categorias':
                setBtnAllCategaries(true);   
                break
            case 'supermercado' :                
            setBtnSupermarket(true);
                break
            case 'livros' :
                setBtnBooks(true);
                break
            case 'moda' :
                setBtnFashion(true);
                break
            case 'lançamentos' :
                setBtnRealeases(true);
                break
            case 'ofertas do dia' :
                setBtnOffers(true);
                break
            case 'assinatura' :
                setBtnSignature(true);
                break    
            default:
            return    
        }        
    } 


    return(
        <C.MenuHeader visible={showMenu}>            
            <ButtonMenuBarHeader
                name="todas categorias"
                theme={btnSelected}
                toggleTheme={btnAllCategaries}
            />            
            <ButtonMenuBarHeader 
                name="supermercado"
                theme={btnSelected}
                toggleTheme={btnsupermarkt}                
            />
            <ButtonMenuBarHeader 
                name="livros"
                theme={btnSelected}
                toggleTheme={btnBooks}
            />
            <ButtonMenuBarHeader 
                name="moda"
                theme={btnSelected}
                toggleTheme={btnFashion}
            />
            <ButtonMenuBarHeader 
                name="lançamentos"
                theme={btnSelected}
                toggleTheme={btnReleases}
            />
            <ButtonMenuBarHeader 
                name="ofertas do dia"
                theme={btnSelected}
                toggleTheme={btnOffers}
            />
            <ButtonMenuBarHeader 
                name="assinatura"
                theme={btnSelected}
                toggleTheme={btnSignature}
                icon={true}
            />
        </C.MenuHeader>
    )
}