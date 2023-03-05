import * as C from './style'
import { TbTruckDelivery, TbSearch, TbPackgeImport, TbHeart, TbUserCircle, TbShoppingCart, TbCrown } from 'react-icons/tb'
import {AiOutlineCreditCard, AiOutlineSafety} from 'react-icons/ai'


export default function Header(){
    return(
        <C.HeaderContainer>
            <C.InfoContainer>
                <C.InfoHeader>
                    <AiOutlineSafety 
                        color='#9F9F9F' 
                        size={20}
                    />
                    <C.InfoText>Compra <C.InfoSpan>100% segura</C.InfoSpan></C.InfoText>
                </C.InfoHeader>

                <C.InfoHeader>
                    <TbTruckDelivery 
                        color='#9F9F9F' 
                        size={20
                    }/>
                    <C.InfoText><C.InfoSpan>Frete Grátis</C.InfoSpan> acima de R$ 200</C.InfoText>
                </C.InfoHeader>

                <C.InfoHeader>
                    <AiOutlineCreditCard color='#9F9F9F' size={20}/>
                    <C.InfoText>Compra <C.InfoSpan>100% segura</C.InfoSpan></C.InfoText>
                </C.InfoHeader>
            </C.InfoContainer>

            <C.NavigationHeader>
                <C.Logo 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/VTEX_Logo.svg/1280px-VTEX_Logo.svg.png"
                />
                <C.SearchProduct>
                    <C.Input placeholder='O que você está buscando?' />
                    <C.SearchIcon href="#">
                        <TbSearch 
                            color='#9F9F9F' 
                            size={28}
                        />
                    </C.SearchIcon>
                </C.SearchProduct>
                <C.Toolbar>                                   
                    <TbPackgeImport />                                         
                    <TbHeart />                    
                    <TbUserCircle />                   
                    <TbShoppingCart />                                                         
                </C.Toolbar> 
            </C.NavigationHeader>

            <C.MenuHeader>
                <C.Links>todas categorias</C.Links>
                <C.Links>supermercado</C.Links>
                <C.Links>livros</C.Links>
                <C.Links>moda</C.Links>
                <C.Links>lançamentos</C.Links>
                <C.Links>ofertas do dia</C.Links>
                <C.Links><TbCrown />assinatura</C.Links>
            </C.MenuHeader>
            
        </C.HeaderContainer>
    )
}