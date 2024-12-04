import React from "react";
import '../styles/msg.css'
function Msg ({msg}){
    return(
        <div className="msg">
            <h4>{msg.msg1}</h4>
            <h4>{msg.msg2}</h4>
            <h4>{msg.msg3}</h4>

        </div>
    );
}
export default Msg;