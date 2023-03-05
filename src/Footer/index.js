import React from "react";

import * as C from './style'
import logos from '../assets/logos-copyright.png'
import payment from '../assets/payments-method.png'
import {FaFacebookF, FaInstagram, FaYoutube} from "react-icons/fa";

export default function Footer(){
    return(
        <C.FooterContainer>
            <C.ContentContainer>
                <C.AboutFooter>
                    <C.Title>sobre nós</C.Title>
                    <C.LinksFooter>conheça</C.LinksFooter>
                    <C.LinksFooter>como chegar</C.LinksFooter>
                    <C.LinksFooter>indicação e desconto</C.LinksFooter>
                    <C.IconstContainer>
                        <FaFacebookF />
                        <FaInstagram />
                        <FaYoutube />
                    </C.IconstContainer>
                </C.AboutFooter>

                <C.InformationFooter>
                    <C.Title>informações úteis</C.Title>
                    <C.LinksFooter>fale conosco</C.LinksFooter>
                    <C.LinksFooter>dúvidas</C.LinksFooter>
                    <C.LinksFooter>prazos de entrega</C.LinksFooter>
                    <C.LinksFooter>formas de pagamento</C.LinksFooter>
                    <C.LinksFooter>política de privacidade</C.LinksFooter>
                    <C.LinksFooter>trocas e devoluções</C.LinksFooter>
                </C.InformationFooter>                    
                <C.PaymentFooter>
                    <C.Title>Formas de pagamento</C.Title>
                    <img src={payment} />
                </C.PaymentFooter>
                <C.NewsletterContainer>
                    <C.NewsletterTitle>cadastre-se e receba nossas
                        <C.NewsletterSpan> novidades e promoções</C.NewsletterSpan>
                    </C.NewsletterTitle>
                    <C.NewsletterText>
                        Excepteur sint occaecat cudatat non ent,
                         sunt in culpa qui officia lorem ipsum
                    </C.NewsletterText>
                    <C.NewsletterForm>
                        <C.InputEmail placeholder="SEU E-MAIL" type="text" />
                        <C.SubmitButton>OK</C.SubmitButton>
                    </C.NewsletterForm>
                </C.NewsletterContainer>
            </C.ContentContainer>
            <C.CopyRigthContainer>
                <C.CopyRightText>
                    copyright © 2019. todos os direitos reservados. todas as marcas e suas imagens são de propriedade de seus respectivos donos.<br /> 
                    é vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
                </C.CopyRightText>

                <C.LogosCopyRight src={logos}/>
                
            </C.CopyRigthContainer>
            
        </C.FooterContainer>
    )
}