class Transaction < ApplicationRecord
  validates :user_id, :ticker, :price, :shares, :order_type, presence: true

  belongs_to :user
  # belongs_to :stock
end
