class Stock < ApplicationRecord
  validates :name, :ticker, presence: true
  validates :ticker, uniqueness: true

  has_many :transactions
end
