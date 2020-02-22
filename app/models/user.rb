require 'open-uri'

class User < ApplicationRecord
  attr_reader :password

  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :deposits, dependent: :destroy
  has_many :transactions, dependent: :destroy

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def shares_owned(ticker)
    transactions.where(ticker: ticker).reduce(0) do |shares, transaction|
      if transaction.order_type == 'buy'
        shares + transaction.shares
      else
        shares - transaction.shares
      end
    end
  end

  def calculate_buying_power
    buying_power = 0
    deposits.each { |deposit| buying_power += deposit.amount }

    transactions.each do |transaction|
      transaction_amount = transaction.price * transaction.shares
      transaction.order_type == 'buy' ? buying_power -= transaction_amount : buying_power += transaction_amount
    end

    buying_power.round(2)
  end

  def stocks_owned
    stocks = Hash.new(0)

    transactions.each do |transaction|
      if transaction.order_type == 'buy'
        stocks[transaction.ticker] += transaction.shares
      else
        stocks[transaction.ticker] -= transaction.shares
      end
    end

    total = stocks.reject { |ticker, shares| shares.zero? }
  end

  #API call in Ruby
  def calculate_stocks
    stocks = stocks_owned
              .map { |stock| {ticker: stock[0], shares: stock[1]} }
              .sort_by { |stock| stock[:ticker] }

    # url = "https://cloud.iexapis.com/stable/stock/market/batch?types=quote,chart&range=1d&token=#pk_2d262b4b89114ceda9b7ada2d9e99bb9&symbols="
    # stocks.each { |stock| url += "#{stock[:ticker]},"}
    # response = JSON.parse(open(url).read)

    stocks.each_with_index do |stock, idx| 
      response = JSON.parse(open("https://cloud.iexapis.com/stable/stock/market/batch?types=quote,chart&range=1d&token=pk_2d262b4b89114ceda9b7ada2d9e99bb9&symbols=#{stock[:ticker]}").read)

      
      stock[:price] = response[stock[:ticker]]['quote']['latestPrice']
      stock[:intraday] = response[stock[:ticker]]['chart']
    end

    stocks
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end


