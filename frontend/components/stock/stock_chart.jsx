import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { Link } from 'react-router-dom';

class StockChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currValue: 0
    }

    this.handleMouseOver = this.handleMouseOver.bind(this);
  }
  
  handleMouseOver(e) {
    if (e) {
      this.setState({
        currValue: e.activePayload[0].value
      })
    }
  }

  // handleMouseOver(e) {
  //   if (e) {
  //     this.setState({
  //       currValue: e.activePayload[0].value
  //     })
  //   }
  // }
  
  
  render() {
    const { ticker, company, oneYear, intraday } = this.props;
    
    return (
      <div className="stock-chart">

        <div className="chart">
          <div className='chart-details'>
            <h1>{company.companyName}</h1>
            <h1 className="price">{this.state.currValue}</h1>
            <h4>placeholder</h4>
          </div>

          <LineChart width={680} height={300} data={intraday} onMouseOver={this.handleMouseOver} 
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="linear" dataKey="close" dot={false} strokeWidth={2} /> */}
              {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
        
        <br />

        <div className="dateview">
          <Link to="">1D</Link>
          <Link to="">1W</Link>
          <Link to="">1M</Link>
          <Link to="">3M</Link>
          <Link to="">1Y</Link>
          <Link to="">5Y</Link>
        </div>
      </div>
    )
  }
}

export default StockChart;


