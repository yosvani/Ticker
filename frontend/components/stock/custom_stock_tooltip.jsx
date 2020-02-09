import React from 'react';

class CustomStockTooltip extends React.Component {
  
  componentDidUpdate(prevProps) { //prevProps is built-in argument
    console.log(prevProps,'prev');
    console.log(this.props,'this');
    let price = document.getElementById('stock-price'); //grab the current price rendered on the BROWSER
    let priceFlux = document.getElementById('stock-price-flux');
    let neg = "+";
    
    if (prevProps.active && this.props.payload[0]) { 
      let priceFluxCalc = this.props.payload[0].value - prevProps.payload[0].payload.open; //current price - last 
      let priceFluxPercentageCalc = priceFluxCalc * 100 / prevProps.payload[0].payload.open;

      if (priceFluxCalc < 0) { neg = "-"; }

      let priceFluxString = `${neg}$${Math.abs(priceFluxCalc).formatMoney(2)} ${neg}(${Math.abs(priceFluxPercentageCalc).formatMoney(2)}%)`
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
    const { active } = this.props; //console.log(active); active comes from the chart, it's a boolean that represents if cursor is on chart
    
    if (active) {
      const { payload } = this.props; //payload is the object from pointer
      console.log(payload, 'payload');
      if (payload && payload[0] && payload[0].payload) {
        return (
          <div className="custom-tooltip">
            {payload[0].payload.time} {'ET'}
          </div>
        );
      }
    }
    return null;
  }
}

export default CustomStockTooltip;

