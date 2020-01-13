import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';



class StockShow extends React.Component {
  constructor(props) {
    super(props);
  }

  

  // renderStock() {
  //   return (
  //     <div>
  //       {this.props.fetchStock('aapl').map(element => (
  //         <li>{element}</li>
  //       ))}
  //     </div>
  //   )
  // }
    
  // render() {
  //   return (
  //     <div>
  //       {this.renderStock()}
  //     </div>
  //   )
  // } 

};




export default StockShow;


// const data = [
//   { price: 'Page A', uv: 400, pv: 2400, amt: 2400 },
//   { price: 'Page B', uv: 500, pv: 2500, amt: 2500 },
//   { price: 'Page C', uv: 600, pv: 2600, amt: 2600 },
//   { price: 'Page D', uv: 700, pv: 2700, amt: 2700 },
//   { price: 'Page E', uv: 800, pv: 2800, amt: 2800 }
// ];

//     {/* <LineChart width={675} height={195} data={data}>
//       <Line type="linear" dataKey="uv" stroke="#8884d8" />
//       <CartesianGrid stroke="#ccc" />
//       <XAxis dataKey="price" />
//       <YAxis />
//     </LineChart> */}
//     <p>stock show page</p>