import React, {createContext, useEffect,useState} from 'react';
import { api } from '../services'

export const ProductsContext = createContext({});

    export function ProductsProvider({ children }){

    const [products, setProducts] = useState([]);
    const [modalIsVisible, setIsModalVisible] = useState(false);
    const [productModal, setProductModal] = useState({});
        
    useEffect(()=>{  
      async function loadProducts(){
        const response = await api.get('teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
        if(response){
          setProducts(response.data.products) 
        }            
      }
      loadProducts()
    },[])

    function modalVisibleOn(title, priceBRL, foto){
      setProductModal({
        name: title,
        price: priceBRL,
        urlImg: foto,
      })
      setIsModalVisible(true)
    }

    function modalVisibleOff(visible){
      setIsModalVisible(false)
    }
      
    return(
      <ProductsContext.Provider
          value={{
              products,
              modalIsVisible,
              modalVisibleOn,
              modalVisibleOff,
              productModal,
          }}
      >
          {children}
      </ProductsContext.Provider>
    )
    
     
    }