import styled from "styled-components";

export const MenuHeader = styled.nav`
    height: 40px;
    width: 100%;
    padding: 0 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 8px 16px rgba(57, 48, 19, 0.2);    
    
    @media (max-width:500px) {            
            width:100%;
            height: auto;            
            padding: 5px 10px;            
            display: grid; 
            grid-gap: 5px; 
    }
`
