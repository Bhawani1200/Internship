import React from "react";
import Navigation from "./customer/components/Navigation/Navigation.jsx";
import HomePage from "./customer/pages/HomePage/HomePage";
import Footer from "./customer/components/Footer/Footer";
import Product from "./customer/components/product/Product.jsx";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails.jsx";
import Cart from "./customer/components/Cart/Cart.jsx";
import Checkout from "./customer/components/Checkout/Checkout.jsx";
import DeliveryAddressForm from "./customer/components/Checkout/DeliveryAddressForm.jsx";
import OrderSummary from "./customer/components/Checkout/OrderSummary.jsx";

// import Product from "../src/customer/components/Product/Product.jsx";
const App = () => {
  return (
    <div>
      <Navigation />
      <div>
        {/* <HomePage /> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        {/* <Checkout/> */}
        {/* <DeliveryAddressForm /> */}
        <OrderSummary/>
      </div>
      <Footer />
    </div>
  );
};

export default App;
