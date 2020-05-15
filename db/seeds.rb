# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Below is all or nothing, if any seeds fail, none of them go through
ActiveRecord::Base.transaction do 
  User.destroy_all
  Stock.destroy_all
  Deposit.destroy_all
  Transaction.destroy_all

  demo_user = User.create ({ email: 'warrenbuffett', password: 'password' })

  Deposit.create({ user_id: demo_user.id, amount: 150000 })

  Stock.create({ name: "apple", ticker: "AAPL" })
  Stock.create({ name: "facebook", ticker: "FB" })
  Stock.create({ name: "netflix", ticker: "NFLX" })
  Stock.create({ name: "tesla", ticker: "TSLA" })
  Stock.create({ name: "jpmorgan", ticker: "JPM" })
  Stock.create({ name: "microsft", ticker: "MSFT" })
  Stock.create({ name: "starbucks", ticker: "SBUX" })
  Stock.create({ name: "pepsidco", ticker: "PEP" })
  Stock.create({ name: "lyft", ticker: "LYFT" })
  Stock.create({ name: "ebay", ticker: "EBAY" })

  Transaction.create({ user_id: demo_user.id, ticker: 'AAPL', price: 324.095, shares: 97, order_type: 'buy' })
  Transaction.create({ user_id: demo_user.id, ticker: 'FB', price: 214.18, shares: 23, order_type: 'buy' })
  Transaction.create({ user_id: demo_user.id, ticker: 'NFLX', price: 380.40, shares: 41, order_type: 'buy' })
  Transaction.create({ user_id: demo_user.id, ticker: 'TSLA', price: 800.03, shares: 14, order_type: 'buy' })
  Transaction.create({ user_id: demo_user.id, ticker: 'JPM', price: 89.87, shares: 41, order_type: 'buy' })
  Transaction.create({ user_id: demo_user.id, ticker: 'MSFT', price: 185.35, shares: 26, order_type: 'buy' })
  Transaction.create({ user_id: demo_user.id, ticker: 'SBUX', price: 89.28, shares: 37, order_type: 'buy' })
  Transaction.create({ user_id: demo_user.id, ticker: 'PEP', price: 101.75, shares: 27, order_type: 'buy' })
  Transaction.create({ user_id: demo_user.id, ticker: 'EBAY', price: 38.14, shares: 152, order_type: 'buy' })

end