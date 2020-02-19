class Api::DepositsController < ApplicationController
  def index
    @deposits = current_user.deposits
  end

  def create 
    @deposit = Deposit.new(deposit_params)
  end

  private

  def deposit_params
    params.require(:deposit).permit(:user_id, :amount)
  end
end
