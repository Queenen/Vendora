import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home";
import Product from "./pages/product";
import Contact from "./pages/contact";
import CartPage from "./pages/cart";
import CheckoutPage from "./pages/checkout";
import CheckoutSuccess from "./pages/checkoutSuccess";
import AboutPage from "./pages/about";
import { CartProvider } from "./contexts/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/product" element={<Product />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/checkoutSuccess" element={<CheckoutSuccess />} />
              <Route path="/about" element={<AboutPage />} />
            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
