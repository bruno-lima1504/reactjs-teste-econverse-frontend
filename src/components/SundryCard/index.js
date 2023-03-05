import * as C from './style'


export default function SundryCard({title, text, bgImg, height, width}){

    return(
        <C.CardContainer background={bgImg} height={height} width={width}> 
            <C.CardTitle title={title}>{title}</C.CardTitle>
            <C.CardText>{text}</C.CardText>
            <C.PromoButton>CONFIRA</C.PromoButton>
        </C.CardContainer>
    )       
}