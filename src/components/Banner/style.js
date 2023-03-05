import styled from "styled-components";

export const BannerContainer = styled.section`
    max-width: 100%;
    height: 395px;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .8) 85.04%),url('https://lisaslaw.co.uk/wp-content/uploads/2020/10/pexels-artem-beliaikin-2529787.jpg');
    background-size: cover;
    background-position: center;
    padding: 50px 90px ;  
`
export const BannerTitle = styled.p`
    color: #FFFFFF;
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    max-width: 822px;    
`
export const BannerText = styled.p`
    color: #FFFFFF;
    font-size: 36px;
    line-height: 54px;
    max-width: 389px;
    margin-bottom: 35px;
`

export const PromoButton = styled.button`    
    width: 227px;
    height: 60px;
    border: none;
    background-color: #F71963;
    border-radius: 5px;
    color: #FFFFFF;
    font-weight: 600;
    font-size: 18px;
`