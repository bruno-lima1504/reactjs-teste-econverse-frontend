import styled from "styled-components";

export const HeaderContainer = styled.header`
    max-width: 1280px;
    height: 144px;    
    margin: auto;
    display: flex;
    flex-direction: column;    
`
export const InfoContainer = styled.div`
    max-width: 1280px;
    height: 32px;    
    display: flex;
    padding: 0 120px;
    border-bottom: 1px solid #F0F0F0;
    justify-content: space-evenly;  
`
export const InfoHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const InfoText = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: #9F9F9F;
    margin-left: 10px;
`
export const InfoSpan = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: #F71963;
`

export const NavigationHeader = styled.nav`
    height: 72px; 
    display: flex;    
    align-items: center;
    padding: 0 56px;
    width: 100%;
    justify-content: space-between;    
`

export const Logo = styled.img`
    width: 139px;
    height: 50px;
    margin-right: 95px;
`

export const SearchProduct = styled.div`
    width: 657px;
    position: relative;
    margin-right: 26px;
    
`

export const Input = styled.input`
    width: 100%;
    height: 48px;    
    background-color:#F7F5F2;
    color: #9F9F9F;
    border: 10px;
    border-radius: 10px;
    padding: 14px 24px;
    font-size: 14px;
    font-weight: 500;
    outline: 0;
    z-index: 1;
`

export const SearchIcon = styled.a`
    position: absolute;   
    right: 16px;
    top: 10px;
    display: pointer;
    z-index: 2;
`

export const Toolbar = styled.div`
    display: flex;
    flex-direction: row;   

   svg{             
        color: #9F9F9F;
        width: 32px;
        height: 32px;
        margin-left: 35px;        
        :hover{
        color:#F71963;
        font-weight: 600;  
    }
   } 
`

export const MenuHeader = styled.nav`
    height: 40px;
    width: 100%;
    padding: 0 56px;
    display: flex;
    align-items: center;
    box-shadow: 0px 8px 16px rgba(57, 48, 19, 0.2); 
`
export const Links = styled.a`
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 3.515%;
    margin-left: 3.515%;
    line-height: 18px;
    text-align: center;
    white-space: nowrap;
    display: flex;
    align-items: center;
    color: #9F9F9F;
    transition: all 0.3s;

    svg{
         margin-right: 10px;
         width: 20px;
         height: 20px;
         transition: all 0.3;
    }

    :hover{
        color:#F71963;
        font-weight: 600;

        svg{
            color: gold;
        }
    }

  
`