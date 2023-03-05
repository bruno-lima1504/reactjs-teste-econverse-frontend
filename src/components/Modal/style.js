import styled from "styled-components";

export const Modal = styled.div`    
   height: 100vh;
   width: 100%;
   position: fixed;
   z-index: 10;
   top: 0;
   left: 0;
   background-color: rgba(0, 0, 0, 0.8);
   display: flex;
   align-items: center;
   justify-content: center;    
`
export const ModalContainer = styled.div`
   background-color: #FFF;
   max-width: 770px;
   height: 300px;
   position: relative;
   display: flex;
   align-items: flex-start;
   justify-content: space-around;
   font-family: 'Lato', sans-serif;
   padding: 50px;
   z-index: 5;    
`

export const CloseBtn = styled.button`
   cursor: pointer;
   position: absolute;
   top: 16px;
   right: 31px;   
   border: none;
   background-color: transparent;

      svg{
         font-size: 30px;
      }

`
export const ModalInfo = styled.div`
   display: flex;
   flex-direction: column;
   margin-left: 87px;    
   max-width: 350px;
`

export const Title = styled.h3`
   font-size: 20px;
   font-weight: 400;
   color: #041E50;
   margin-bottom: 21px;
`
export const PriceText = styled.p`
   font-size: 20px;
   font-weight: 900;
   color: #041E50;
   margin-bottom: 18px;    
`
export const DescriptionText = styled.p`
   font-size: 10px;
   font-weight: 400;
   color: #222222;
   margin-bottom: 16px;     
`

export const LinkProductPage = styled.a`
   font-size: 12px;
   font-weight: 400;    
   color: #041E50;
`

export const ImgProduct = styled.img`
   width: 247px;    
   margin-top: -10px;
`




