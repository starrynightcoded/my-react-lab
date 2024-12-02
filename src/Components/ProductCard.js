import React from "react";
import '../styles/ProductCard.css'

function ProductCard(props){
    const {name,description,price,image,rating}=props;
    return(
        <div className="my-card">
        <img className="pic" src={image}></img>
        <hr></hr>
        <h2>{name}</h2>
        <p>{description}</p>
        <h1>{price}</h1>
        <img className="rating" src={rating}></img>
        <hr></hr>
        <button className="button">Buy Now</button>
        </div>
    );
}
export default ProductCard;