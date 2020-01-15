import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';



class StockShow extends React.Component {
  componentDidMount() {
    this.props.fetchCompanyInfo(this.props.ticker);
    this.props.fetchStocks1y(this.props.ticker);
  }
  
  render() {
    if (!this.props.company && !this.props.oneYear) return null; //render, componentidmount, render
    
    const data = [
      { name: 'Page A', uv: 400 },
      { name: 'Page B', uv: 500 },
      { name: 'Page C', uv: 600 },
      { name: 'Page D', uv: 700 },
      { name: 'Page E', uv: 800 },
    ];
    
    // console.log(this.props.oneYear, 'symbol')
    // setTimeout(() => console.log(this.props.company.symbol, 'props'), 1000);
    
    return (
      <div>
          
        <div>
          <LineChart width={600} height={300} data={this.props.oneYear} 
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="linear" dataKey="close" dot={false} strokeWidth={2} />
            {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>

        <div className='company-data'>
          <p>Symbol</p>{this.props.company.symbol}<br /><br />
          <p>Employees</p>{this.props.company.companyName}<br /><br />
          <p>Headquarters:</p>{this.props.company.city}<br /><br />
          <p>Founded:</p>{this.props.company.symbol}<br /><br />
          <p>Market Cap</p>{this.props.company.symbol}<br /><br />
          <p>Price-earnings Ratio</p>{this.props.company.symbol}<br /><br />
          <p>Dividen Yield</p>{this.props.company.symbol}<br /><br />
          <p>Average Volume</p>{this.props.company.symbol}<br /><br /> 
        </div> 

        <div className = 'articles'>
          <div className='image'> 
          
          </div>
          <div className='description'> 

          </div>
        </div>

      </div>
    )
  } 
};


export default StockShow;

