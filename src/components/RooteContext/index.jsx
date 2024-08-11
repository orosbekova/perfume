import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Products from "../Products";
import About from "../About";
import Product from "../Product";
import Like from "../Like";
import Basket from "../Basket";

const RooteContext = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/pro" element={<Product />} />
        <Route path="/like" element={<Like />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
};

export default RooteContext;
