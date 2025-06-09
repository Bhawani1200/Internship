import React from "react";
import Navigation from "./customer/components/Navigation/Navigation.jsx";
import HomePage from "./customer/pages/HomePage/HomePage";
import Footer from "./customer/components/Footer/Footer";
import Product from "./customer/components/product/Product.jsx";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails.jsx";
// import Product from "../src/customer/components/Product/Product.jsx";
const App = () => {
  return (
    <div>
      <Navigation />
      <div>
        {/* <HomePage /> */}
        {/* <Product/> */}
        <ProductDetails/>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
