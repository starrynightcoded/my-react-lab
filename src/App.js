import React from 'react';
import './App.css'; // Import global styles
import ProductCard from './Components/ProductCard';


function App() {
return (
    <div>
        <ProductCard
        name="Headphones"  description="Noice cancelling,wireless and clear audio"  price='${70.00}' image="https://allmytech.pk/wp-content/uploads/2024/02/acefast-h2-headphones-white.webp" 
        rating="https://cdn.create.vista.com/api/media/small/373012736/stock-photo-stars-gold-color-sign-shiny-brass-five-stars-isolated-white"
         
        />
    </div>
);
}
export default App;