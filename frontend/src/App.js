import './App.css'
import {BrowserRouter , Route,Routes} from "react-router-dom";
import Homepage from "./Views/Homepage"
import Startpage from "./Views/Startpage"
import Contact from "./Views/Contact"
import About from "./Views/About"
import Mobiles from "./Views/Mobiles"
import Laptops from "./Views/Laptops"
import Cart from "./Views/Cart"
import React from "react";
import ProductInfo from "./Views/ProductInfo";



function App() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Startpage/>}></Route>
                    <Route path="/home" element={<Homepage/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/mobile" element={<Mobiles/>}></Route>
                    <Route path="/laptop" element={<Laptops/>}></Route>
                    <Route path="/cart" element={<Cart/>}></Route>
                    <Route path="/product/:p_id" element={<ProductInfo/>}></Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;



