import React from "react";
import '../styles/stats.css';

function Stats({mystats}){
    return(
        <div className="stats">
  
  <h4>Total users: {mystats.totalusers}</h4>
  <h4>Active users: {mystats.activeusers}</h4>
  <h4>New Sign ups: {mystats.newsignups}</h4>
  <h4>Active Percentage: {mystats.activepercentage}</h4>

        <img  className="myimg" src='/images/image.png'></img>

        </div>
    );
} 
export default Stats;