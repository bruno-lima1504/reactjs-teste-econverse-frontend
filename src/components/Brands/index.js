import { useRef, useState } from "react";

import * as C from './style'

import vector from '../../assets/vector-brand.png'

import BrandsCard from "../BrandsCard";

export default function BrandsCarousel(){
    const carousel = useRef(null); 
    
    function HandleScroll(direction){         
        if(direction === 'left'){    
            carousel.current.scrollLeft -= carousel.current.offsetWidth;            
        }else{   
            carousel.current.scrollLeft += carousel.current.offsetWidth;
        }}     
    
    return(
          <C.BrandsContainer>
            <C.Title>Navegue por marcas</C.Title>
            <C.BrandsCarouselContainer>                            
                <C.Button 
                    onClick={() => HandleScroll('left')}                    
                    positionLeft="10px"
                    rotate="180deg"
                >
                    <img src={vector} alt="scroll left" />
                </C.Button>                           
                <C.Carousel ref={carousel}>
                    <BrandsCard />
                    <BrandsCard />
                    <BrandsCard />
                    <BrandsCard />
                    <BrandsCard />
                    <BrandsCard />
                    <BrandsCard />
                    <BrandsCard />
                    <BrandsCard />
                    <BrandsCard />
                    <BrandsCard />
                    <BrandsCard />               
                </C.Carousel>                          
                <C.Button 
                    onClick={() => HandleScroll('right')}                    
                    positionLeft="1150px"
                    rotate="0deg"
                >
                    <img src={vector} alt="scroll Right" />
                </C.Button>                          
            </C.BrandsCarouselContainer>
          </C.BrandsContainer>         
    );
};