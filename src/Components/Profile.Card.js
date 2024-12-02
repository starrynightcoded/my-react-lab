import React from "react";
import "../styles/ProfileCard.css"

function ProfileCard(props){
    const { name , age, occupation, location}=props;
    //self note: destructure hamesha return se upper inside the function
    return(
        
        <div className="my-box">
            <h2 className="my-name">
                Name: {name}
            </h2>
            <h2> Age: {age}</h2>
            <h2> Occupation: {occupation}</h2>
            <h2> Location: {location}</h2>

        </div>
    );    
}
export default ProfileCard;
