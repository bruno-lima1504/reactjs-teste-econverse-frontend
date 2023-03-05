import * as C from './style'

export default function Banner(){
    return(
        <C.BannerContainer> 
            <C.BannerTitle>Venha Conhecer nossas promoções</C.BannerTitle>
            <C.BannerText>50% off nos produtos</C.BannerText>
            <C.PromoButton>Ver Produto</C.PromoButton>
        </C.BannerContainer>
    )       
}