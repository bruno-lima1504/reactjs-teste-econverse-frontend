import styled from "styled-components";

export const PartnersContainer = styled.section` 
    margin: 71px auto;
    max-width: 1280px;
    display: grid;    
    grid-gap: 20px 50px;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    padding: 0 25px;

    @media (max-width:700px) {          
             
             margin: 40px auto;
             height: auto;
             
        }
`
