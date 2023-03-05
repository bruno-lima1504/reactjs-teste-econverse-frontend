import SundryCard from '../SundryCard'
import * as C from './style'
import backImg from '../../assets/image-45.png'


export default function PartnerCard(){
    return(  
        <C.PartnersContainer> 
            <SundryCard
                title='Parceiros'
                text="Lorem ipsum dolor sit amet, coonsecteur"
                bgImg={backImg}
                height='350px'
                width='574px'                 
            />
            <SundryCard 
                title='Parceiros'
                text="Lorem ipsum dolor sit amet, coonsecteur"
                bgImg={backImg} 
                height='350px' 
                width='574px' 
            />        
        </C.PartnersContainer> 
        )
}