import { useContext} from "react";

import * as C from "./style";

import { ProductsContext } from '../../context/products'

export default function ProductCard({foto, title, price, id}){
    const { modalVisibleOn } = useContext(ProductsContext)
    
    const priceBRL = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(price)
    const originalPrice = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(price*1.2)
    const installmententsPrice = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(price/2)
    
    function handleModalVisible(title, priceBRL, foto){
        modalVisibleOn(title, priceBRL, foto)
    }

    return(
        <C.CardContainer key={id} >            
            <C.ProductInfo onClick={() => handleModalVisible(title, priceBRL, foto)}>
                <C.Image src={foto} alt="Foto do produto"/>
                    <C.Title>{title}</C.Title>
                    <C.OriginalPrice>{originalPrice}</C.OriginalPrice>
                    <C.Price>R$ {priceBRL}</C.Price>
                    <C.FormOfPayment>{`ou 2x de ${installmententsPrice} sem juros`}</C.FormOfPayment>
                    <C.DeliveryPrice>Frete Grátis</C.DeliveryPrice>  
            </C.ProductInfo>
            <C.BuyButton >comprar</C.BuyButton>                       
        </C.CardContainer>        
    )
}