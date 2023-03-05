import styled from "styled-components";

export const CategoriesContainer = styled.section`    
    margin: auto;
    max-width: 1280px;
    margin-top: 32px;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`

export const CardCategories = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
`

export const IconContainer = styled.div`
    width: 128px;
    height: 128px;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.22);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 22px;

    svg{
        width: 61px;
        height: 61px;
    }
`

export const TitleCategories = styled.span`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #4E4E4E;
    white-space: nowrap;
`

