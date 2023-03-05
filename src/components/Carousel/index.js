import { useRef, useContext } from "react";

import ProductCard from "../ProductCard";

import { ProductsContext } from '../../context/products'

import * as C from './style'
import vector from '../../assets/vector.png'


export default function Carousel(){
    const carousel = useRef(null);
    const  { products } = useContext(ProductsContext)
    
    function HandleScroll(direction){         
        if(direction === 'left'){    
        carousel.current.scrollLeft -= carousel.current.offsetWidth;        
        return
        }
        carousel.current.scrollLeft += carousel.current.offsetWidth;                
    }     
    
    return( 
          <C.CarouselContainer>            
                <C.Button 
                    onClick={() => HandleScroll('left')}
                    rotate="180deg" 
                >
                    <img src={vector} alt="scroll left" />
                </C.Button>                           
            <C.Carousel ref={carousel}>
                {products.map((data)=>{
                    return(                    
                        <ProductCard 
                            id={data.productName} 
                            foto={data.photo} 
                            title={data.productName} 
                            price={data.price}
                        />                   
                    )
                })}
            </C.Carousel>                          
                <C.Button 
                    onClick={() => HandleScroll('right')}
                    rotate="0deg"
                >
                    <img src={vector} alt="scroll Right" />
                </C.Button>                          
          </C.CarouselContainer>        
    );
};
