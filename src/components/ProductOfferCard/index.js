import SundryCard from '../SundryCard'
import * as C from './style'
import backImg from '../../assets/image-101.png'


export default function ProductOfferCard(){
    return(  
        <C.PartnersContainer> 
            <SundryCard
                title='Produtos'
                text="Lorem ipsum dolor sit amet, coonsecteur"
                bgImg={backImg}
                height='285px'
                width='590px'                 
            />
            <SundryCard 
                title='Produtos'
                text="Lorem ipsum dolor sit amet, coonsecteur"
                bgImg={backImg} 
                height='285px' 
                width='590px' 
            />        
        </C.PartnersContainer> 
        )
}