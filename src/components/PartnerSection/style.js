import styled from "styled-components";

export const PartnersContainer = styled.section`
    max-width: 1280px;   
    margin: 71px auto;
    
    display: grid;    
    grid-gap: 20px 50px;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    

    @media (max-width:700px) {    
             margin: 40px auto;
             height: auto;
        }
`
