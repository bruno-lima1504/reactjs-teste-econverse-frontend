import { useState } from 'react'

import * as C from './style'
import { TbMenu2, TbTruckDelivery, TbSearch, TbPackgeImport, TbHeart, TbUserCircle, TbShoppingCart} from 'react-icons/tb'
import {AiOutlineCreditCard, AiOutlineSafety} from 'react-icons/ai'

import MenuBarHeader from '../MenuBarHeader'

export default function Header(){
    const [visible, setVisible] = useState(false)

    function handleShowMenu(){
        if(visible === true ){
            setVisible(false)            
        }else{setVisible(true)
        }
    }       
    
    return(
        <C.HeaderContainer>
            <C.InfoContainer>
                <C.InfoHeader>
                    <AiOutlineSafety 
                        color='#9F9F9F' 
                        size={20}
                    />
                    <C.InfoText>Compra <C.InfoSpan>100% segura</C.InfoSpan></C.InfoText>
                </C.InfoHeader>

                <C.InfoHeader>
                    <TbTruckDelivery 
                        color='#9F9F9F' 
                        size={20}
                    />
                    <C.InfoText><C.InfoSpan>Frete Grátis</C.InfoSpan> acima de R$ 200</C.InfoText>
                </C.InfoHeader>

                <C.InfoHeader>
                    <AiOutlineCreditCard color='#9F9F9F' size={20}/>
                    <C.InfoText>Parcele <C.InfoSpan>suas compras</C.InfoSpan></C.InfoText>
                </C.InfoHeader>
            </C.InfoContainer>

            <C.NavigationHeader>
                <C.Logo 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/VTEX_Logo.svg/1280px-VTEX_Logo.svg.png"
                />
                <C.SearchProduct>
                    <C.Input placeholder='O que você está buscando?' />
                    <C.SearchIcon href="#">
                        <TbSearch 
                            color='#9F9F9F' 
                            size={28}
                        />
                    </C.SearchIcon>
                </C.SearchProduct>
                <C.Toolbar>                                   
                    <TbPackgeImport />                                         
                    <TbHeart />                    
                    <TbUserCircle />                   
                    <TbShoppingCart />
                    <button onClick={handleShowMenu}>
                        <TbMenu2 /> 
                    </button>                                                                            
                </C.Toolbar> 
            </C.NavigationHeader>
            <MenuBarHeader showMenu={visible} />            
        </C.HeaderContainer>
    )
}