import React from 'react';
import ProductDetailsButton from './ProductDetailsButton';
import '../styles/Home.css';
function Home() {
return (
<div className="home-container">
      <h1>Welcome to Our E-Commerce Website</h1>
      <p>Discover a wide range of products tailored just for you.</p>
      <div className="button-container">
        <ProductDetailsButton />
      </div>
    </div>
);
}
export default Home;