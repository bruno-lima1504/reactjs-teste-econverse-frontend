import Banner from "../../components/Banner";
import BrandsCarousel from "../../components/Brands";
import Categorioes from "../../components/categories";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import PartnerSection from '../../components/PartnerSection'
import ProductOfferCard from "../../components/ProductOfferCard";
import RelatedProducts from "../../components/RelatedProducts"; 
import Footer from "../../Footer";

export default function Home(){
    return(
      <>
        <Header />
        <Banner />
        <Categorioes />
        <RelatedProducts render={false} />
        <PartnerSection />         
        <RelatedProducts />
        <ProductOfferCard />
        <BrandsCarousel />
        <RelatedProducts/>
        <Footer /> 
        <Modal />               
      </>
    )
}