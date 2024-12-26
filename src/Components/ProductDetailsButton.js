import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProductDetailsButton.css';
function ProductDetailsButton() {
const navigate = useNavigate();
const handleClick = () => {
navigate('/product-details');
};
return (
<button onClick={handleClick}>View Product Details</button>
);
}
export default ProductDetailsButton;