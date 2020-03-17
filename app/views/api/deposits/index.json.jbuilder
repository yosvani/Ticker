json.array! @deposits do |deposit|
  json.user_id deposit.user_id
  json.amount deposit.amount
end
