import styled from "styled-components";

export const CardContainer = styled.div`
    max-width: ${props => props.width};
    max-height: ${props => props.height};  
    background-repeat: no-repeat;
     background: linear-gradient(
        rgba(0, 0, 0, 0), rgba(0, 0, 0, .8) 85.04%),
        ${props => `url(${props.background})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;    
    border-radius: 20px;
    padding:  20px 40px 10px;
    
    @media (max-width:700px) {            
             max-width: 370px;
             margin: 20px auto;
             display:flex;
             flex-direction:column;
             padding: 15px;             
        }
`
export const CardTitle = styled.h3`
    color: #FFFFFF;
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
    margin-top: ${props => props.title === 'Parceiros' ? '90px' : '45px'};
    @media (max-width:700px) {            
                margin-top: 20px;
                font-size: 30px;
        }
`
export const CardText = styled.p`
    color: #FFFFFF;
    font-size: 16px;
    line-height: 24px;    
    margin-bottom: 35px;
    max-width: 180px;
    @media (max-width:700px) {
                font-size: 12px;
        }
`

export const PromoButton = styled.button`    
    width: 131px;
    height: 48px;
    border: none;
    background-color: #F71963;
    border-radius: 5px;
    color: #FFFFFF;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
`