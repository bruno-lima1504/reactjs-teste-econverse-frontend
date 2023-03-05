import styled from "styled-components";

export const PartnersContainer = styled.section`
    max-width: 1280px;    
    display: grid;
    grid-gap: 20px 45px;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    margin: 0 auto;
    margin-top: 69px;

    
    @media (max-width:700px) { 
             margin: 40px auto;
             height: auto;
        }
    
`