import {useContext, useEffect} from "react";

import { ProductsContext } from '../../context/products'

import * as C from './style'
import { AiOutlineClose } from "react-icons/ai";

export default function Modal(){
    const id = 'modal'

    const { modalIsVisible, productModal, modalVisibleOff } = useContext(ProductsContext) 
    
    function handleSwitchVisible(){
        modalVisibleOff(false)
    }

    useEffect(() => {        
        if(!window) return;
        const keyUpListener = (e) => {            
            if(e.keyCode === 27) handleSwitchVisible();
        };        
        window.addEventListener('keyup', keyUpListener);
        return () => {
            window.removeEventListener('keyup', keyUpListener);
        };
    });    

    function teste(e){ 
        e.preventDefault(); 
        if(e.target.id !== id) return
        handleSwitchVisible()
    }

    return(
        <>
            {modalIsVisible ? (  
                <C.Modal id="modal" onClick={teste}>                               
                    <C.ModalContainer >                    
                        <C.CloseBtn onClick={handleSwitchVisible}><AiOutlineClose /></C.CloseBtn>
                        <C.ImgProduct src={productModal.urlImg}/>
                        <C.ModalInfo>
                            <C.Title>{productModal.name}</C.Title>
                            <C.PriceText>{productModal.price}</C.PriceText>
                            <C.DescriptionText>Many desktop publishing packages and web page editors now many desktop publishing</C.DescriptionText>
                            <C.LinkProductPage href="#">Veja mais detalhes do produto &gt;</C.LinkProductPage>
                        </C.ModalInfo>
                    </C.ModalContainer>
                </C.Modal>                 
            ) : null }
        </>
  )
    
}