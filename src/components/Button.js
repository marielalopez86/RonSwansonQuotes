import React from 'react';
//import './css/Button.css';


const buttonStyle = {
  backgroundColor: "DodgerBlue",
  color: "#fff",
  fontSize: "25px",
  fontFamily: 'Arial',
  borderRadius: "5px",
  display: 'block',
  margin: 'auto',
  padding: '10px',
  width: '50%',
}

function Button() {
  function handleClick(event) {
    event.preventDefault();
      window.location.reload(); // Not final
  }

  return (
    <button className="quoteButton" style={buttonStyle} onClick={handleClick}>
      New Quote
    </button>
  );
}


export default Button;