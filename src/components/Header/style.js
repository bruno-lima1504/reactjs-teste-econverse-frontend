import styled from "styled-components";

export const HeaderContainer = styled.header`
    max-width: 1280px;        
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
    
    @media (max-width:500px) {
       padding: 0 10px; 
       height: 35px;
       align-items: center;
       svg{
                display:none;
            }
    }
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

        @media (max-width:500px) {            
            text-align: center;
            margin-left: 0;
            margin-right: 10px;            
        }
    
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
    
    @media (max-width:500px) {            
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: max-content;
            margin-top: 10px;
            padding: 0 10px;
        }
`

export const Logo = styled.img`
    width: 139px;
    height: 50px;
    margin-right: 95px;

    @media (max-width:500px) {            
            margin: 0;
            margin-bottom: 10px;
        }
`

export const SearchProduct = styled.div`
    width: 657px;
    position: relative;
    margin-right: 26px;

    @media (max-width:500px) {            
           width: 400px;
           margin: 0;
           margin-bottom: 15px;
        }
    
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
    ::placeholder{
        color: #9f9f9f;
    }
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
    
    button{
        display: none;
    }

    @media (max-width:500px) {            
            width:100%;
            margin: 0;            
            justify-content: space-evenly;
            margin-bottom: 10px;
            button{
                display: block;
                border: none;
                background-color: transparent;
                cursor: pointer;
                width: 32px;
                height: 32px;
            }
            svg{
                margin: 0;
            }
    }    
`