import Home from "./pages/Home";

import { ProductsProvider } from "./context/products";

export default function App() {
  return ( 
    <ProductsProvider>
      <Home />      
    </ProductsProvider>
  );
}