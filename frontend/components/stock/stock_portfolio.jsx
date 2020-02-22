import React from 'react';
import { Link } from 'react-router-dom';
import StockTableItem from './stock_portfolio_item';


const StockTable = ({ currentUser }) => {
    
  // let stocksOwned = Object.entries(currentUser.stocksOwned);

    return (
    <div className="stock-portfolio">

        <div className="stock-header">
          <p>Stocks</p>
        </div>

        <div className="stock-item">
          {currentUser.portfolio.map((stock, i) => (
            <Link to={`/stocks/${stock.ticker}`} key={`stock-${i}`} className="link">
              <StockTableItem stock={stock} />
            </Link>
          ))}
        </div>

    </div>
  );
};

export default StockTable;
