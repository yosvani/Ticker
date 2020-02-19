class Api::TransactionsController < ApplicationController
  def index
    @transactions = current_user.transactions
  end

  def show
    @transaction = Transaction.find(params[:id])
  end

  def create
    @transaction = Transaction.new(transaction_params)
    
    transaction_amount = @transaction.price * @transaction.shares
    shares_owned = current_user.shares_owned(@transaction.ticker)
    
    if transaction_amount > current_user.calculate_buying_power && @transaction.order_type == 'buy'
      render json: ['Not Enough Buying Power'], status: 401
    elsif @transaction.shares <= 0
      render json: ['Shares must be greater than 0'], status: 422
    elsif @transaction.shares > shares_owned && @transaction.order_type == 'sell'
      render json: ['You Do Not Own Enough Shares'], status: 401
    else
      if @transaction.save
        render json: ['Success'], status: 200
      else
        render json: @transaction.errors.full_messages, status: 422
      end
    end
  end
    
    
    private
    
    def transaction_params
      params.require(:transaction).permit(:user_id, :ticker, :price, :shares, :order_type)
    end
  end
  
  # @transaction.stock_id = 1
  # @transaction.user_id = current_user.id
  # @stock = Stock.find_by(ticker: params[:transaction][:ticker])
  # @transaction.stock_id = @stock.id
  # @transaction.user_id = current_user.id
  # @transaction.transaction_date = Time.now