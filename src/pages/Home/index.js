import Banner from "../../components/Banner";
import BrandsCarousel from "../../components/Brands";
import Categorioes from "../../components/categories";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import PartnerSection from '../../components/PartnerSection'
import ProductOfferCard from "../../components/ProductOfferCard";
import RelatedProducts from "../../components/RelatedProducts"; 
import Footer from "../../Footer";

import styled from "styled-components";

export default function Home(){
    return(
      <HomeContainer>
        <Header />
        <Banner />
        <Categorioes />
        <RelatedProducts renderMenu={true} />
        <PartnerSection />         
        <RelatedProducts />
        <ProductOfferCard />
        <BrandsCarousel />
        <RelatedProducts/>
        <Footer /> 
        <Modal />               
      </HomeContainer>
    )
}

const HomeContainer = styled.div`
  max-width: 100%;
`