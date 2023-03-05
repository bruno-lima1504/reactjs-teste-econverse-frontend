import Carousel from "../Carousel";

import MenuBarRelatedProducts from "../MenuBarRelatedProducts";

import * as C from './style'

export default function RelatedProducts({renderMenu}){
    return(
        <C.RelatedProductsContainer>
            <C.Title>Produtos relacionados</C.Title>
            { renderMenu ?
                (            
                    <MenuBarRelatedProducts />
                ):(
                    <C.Subtitle>Ver Todos</C.Subtitle>
                )
            }
            <Carousel />                       
        </C.RelatedProductsContainer>
    )
}