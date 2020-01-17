import React from 'react';

class CustomStockTooltip extends React.Component {
  
  componentDidUpdate(prevProps) { //the return from the render below?
    let price = document.getElementById('stock-price'); //grab the current price rendered on the browser
    let priceFlux = document.getElementById('stock-price-flux');
    let neg = "+";

    if (prevProps.active && this.props.payload[0]) { //what is active?
      let priceFluxCalc = this.props.payload[0].value - prevProps.open; //current price - last 
      let priceFluxPercentageCalc = priceFluxCalc * 100 / prevProps.open;

      if (priceFluxCalc < 0) { 
        neg = "-"; 
      }
      let priceFluxString = `${neg}$${Math.abs(priceFluxCalc).formatMoney(2)} (${priceFluxPercentageCalc.formatMoney(2)}%)`
      price.innerHTML = `$${this.props.payload[0].value.formatMoney(2)}`; 
      priceFlux.innerHTML = priceFluxString;

    } else if (prevProps.priceFlux !== this.props.priceFlux) {
      price.innerHTML = `$${prevProps.price}`;
      priceFlux.innerHTML = `${this.props.neg}$${this.props.priceFlux} (${this.props.priceFluxPercentage}%)`;
    } else {
      price.innerHTML = `$${prevProps.price}`;
      priceFlux.innerHTML = `${prevProps.neg}$${prevProps.priceFlux} (${prevProps.priceFluxPercentage}%)`;
    }
  }
  
  //returns the data from our pointer
  render() {
    const { active } = this.props; //why do we need this, why not go straight to pointer?
    
    if (active) {
      const { payload } = this.props; //payload is the object from pointer
      if (payload && payload[0] && payload[0].payload) {
        return (
          <div className="custom-tooltip">
            {payload[0].payload.label}
          </div>
        );
      }
    }
    return null;
  }
}

export default CustomStockTooltip;

// CustomStockTooltip to retrieve data from the tip of cursor on the graph, 
// which has a payload object that contains all the data
 



// if (prevProps.active && this.props.payload[0]) {
    //   let priceFluxCalc = parseFloat(this.props.payload[0].value) - parseFloat(prevProps.openPrice);
    //   let priceFluxPercentageCalc = parseFloat(priceFluxCalc * 100 / parseFloat(prevProps.openPrice));
    //   if (priceFluxCalc < 0) { neg = "-"; }
    //   let priceFluxString = `${neg}$${Math.abs(priceFluxCalc).formatMoney(2)} (${priceFluxPercentageCalc.formatMoney(2)}%)`
    //   price.innerHTML = `$${parseFloat(this.props.payload[0].value).formatMoney(2)}`;
    //   priceFlux.innerHTML = priceFluxString;
    // } else if (prevProps.priceFlux !== this.props.priceFlux) {
    //   price.innerHTML = `$${prevProps.price}`;
    //   priceFlux.innerHTML = `${this.props.neg}$${this.props.priceFlux} (${this.props.priceFluxPercentage}%)`;
    // } else {
    //   price.innerHTML = `$${prevProps.price}`;
    //   priceFlux.innerHTML = `${prevProps.neg}$${prevProps.priceFlux} (${prevProps.priceFluxPercentage}%)`;
    // }