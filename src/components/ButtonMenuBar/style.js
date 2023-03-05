import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    padding: 10px;
    width: 211px;
    height: 40px;
    color: ${props => props.btnActive ? '#F71963' : '#3B3B3B'};
    font-weight: ${props => props.btnActive ? 700 : 400};
    background-color: #FFFFFF;
    border: 1px solid #BDBDBD;

    
    @media (max-width:1280px) {            
         width: 180px;
        }

`