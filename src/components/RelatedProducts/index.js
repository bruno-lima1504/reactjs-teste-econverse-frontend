import Carousel from "../Carousel";

import * as C from './style'

export default function RelatedProducts(){
    return(
        <C.RelatedProductsContainer>

            <C.Title>Produtos relacionados</C.Title>         
            <C.ButtonsContainer>
                <C.Button>celular</C.Button>
                <C.Button>acessórios</C.Button>
                <C.Button>tablets</C.Button>
                <C.Button>notebooks</C.Button>
                <C.Button>tvs</C.Button>
                <C.Button>ver todos</C.Button>
            </C.ButtonsContainer>
            <Carousel />
                       
        </C.RelatedProductsContainer>
    )
}