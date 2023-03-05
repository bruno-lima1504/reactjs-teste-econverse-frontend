import styled from "styled-components";

export const RelatedProductsContainer = styled.section`
    position: relative;
`
export const Title = styled.h2`
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    line-height: 45px;
    color: #f71963;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 4px;
    overflow: hidden;
    max-width: 1280px;
        
            :before, :after {
                background-color: #DEDEDE;
                content: "";
                display: inline-block;
                height: 1px;
                position: relative;
                vertical-align: middle;
                width: 28%;
            }
            :before{
                margin-right: 34px ;
            } 
            :after{
                margin-left: 34px ;
            }
            
    @media (max-width:1000px) {            
            :before, :after {               
                display: none;
        }
    }
`
export const Subtitle = styled.p`
    text-align: center;
    font-size: 15px;
    font-weight: 700;
    line-height: 22px;
    color: #3F3F40;
    margin-bottom: 12px;
`