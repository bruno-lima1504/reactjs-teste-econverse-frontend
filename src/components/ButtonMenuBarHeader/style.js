import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 12px;
    text-transform: uppercase;
    font-weight: 600;
    color: ${props => props.btnActive ? '#F71963' : '#9F9F9F'}; 
    padding-right: 3.515%;
    padding-left: 3.515%;
    line-height: 18px;
    text-align: center;
    white-space: nowrap;
    transition: all 0.3s;
    border: none;
    background-color: #FFFFFF;    

    svg{
         margin-right: 10px;
         width: 20px;
         height: 20px;
         transition: all 0.3;
         color: ${props => props.btnActive ? 'gold' : '#9F9F9F'};
    }
`

