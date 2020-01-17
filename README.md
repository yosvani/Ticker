# Ticker

Ticker, a Robinhood clone, is an investing application that allows users to purchase and sell shares of stock in publicly-traded companies

[Live Demo](http://http://robinshood.herokuapp.com)

## Technologies
* Backend: Rails/ActiveRecord/PostgreSQL
* Frontend: React/Redux
* [IEX API](https://iextrading.com)
* [News API](https://newsapi.org/)
* [Recharts](http://recharts.org/en-US/)

* Secure frontend to backend user authentication via BCrypt
* Real-time and historical prices of stocks traded on the NASDAQ
* Interactive charts displaying individual stock and portfolio performance
* Dashboard displaying porfolio make-up and performance
* Ability to simulate real stock-market trades through buying/selling stocks
* Ability to search stocks via ticker symbol and/or company name
* Relevant news displayed pertaining to the market or individual stock

### Dashboard & Portfolio
Once a user logs in, they are immediately redirected to their dashboard, which shows a chart displaying their portfolio balance over time, a list of their holdings, and real-time news.
<br />
<br />
<!-- <img src="./app/assets/images/dashboard.gif" align="center" /> -->
<br />
<br />

#### Portfolio Snapshots (**New Feature**)
In order to render charts that display a user's portfolio balance over time, daily, a 'snapshot' of the user's portfolio is taken. Through a simple association between the `User` and `PortfolioSnapshot` models, all of the user's historical portfolio data is fetched. Daily, at 22:00 UTC, the following rake task is run to scrape portfolio snapshots for every user.

```rb
task :add_portfolio_snapshots_for_day => :environment do
  puts "Adding day's portfolio snapshots..."

  # Grab today's date, skip if day is on weekend (markets are closed). Using 'next'
  # because you can't return in rake tasks
  date = Date.today
  next if date.on_weekend?
  
  # Grab all users
  users = User.all

  # Add day's snapshot for each user
  users.each do |user| 
    balance = user.calculate_balance
    PortfolioSnapshot.create({ date: date, balance: balance, user_id: user.id })
  end
  
  puts "done."
end
```

### Stock Show Page
The stock show page contains current and historical price information about the stock, general company information, relevant news, and allows users to purchase and sell shares of the stock at the most recent market price. Colored elements of the page will be rendered in green if the chart being displayed shows a positive price fluctuation, and in red when the price fluctuation is negative.

<img src="./app/assets/images/stock-show.gif" align="center" />

#### Fetching Stock Information
When a stock show page is visited, a variety of API calls are made to fetch the necessary information to render the stock's price chart, information ('About' section) and relevant news articles. The following APIs are hit
* IEX API - 4 separate API calls
  * Stock information 1 - basic info (symbol, company name, CEO, industry, etc.)
  * Stock information 2 - stats (employees, market cap, P/E ratio, etc.)
  * Intraday Price Data
  * Daily (Historical) Price Data
* News API

A thunk `fetchStock` is used to perform all of these async API calls and ensure that nothing on the page is loaded until all of this information is received on the front-end. The `fetchStock` API Util fetches basic information about the stock, and adds its ticker to state - this is done first, and then a series of external API calls are made to fetch all additional information. As these calls do not rely upon each other, `Promise.all` is used to perform all fetches at the same time, only resolving once all fetches have completed.

```js
export const fetchStock = ticker => dispatch => {
  const performFetches = () => Promise.all([
    dispatch(fetchStockInfo(ticker)),
    dispatch(fetchStockInfo2(ticker)),
    dispatch(fetchStockIntradayData(ticker)),
    dispatch(fetchStockDailyData(ticker)),
    dispatch(fetchStockNews(ticker))
  ]);

  StockApiUtil.fetchStock(ticker)
    .then(stock => dispatch(receiveStock(stock)))
    .then(performFetches);
};
```

#### Dynamic Chart Rendering
Charts are dynamic and interactive, allowing users to switch between ranges of **1D**, **1W**, **1M**, **3M**, **1Y**, and **5Y** for individual stocks or their overall portfolio (the **5Y** range is replaced by the **ALL** range for portfolio chart). Buttons for each range appear below the chart with click handlers installed, which serve to update the React component's local state with the relevant chunk of data. The `renderChart` function takes in one of the aforementioned ranges as a string, using it to key into the `RANGES` hash to determine the appropriate portion of the dailyData to grab.

```js
const RANGES = {
  '1W': { length: 5, increment: 1},
  '1M': { length: 23, increment: 1},
  '3M': { length: 66, increment: 1},
  '1Y': { length: 251, increment: 1},
  '5Y': { length: 1265, increment: 5},
};
```

```js
renderChart(range) {
  let { dailyData } = this.state.initialData;
  let data = [];
  let startIdx = RANGES[range].length;
  if (startIdx > dailyData.length) startIdx = dailyData.length;
  let lastIdx;

  for(let i = dailyData.length - startIdx; i < dailyData.length; i+=RANGES[range].increment) {
    if (i < 0) i = 0;
    data.push({
      time: dailyData[i].date,
      price: dailyData[i].close
    });
    lastIdx = i;
  }

  // Set last date as most recent data point regardless
  if (lastIdx !== dailyData.length - 1) {
    data.push({
      time: dailyData[dailyData.length - 1].date,
      price: dailyData[dailyData.length - 1].close
    });
  }

  let { max, min, neg, currPrice, openPrice, priceFlux, priceFluxPercentage } = this.calculateDailyPriceData(data, dailyData.length - startIdx - 1);
  this.setState({
    currData: {
      data,
      currPrice,
      openPrice,
      priceFlux,
      priceFluxPercentage,
      min,
      max,
      neg,
      dailyData,
    },
    active: range
  });
}
```

A helper function, `calculateDailyPriceData` is used to calculate key price points that the chart needs to render appropriately including the current price, open price, high(max), low(min), price flux, and price flux percentage.

```js
calculateDailyPriceData(data, startIdx) {
  let { dailyData } = this.state.initialData;
  let neg = "+";
  const prices = [];

  if (startIdx < 0) startIdx = 0;
  for (let i = 0; i < data.length; i++) {
    prices.push(parseFloat(data[i].price));
  }

  // calculate key price data points
  const max = Math.max(...prices);
  const min = Math.min(...prices);
  const currPrice = this.state.initialData.currPrice;
  const openPrice = dailyData[startIdx].close;
  const priceFlux = Math.round((parseFloat(currPrice) - parseFloat(openPrice)) * 100)/100;
  const priceFluxPercentage = Math.round(((parseFloat(currPrice) - parseFloat(openPrice))/parseFloat(openPrice)) * 10000)/100;
  if (priceFlux < 0) { neg = "-" ;}

  return {
    max,
    min,
    neg,
    currPrice,
    openPrice,
    priceFlux,
    priceFluxPercentage
  };
}
```

### Transaction Validation

<img src="./app/assets/images/transaction-handling.gif" align="center" />

Users are only allowed to purchase shares of stock if they have adequate buying power. Additionally, they are only allowed to sell, at max, as many shares as they own. These checks are handled by the transactions controller on the back-end, and descriptive error messages will be rendered to the page if a user attempts to make an invalid transaction. The form will only submit and trigger a refresh of the page upon a valid transaction submitted by the user.

```rb
def create
  @transaction = Transaction.new(transaction_params)
  @transaction.user_id = current_user.id
  @transaction.transaction_date = Time.now

  transaction_amount = @transaction.price * @transaction.num_shares
  shares_owned = current_user.shares_owned(@transaction.stock_id)

  if transaction_amount > current_user.calculate_buying_power && @transaction.order_type == 'buy'
    render json: ['Not Enough Buying Power'], status: 401
  elsif @transaction.num_shares > shares_owned && @transaction.order_type == 'sell'
    render json: ['Not Enough Shares'], status: 401
  else
    if @transaction.save
      render json: ['success'], status: 200
    else
      render json: @transaction.errors.full_messages, status: 422
    end
  end
end
```


