class Api::StocksController < ApplicationController
  def index
    @stocks = Stock.all
  end

  def show
    @stock = Stock.find_by(ticker: params[:ticker]) #where are these params
  end
end
