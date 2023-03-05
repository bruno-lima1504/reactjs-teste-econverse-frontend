import * as C from './style'

import brandImg from '../../assets/logo-vtex.png'

export default function BrandsCard(){
    return(
        <C.BrandLink href="#">  
            <C.BrandImg src={brandImg} />
        </C.BrandLink>
    )
}

