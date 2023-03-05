import styled from "styled-components";

export const CarouselContainer = styled.div`
    margin: auto;
    margin-top: 20px;
    max-width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Carousel = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    width: 1280px;

    ::-webkit-scrollbar{
        display: none;
    }
`
export const Button = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin: 0 20px;
    transform: rotate(${props => props.rotate});
`