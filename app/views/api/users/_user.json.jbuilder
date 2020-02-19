json.extract! user, :id, :email
json.buyingPower user.calculate_buying_power
json.stocksOwned user.stocks_owned
json.portfolio user.calculate_stocks
