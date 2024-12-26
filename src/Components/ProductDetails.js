import React from 'react';
import '../styles/Global.css';
function ProductDetails() {
  
  const products = [
    {
      name: "Product 1",
      description: "This is a detailed description of Product 1.",
      price: "29.99",
      image: "https://m.media-amazon.com/images/I/71TN-M3vOIL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      name: "Product 2",
      description: "This is a detailed description of Product 2.",
      price: "49.99",
      image: "https://m.media-amazon.com/images/I/71ViE-GAVOL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      name: "Product 3",
      description: "This is a detailed description of Product 3.",
      price: "19.99",
      image: "https://m.media-amazon.com/images/I/7146iZpwv8L._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      name: "Product 4",
      description: "This is a detailed description of Product 4.",
      price: "39.99",
      image: "https://m.media-amazon.com/images/I/41lIHxirIkL._SY445_SX342_QL70_FMwebp_.jpg",
    },
  ];

  return (
    <div className="product-detail-container">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <h1>{product.name}</h1> 
          <img src={product.image} alt={product.name} /> 
          <p>{product.description}</p> 
          <p>Price: ${product.price}</p> 
          <button>Add to Cart</button> 
        </div>
      ))}
    </div>
  );
}

export default ProductDetails;
