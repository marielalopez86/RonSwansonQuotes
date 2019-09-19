import React, { Component } from 'react';
import ron from './ronswanson.jpg';
//import './css/Title.css';

const titleStyle = {
  textAlign: 'center',
  fontSize: "25px",
  fonFamily: 'Helvetica',
  padding: '20px',
  width: '100%',
  height: 'auto',
  borderRadius: '50%'
}



const Title = () =>(
    <div style={titleStyle}>  
      <img src={ron} alt="Ron Swanson" width='300'style={{borderRadius: '60%'}} />    
      <h2 className="titleText">Ron Swanson Quotes</h2>
      <h5 className="titleText"><i>From the TV show Parks and Rec</i></h5>
    </div>
);

export default Title;