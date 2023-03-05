import styled from "styled-components";

export const BrandsContainer = styled.section`
    margin-bottom: 100px;
`

export const BrandsCarouselContainer = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1280px;
    position: relative;
    
`
export const Title = styled.h2`
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    line-height: 45px;
    color: #f71963;
    margin: auto;
    margin-top: 155px;
    margin-bottom: 52px;
    overflow: hidden;
    max-width: 1280px;
`
export const Carousel = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    width: 1280px;
    height: 234;
    ::-webkit-scrollbar{
        display: none;
    }
`
export const Button = styled.button`
    border: none;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.18);
    cursor: pointer;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin: 0 20px;
    position: absolute;    
    left: ${props => props.positionLeft};
    display: flex;
    align-items: center;
    justify-content: center; 
    transform: rotate(${props => props.rotate});

    @media (max-width:500px) {
        left: ${props => props.positionLeftResponsive};
    }
`