# Ticker

Ticker is an investing application that allows users to purchase and sell shares of stock in publicly-traded companies<br /><br />
[Live Demo](http://tickerr.herokuapp.com/#/)<br />

## Technologies<br />
* Backend: Rails/ActiveRecord/PostgreSQL<br />
* Frontend: React/Redux<br />

## Features<br />
* Secure frontend and backend user authentication via BCrypt<br />
* Real-time and historical market price data of stocks on NASDAQ<br />
* Interactive charts displaying stock price fluctuation over time, as well as user's portfolio balance fluctuation over time<br />
* Dashboard displaying stock ownership and real-time market price of user's portfolio<br />
* Ability to simulate real stock-market trades by buying and selling at the current market price<br />
* Ability to search stocks by ticker symbol<br />
* Relevant new displayed for market on home page, and for specific stock on the stock's show page<br />

![1](https://user-images.githubusercontent.com/56454897/82098147-36c1ad00-96b9-11ea-8c71-6f07c343c5a1.gif)<br />

### Dashboard & Portfolio<br />
Once a user logs in, they are redirected to their dashboard which displays the follwing:<br />
* Chart of their portfolio balance<br />
* List of stocks within their portfolio with real-time prices<br />
* Current real-time market news<br /><br />

A thunk `fetchStock` is used to perform these async API calls, ensuring nothing on the page is loaded until all of the information is received on the front-end. The fetchStock API Util fetches basic information about the stock, and adds its ticker to state - this is done first, and then a series of external API calls are made to fetch all additional information. As these calls do not rely upon each other, Promise.all is used to perform all fetches at the same time, only resolving once all fetches have completed.

The function `calculateDailyPriceData` is used to calculate key price points that the chart needs to render appropriately including the current price, open price, high(max), low(min), price flux, and price flux percentage.<br />

`calculateDailyPriceData(data, startIdx) {
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
}`

![2](https://user-images.githubusercontent.com/56454897/78633620-ea33b800-7856-11ea-9fc9-161cae0796c5.gif)

### Transaction Validation
![3](https://user-images.githubusercontent.com/56454897/78633639-f455b680-7856-11ea-8c4e-38fc93fe13e6.gif)<br />
Users may only purchase shares of stock if they have adequate buying power. Additionally, they may only sell as many shares as they own. These checks are handled by the transactions controller on the back-end, and the user will receive an error message if an invalid transaction is attempted.<br /><br />

```def create
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
end```
