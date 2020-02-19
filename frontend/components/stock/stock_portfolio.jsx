import React from 'react';
import StockTableItem from './stock_portfolio_item';

// class StockTable extends React.Component {
  // const { currentUser } = this.props;
  // render() {

    
// const StockTable = props => {
//   const {currentUser} = props;
const StockTable = ({ currentUser }) => {
    
    let stocksOwned = Object.entries(currentUser.stocksOwned);

    console.log(currentUser, 'currentusr');
      // <div>
      //   { stocksOwned.length > 0 ? (
      //     <ul>
      //       {stocksOwned.map((stock, i) => (
      //         <li key={`stock-${i}`}>
      //           <StockTableItem stock={stock} intraday={intraday} />
      //           {/* {stock} */}
      //         </li>
      //       ))}
      //     </ul>
      //   ) : (
      //     <div></div>
      //   )}
      // </div>

      return (
      <div>
          <ul>
            {currentUser.portfolio.map((stock, i) => (
              <li key={`stock-${i}`}>
                <StockTableItem stock={stock} />
                {/* {stock} */}
              </li>
            ))}
          </ul>
      </div>
    );
  // }
};

export default StockTable;
