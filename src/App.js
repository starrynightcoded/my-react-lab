import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from
'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import User from './Components/User';
import ProductDetails from './Components/ProductDetails';
import ShoppingCart from './Components/ShoppingCart';
import './styles/Navbar.css';
import './styles/Global.css'; 


function App() {
return (
<Router>
<nav>
<ul>
<div className="logo">
    <Link to="/">E-Shop</Link>
  </div>
<li><Link to="/">Home</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/contact">Contact</Link></li>
<li><Link to="/user/123">User Profile</Link></li>
{/* <li><link to="/shopping/cart">ShoppingCart</link></li> */}

</ul>
</nav>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/user/:userId" element={<User />} />
<Route path="/product-details" element={<ProductDetails />} />
{/* <Route path="/shopping-cart" element={<ShoppingCart />} /> */}
</Routes>
</Router>
);
}
export default App;