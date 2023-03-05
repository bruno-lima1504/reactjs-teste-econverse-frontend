import * as C from './style'

import { categories } from '../../services/categories';

export default function Categorioes(){   

    return(
        <C.CategoriesContainer> 
         {categories.map((data) => (   
            <C.CardCategories key={data.id}>
                <C.IconContainer>
                    {data.icon}
                </C.IconContainer>
                <C.TitleCategories>{data.categorie}</C.TitleCategories>
            </C.CardCategories>                                      
         ))}
        </C.CategoriesContainer>
    )
}