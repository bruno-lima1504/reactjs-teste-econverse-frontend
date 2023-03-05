import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    background-color: #2A2A2A;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 170px;
;
`
export const ContentContainer = styled.div`
    width: 1280px;
    height: 325px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px;
`

export const CopyRigthContainer = styled.div`
    width: 1280px;
    height: 70px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;    
`

export const AboutFooter = styled.div`    
    display: flex;
    flex-direction: column;
    margin-top: 60px;
   
`
export const Title = styled.div`
 text-transform: uppercase;
 font-weight: 700;
 font-size: 13px;
 line-height: 20px;
 margin-bottom: 24px;

`
export const LinksFooter = styled.a`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 13px;
    line-height: 20px;
    margin-bottom: 12px;
`
export const IconstContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 60px;

    svg{
        width: 21px;
        height: 21px;
    }
`

export const InformationFooter = styled.div`
        display: flex;
        flex-direction: column;
        margin-top: 60px;
`
export const PaymentFooter = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
`
export const CopyRightText = styled.p`
    font-size: 10px;
    font-weight: 400;
    line-height: 13px;
    text-transform: uppercase;
`
export const LogosCopyRight = styled.img`
    max-width: 226px;
    max-height: 32px;
`

export const NewsletterContainer = styled.div`
    max-width: 380px;
    height: 260px;
    margin-top: 32px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 35px;
    border-radius: 10px;
`

export const NewsletterTitle = styled.h3`
    font-size: 18px;    
    font-weight: 400;
    line-height: 26px;
    text-transform: uppercase;   
    color: #3F3F3F;
    font-weight: 300;
    text-align: center;
`
export const NewsletterSpan = styled.span`
    text-transform: uppercase;
    line-height: 26px;
    color: #3F3F3F;
    font-weight: 700;
    font-size: 21px;
`
export const NewsletterText = styled.p`
    color: #3F3F3F;
    font-size: 12px;
    line-height: 19px;
    font-weight: 300px;
    text-align: center;
    margin-top: 16px;
`
export const NewsletterForm = styled.form`
    width: 100%;
    margin-top: 31px;
`
export const InputEmail = styled.input`
    border: 1px solid #2A2A2A;
    width: 74.5%;
    height: 45px;
    border-radius: 4px;
    padding: 13px 25px;    

    ::placeholder{color: #C0C0C0;}
    
`
export const SubmitButton = styled.button`
    background: #F71963;
    width: 62px;
    height: 45px;
    margin-left: 10px;
    border-radius: 4px;
    border: none;
`


