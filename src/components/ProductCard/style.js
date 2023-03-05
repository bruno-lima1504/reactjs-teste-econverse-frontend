import styled from "styled-components";

export const CardContainer = styled.div`
    width: 270px;
    height: 490px;
    display: flex;
    flex-direction: column;    
    align-items: center;
    padding: 11px;
    border-radius: 10px;
    box-shadow: 0px 3px 19px 0px #00000038;
    margin: 20px 31px;       
`

export const Image = styled.img`
    width: 247px;
    height: 228px;
    margin-top: 21px;
    margin-bottom: 9px;

`
export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    cursor: pointer;    
`
export const Title = styled.p`
    size: 15px;
    color: #3F3F40;
    font-weight: 300;
    margin-bottom: 12px;
`

export const OriginalPrice = styled.span`
    font-size: 16px;
    text-decoration: line-through;
    color: #808080;
    line-height: 24px;
    margin-bottom: 8px;
`

export const Price = styled.p`
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    color: #3F3F40;
    margin-bottom: 8px;
`
export const FormOfPayment = styled.p`
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    color: #3F3F40;
    margin-bottom: 7px;
`
export const DeliveryPrice = styled.p`
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    color: #F71963;
    margin-bottom: 12px;
`
export const BuyButton = styled.button`
    width: 245px;
    height: 44px;
    background-color: #F71963;
    border: none;
    border-radius: 4px;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    color: #fff;
    cursor: pointer;
`