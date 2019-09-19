import React, { Component } from 'react';
//import './css/QuoteDisplay.css';


const quotesSection = {
  color: "#333",
  fontSize: '20px',
  textAlign: 'center',
  display: 'block',
  margin: 'auto',
  paddingBottom: '50px',
  width: '50%',
}


class QuoteDisplay extends Component {

  state = {
    loading: true,
  };

  async componentDidMount(){
    
    const url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
    const response = await fetch(url)
    const data = await response.json();

    this.setState({quote: data, loading: false});
    console.log(data);
  }


  render(){
    return(
      <div style={quotesSection}>
        <div className="quoteText"><em>{this.state.loading ? <div> Loading...</div> : <div>"{this.state.quote}"</div>}</em></div>
      </div>
    )
  }
}


export default QuoteDisplay;