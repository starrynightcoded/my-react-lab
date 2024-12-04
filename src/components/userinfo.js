
import React from "react";
import '../styles/userinfo.css'


function Userinfo({ user1 }){
    return(

        
        <div className="user">
            <img className="pic" src={user1.profilepicture}></img>
           {/* // <img src="url(/public/images/image.png)"></img> */}
            <div className="text">
            <h4>Name: {user1.name}</h4>
            <h4>Email: {user1.email} </h4>
            <h4>Role: {user1.role} </h4>
            </div>
            

        </div>
    );
}
export default Userinfo;