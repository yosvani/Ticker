json.array! @transactions do |transaction|
  json.user_id transaction.user_id
  json.ticker transaction.ticker
  json.price transaction.price
  json.shares transaction.shares
  json.order_type transaction.order_type
end
